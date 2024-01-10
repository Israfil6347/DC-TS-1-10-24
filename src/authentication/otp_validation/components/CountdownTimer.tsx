import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  initialMinutes: number;
  setTimeStatus: (timeStatus: boolean) => void;
  resetTimer: boolean;
  setResetTimer: (isTimerReset: boolean) => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialMinutes,
  setTimeStatus,
  resetTimer,
  setResetTimer,
}) => {
  const [remainingTime, setRemainingTime] = useState(initialMinutes * 60);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (resetTimer) {
      setRemainingTime(initialMinutes * 60);
      setProgress(1);
    }
  }, [resetTimer]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        if (prevRemainingTime <= 0) {
          clearInterval(timerInterval);

          setTimeStatus(false);
          setResetTimer(false);

          return 0;
        }
        return prevRemainingTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [resetTimer]);

  useEffect(() => {
    const progressValue = remainingTime / (initialMinutes * 60);
    setProgress(progressValue);
  }, [remainingTime, initialMinutes, resetTimer]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="relative inline-block">
      <svg className="progress-ring mx-auto h-36 w-36" viewBox="0 0 24 24">
        <circle
          id="progress-circle"
          className="stroke-current text-background"
          cx="12"
          cy="12"
          r="7"
          fill="none"
          strokeWidth="2"
        />
        <circle
          id="progress-circle"
          className="stroke-current text-[#242269]"
          cx="12"
          cy="12"
          r="7"
          fill="none"
          strokeWidth="2"
          style={{
            strokeDasharray: `${2 * Math.PI * 7}`,
            strokeDashoffset: `${2 * Math.PI * 7 * (1 - progress)}`,
          }}
        />
      </svg>
      <div
        className={`absolute inset-0 flex items-center justify-center text-2xl font-bold ${
          remainingTime === 0 ? 'text-red-600' : 'text-gray-800'
        }`}
      >
        {`${formatTime(Math.floor(remainingTime / 60))}:${formatTime(
          remainingTime % 60
        )}`}
      </div>
    </div>
  );
};

export default CountdownTimer;

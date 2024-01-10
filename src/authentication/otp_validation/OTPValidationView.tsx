import image from 'assets/images/logo/logocccul.png';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { Size } from 'global_shared/enum/Size';
import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import CountdownTimer from './components/CountdownTimer';
import useOTPValidationViewInputState from './hooks/useOTPValidationViewInputState';
import { validateOTPValidationViewInputState } from './validation/validateOTPValidationViewInputState';

/**========================================================================
 * ?                                ABOUT
 * @author         :  Sunit Corneleous
 * @designation    :  Trainee
 * @email          :  sunit.corneleous25@gmail.com
 * @description    :
 * @createdOn      :  07 July 2023
 * @updatedBy      :  Sunit Corneleous
 * @updatedOn      :  07 July 2023
 *========================================================================**/
interface OTPValidationViewProps {
  isOTPValidationViewOpen: boolean;
  closeOTPValidationView: (closeDialogue: boolean) => void;
  otpValidateRequestHandler: (otp: string) => void;
  resendOTPRequestHandler: () => void;
  initialMinute?: number;
  initialSeconds?: number;
}

const OTPValidationView: React.FC<OTPValidationViewProps> = ({
  isOTPValidationViewOpen,
  closeOTPValidationView,
  otpValidateRequestHandler,
  resendOTPRequestHandler,
  initialMinute = 2,
  initialSeconds = 59,
}) => {
  const [initialMinutes, setInitialMinutes] = useState(
    initialMinute + initialSeconds / 60
  );

  const [screenWidthSize, setScreenWidthSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidthSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [timerStatus, setTimeStatus] = useState(true);
  const [resetTimer, setResetTimer] = useState(false);

  const { otpValidationViewInputState, updateOTPValidationViewInputState } =
    useOTPValidationViewInputState();

  return (
    <MyModal
      show={isOTPValidationViewOpen ? true : false}
      size={Size.Small}
      onClose={() => {
        closeOTPValidationView(false);
      }}
    >
      <MyDialogueView
        // Dialogue header
        dialogueHeader={
          <div className="w-full bg-background py-6">
            <div className="flex w-full flex-col items-center gap-3">
              <img src={image} alt="" />
              <h3 className="text-xl font-bold uppercase text-primary">
                Otp Verification
              </h3>
            </div>
          </div>
        }
        // Dialogue Footer
        dialogueFooter={
          <div className="flex items-center justify-center gap-6 bg-background">
            <div className=" my-3 w-2/5  ">
              <MyButton
                type="submit"
                label="Confirm"
                styleClass="w-full rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg"
                onClick={(event) => {
                  event.preventDefault();
                  var errors = '';
                  let fieldName: keyof typeof otpValidationViewInputState;
                  for (fieldName in otpValidationViewInputState) {
                    updateOTPValidationViewInputState(
                      fieldName,
                      otpValidationViewInputState[fieldName]
                    );
                    errors =
                      errors +
                      validateOTPValidationViewInputState(
                        fieldName,
                        otpValidationViewInputState[fieldName]
                      );
                  }
                  if (errors) {
                    window.scrollTo({
                      top: window.innerHeight / 2,
                      behavior: 'smooth',
                    });
                  }

                  if (errors.length === 0) {
                    otpValidateRequestHandler(
                      otpValidationViewInputState.OTPValue
                    );
                  }
                }}
                name={''}
              />
            </div>
            <div className=" my-3 w-2/5">
              <MyButton
                type="button"
                label="RESEND OTP"
                disabled={timerStatus}
                onClick={() => {
                  resendOTPRequestHandler();

                  // Reset Timer
                  setInitialMinutes(initialMinute + initialSeconds / 60);
                  setTimeStatus(true);
                  setResetTimer(true);
                }}
                styleClass={`w-full disabled:bg-gray-500  rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg`}
                name={''}
              />
            </div>
          </div>
        }
        onCancel={() => {
          closeOTPValidationView(false);
        }}
      >
        <div className="px-10 pb-4">
          <div>
            <p className="text-center">
              We have send an OTP to your registered number.
            </p>
          </div>
          <div className="flex justify-center">
            <CountdownTimer
              initialMinutes={initialMinutes}
              setTimeStatus={setTimeStatus}
              resetTimer={resetTimer}
              setResetTimer={setResetTimer}
            />
          </div>

          <p className="text-center">Enter the OTP sent to your number.</p>

          <div className="flex w-full justify-center">
            <OTPInput
              value={otpValidationViewInputState.OTPValue}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                margin: '6px',
                width: `${screenWidthSize < 450 ? '35px' : '45px'}`,
                height: `${screenWidthSize < 450 ? '35px' : '45px'}`,
                fontSize: '25px',
                padding: '2px',
                borderColor: '#242269',
                borderRadius: '4px',
              }}
              inputType="number"
              onChange={(value) => {
                updateOTPValidationViewInputState('OTPValue', value);
              }}
            />
          </div>

          {!timerStatus && (
            <div className="mt-2">
              <p className="text-center font-bold">Did't receive the OTP?</p>
            </div>
          )}
        </div>
      </MyDialogueView>
    </MyModal>
  );
};

export default OTPValidationView;

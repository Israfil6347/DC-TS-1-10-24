import ReactDOM from 'react-dom';

interface LoaderDialogueProps {
  isLoading: boolean;
}

const LoaderDialogue: React.FC<LoaderDialogueProps> = ({ isLoading }) => {
  if (isLoading) {
    return ReactDOM.createPortal(
      <>
        <section
          className={`fixed inset-0  z-50 flex animate-[spin_4s_ease-in-out_infinite] flex-col items-center justify-center`}
        >
          <div className="absolute h-[110px] w-[110px] rotate-[225deg] animate-[spin_1s_ease-in-out_infinite] rounded-[50%] border-[5px] border-solid border-primary border-t-transparent bg-surface delay-75"></div>
          <div className="absolute h-[90px] w-[90px] rotate-[270deg] animate-[spin_2s_ease-in-out_infinite] rounded-[50%] border-[5px] border-solid border-primary border-b-transparent bg-surface delay-100"></div>
          <div className="absolute h-[70px] w-[70px] rotate-[90deg] animate-[spin_3s_ease-in-out_infinite] rounded-[50%] border-[5px] border-solid border-primary border-l-transparent bg-surface delay-200"></div>
          <div className="absolute h-[50px] w-[50px] rotate-[180deg] animate-[spin_4s_ease-in-out_infinite] rounded-[50%] border-[5px] border-solid border-primary border-r-transparent bg-surface delay-700"></div>
        </section>
      </>,
      document.getElementById('portal')!
    );
  } else {
    return null;
  }
};
export default LoaderDialogue;

import MyButton from "global_shared/components/MyButton";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

interface SuccessDialogWithdrawProps {
  isUpcomingWindowOpen: boolean;
  closeDialogue: () => void;
  message: string;
}

const SuccessDialogWithdraw: React.FC<SuccessDialogWithdrawProps> = ({
  isUpcomingWindowOpen,
  closeDialogue,
  message,
}) => {
  if (isUpcomingWindowOpen) {
    return ReactDOM.createPortal(
      <div className="duration-400 fixed inset-0 z-50 flex translate-x-0 items-center justify-center overflow-hidden bg-gray-900 bg-opacity-90 p-4 text-onSurface transition-all">
        <div className="relative m-auto w-full overflow-hidden rounded-sm bg-surface p-4 shadow-sm lg:w-6/12 lg:p-10">
          <MyButton
            onClick={closeDialogue}
            type="button"
            styleClass="absolute top-5 right-0 w-10 font-semibold transition-all transform duration-300 hover:scale-150 origin-center  hover:text-error"
            label={""}
            name={""}
          >
            <i className="fa-solid fa-xmark text-3xl"></i>
          </MyButton>

          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="h-20 w-20 text-success lg:h-32 lg:w-32"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-xl font-semibold">Congratulations</div>
          </div>
          <div className="my-6 flex justify-center text-center lg:my-12">
            <QRCode
              size={256}
              className="max-w-1/4  h-auto w-1/2 md:w-1/4"
              value={message}
              viewBox={`0 0 256 256`}
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <MyButton
              onClick={closeDialogue}
              type="button"
              label="Ok"
              styleClass="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
              name={""}
            />
          </div>
        </div>
      </div>,
      document.getElementById("portal")!
    );
  } else {
    return null;
  }
};

export default SuccessDialogWithdraw;

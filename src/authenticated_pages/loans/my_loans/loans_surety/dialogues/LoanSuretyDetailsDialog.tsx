import { SuretyModel } from "authenticated_pages/surety/shared/model/data/SuretyModel";
import { logoIcon } from "global_shared/data/base64Icons";
import { formatToTkSymbolMoney } from "global_shared/utils/textUtils";
import ReactDOM from "react-dom";

interface LoanSuretyDetailsDialogProps {
  IsShow: boolean;
  closeStatement: () => void;
  suretyDetails: SuretyModel;
}

const LoanSuretyDetailsDialog: React.FC<LoanSuretyDetailsDialogProps> = ({
  IsShow,
  closeStatement,
  suretyDetails,
}) => {
  return ReactDOM.createPortal(
    <>
      <div
        className={`duration-400 fixed inset-0 z-50 flex translate-x-0 items-center justify-center overflow-hidden bg-gray-900 bg-opacity-90 p-4 text-onSurface transition-all ${
          IsShow ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full overflow-hidden rounded-sm bg-surface py-12 px-6 shadow-sm md:w-3/5 md:px-10 lg:w-2/5 lg:px-20">
          <div className="sticky top-0 h-32 p-6">
            <div className="hover:animate-swing flex w-full flex-col items-center hover:cursor-pointer">
              <img src={logoIcon} alt="" />
              <h3 className="font-bold text-primary">Surety Taken From</h3>
            </div>
            <button
              className="absolute top-5 right-0 w-10 font-semibold transition-all duration-300 hover:scale-150 hover:text-error"
              onClick={closeStatement}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-200 mt-10 w-full overflow-y-scroll rounded-lg md:mt-2"
            style={{ maxHeight: window.innerHeight - 400 }}
          >
            <div className="content mt-5 bg-surface p-4 text-onSurface">
              <ul className="divide-y overflow-hidden text-justify">
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Member's Name</div>
                  <div className="md:w-2/5">{suretyDetails.MemberName}</div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Account No</div>
                  <div className="md:w-2/5">{suretyDetails.AccountNo}</div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Surety Amount</div>
                  <div className="md:w-2/5">
                    {formatToTkSymbolMoney(suretyDetails.SuretyAmount)}
                  </div>
                </li>

                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Mobile Phone No</div>
                  <div className="md:w-2/5">{suretyDetails.MemberMobileNo}</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="sticky bottom-0 flex items-center justify-center gap-4 p-4">
            <button
              className="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
              onClick={closeStatement}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")!
  );
};

export default LoanSuretyDetailsDialog;

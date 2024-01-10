import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import { logoIcon } from 'global_shared/data/base64Icons';
import useCommand from 'global_shared/hooks/useCommand';
import {
  formatToTkSymbolMoney,
  getFormattedAccountNumber,
} from 'global_shared/utils/textUtils';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface FundTransferConfirmDialogueProps {
  PersonData: any;
  isOpen: boolean;
  closeStatement: () => void;
  submitTransfer: () => void;
}

const FundTransferConfirmDialogue: React.FC<
  FundTransferConfirmDialogueProps
> = ({ PersonData, isOpen, closeStatement, submitTransfer }) => {
  const { loading, executeCommand } = useCommand();

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    };

    const PolicyRequestModel = {
      ApplicationName: 'MFS',
      ContentName: 'Instant Loan Policy',
      RequestFrom: 'Web',
    };

    executeCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetMfsPolicy',
      JSON.stringify(PolicyRequestModel),
      { headers: headers }
    );
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return ReactDOM.createPortal(
    <div>
      <LoaderDialogue isLoading={loading} />
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }duration-400 fixed inset-0 z-50 flex  items-center justify-center overflow-hidden bg-gray-900 bg-opacity-90 p-4 text-onSurface transition-all`}
      >
        <div className="relative m-auto w-full overflow-hidden rounded-sm bg-surface p-4 shadow-sm lg:w-6/12 lg:p-10">
          <div className="header flex items-center justify-center border-b p-4 text-2xl font-bold text-onSurface">
            <img src={logoIcon} alt="" width="40" height="40" />
            <p className="ml-2 antialiased">Transfer Confirm</p>
          </div>
          <div className="content p-4">
            <p className="text-center text-lg font-semibold">
              {`   You are transferring Tk.${formatToTkSymbolMoney(
                PersonData?.Amount
              )} to A/C #${getFormattedAccountNumber(
                PersonData?.TransferToAcc
              )} of Mr/Mrs. ${PersonData?.RecipentName}. Are you sure ?`}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 p-4">
            <button
              className="w-24 rounded-sm border py-1 font-semibold uppercase shadow-sm hover:bg-primary hover:text-onPrimary"
              onClick={closeStatement}
            >
              Cancel
            </button>
            <button
              className="w-24 rounded-sm border py-1 font-semibold uppercase shadow-sm hover:bg-primary hover:text-onPrimary"
              onClick={submitTransfer}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')!
  );
};

export default FundTransferConfirmDialogue;

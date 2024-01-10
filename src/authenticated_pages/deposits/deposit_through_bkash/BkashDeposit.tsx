import bKash from 'assets/icons/bKash.png';
import MyButton from 'global_shared/components/MyButton';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import React, { useEffect } from 'react';
import { CollectionLedgerState } from '../shared/hooks/useCollectionLedgerState';
import Checkout from './Checkout';
import { BkashCreatePaymentRequestModel } from './model/BkashCreatePaymentRequestModel';
import { GetBKashServiceChargeRequestModel } from './model/GetBKashServiceChargeRequestModel';

interface BkashDepositProps {
  setBkashPaymentOpen: (open: boolean) => void;
  collectionLedgerState: CollectionLedgerState[] | [];
  handleBack?: () => void;
}

const BkashDeposit: React.FC<BkashDepositProps> = ({
  setBkashPaymentOpen,
  collectionLedgerState,
  handleBack,
}) => {
  const { authUser } = React.useContext(AuthUserContext) as AuthUserContextType;
  var totalAmount = 0;
  var selectedAccounts: CollectionLedgerState[] = [];
  if (collectionLedgerState.length > 0) {
    collectionLedgerState.forEach((collectionLedger, index) => {
      if (collectionLedger?.isSelected) {
        totalAmount = totalAmount + collectionLedger.Amount;
        selectedAccounts.push(collectionLedger);
      }
    });
  }

  const {
    loading: serviceChargeResponseDataLoading,
    data: serviceChargeResponseData,
    setData: setServiceChargeResponseData,
    message: serviceChargeResponseMessage,
    status: serviceChargeResponseStatus,
    setStatus: setServiceChargeResponseStatus,
    executeCommand: serviceChargeRequestCommand,
  } = useCommand<any>();
  console.log(serviceChargeResponseData);
  console.log(serviceChargeResponseMessage);

  useEffect(() => {
    const getBKashServiceChargeRequestModel =
      new GetBKashServiceChargeRequestModel(authUser);
    getBKashServiceChargeRequestModel.TotalAmount = totalAmount;

    serviceChargeRequestCommand(
      process.env.REACT_APP_BASE_URL +
        '/Deposit_Bkash_V1/GetbKashPaymentServiceCharge',
      JSON.stringify(getBKashServiceChargeRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  const {
    loading: createPaymentResponseDataLoading,
    data: createPaymentResponseData,
    setData: setCreatePaymentResponseData,
    message: createPaymentResponseMessage,
    status: createPaymentResponseStatus,
    setStatus: setCreatePaymentResponseStatus,
    executeCommand: createPaymentRequestCommand,
  } = useCommand<any>();

  const createPaymentRequestHandler = () => {
    const depositNowRequestModel = new BkashCreatePaymentRequestModel(authUser);
    depositNowRequestModel.TransactionType = 'bKashDepositRequest';
    depositNowRequestModel.TotalDepositAmount = totalAmount;
    depositNowRequestModel.ServiceCharge =
      serviceChargeResponseData?.ServiceCharge
        ? serviceChargeResponseData?.ServiceCharge
        : 0;
    depositNowRequestModel.TransactionMethod = '16';
    depositNowRequestModel.TransactionModels = selectedAccounts;

    console.log(JSON.stringify(depositNowRequestModel));

    createPaymentRequestCommand(
      process.env.REACT_APP_BASE_URL + '/Deposit_bKash_V1/CreatebKashPayment',
      JSON.stringify(depositNowRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  return (
    <div>
      <LoaderDialogue
        isLoading={
          createPaymentResponseDataLoading || serviceChargeResponseDataLoading
        }
      />
      {createPaymentResponseStatus === 'success' ? (
        <Checkout
          isOpen={createPaymentResponseData ? true : false}
          setCreatePaymentResponseData={setCreatePaymentResponseData}
          createPaymentResponseData={createPaymentResponseData}
        />
      ) : (
        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={
            createPaymentResponseStatus === 'failed' ? true : false
          }
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setCreatePaymentResponseStatus(null);
          }}
        >
          {createPaymentResponseMessage}
        </FailedDialogue>
      )}

      <div className="rounded-md bg-surface p-7">
        <div className="flex flex-col items-center justify-center pt-3 ">
          <img src={bKash} alt="" className="h-20" />
        </div>
        <div
          className={`mt-5 min-h-[396px] overflow-auto p-4 md:border`}
          style={{ height: window.innerHeight - 500 }}
        >
          <ul className="space-y-4 overflow-hidden">
            {collectionLedgerState?.map(
              (AccountInfo, index) =>
                AccountInfo.isSelected && (
                  <li
                    key={index}
                    className="flex flex-col items-start lg:flex-row"
                  >
                    <div className="flex w-full items-center rounded border border-gray-400 bg-background px-2 text-start text-sm font-bold lg:w-2/3">
                      <MyCheckBox
                        disabled={true}
                        value={AccountInfo?.isSelected}
                        name="isSelected"
                        onChangeHandler={(event) => {}}
                        label={`${AccountInfo?.AccountType} | ${AccountInfo?.AccountNo}`}
                        error={undefined}
                      />
                    </div>
                    <div className="w-full lg:w-1/3">
                      <MyTextInput
                        label=""
                        name="Amount"
                        value={AccountInfo?.Amount.toString()}
                        inputType="number"
                        disabled={true}
                        required={false}
                        error={collectionLedgerState?.[index]?.Errors?.Amount}
                        onChangeHandler={(event) => {}}
                        leftIcon={
                          <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                        }
                      />
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>

        <div className="py-3">
          <div className="text-right font-semibold">
            Total Deposit Amount:{' '}
            <span>{formatToTkSymbolMoney(totalAmount)}</span>
          </div>
          <div className="text-right font-semibold">
            Service Charge:{' '}
            <span>
              {formatToTkSymbolMoney(
                serviceChargeResponseData?.ServiceCharge
                  ? serviceChargeResponseData?.ServiceCharge
                  : 0
              )}
            </span>
          </div>
          <hr className="my-1" />
          <div className="text-right font-semibold">
            Total:{' '}
            <span>
              {formatToTkSymbolMoney(
                totalAmount +
                  (serviceChargeResponseData?.ServiceCharge
                    ? serviceChargeResponseData?.ServiceCharge
                    : 0)
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-5 ">
          <MyButton
            styleClass="rounded border bg-primary py-2 px-4 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
            onClick={() => {
              handleBack && handleBack();

              setBkashPaymentOpen(false);
            }}
            label={''}
            name={''}
            type={undefined}
          >
            Back
          </MyButton>
          <MyButton
            styleClass="rounded border shadow border-2 border-pink-700 bg-surface py-2 px-4 font-semibold text-onPrimary hover:bg-pink-200"
            onClick={() => {
              createPaymentRequestHandler();
            }}
            label={''}
            disabled={serviceChargeResponseDataLoading}
            name={''}
            type={undefined}
          >
            <div className="flex items-center text-pink-700">
              <img src={bKash} alt="" className="h-6" />
              Next
            </div>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default BkashDeposit;

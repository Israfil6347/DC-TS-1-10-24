import logoIcon from 'assets/images/logo/logocccul.png';
import CardPage from 'authenticated_pages/info/financial_card/CardPage';
import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import CardAccountPinView from 'authenticated_pages/shared/components/CardAccountPinView';
import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
import { GetCollectionLedgersRequestModel } from 'authenticated_pages/shared/model/request/GetCollectionLedgersRequestModel';
import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import CryptoJS from 'crypto-js';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MySearchInput from 'global_shared/components/MySearchInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { Size } from 'global_shared/enum/Size';
import useCardPinRemainingTry from 'global_shared/hooks/useCardPinRemainingTry';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import {
  formatToTkSymbolMoney,
  getFormattedAccountNumber,
} from 'global_shared/utils/textUtils';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTransferWithDc from './hooks/useTransferWithDc';
import { ConfirmTransferRequestModel } from './model/request/ConfirmTransferRequestModel';
import { TransferRequestModel } from './model/request/TransferRequestModel';
import { fundTransferValidation } from './utils/fundTransferValidation';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import AddBeneficiary from 'authenticated_pages/info/beneficiary/components/AddBeneficiary';
import useSearchAccountState from 'authenticated_pages/info/beneficiary/hook/useSearchAccountState';
import { BeneficiaryModel } from 'authenticated_pages/info/beneficiary/model/data/BeneficiaryModel';
import { AddBeneficiaryRequestModel } from 'authenticated_pages/info/beneficiary/model/request/AddBeneficiaryRequestModel';
import { RemoveBeneficiaryRequestModel } from 'authenticated_pages/info/beneficiary/model/request/RemoveBeneficiaryRequestModel';
import { SearchBeneficiaryRequestModel } from 'authenticated_pages/info/beneficiary/model/request/SearchBeneficiaryRequestModel';
import { useCardVerificationState } from 'authenticated_pages/shared/hooks/useCardVerificationState';
import { stepStyle } from 'authenticated_pages/shared/style/stepperStyle';
import { validateCardVerificationState } from 'authenticated_pages/shared/validations/validateCardVerificationState';
import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  07 July 2023
 *========================================================================**/
const steps = ['TRANSFER TO', 'ACCOUNT HOLDER VERIFICATION'];
function TransferWithinDhakaCredit() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  // const [accountNumber, setAccountNumber] = useState<string | null>(null);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isBeneficiaryDialogueOpen, setBeneficiaryDialogueOpen] =
    useState(false);

  const [ConfirmRemoveBeneBeneficiary, setConfirmRemoveBeneBeneficiary] =
    useState<boolean>(false);
  const [RemoveBeneBeneficiaryName, setRemoveBeneBeneficiaryName] =
    useState<string>('');
  const [removeBeneficiaryAccountName, setRemoveBeneficiaryAccountName] =
    useState<string>('');

  const {
    setSameAccountError,
    updateFundTransferRequestState,
    fundTransferRequestState,
    setFundTransferRequestState,
  } = useTransferWithDc();

  const { cardVerificationState, updateCardVerificationState } =
    useCardVerificationState();

  const { cardPinRemainingTry, updateCardPinRemainingTry } =
    useCardPinRemainingTry();

  const {
    updateSearchTextRequestState,
    searchAccountState,
    clearSearchAccountState,
  } = useSearchAccountState();

  const {
    loading: getBeneficialResponseDataLoading,
    data: getBeneficialResponseData,
    status: getBeneficialResponseStatus,
    setStatus: setBeneficialResponseStatus,
    executeCommand: getBeneficialRequestExecuteCommand,
  } = useCommand<BeneficiaryModel[] | null>();

  const {
    loading: searchBeneficiaryResponseDataLoading,
    data: searchBeneficiaryResponseData,
    message: searchBeneficiaryResponseMessage,
    setData: setSearchBeneficiaryResponseData,
    status: searchBeneficiaryResponseStatus,
    setStatus: setSearchBeneficiaryResponseStatus,
    executeCommand: searchBeneficiaryRequestCommand,
  } = useCommand<CollectionLedgersResponseModel | null>();

  const {
    loading: addBeneficiaryResponseDataLoading,
    data: addBeneficiaryResponseData,
    message: addBeneficiaryResponseMessage,
    status: addBeneficiaryResponseStatus,
    setStatus: setAddBeneficiaryResponseStatus,
    executeCommand: addBeneficiaryRequestExecuteCommand,
  } = useCommand<string>();

  const {
    loading: removeBeneficiaryResponseDataLoading,
    data: removeBeneficiaryResponseData,
    status: removeBeneficiaryResponseStatus,
    setStatus: setRemoveBeneficiaryResponseStatus,
    executeCommand: removeBeneficiaryRequestExecuteCommand,
  } = useCommand<string>();

  const {
    loading: collectionAccountsResponseDataLoading,
    data: collectionAccountsResponseData,
    message: collectionAccountsResponseMessage,
    status: collectionAccountsResponseStatus,
    setStatus: setCollectionAccountsResponseStatus,
    executeCommand: collectionAccountsRequestCommand,
  } = useCommand<CollectionLedgersResponseModel | null>();

  const {
    loading: cardLockResponseDataLoading,
    data: cardLockResponseData,
    status: cardLockResponseDataStatus,
    setStatus: setCardLockResponseStatus,
    executeCommand: cardLockRequestExecuteCommand,
  } = useCommand<string | null>();

  const {
    loading: confirmTransferResponseDataLoading,
    status: confirmTransferResponseStatus,
    setStatus: setConfirmTransferResponseStatus,
    message: confirmTransferResponseMessage,
    executeCommand: confirmTransferRequestExecutesCommand,
  } = useCommand<string | null>();

  const {
    loading: verifyPINResponseDataLoading,
    data: verifyPINResponseData,
    message: verifyPINResponseMessage,
    status: verifyPINResponseStatus,
    setStatus: setVerifyPINResponseStatus,
    executeCommand: verifyPINRequestExecuteCommand,
  } = useCommand<TransferRequestModel>();

  const {
    loading: FundTransferResponseDataLoading,
    data: FundTransferResponseData,
    message: FundTransferResponseMessage,
    setMessage: FundTransferSetMessage,
    status: FundTransferStatus,
    setStatus: FundTransferSetStatus,
    executeCommand: FundTransferExecuteCommand,
  } = useCommand<string | null>();

  const {
    loading: myCardsResponseDataLoading,
    data: myCardsResponseData,
    executeCommand: myCardsRequestCommand,
  } = useCommand<CardModel[] | null>();

  const notify = () => toast('Cannot transfer more than 50,000 Tk at a time!');

  var ownAccNumber: string | null;

  if (myCardsResponseData !== null) {
    ownAccNumber = myCardsResponseData?.[0]?.CardsAccounts[0]?.AccountNumber;
  }

  const getMemberInfoRequestHandler = (accountNo: string) => {
    const getCollectionLedgersRequestModel =
      new GetCollectionLedgersRequestModel(authUser);

    getCollectionLedgersRequestModel.SearchText = getFormattedAccountNumber(
      accountNo!
    );

    getCollectionLedgersRequestModel.AccountTypeCode = '16';

    updateFundTransferRequestState(
      'TransferToAcc',
      getFormattedAccountNumber(accountNo!)
    );

    if (
      ownAccNumber?.trim() ===
      getCollectionLedgersRequestModel.SearchText.trim()
    ) {
      setSameAccountError(
        'TransferToAcc',
        getCollectionLedgersRequestModel.SearchText.trim()
      );
    }

    collectionAccountsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/getCollectionAccount',
      JSON.stringify(getCollectionLedgersRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  React.useEffect(() => {
    if (myCardsResponseData !== null) {
      updateCardVerificationState(
        'CardNo',
        myCardsResponseData?.[0]?.CardNo?.trim()
      );
      updateCardVerificationState(
        'CardAccount',
        myCardsResponseData?.[0]?.CardsAccounts?.[0]?.AccountNumber.trim()
      );
    }
  }, [myCardsResponseData]);

  useEffect(() => {
    if (collectionAccountsResponseData !== null) {
      updateFundTransferRequestState(
        'RecipientName',
        collectionAccountsResponseData?.AccountHolderInfo?.[0]?.FullName
      );
    }

    var personalCardInfoRequestModel = new BaseRequestModel(authUser);

    myCardsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V2/myCards',
      JSON.stringify(personalCardInfoRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [collectionAccountsResponseData, cardLockResponseData]);

  const cardLockRequestHandler = () => {
    if (cardPinRemainingTry !== 0) {
      updateCardPinRemainingTry(1);
    } else {
      var cardLockObjRequestModel = {
        NameOnCard: myCardsResponseData?.[0]?.Name,
        CardNo: myCardsResponseData?.[0]?.CardNo,
        RequestFrom: 'Web',
      };

      cardLockRequestExecuteCommand(
        process.env.REACT_APP_BASE_URL + '/cards_V1/lockTheCard',
        JSON.stringify(cardLockObjRequestModel),
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
        }
      );
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const fundTransferSubmitRequestHandler = () => {
    var encryptPassword = CryptoJS.MD5(cardVerificationState?.CardPIN);
    const confirmTransferRequestModel = new ConfirmTransferRequestModel(
      authUser
    );
    if (myCardsResponseData !== null) {
      confirmTransferRequestModel.AccNo =
        myCardsResponseData[0].CardsAccounts[0].AccountNumber!;
      confirmTransferRequestModel.AccType =
        myCardsResponseData[0].CardsAccounts[0].AccountTypeCode!;
    }

    confirmTransferRequestModel.CardNo = myCardsResponseData?.[0]?.CardNo!;
    confirmTransferRequestModel.NameOnCard = myCardsResponseData?.[0]?.Name!;
    confirmTransferRequestModel.Amount = parseInt(
      fundTransferRequestState?.Amount
    );
    confirmTransferRequestModel.TransferToAcc =
      fundTransferRequestState?.TransferToAcc;
    confirmTransferRequestModel.RecipientName =
      fundTransferRequestState?.RecipientName;
    confirmTransferRequestModel.SecretKey = encryptPassword.toString();

    confirmTransferRequestExecutesCommand(
      process.env.REACT_APP_BASE_URL + '/transfers_v1/verifyRecepient',
      JSON.stringify(confirmTransferRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const verifyTransferPinRequestHandler = () => {
    var encryptPassword = CryptoJS.MD5(cardVerificationState?.CardPIN);
    const transferRequestModel = new TransferRequestModel(authUser);
    if (myCardsResponseData !== null) {
      transferRequestModel.AccHolder =
        myCardsResponseData[0].CardsAccounts[0].AccountNumber!;
      transferRequestModel.AccountNo =
        myCardsResponseData[0].CardsAccounts[0].AccountNumber!;
      transferRequestModel.AccType =
        myCardsResponseData[0].CardsAccounts[0].AccountTypeCode!;
    }
    transferRequestModel.AccTransfer = getFormattedAccountNumber(
      fundTransferRequestState?.TransferToAcc
    );
    transferRequestModel.Amount = parseInt(fundTransferRequestState?.Amount);
    transferRequestModel.CardNo = myCardsResponseData?.[0]?.CardNo!;
    transferRequestModel.NameOnCard = myCardsResponseData?.[0]?.Name!;
    transferRequestModel.SecretKey = encryptPassword.toString();
    transferRequestModel.TransferToAcc = getFormattedAccountNumber(
      fundTransferRequestState?.TransferToAcc
    );

    verifyPINRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/verifyCardPIN',
      JSON.stringify(transferRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const otpDataRequestHandler = (otpData: string) => {
    if (verifyPINResponseData) {
      verifyPINResponseData.OTPValue = otpData;
    }
    console.log(verifyPINResponseData);
    FundTransferExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/transfers_v2/submitFundTransfer',
      JSON.stringify(verifyPINResponseData),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };
  useEffect(() => {
    getBeneficiariesRequestHandler();
  }, [
    getBeneficialResponseStatus,
    addBeneficiaryResponseStatus,
    removeBeneficiaryResponseStatus,
  ]);

  const getBeneficiariesRequestHandler = () => {
    var getBeneficiariesRequestModel = new BaseRequestModel(authUser);

    getBeneficialRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/beneficiaries_V1/getBeneficiaries',
      JSON.stringify(getBeneficiariesRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const searchBeneficiaryRequestHandler = () => {
    const searchBeneficiaryRequestModel = new SearchBeneficiaryRequestModel(
      authUser
    );
    searchBeneficiaryRequestModel.SearchText = getFormattedAccountNumber(
      searchAccountState?.AccountNumber
    );

    searchBeneficiaryRequestCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/getCollectionAccount',
      JSON.stringify(searchBeneficiaryRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const addBeneficiaryRequestHandler = () => {
    const addBeneficiaryRequestModel = new AddBeneficiaryRequestModel(authUser);

    addBeneficiaryRequestModel.AccountNo = getFormattedAccountNumber(
      searchAccountState?.AccountNumber
    );
    addBeneficiaryRequestModel.AccountHolderName =
      searchBeneficiaryResponseData?.AccountHolderInfo[0]?.FullName!;

    console.log(addBeneficiaryRequestModel);

    addBeneficiaryRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/beneficiaries_V1/addBeneficiary',
      JSON.stringify(addBeneficiaryRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const removeBeneficiaryRequestHandler = (accountNo: string) => {
    const removeBeneficiaryRequestModel = new RemoveBeneficiaryRequestModel(
      authUser
    );
    removeBeneficiaryRequestModel.AccountNo =
      getFormattedAccountNumber(accountNo);
    removeBeneficiaryRequestModel.AccountHolderName =
      searchBeneficiaryResponseData?.AccountHolderInfo[0]?.FullName!;

    removeBeneficiaryRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/beneficiaries_V1/removeBeneficiary',
      JSON.stringify(removeBeneficiaryRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  console.log(fundTransferRequestState);

  if (myCardsResponseData?.length === 0) {
    return <CardPage />;
  } else {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <LoaderDialogue
          isLoading={
            FundTransferResponseDataLoading ||
            verifyPINResponseDataLoading ||
            collectionAccountsResponseDataLoading ||
            confirmTransferResponseDataLoading ||
            myCardsResponseDataLoading ||
            cardLockResponseDataLoading ||
            removeBeneficiaryResponseDataLoading ||
            addBeneficiaryResponseDataLoading ||
            getBeneficialResponseDataLoading
          }
        />

        <SuccessDialogue
          isDialogueOpen={
            removeBeneficiaryResponseStatus === 'success' ? true : false
          }
          onOkButtonClick={() => {
            setRemoveBeneficiaryResponseStatus(null);
          }}
        >
          {removeBeneficiaryResponseData}
        </SuccessDialogue>

        <SuccessDialogue
          isDialogueOpen={
            addBeneficiaryResponseStatus === 'success' ? true : false
          }
          onOkButtonClick={() => {
            setAddBeneficiaryResponseStatus(null);
          }}
        >
          {addBeneficiaryResponseData}
        </SuccessDialogue>

        <MyModal
          size={Size.Small}
          show={ConfirmRemoveBeneBeneficiary}
          onClose={() => {
            setConfirmRemoveBeneBeneficiary(false);
          }}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="header flex items-center justify-center  bg-background p-6 text-2xl font-bold text-onSurface">
                <img src={logoIcon} alt="" width="40" height="40" />
                <p className="ml-2 antialiased">Remove Beneficiary</p>
              </div>
            }
            dialogueFooter={
              <div className="flex items-center justify-center gap-4 bg-background p-4 ">
                <MyButton
                  type="button"
                  name="yes"
                  label="Yes"
                  styleClass="w-1/2 rounded border bg-primary p-2 font-semibold uppercase text-onPrimary disabled:bg-gray-400 md:w-1/2"
                  onClick={() => {
                    removeBeneficiaryRequestHandler(
                      removeBeneficiaryAccountName
                    );
                    setConfirmRemoveBeneBeneficiary(false);
                  }}
                ></MyButton>
                <MyButton
                  type="button"
                  name="No"
                  label="No"
                  styleClass="w-1/2 rounded border bg-primary p-2 font-semibold uppercase text-onPrimary disabled:bg-gray-400 md:w-1/2"
                  onClick={() => {
                    setConfirmRemoveBeneBeneficiary(false);
                  }}
                ></MyButton>
              </div>
            }
            onCancel={() => {
              setConfirmRemoveBeneBeneficiary(false);
            }}
          >
            <div
              className="px-8 py-6 md:px-14"
              style={{ maxHeight: window.innerHeight - 380 }}
            >
              <p className="text-center text-lg font-semibold">
                {`Do you want to remove Mr/Ms ${RemoveBeneBeneficiaryName}`}
              </p>
            </div>
          </MyDialogueView>
        </MyModal>
        {/* Begin Beneficiaries View open dialog */}
        <MyModal
          size={Size.Small}
          show={isBeneficiaryDialogueOpen}
          onClose={() => {
            setBeneficiaryDialogueOpen(false);
          }}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="bg-background p-6">
                <div className="flex w-full flex-col items-center ">
                  <img src={logoIcon} alt="" className="w-32" />
                  <h3 className="font-bold text-primary">Beneficiaries</h3>
                </div>
              </div>
            }
            dialogueFooter={
              <div className="w-full items-center justify-center bg-background py-6 px-12 md:flex md:gap-4">
                <MyButton
                  type="button"
                  name=""
                  label="Confirm Beneficiary"
                  disabled={
                    !searchBeneficiaryResponseData?.AccountHolderInfo[0]
                      ?.FullName
                  }
                  onClick={() => {
                    addBeneficiaryRequestHandler();
                    setSearchBeneficiaryResponseData(null);
                    clearSearchAccountState();
                  }}
                  styleClass="md:w-2/5  w-full rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                ></MyButton>
              </div>
            }
            onCancel={() => {
              setBeneficiaryDialogueOpen(false);
            }}
          >
            <div
              className="px-8 py-6 md:px-14"
              style={{ maxHeight: window.innerHeight - 300 }}
            >
              <div className="scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-200 mt-10 h-[230px] w-full overflow-y-scroll rounded-lg md:mt-2">
                {getBeneficialResponseData?.length === 0 ? (
                  <div className="">
                    <h3 className="text-center text-lg font-bold uppercase">
                      Please, Add beneficiary.
                    </h3>
                  </div>
                ) : (
                  <table className="table w-full">
                    <thead className="">
                      <tr className="h-16 w-full border border-gray-100 bg-background text-base text-onSurface shadow-sm md:table-row">
                        <th className="border border-gray-200 p-2 text-center">
                          <p>Account</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-center">
                          <p>Particulars</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-center">
                          <p className="">Action</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="flex-1 bg-backgroundVariant sm:flex-none">
                      {getBeneficialResponseData?.map(
                        (element, index) =>
                          /[tTlL]/.test(element.AccountNo) && (
                            <tr
                              key={index}
                              className="table-row w-full flex-col flex-wrap border-t border-gray-100 text-center first:border-t-0 even:bg-red-50"
                            >
                              <td className="border border-gray-200 p-2">
                                <p>{element?.AccountNo}</p>
                              </td>
                              <td className="border border-gray-200 p-2">
                                <p>{element?.PersonName}</p>
                              </td>
                              <td className="border border-gray-200 p-2">
                                <div className="flex justify-end gap-1">
                                  <button
                                    type="button"
                                    className="rounded bg-primary py-2 px-4 text-onPrimary shadow transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-error"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={() => {
                                      updateFundTransferRequestState(
                                        'TransferToAcc',
                                        element.AccountNo
                                      );
                                      getMemberInfoRequestHandler(
                                        element.AccountNo
                                      );
                                      setBeneficiaryDialogueOpen(false);
                                    }}
                                  >
                                    <i className="fa-solid fa-check"></i>
                                  </button>
                                  <button
                                    onClick={() => {
                                      setRemoveBeneficiaryAccountName(
                                        element.AccountNo
                                      );
                                      setConfirmRemoveBeneBeneficiary(true);
                                      setRemoveBeneBeneficiaryName(
                                        element?.PersonName
                                      );
                                    }}
                                    type="button"
                                    className="rounded bg-primaryVariant py-2 px-4 text-onPrimaryVariant shadow transition-all duration-300 hover:scale-105"
                                  >
                                    <i className="fa-solid fa-trash-can"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                )}
              </div>
              <AddBeneficiary
                searchAccountState={searchAccountState}
                clearSearchAccountState={clearSearchAccountState}
                onSearchTextChange={updateSearchTextRequestState}
                setSearchBeneficiaryResponseData={
                  setSearchBeneficiaryResponseData
                }
                searchBeneficiaryHandler={searchBeneficiaryRequestHandler}
                searchBeneficiaryRequestData={searchBeneficiaryResponseData}
                addBeneficiaryHandler={addBeneficiaryRequestHandler}
              />
            </div>
          </MyDialogueView>
        </MyModal>
        {/* End Beneficiaries View open dialog */}

        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={
            searchBeneficiaryResponseStatus === 'failed' ? true : false
          }
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setSearchBeneficiaryResponseStatus(null);
          }}
        >
          {searchBeneficiaryResponseMessage}
        </FailedDialogue>

        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={
            confirmTransferResponseStatus === 'failed' ? true : false
          }
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setConfirmTransferResponseStatus(null);
          }}
        >
          {confirmTransferResponseMessage}
        </FailedDialogue>
        <SuccessDialogue
          isDialogueOpen={
            cardLockResponseDataStatus === 'success' ? true : false
          }
          onOkButtonClick={() => {
            setCardLockResponseStatus(null);
          }}
        >
          {cardLockResponseData}
        </SuccessDialogue>

        <MyModal
          size={Size.Small}
          show={confirmTransferResponseStatus === 'success' ? true : false}
          onClose={() => {
            setConfirmTransferResponseStatus(null);
          }}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="header flex items-center justify-center  bg-background p-6 text-2xl font-bold text-onSurface">
                <img src={logoIcon} alt="" width="40" height="40" />
                <p className="ml-2 antialiased">Transfer Confirm</p>
              </div>
            }
            dialogueFooter={
              <div className="flex items-center justify-center gap-4 bg-background p-4 ">
                <MyButton
                  type="button"
                  name="ok"
                  label="Yes"
                  disabled={false}
                  onClick={() => {
                    verifyTransferPinRequestHandler();
                  }}
                  styleClass="w-1/2 rounded border bg-primary p-2 font-semibold uppercase text-onPrimary disabled:bg-gray-400 md:w-1/4"
                ></MyButton>

                <MyButton
                  type="button"
                  name="Cancel"
                  label="NO"
                  disabled={false}
                  onClick={() => {
                    setConfirmTransferResponseStatus(null);
                  }}
                  styleClass="w-1/2 rounded border bg-primary p-2 font-semibold uppercase text-onPrimary disabled:bg-gray-400 md:w-1/4"
                ></MyButton>
              </div>
            }
            onCancel={() => {
              setConfirmTransferResponseStatus(null);
            }}
          >
            <div
              className=" px-8 py-6 md:px-14"
              style={{ maxHeight: window.innerHeight - 380 }}
            >
              <p className="text-center text-lg font-semibold">
                {`   You are transferring Tk.${formatToTkSymbolMoney(
                  parseInt(fundTransferRequestState?.Amount)
                )} to A/C #${getFormattedAccountNumber(
                  fundTransferRequestState?.TransferToAcc
                )} of Mr/Mrs. ${
                  fundTransferRequestState?.RecipientName
                }. Are you sure ?`}
              </p>
            </div>
          </MyDialogueView>
        </MyModal>

        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={verifyPINResponseStatus === 'failed' ? true : false}
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setVerifyPINResponseStatus(null);
            navigate('/transfer/transfer_within_dhaka_credit');
          }}
        >
          {verifyPINResponseMessage}
        </FailedDialogue>

        {verifyPINResponseMessage?.includes('Invalid Card PIN') && (
          <FailedDialogue
            dialogueSize={Size.Small}
            isDialogueOpen={verifyPINResponseStatus === 'failed' ? true : false}
            cancelButtonText="ok"
            onCloseButtonClick={() => {
              setVerifyPINResponseStatus(null);
              cardLockRequestHandler();
            }}
          >
            {verifyPINResponseMessage +
              '. ' +
              'Remaining Tries ' +
              ' ' +
              cardPinRemainingTry}
          </FailedDialogue>
        )}

        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={
            cardLockResponseDataStatus === 'failed' ? true : false
          }
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setCardLockResponseStatus(null);
          }}
        >
          {cardLockResponseData}
        </FailedDialogue>

        {/*Start collection Accounts Response failed Status */}
        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={
            collectionAccountsResponseStatus === 'failed' ? true : false
          }
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setCollectionAccountsResponseStatus(null);
          }}
        >
          {collectionAccountsResponseMessage}
        </FailedDialogue>
        {/*Start collection Accounts Response failed Status */}
        {verifyPINResponseStatus === 'success' && (
          <OTPValidationView
            isOTPValidationViewOpen={
              verifyPINResponseStatus === 'success' ? true : false
            }
            closeOTPValidationView={() => {
              setVerifyPINResponseStatus(null);
            }}
            otpValidateRequestHandler={otpDataRequestHandler}
            resendOTPRequestHandler={verifyTransferPinRequestHandler}
          />
        )}

        <SuccessDialogue
          isDialogueOpen={FundTransferStatus === 'success' ? true : false}
          onCloseButtonClick={() => {
            FundTransferSetStatus(null);
            navigate('/transfer/transfer_within_dhaka_credit');
          }}
        >
          {FundTransferResponseData}
        </SuccessDialogue>

        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={FundTransferStatus === 'failed' ? true : false}
          OkButtonText="Retry"
          onOkButtonClick={() => {
            FundTransferSetStatus(null);
          }}
          cancelButtonText="Back"
          onCloseButtonClick={() => {
            navigate('/transfer/transfer_within_dhaka_credit');
          }}
        >
          {FundTransferResponseMessage}
        </FailedDialogue>
        <div className="w-full">
          <div className="">
            <div className="grid grid-cols-1 gap-8 rounded lg:grid-cols-2 ">
              <CardAccountPinView
                showAccountInfo={true}
                titleAccounts="Transfer From"
                showCardInfo={false}
                myCards={myCardsResponseData}
                parentPageState={fundTransferRequestState}
                updateParentPageState={updateFundTransferRequestState}
              />
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="flex items-center rounded bg-surface p-6 shadow lg:p-10"
              >
                <div className="w-full">
                  <motion.h2 className="text-center text-lg font-bold">
                    <div className="md:hidden">
                      <Box sx={{ maxWidth: 400 }}>
                        <Stepper
                          activeStep={activeStep}
                          orientation="vertical"
                          sx={stepStyle}
                        >
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      </Box>
                    </div>
                    <div className="hidden md:block">
                      <Box sx={{ width: '100%' }}>
                        <Stepper
                          activeStep={activeStep}
                          alternativeLabel
                          sx={stepStyle}
                        >
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      </Box>
                    </div>
                  </motion.h2>
                  {activeStep + 1 === 1 && (
                    <div>
                      <div className="my-3 flex items-center justify-center">
                        <button
                          className="w-full rounded bg-primary py-2  text-sm font-bold uppercase text-onPrimaryVariant shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:text-base"
                          onClick={() => {
                            setBeneficiaryDialogueOpen(true);
                            // updateParentPageState('SearchAccount', '');
                          }}
                        >
                          Existing Beneficiary
                        </button>
                      </div>
                      <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-1">
                        <div className="relative mt-3 w-full">
                          <MySearchInput
                            label="Account Number"
                            name="TransferToAcc"
                            id="accountnumber"
                            disabled={false}
                            value={fundTransferRequestState?.TransferToAcc.toUpperCase()}
                            error={
                              fundTransferRequestState.Errors.TransferToAcc
                            }
                            onChange={(event) => {
                              // setAccountNumber(event.target.value);
                              updateFundTransferRequestState(
                                event.target.name,
                                event.target.value
                              );
                            }}
                            onSubmit={(event) => {
                              getMemberInfoRequestHandler(
                                fundTransferRequestState.TransferToAcc
                              );
                            }}
                            leftIcon={<i className="fa-solid fa-hashtag"></i>}
                          />
                        </div>

                        <div className="">
                          <MyTextInput
                            label="Recipient Name"
                            name="RecipientName"
                            inputType="text"
                            disabled={true}
                            required={false}
                            value={
                              collectionAccountsResponseData
                                ?.AccountHolderInfo?.[0]?.FullName
                            }
                            error={
                              fundTransferRequestState.Errors.RecipientName
                            }
                            onChangeHandler={function (
                              event: ChangeEvent<HTMLInputElement>
                            ): void {
                              throw new Error('Function not implemented.');
                            }}
                            leftIcon={
                              <i className="fa-solid fa-child-reaching"></i>
                            }
                          />
                        </div>
                        <div className="">
                          <MyTextInput
                            label="Transfer Amount"
                            name="Amount"
                            inputType="number"
                            id="Amount"
                            disabled={false}
                            required={false}
                            value={fundTransferRequestState?.Amount.toString()}
                            error={fundTransferRequestState.Errors.Amount}
                            onChangeHandler={(event) => {
                              if (
                                parseInt(event.target.value) < 50001 ||
                                event.target.value === ''
                              ) {
                                updateFundTransferRequestState(
                                  event.target.name,
                                  event.target.value
                                );
                              } else {
                                notify();
                              }
                            }}
                            leftIcon={
                              <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                            }
                          />
                          <span className="text-xs text-error">
                            {myCardsResponseData &&
                            parseInt(fundTransferRequestState?.Amount) >
                              myCardsResponseData[0].CardsAccounts[0]
                                .WithdrawableBalance!
                              ? ' Cross withdrawable amount'
                              : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeStep + 1 === 2 && (
                    <CardAccountPinView
                      showAccountInfo={false}
                      titleAccounts=""
                      showCardInfo={true}
                      myCards={myCardsResponseData}
                      parentPageState={cardVerificationState}
                      updateParentPageState={updateCardVerificationState}
                    />
                  )}
                  <div className="flex w-full items-center justify-center gap-4 p-6">
                    <MyButton
                      disabled={activeStep === 0 ? true : false}
                      onClick={() => {
                        handleBack();
                      }}
                      type="button"
                      label="Back"
                      styleClass="w-2/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                      name={''}
                    />

                    <MyButton
                      onClick={() => {
                        var error = '';

                        if (activeStep + 1 === 1) {
                          const { Amount, RecipientName, TransferToAcc } =
                            fundTransferRequestState;

                          const cardFields = {
                            Amount,
                            RecipientName,
                            TransferToAcc,
                          };
                          let fieldName: keyof typeof cardFields;

                          for (fieldName in cardFields) {
                            updateFundTransferRequestState(
                              fieldName,
                              cardFields[fieldName]
                            );
                            error =
                              error +
                              fundTransferValidation(
                                fieldName,
                                fundTransferRequestState[fieldName]
                              );
                          }

                          for (let item in collectionAccountsResponseData!
                            ?.AccountInfoList) {
                            const accountDetails =
                              collectionAccountsResponseData!.AccountInfoList[
                                item
                              ];

                            if (
                              accountDetails.AccountNo.trim() === ownAccNumber
                            ) {
                              setSameAccountError(
                                'TransferToAcc',
                                accountDetails.AccountNo
                              );

                              error = error + 'own account';
                            }
                          }
                          if (myCardsResponseData) {
                            if (
                              parseInt(fundTransferRequestState?.Amount) >
                              myCardsResponseData[0].CardsAccounts[0]
                                .WithdrawableBalance!
                            ) {
                              error = error + 'crossed withdrawable amount';
                            } else {
                              error = error + '';
                            }
                          }

                          if (error.length === 0) {
                            handleNext();
                          }
                        }

                        if (activeStep + 1 === 2) {
                          let fieldName: keyof typeof cardVerificationState;
                          for (fieldName in cardVerificationState) {
                            updateCardVerificationState(
                              fieldName,
                              cardVerificationState[fieldName]
                            );
                            error =
                              error +
                              validateCardVerificationState(
                                fieldName,
                                cardVerificationState[fieldName]
                              );
                          }

                          if (error.length === 0) {
                            if (cardPinRemainingTry === 0) {
                              cardLockRequestHandler();
                            } else {
                              fundTransferSubmitRequestHandler();
                            }
                          }
                        }
                      }}
                      type="button"
                      label={
                        activeStep === steps.length - 1 ? 'Verify' : 'Next'
                      }
                      styleClass="w-2/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                      name={''}
                      disabled={
                        activeStep === 0 && !collectionAccountsResponseData
                      }
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default TransferWithinDhakaCredit;

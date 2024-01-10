import AddBeneficiary from 'authenticated_pages/info/beneficiary/components/AddBeneficiary';
import useSearchAccountState from 'authenticated_pages/info/beneficiary/hook/useSearchAccountState';
import { BeneficiaryModel } from 'authenticated_pages/info/beneficiary/model/data/BeneficiaryModel';
import { AddBeneficiaryRequestModel } from 'authenticated_pages/info/beneficiary/model/request/AddBeneficiaryRequestModel';
import { RemoveBeneficiaryRequestModel } from 'authenticated_pages/info/beneficiary/model/request/RemoveBeneficiaryRequestModel';
import { SearchBeneficiaryRequestModel } from 'authenticated_pages/info/beneficiary/model/request/SearchBeneficiaryRequestModel';
import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
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
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { getFormattedAccountNumber } from 'global_shared/utils/textUtils';
import { ChangeEvent, useContext, useEffect, useState } from 'react';

interface AccountHolderAndBeneficiaryViewProps {
  collectionAccountsResponseData?: any;
  getCollectionAccounts?: any;
  parentPageState?: any;
  updateParentPageState?: any;
}

const AccountHolderAndBeneficiaryView: React.FC<
  AccountHolderAndBeneficiaryViewProps
> = ({
  collectionAccountsResponseData,
  getCollectionAccounts,
  parentPageState,
  updateParentPageState,
}) => {
  console.log(collectionAccountsResponseData);
  const [ConfirmRemoveBeneBeneficiary, setConfirmRemoveBeneBeneficiary] =
    useState<boolean>(false);
  const [RemoveBeneBeneficiaryName, setRemoveBeneBeneficiaryName] =
    useState<string>('');
  const [removeBeneficiaryAccountName, setRemoveBeneficiaryAccountName] =
    useState<string>('');
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [isBeneficiaryDialogueOpen, setBeneficiaryDialogueOpen] =
    useState(false);

  const {
    updateSearchTextRequestState,
    searchAccountState,
    clearSearchAccountState,
  } = useSearchAccountState();

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
    loading: getBeneficialResponseDataLoading,
    data: getBeneficialResponseData,
    status: getBeneficialResponseStatus,
    setStatus: setBeneficialResponseStatus,
    executeCommand: getBeneficialRequestExecuteCommand,
  } = useCommand<BeneficiaryModel[] | null>();

  const {
    loading: removeBeneficiaryResponseDataLoading,
    data: removeBeneficiaryResponseData,
    status: removeBeneficiaryResponseStatus,
    setStatus: setRemoveBeneficiaryResponseStatus,
    executeCommand: removeBeneficiaryRequestExecuteCommand,
  } = useCommand<string>();

  const {
    loading: addBeneficiaryResponseDataLoading,
    data: addBeneficiaryResponseData,
    message: addBeneficiaryResponseMessage,
    status: addBeneficiaryResponseStatus,
    setStatus: setAddBeneficiaryResponseStatus,
    executeCommand: addBeneficiaryRequestExecuteCommand,
  } = useCommand<string>();

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

  const addBeneficiaryRequestHandler = () => {
    const addBeneficiaryRequestModel = new AddBeneficiaryRequestModel(authUser);

    addBeneficiaryRequestModel.AccountNo = getFormattedAccountNumber(
      searchAccountState?.AccountNumber
    );
    addBeneficiaryRequestModel.AccountHolderName =
      searchBeneficiaryResponseData?.AccountHolderInfo[0]?.FullName!;

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

  useEffect(() => {
    getBeneficiariesRequestHandler();
  }, [getBeneficialResponseStatus]);

  return (
    <div className="">
      <LoaderDialogue
        isLoading={
          getBeneficialResponseDataLoading ||
          getBeneficialResponseDataLoading ||
          removeBeneficiaryResponseDataLoading ||
          searchBeneficiaryResponseDataLoading ||
          addBeneficiaryResponseDataLoading
        }
      />
      {/* Begin remove Beneficial success dialog */}
      <SuccessDialogue
        isDialogueOpen={
          removeBeneficiaryResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setRemoveBeneficiaryResponseStatus(null);
          getBeneficiariesRequestHandler();
        }}
      >
        {removeBeneficiaryResponseData}
      </SuccessDialogue>
      {/* End remove Beneficial success dialog */}

      {/* Begin Submit Beneficiary success dialog */}
      <SuccessDialogue
        isDialogueOpen={
          addBeneficiaryResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setAddBeneficiaryResponseStatus(null);
          getBeneficiariesRequestHandler();
        }}
      >
        {addBeneficiaryResponseData}
      </SuccessDialogue>
      {/* End add Beneficiary success dialog */}

      {/* Begin Submit Beneficiary Failed dialog */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          addBeneficiaryResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setAddBeneficiaryResponseStatus(null);
        }}
      >
        {addBeneficiaryResponseMessage}
      </FailedDialogue>
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
      {/* End Submit Beneficiary Failed dialog */}

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
                  removeBeneficiaryRequestHandler(removeBeneficiaryAccountName);
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
            className=" px-8 py-6 md:px-14"
            style={{ maxHeight: window.innerHeight - 380 }}
          >
            <p className="text-center text-lg font-semibold">
              {`Do you want to remove Mr/Ms ${RemoveBeneBeneficiaryName}`} ?
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
                  !searchBeneficiaryResponseData?.AccountHolderInfo[0]?.FullName
                }
                onClick={() => {
                  addBeneficiaryRequestHandler();
                  setSearchBeneficiaryResponseData(null);
                  clearSearchAccountState();
                }}
                styleClass="md:w-2/5 w-full rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
              ></MyButton>
            </div>
          }
          onCancel={() => {
            setBeneficiaryDialogueOpen(false);
          }}
        >
          <div
            className="px-8 py-6 md:px-14"
            style={{ maxHeight: window.innerHeight - 380 }}
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
                    {getBeneficialResponseData?.map((element, index) => (
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
                                updateParentPageState(
                                  'SearchAccount',
                                  element?.AccountNo
                                );
                                getCollectionAccounts(element?.AccountNo);
                                setBeneficiaryDialogueOpen(false);
                              }}
                            >
                              <i className="fa-solid fa-check"></i>
                            </button>
                            <button
                              onClick={() => {
                                // removeBeneficiaryHandler(element.AccountNo);
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
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <AddBeneficiary
              searchAccountState={searchAccountState}
              clearSearchAccountState={clearSearchAccountState}
              onSearchTextChange={updateSearchTextRequestState}
              searchBeneficiaryHandler={searchBeneficiaryRequestHandler}
              setSearchBeneficiaryResponseData={
                setSearchBeneficiaryResponseData
              }
              searchBeneficiaryRequestData={searchBeneficiaryResponseData}
              addBeneficiaryHandler={addBeneficiaryRequestHandler}
            />
          </div>
        </MyDialogueView>
      </MyModal>
      {/* End Beneficiaries View open dialog */}

      <motion.div
        variants={MyVariants.SlideInFromRight}
        transition={MyTransition.Spring.Low}
        className="rounded-md bg-surface p-7"
      >
        {/* <motion.h2 className="text-center text-lg font-bold uppercase">
          Deposit for
        </motion.h2> */}
        <div className="my-3 flex items-center justify-center">
          <MyButton
            label="Existing Beneficiary"
            name="Beneficiary"
            type="button"
            disabled={false}
            styleClass="w-full rounded bg-primary py-2  text-sm font-bold uppercase text-onPrimaryVariant shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:text-base"
            onClick={() => {
              setBeneficiaryDialogueOpen(true);
              updateParentPageState('SearchAccount', '');
            }}
          ></MyButton>
        </div>
        <div>
          <ul className="mt-6 space-y-6 text-justify">
            <li className="w-full">
              <div className="relative w-full">
                <MySearchInput
                  name="Account Number"
                  label="Account Number"
                  id="Account Number"
                  disabled={false}
                  value={parentPageState?.SearchAccount}
                  error={parentPageState?.Errors?.SearchAccount}
                  onChange={(event) => {
                    updateParentPageState('SearchAccount', event.target.value);
                  }}
                  onSubmit={() => {
                    getCollectionAccounts(parentPageState?.SearchAccount);
                  }}
                  leftIcon={<i className="fa-solid fa-magnifying-glass"></i>}
                />
              </div>
            </li>

            <li className="w-full">
              <MyTextInput
                label="Account Holder"
                name="AccountHolder"
                inputType="text"
                disabled={true}
                required={false}
                value={
                  collectionAccountsResponseData?.AccountHolderInfo[0]
                    ?.FullName!
                }
                leftIcon={<i className="fa-solid fa-circle-user"></i>}
                onChangeHandler={function (
                  event: ChangeEvent<HTMLInputElement>
                ): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AccountHolderAndBeneficiaryView;

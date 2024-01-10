import { BeneficiaryModel } from 'authenticated_pages/info/beneficiary/model/data/BeneficiaryModel';
import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { getFormattedAccountNumber } from 'global_shared/utils/textUtils';
import { useContext, useEffect } from 'react';
import AddBeneficiary from './components/AddBeneficiary';
import Beneficiaries from './components/Beneficiaries';
import useSearchAccountState from './hook/useSearchAccountState';
import { AddBeneficiaryRequestModel } from './model/request/AddBeneficiaryRequestModel';
import { RemoveBeneficiaryRequestModel } from './model/request/RemoveBeneficiaryRequestModel';
import { SearchBeneficiaryRequestModel } from './model/request/SearchBeneficiaryRequestModel';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  03 July 2023
 *========================================================================**/
const BeneficiaryPage = () => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const {
    updateSearchTextRequestState,
    searchAccountState,
    clearSearchAccountState,
  } = useSearchAccountState();

  const {
    loading: accountBeneficiariesResponseDataLoading,
    data: accountBeneficiariesResponseData,
    message: accountBeneficiariesResponseMessage,
    status: accountBeneficiariesResponseStatus,
    setStatus: setAccountBeneficiariesResponseStatus,
    executeCommand: accountBeneficiariesRequestCommand,
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
    executeCommand: addBeneficiaryRequestCommand,
  } = useCommand<string | null>();

  const {
    loading: removeBeneficiaryResponseDataLoading,
    data: removeBeneficiaryResponseData,
    message: removeBeneficiaryResponseMessage,
    status: removeBeneficiaryResponseStatus,
    setStatus: setRemoveBeneficiaryResponseStatus,
    executeCommand: removeBeneficiaryRequestCommand,
  } = useCommand<string | null>();

  const getBeneficiariesRequestModel = new BaseRequestModel(authUser);

  const getBeneficiariesRequestHandler = (
    getBeneficiariesRequestModel: object
  ) => {
    accountBeneficiariesRequestCommand(
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

  useEffect(() => {
    getBeneficiariesRequestHandler(getBeneficiariesRequestModel);
  }, [addBeneficiaryResponseStatus, removeBeneficiaryResponseStatus]);

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

  const addBeneficiaryHandler = () => {
    const addBeneficiaryRequestModel = new AddBeneficiaryRequestModel(authUser);
    if (searchBeneficiaryResponseData) {
      addBeneficiaryRequestModel.AccountNo = getFormattedAccountNumber(
        searchAccountState?.AccountNumber
      );
      addBeneficiaryRequestModel.AccountHolderName =
        searchBeneficiaryResponseData?.AccountHolderInfo[0]?.FullName;
    }

    addBeneficiaryRequestCommand(
      process.env.REACT_APP_BASE_URL + '/beneficiaries_V1/addBeneficiary',
      JSON.stringify(addBeneficiaryRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    setSearchBeneficiaryResponseData(null);
  };

  const removeBeneficiaryHandler = (accountNo: string) => {
    const removeBeneficiaryRequestModel = new RemoveBeneficiaryRequestModel(
      authUser
    );

    removeBeneficiaryRequestModel.AccountNo =
      getFormattedAccountNumber(accountNo);
    if (searchBeneficiaryResponseData !== null) {
      removeBeneficiaryRequestModel.AccountHolderName =
        searchBeneficiaryResponseData?.AccountHolderInfo[0]?.FullName;
    }

    removeBeneficiaryRequestCommand(
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

  return (
    <>
      <LoaderDialogue
        isLoading={
          accountBeneficiariesResponseDataLoading ||
          searchBeneficiaryResponseDataLoading ||
          addBeneficiaryResponseDataLoading ||
          removeBeneficiaryResponseDataLoading
        }
      />

      {/* Start remove beneficiary success dialogue */}
      <SuccessDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          removeBeneficiaryResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setRemoveBeneficiaryResponseStatus(null);
        }}
      >
        {removeBeneficiaryResponseData}
      </SuccessDialogue>
      {/* End remove beneficiary success dialogue */}

      {/* Start search beneficiary failure dialogue */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          searchBeneficiaryResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="Ok"
        onCloseButtonClick={() => {
          setSearchBeneficiaryResponseStatus(null);
        }}
      >
        {searchBeneficiaryResponseMessage}
      </FailedDialogue>
      {/* End search beneficiary failure dialogue */}

      {/* Start add beneficiary success dialogue */}
      <SuccessDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          addBeneficiaryResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setAddBeneficiaryResponseStatus(null);
        }}
      >
        {addBeneficiaryResponseData}
      </SuccessDialogue>
      {/* End add beneficiary success dialogue */}

      {/* Start add beneficiary failure dialogue */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          addBeneficiaryResponseStatus === 'failed' ? true : false
        }
        onOkButtonClick={() => {
          setAddBeneficiaryResponseStatus(null);
        }}
      >
        {addBeneficiaryResponseMessage}
      </FailedDialogue>
      {/* End add beneficiary failure dialogue */}

      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
        className="grid grid-cols-1 gap-5 lg:grid-cols-2"
      >
        <motion.div
          variants={MyVariants.SlideInFromLeft}
          transition={MyTransition.Spring.Low}
          className="rounded-md bg-surface px-2 shadow"
        >
          <Beneficiaries
            accountBeneficiariesRequestData={accountBeneficiariesResponseData}
            removeBeneficiaryHandler={removeBeneficiaryHandler}
          />
        </motion.div>

        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="flex items-center rounded-md bg-surface px-6 shadow"
        >
          <AddBeneficiary
            searchAccountState={searchAccountState}
            clearSearchAccountState={clearSearchAccountState}
            onSearchTextChange={updateSearchTextRequestState}
            searchBeneficiaryHandler={searchBeneficiaryRequestHandler}
            setSearchBeneficiaryResponseData={setSearchBeneficiaryResponseData}
            searchBeneficiaryRequestData={searchBeneficiaryResponseData}
            addBeneficiaryHandler={addBeneficiaryHandler}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default BeneficiaryPage;

import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
import { animate, motion } from 'framer-motion';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect } from 'react';
import { RelationshipTypeModel } from '../shared/model/data/RelationshipTypeModel';
import AddFamilyRelative from './components/AddFamilyRelative';
import FamilyRelatives from './components/FamilyRelatives';
import useFamilyAndRelativeRequestState from './hooks/useFamilyAndRelativeRequestState';
import { FamilyAndRelativeViewModel } from './model/data/FamilyAndRelativeViewModel';
import { AddFamilyRequestModel } from './model/request/AddFamilyRequestModel';
import { GetRelationshipTypesRequestModel } from './model/request/GetRelationshipTypesRequestModel';
import { SearchAccountHolderRequestModel } from './model/request/SearchAccountHolderRequestModel';
import { useNavigate } from 'react-router-dom';
import { Size } from 'global_shared/enum/Size';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import AddBeneficiary from '../beneficiary/components/AddBeneficiary';
import Beneficiaries from '../beneficiary/components/Beneficiaries';

function FamilyAndRelativesPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const navigate = useNavigate();
  const {
    familyAndRelativeRequestState,
    updateFamilyAndRelativeRequestState,
    setFamilyAndRelativeRequestState,
  } = useFamilyAndRelativeRequestState();

  const {
    loading: searchFamilyAndRelativeResponseDataLoading,
    data: searchFamilyAndRelativeResponseData,
    message: searchFamilyAndRelativeRequestMessage,
    status: searchFamilyAndRelativeResponseStatus,
    setStatus: setSearchFamilyAndRelativeResponseStatus,
    executeCommand: searchFamilyAndRelativeRequestExecuteCommand,
  } = useCommand<CollectionLedgersResponseModel | null>();

  const {
    loading: getRelationshipTypesResponseDataLoading,
    data: getRelationshipTypesResponseData,
    executeCommand: getRelationshipTypesRequestExecuteCommand,
  } = useCommand<RelationshipTypeModel[]>();

  console.log(getRelationshipTypesResponseData);

  const {
    loading: addFamilyAndRelativeResponseDataLoading,
    data: addFamilyAndRelativeResponseData,
    message: addFamilyAndRelativeResponseMessage,
    status: addFamilyAndRelativeResponseStatus,
    setStatus: setAddFamilyAndRelativeResponseStatus,
    executeCommand: addFamilyAndRelativeRequestExecuteCommand,
  } = useCommand<string | null>();

  const {
    loading: getFamilyAndRelativesResponseDataLoading,
    data: getFamilyAndRelativesResponseData,
    message: getFamilyAndRelativesResponseMessage,
    status: getFamilyAndRelativesResponseStatus,
    setStatus: setGetFamilyAndRelativesResponseStatus,
    executeCommand: getFamilyAndRelativesRequestCommand,
  } = useCommand<FamilyAndRelativeViewModel[]>();

  const addFamilyRequestModel = new BaseRequestModel(authUser);
  const getRelationshipTypesRequestModel = new GetRelationshipTypesRequestModel(
    authUser
  );

  useEffect(() => {
    getFamilyAndRelativesRequestCommand(
      process.env.REACT_APP_BASE_URL + '/info_V1/getFamilyAndRelatives',
      JSON.stringify(addFamilyRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    getRelationshipTypesRequestModel.Gender =
      searchFamilyAndRelativeResponseData?.AccountHolderInfo[0].Gender;

    getRelationshipTypesRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/info_V1/getRelationshipTypes',
      JSON.stringify(getRelationshipTypesRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [searchFamilyAndRelativeResponseData, addFamilyAndRelativeResponseStatus]);

  const searchFamilyAndRelativeHandler = () => {
    const searchAccountHolderRequestModel = new SearchAccountHolderRequestModel(
      authUser
    );
    searchAccountHolderRequestModel.SearchText =
      familyAndRelativeRequestState?.relativeSearch;

    searchFamilyAndRelativeRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/getCollectionAccount',
      JSON.stringify(searchAccountHolderRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const addFamilyAndRelativeHandler = () => {
    const addFamilyRequestModel = new AddFamilyRequestModel(authUser);
    if (searchFamilyAndRelativeResponseData !== null) {
      addFamilyRequestModel.ChildPersonId =
        searchFamilyAndRelativeResponseData.AccountHolderInfo[0]?.PersonId;
      addFamilyRequestModel.PersonId =
        searchFamilyAndRelativeResponseData.AccountHolderInfo[0]?.PersonId;
      addFamilyRequestModel.RelationTypeCode =
        familyAndRelativeRequestState.RelationTypeCode;
      addFamilyRequestModel.SearchText =
        familyAndRelativeRequestState?.relativeSearch;
    }

    addFamilyAndRelativeRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/info_V1/addFamilyOrRelative',
      JSON.stringify(addFamilyRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const clearAll = () => {
    setFamilyAndRelativeRequestState({
      RelationTypeCode: '',
      relativeSearch: '',
      RelationshipSupportingImage: '',
      Errors: {
        RelationTypeCode: '',
        RelationshipSupportingImage: '',
        relativeSearch: '',
      },
    });
  };

  return (
    <>
      <LoaderDialogue
        isLoading={
          getFamilyAndRelativesResponseDataLoading ||
          addFamilyAndRelativeResponseDataLoading ||
          searchFamilyAndRelativeResponseDataLoading ||
          getRelationshipTypesResponseDataLoading
        }
      />

      {/* Start search Family And Relative failed dialogue */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          searchFamilyAndRelativeResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="Ok"
        onCloseButtonClick={() => {
          setSearchFamilyAndRelativeResponseStatus(null);
        }}
      >
        {searchFamilyAndRelativeRequestMessage}
      </FailedDialogue>
      {/* End search Family And Relative failed dialogue */}

      {/* Start add Family And Relative success dialogue */}
      <SuccessDialogue
        isDialogueOpen={
          addFamilyAndRelativeResponseStatus === 'success' ? true : false
        }
        dialogueSize={Size.Small}
        onCloseButtonClick={() => {
          setAddFamilyAndRelativeResponseStatus(null);
          clearAll();
        }}
      >
        {addFamilyAndRelativeResponseData}
      </SuccessDialogue>
      {/* End add Family And Relative success dialogue */}

      {/* Start add Family And Relative failed dialogue */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          addFamilyAndRelativeResponseStatus === 'failed' ? true : false
        }
        // OkButtonText={'Retry'}
        // onOkButtonClick={() => {
        //   setAddFamilyAndRelativeResponseStatus(null);
        // }}
        cancelButtonText="Ok"
        onCloseButtonClick={() => {
          navigate('/info/family_and_relatives');
        }}
      >
        {addFamilyAndRelativeResponseMessage}
      </FailedDialogue>
      {/* End add Family And Relative failed dialogue */}

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
          <FamilyRelatives
            familyAndRelatives={getFamilyAndRelativesResponseData}
          />
        </motion.div>

        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="flex items-center rounded-md bg-surface px-6 shadow"
        >
          <AddFamilyRelative
            familyAndRelativeRequestState={familyAndRelativeRequestState}
            searchFamilyAndRelativeRequestData={
              searchFamilyAndRelativeResponseData
            }
            getRelationshipTypesRequestData={getRelationshipTypesResponseData}
            updateFamilyAndRelativeRequestState={
              updateFamilyAndRelativeRequestState
            }
            searchFamilyAndRelativeHandler={searchFamilyAndRelativeHandler}
            addFamilyAndRelativeHandler={addFamilyAndRelativeHandler}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default FamilyAndRelativesPage;

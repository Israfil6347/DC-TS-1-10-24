import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyModal from 'global_shared/components/MyModal';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { CRUDModes } from 'global_shared/data/CRUDModes';
import { paginationData } from 'global_shared/data/paginationData';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect, useState } from 'react';
import LeaveApplicationForm from '../shared/components/LeaveApplicationForm';
import { LeaveApplicationModel } from '../shared/model/data/LeaveApplicationModel';
import FallbackLeaveDetailsTableDataRow from './components/FallbackLeaveDetailsTableDataRow';
import FallbackLeaveDetailsTableHeader from './components/FallbackLeaveDetailsTableHeader';
import useFallbackApprovalRequestStates from './hooks/useFallbackApprovalRequestStates';

function FallbackApprovalPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [openLeaveApplicationForm, setOpenLeaveApplicationForm] =
    useState(false);
  const [crudMode, setCrudMode] = useState(CRUDModes.View);

  const {
    fallbackApprovalRequestStates,
    updateFallbackApprovalRequestStates,
    setFallbackApprovalRequestStates,
  } = useFallbackApprovalRequestStates();

  const {
    loading: fallbackResponseDataLoading,
    data: fallbackResponseData,
    message: fallbackResponseMessage,
    status: fallbackResponseStatus,
    setStatus: setFallbackResponseStatus,
    executeCommand: getFallbackRequestCommand,
  } = useCommand<LeaveApplicationModel[] | null>();

  useEffect(() => {
    const getFallbackRequestModel = new BaseRequestModel(authUser);

    getFallbackRequestCommand(
      process.env.REACT_APP_BASE_URL +
        '/professionals_v1/getFallbackLeaveApplications',
      JSON.stringify(getFallbackRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  const [paginationRequestObj, setPaginationRequestObj] = useState({
    ActiveStatus: -1,
    startRec: 0,
    pageSize: 10,
    searchText: null,
  });

  const paginationHandler = (fieldName: string, fieldValue: any) => {
    if (fieldName === 'pageSize') {
      setPaginationRequestObj((prevState) => {
        return {
          ...prevState,
          startRec: 0,
          [fieldName]: fieldValue,
        };
      });
    } else {
      setPaginationRequestObj((prevState) => {
        return {
          ...prevState,
          [fieldName]: fieldValue,
        };
      });
    }
  };

  // const index = () => {
  //   return paginationRequestObj.pageSize * paginationRequestObj.startRec;
  // };

  // const endIndex = () => {
  //   if (
  //     paginationRequestObj.startRec ===
  //     fallbackResponseData?.Paging?.LastPage - 1
  //   ) {
  //     var temp = fallbackResponseData?.Paging?.totalRecords - index();
  //     return index() + temp;
  //   } else {
  //     return index() + 10;
  //   }
  // };

  return (
    <div>
      <LoaderDialogue isLoading={fallbackResponseDataLoading} />

      <MyModal
        size={Size.Medium}
        show={openLeaveApplicationForm}
        onClose={() => setOpenLeaveApplicationForm(false)}
      >
        <LeaveApplicationForm
          title={
            crudMode === CRUDModes.View
              ? 'View Leave Details'
              : 'Fallback Approval'
          }
          onClose={() => setOpenLeaveApplicationForm(false)}
          leaveApplicationStates={fallbackApprovalRequestStates}
          setLeaveApplicationStates={setFallbackApprovalRequestStates}
          updateLeaveApplicationState={updateFallbackApprovalRequestStates}
          mode={crudMode}
        />
      </MyModal>

      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
        className="bg-surface"
      >
        <motion.section
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="flex flex-col-reverse items-start gap-6 text-justify md:flex-row"
        >
          <div className="w-full">
            <div className="">
              <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
                <div className="animate-backInRight text-center">
                  <h1 className=" py-5 text-2xl font-extrabold">
                    Fallback Requests
                  </h1>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-500">
                      <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                        <FallbackLeaveDetailsTableHeader />
                      </thead>
                      <tbody>
                        {fallbackResponseData !== null
                          ? fallbackResponseData?.map((leaveDetails, index) => (
                              <FallbackLeaveDetailsTableDataRow
                                key={leaveDetails?.LeaveApplicationId}
                                leaveDetails={leaveDetails}
                                index={index + 1}
                                setFallbackApprovalStates={
                                  setFallbackApprovalRequestStates
                                }
                                setOpenLeaveApplicationForm={
                                  setOpenLeaveApplicationForm
                                }
                                setMode={setCrudMode}
                              />
                            ))
                          : ''}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="sticky bottom-0 flex grow flex-col items-center justify-between gap-2 bg-surface p-2 text-onSurface md:flex-row"
                  id="table-footer"
                >
                  <div className="mt-2 flex gap-2">
                    <label>Show</label>
                    <MyDropdown
                      name="pageSize"
                      value={paginationRequestObj?.pageSize}
                      required={false}
                      dropDownData={paginationData}
                      onChange={(event) => {
                        paginationHandler(
                          event.target.name,
                          event.target.value
                        );
                      }}
                      label={''}
                      leftIcon={<i className="fa-solid fa-list-ol"></i>}
                    />

                    <label>entries</label>
                  </div>
                  {/* <div>{`Showing ${index()} to ${endIndex()} of ${
                    fallbackResponseData?.Paging?.totalRecords
                  } entries`}</div>
                  <div className="whitespace-nowrap text-right">
                    <Pagination
                      count={fallbackResponseData?.Paging?.LastPage}
                      variant="outlined"
                      shape="rounded"
                      defaultPage={1}
                      siblingCount={0}
                      onChange={(e, value) => {
                        paginationHandler("startRec", value - 1);
                      }}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default FallbackApprovalPage;

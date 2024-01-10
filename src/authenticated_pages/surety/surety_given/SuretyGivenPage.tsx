import { SuretyGivenModel } from 'authenticated_pages/surety/shared/model/data/SuretyGivenModel';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyCard from 'global_shared/components/MyCard';
import MyModal from 'global_shared/components/MyModal';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { logoIcon } from 'global_shared/data/base64Icons';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { financialYearBeginDate } from 'global_shared/utils/dateUtils';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import { default as moment } from 'moment';
import { useContext, useEffect, useState } from 'react';
import { SuretyGivenRequestModel } from './model/request/SuretyGivenRequestModel';

function SuretyGivenPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [isSuretyDetailsDialogOpen, setSuretyDialogueOpen] = useState(false);
  const [suretyDetails, setSuretyDetails] = useState<SuretyGivenModel | null>(
    null
  );

  const {
    loading: givenSuretiesResponseDataLoading,
    data: givenSuretiesResponseData,
    executeCommand: suretyRequestExecuteCommand,
  } = useCommand<SuretyGivenModel[] | null>();

  const suretyGivenRequestModel = new SuretyGivenRequestModel(authUser);
  suretyGivenRequestModel.StartDate = financialYearBeginDate();
  suretyGivenRequestModel.EndDate = moment(new Date()).format();

  useEffect(() => {
    suretyRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/sureties_v1/getLoanSuretyGiven',
      JSON.stringify(suretyGivenRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  return (
    <>
      <LoaderDialogue isLoading={givenSuretiesResponseDataLoading} />

      {/* Begin surety details dialogue */}
      <MyModal
        show={isSuretyDetailsDialogOpen}
        size={Size.Small}
        onClose={() => {
          setSuretyDialogueOpen(false);
        }}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="w-full bg-background py-6">
              <div className="flex w-full flex-col items-center gap-3">
                <img src={logoIcon} alt="" className="w-28" />
                <h3 className="text-xl font-bold uppercase text-primary">
                  Surety Details
                </h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className="flex w-full items-center justify-center gap-4 bg-background p-5">
              <button
                className="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                onClick={() => {
                  setSuretyDialogueOpen(false);
                }}
              >
                OK
              </button>
            </div>
          }
          onCancel={() => {
            setSuretyDialogueOpen(false);
          }}
        >
          <motion.div
            initial="initial"
            animate="animate"
            transition={MyTransition.StaggerChildren.Fast}
            className="scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-200 w-full overflow-hidden overflow-y-scroll rounded-lg px-8  py-6  md:mt-2 md:px-14"
            style={{ maxHeight: window.innerHeight - 400 }}
          >
            <div className="content bg-surface p-4 text-onSurface md:mt-5">
              <ul className="divide-y overflow-hidden text-justify">
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Mobile Phone No</div>
                  <div className="md:w-2/5">
                    {suretyDetails?.MemberMobileNo}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Account No</div>
                  <div className="md:w-2/5">{suretyDetails?.MemberAccount}</div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Loan No</div>
                  <div className="md:w-2/5">{suretyDetails?.LoanId}</div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Loan Amount</div>
                  <div className="md:w-2/5">
                    {formatToTkSymbolMoney(suretyDetails?.LoanAmount!)}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Loan Balance</div>
                  <div className="w-full md:w-2/5">
                    {formatToTkSymbolMoney(suretyDetails?.LoanBalance!)}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Valid Till</div>
                  <div className="w-full md:w-2/5">
                    {moment(suretyDetails?.StartDate).format('DD-MMM-YYYY')}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Surety Amount</div>
                  <div className="w-full md:w-2/5">
                    {formatToTkSymbolMoney(suretyDetails?.SuretyAmount!)}
                  </div>
                </li>

                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Last Paid </div>
                  <div className="w-full md:w-2/5">
                    {moment(suretyDetails?.LastPaidDate).format('DD-MMM-YYYY')}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Surety Status</div>
                  <div className="w-full md:w-2/5">
                    {suretyDetails?.SurityStatus}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">
                    Surety Release Amount
                  </div>
                  <div className="w-full md:w-2/5">
                    {formatToTkSymbolMoney(suretyDetails?.SuretyRelaseAmount!)}
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </MyDialogueView>
      </MyModal>
      {/* End surety details dialogue */}

      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        {givenSuretiesResponseData?.length === 0 ? (
          <div className="w-full">
            <div className="">
              <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
                <div className="animate-backInRight py-20 text-center">
                  <motion.h1
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className=" text-5xl font-extrabold"
                  >
                    Surety
                  </motion.h1>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    No surety found
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <section className="flex w-full flex-col-reverse items-start gap-6 text-justify md:flex-col">
            <div className="w-full">
              <motion.div
                initial="initial"
                animate="animate"
                transition={MyTransition.StaggerChildren.Fast}
                className="grid gap-3 text-onSurface md:grid-cols-2 md:gap-6 xl:grid-cols-3"
              >
                {givenSuretiesResponseData?.map((suretyDetailsItem, index) => (
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={{
                      ...MyTransition.Spring.Low,
                      delay: 0.1 * index,
                    }}
                    key={index}
                    onClick={() => {
                      setSuretyDetails(suretyDetailsItem);
                      setSuretyDialogueOpen(true);
                    }}
                  >
                    <MyCard
                      rounded={RoundedClass.Medium}
                      shadow={Size.Small}
                      bgColor={`bg-surface`}
                      minimumHeight={80}
                      borderColor={`${
                        suretyDetailsItem.DefaulterStatus
                          ? 'border border-2 border-error'
                          : ''
                      } `}
                    >
                      <div className="flex cursor-pointer items-center  p-4">
                        {suretyDetailsItem.DefaulterStatus ? (
                          <i className="fa-solid fa-user-xmark text-3xl text-error"></i>
                        ) : (
                          <i className="fa-solid fa-user-check text-3xl text-primary"></i>
                        )}

                        <div>
                          <span className="ml-2 block font-semibold">
                            {suretyDetailsItem.MemberName}
                          </span>
                          <span className="ml-2 block text-xs">
                            Loan No : {suretyDetailsItem.LoanId}
                          </span>
                        </div>
                      </div>
                    </MyCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}
      </motion.div>
    </>
  );
}

export default SuretyGivenPage;

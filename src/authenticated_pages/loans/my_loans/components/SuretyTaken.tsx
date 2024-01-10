import { SuretyModel } from 'authenticated_pages/surety/shared/model/data/SuretyModel';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
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
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SuretyTakenRequestModel } from '../model/request/SuretyTakenRequestModel';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  06 July 2023
 *========================================================================**/

function SuretyTaken() {
  const param = useParams();
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [SuretyDetails, setSuretyDetails] = useState<SuretyModel | null>(null);
  const [SuretyDetailsShow, setSuretyDetailsShow] = useState<boolean>(false);

  const {
    loading: loanSuretyTakenResponseDataLoading,
    data: loanSuretyTakenResponseData,
    error: loanSuretyTakenResponseDataError,
    status: loanSuretyTakenResponseDataStatus,
    setStatus: setLoanSuretyTakenResponseStatus,
    executeCommand: loanSuretyTakenRequestCommand,
  } = useCommand<SuretyModel[] | null>();

  const suretyTakenRequestModel = new SuretyTakenRequestModel(authUser);
  suretyTakenRequestModel.LoanId = param?.id!;

  useEffect(() => {
    loanSuretyTakenRequestCommand(
      process.env.REACT_APP_BASE_URL + '/loans_v1/getLoanSureties',
      JSON.stringify(suretyTakenRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  return (
    <div>
      <LoaderDialogue isLoading={loanSuretyTakenResponseDataLoading} />

      <section className="flex w-full flex-col-reverse items-start gap-6 text-justify md:flex-col ">
        <div className="content w-full text-left  md:text-justify lg:text-justify">
          <div className="">
            <motion.div
              initial="initial"
              animate="animate"
              transition={MyTransition.StaggerChildren.Fast}
              className="grid-col-1 grid w-full gap-3 text-onSurface md:grid-cols-2 md:gap-6 xl:grid-cols-3"
            >
              {loanSuretyTakenResponseData?.map((suretyDetailsItem, index) => (
                <motion.div
                  variants={MyVariants.SlideInFromRight}
                  transition={{
                    ...MyTransition.Spring.Low,
                    delay: 0.1 * index,
                  }}
                  key={index}
                  onClick={() => {
                    setSuretyDetails(suretyDetailsItem);
                    setSuretyDetailsShow(true);
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
                    <div className="flex cursor-pointer items-center gap-4 px-8">
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
                          From A/C: {suretyDetailsItem.AccountNo}
                        </span>
                      </div>
                    </div>
                  </MyCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <MyModal
        size={Size.Small}
        show={SuretyDetailsShow}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="flex w-full flex-col items-center bg-background p-4">
              <img src={logoIcon} alt="" className="w-28" />
              <h3 className="font-bold text-primary">Surety Details</h3>
            </div>
          }
          dialogueFooter={
            <div className="flex  w-full items-center justify-center gap-4 bg-background p-4">
              <MyButton
                onClick={() => {
                  setSuretyDetailsShow(false);
                }}
                type="button"
                label="Close"
                styleClass="w-2/5 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                name={''}
              />
            </div>
          }
          onCancel={() => setSuretyDetailsShow(false)}
        >
          <div
            className="scrollbar-thin scrollbar-track-gray-300  scrollbar-thumb-gray-200 w-full overflow-hidden overflow-y-scroll rounded-lg  px-8  md:mt-2 md:px-14"
            style={{ maxHeight: window.innerHeight - 400 }}
          >
            <div className="content bg-surface p-4 text-onSurface md:mt-5">
              <ul className="divide-y overflow-hidden text-justify">
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Account No</div>
                  <div className="md:w-2/5">{SuretyDetails?.AccountNo}</div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Collateral Type</div>
                  <div className="md:w-2/5">
                    {SuretyDetails?.CollateralName}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Phone No</div>
                  <div className="md:w-2/5">
                    {SuretyDetails?.MemberMobileNo}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Account Holder</div>
                  <div className="md:w-2/5">{SuretyDetails?.MemberName}</div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Surety Amount</div>
                  <div className="w-full md:w-2/5">
                    {formatToTkSymbolMoney(SuretyDetails?.SuretyAmount!)}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </MyDialogueView>
      </MyModal>
    </div>
  );
}

export default SuretyTaken;

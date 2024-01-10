import bKash from 'assets/icons/bKash.png';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyCard from 'global_shared/components/MyCard';
import MyModal from 'global_shared/components/MyModal';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { logoIcon } from 'global_shared/data/base64Icons';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import { default as moment } from 'moment';
import { useContext, useEffect, useState } from 'react';

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

function DepositRequestStatusPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [selectedRequestObj, setSelectedRequestObj] = useState<any>(null);
  const [OpenDepositRequestStatus, setOpenDepositRequestStatus] =
    useState(false);

  const {
    loading: depositLaterRequestsResponseDataLoading,
    data: depositLaterRequestsResponseData,
    executeCommand: depositLaterRequestsCommand,
  } = useCommand<any>();

  useEffect(() => {
    var baseRequestObj = new BaseRequestModel(authUser);

    var mainObj = {
      ...baseRequestObj,
      TransactionType: 'DepositRequest',
    };

    depositLaterRequestsCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/getDepositLaterRequests',
      JSON.stringify(mainObj),
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
      <MyModal
        size={Size.Small}
        show={OpenDepositRequestStatus}
        onClose={() => setOpenDepositRequestStatus(false)}
      >
        <MyDialogueView
          dialogueHeader={
            <div className=" bg-background p-6">
              <div className="hover:animate-swing flex w-full flex-col items-center hover:cursor-pointer">
                <img src={logoIcon} alt="" className="w-28" />
                <h3 className="font-bold text-primary">Request Status</h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className="flex w-full items-center justify-center gap-4 bg-background p-6">
              <button
                className="w-2/5 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                // @click="displayRequestStatus=false"
                onClick={() => {
                  setOpenDepositRequestStatus(false);
                }}
              >
                OK
              </button>
            </div>
          }
          onCancel={() => setOpenDepositRequestStatus(false)}
        >
          <div
            className="scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-200  w-full overflow-y-scroll rounded-lg px-8 py-6 md:px-14"
            style={{ maxHeight: window.innerHeight - 380 }}
          >
            <div className="content mt-5 bg-surface text-onSurface">
              <ul className="divide-y overflow-hidden text-justify">
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="flex font-bold md:w-3/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6
                         w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="ml-2">Request By</span>
                  </div>
                  <div className="text-left md:w-2/5">
                    {depositLaterRequestsResponseData?.[0]?.AccHolder}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="flex font-bold md:w-3/5">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    <span className="ml-2">Request Date</span>
                  </div>
                  <div className="w-2/5">
                    {moment(selectedRequestObj?.RequestDate).format(
                      'DD-MMM-YYYY'
                    )}
                  </div>
                </li>
                <li className="mt-5 w-full items-center bg-background p-2 transition-colors duration-300 md:flex">
                  <div className="w-full text-center font-bold">
                    Request Details
                  </div>
                </li>
              </ul>
            </div>
            <table className="table w-full">
              <thead className="">
                <tr className="sticky -top-0 hidden w-full bg-surface text-sm uppercase text-onSurface shadow-sm md:table-row">
                  <th className="border border-gray-200 p-2 text-left">
                    <p className="p-2 md:p-0">Account</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left">
                    <p className="p-2 md:p-0">Particulars</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left">
                    <p className="p-2 md:p-0">Amount</p>
                  </th>
                </tr>
              </thead>
              <tbody className="flex-1 bg-backgroundVariant sm:flex-none">
                {selectedRequestObj?.Details?.map((data: any) => (
                  <tr className="flex w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50 md:table-row">
                    <td className="border border-gray-200 p-2 text-left">
                      <label className="p-2 md:hidden md:p-0" htmlFor="">
                        Account
                      </label>
                      <p className="p-2 font-semibold md:p-0 md:font-normal">
                        {data?.TransferToAcc}
                      </p>
                    </td>
                    <td className="border border-gray-200 p-2 text-left">
                      <label className="p-2 md:hidden md:p-0" htmlFor="">
                        Particulars
                      </label>
                      <p className="p-2 font-semibold md:p-0 md:font-normal">
                        {data?.Particulars}
                      </p>
                    </td>
                    <td className="border border-gray-200 p-2 text-left">
                      <label className="p-2 md:hidden md:p-0" htmlFor="">
                        Amount
                      </label>
                      <p className="p-2 font-semibold md:p-0 md:font-normal">
                        {formatToTkSymbolMoney(data?.Amount)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MyDialogueView>
      </MyModal>
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        {depositLaterRequestsResponseData?.length === 0 ? (
          <section className="flex flex-col-reverse items-start gap-6 bg-surface text-justify md:flex-row">
            <div className="w-full">
              <div className="">
                <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
                  <div className="animate-backInRight py-20 text-center">
                    <motion.h1
                      variants={MyVariants.SlideInFromLeft}
                      transition={MyTransition.Spring.Low}
                      className=" text-3xl font-extrabold"
                    >
                      Deposit Request Status
                    </motion.h1>
                    <motion.p
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                    >
                      You do not have any deposit request
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div>
            <motion.div
              initial="initial"
              animate="animate"
              transition={MyTransition.StaggerChildren.Fast}
              className="grid gap-3 text-onSurface md:grid-cols-2 md:gap-6 xl:grid-cols-2"
            >
              {depositLaterRequestsResponseData?.map(
                (obj: any, key: number) => (
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={{
                      ...MyTransition.Spring.Low,
                      delay: 0.1 * key,
                    }}
                    key={key}
                    onClick={() => {
                      setOpenDepositRequestStatus(true);
                      setSelectedRequestObj(obj);
                    }}
                  >
                    <MyCard rounded={RoundedClass.Medium} shadow={Size.Small}>
                      <div className="w-full  p-4">
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-3">
                            {obj?.TransactionMethod.includes(
                              'Savings Account'
                            ) ? (
                              <img src={logoIcon} alt="" className="h-6 w-6" />
                            ) : obj?.TransactionMethod.includes('Bank') ? (
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
                                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                                ></path>
                              </svg>
                            ) : obj?.TransactionMethod.includes('Bkash') ? (
                              <img src={bKash} alt="" className="h-5 w-5" />
                            ) : (
                              ''
                            )}
                            <div className="">
                              <div className="font-semibold">
                                Deposit Request
                              </div>

                              <div className="flex text-sm font-semibold">
                                <h2>Recipient Account number:</h2>
                                <span className="pl-1">
                                  {obj?.Details?.[0]?.TransferToAcc}
                                </span>
                              </div>
                              <div className="flex text-sm font-semibold">
                                <h2>Request Date: </h2>
                                <span className="pl-1">
                                  {moment(obj?.RequestDate).format(
                                    'DD-MMM-YYYY'
                                  )}
                                </span>
                              </div>
                              <div className="flex text-sm font-semibold">
                                <h2>Deposit Date: </h2>
                                <span className="pl-1">
                                  {moment(obj?.DepositDate).format(
                                    'DD-MMM-YYYY'
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="font-semibold lg:text-xl">
                            <motion.h2 className="text-lg font-bold">
                              {obj?.Status}
                            </motion.h2>
                          </div>
                        </div>
                      </div>
                    </MyCard>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default DepositRequestStatusPage;

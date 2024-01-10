import { EReceiptModel } from 'authenticated_pages/shared/model/data/EReceiptModel';
import { VoucherDetailsModel } from 'authenticated_pages/shared/model/data/VoucherDetailsModel';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import DateSelect from 'global_shared/components/DateSelect';
import MyCard from 'global_shared/components/MyCard';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import { default as moment } from 'moment';
import { useContext, useEffect } from 'react';
import ReceiptInfoDialogue from '../shared/dialogues/ReceiptInfoDialogue';
import useEReceiptRequestState from './hooks/useEReceiptRequestState';
import { EReceiptRequestModel } from './model/request/EReceiptRequestModel';
import { VoucherDetailsRequestModel } from './model/request/VoucherDetailsRequestModel';

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

const EReceiptPage = () => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const { eReceiptRequestState, updateEReceiptRequestState } =
    useEReceiptRequestState();

  const {
    loading: eReceiptsResponseDataLoading,
    data: eReceiptsResponseData,
    status: eReceiptsResponseStatus,
    setStatus: setEReceiptsResponseStatus,
    executeCommand: eReceiptsRequestExecuteCommand,
  } = useCommand<EReceiptModel[] | null>();

  const {
    loading: voucherDetailsRequestDataLoading,
    data: voucherDetailsResponseData,
    status: voucherDetailsResponseStatus,
    setStatus: setVoucherDetailsResponseStatus,
    executeCommand: voucherDetailsRequestExecutedCommand,
  } = useCommand<VoucherDetailsModel[] | null>();

  useEffect(() => {
    handleApiCall();
  }, []);

  const handleApiCall = () => {
    const getReceiptObj = new EReceiptRequestModel(authUser);
    getReceiptObj.fromDate = eReceiptRequestState.FromDate;
    getReceiptObj.toDate = eReceiptRequestState.ToDate;

    eReceiptsRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/getEReceipts',
      JSON.stringify(getReceiptObj),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const handleGetVoucherDetails = (voucherId: number) => {
    const eReceiptRequestModel = new VoucherDetailsRequestModel(authUser);
    eReceiptRequestModel.VoucherId = voucherId;

    voucherDetailsRequestExecutedCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/getVoucherDetails',
      JSON.stringify(eReceiptRequestModel),
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
          voucherDetailsRequestDataLoading || eReceiptsResponseDataLoading
        }
      />
      <ReceiptInfoDialogue
        isDialogueOpen={
          voucherDetailsResponseStatus === 'success' ? true : false
        }
        message={voucherDetailsResponseData}
        onClose={() => setVoucherDetailsResponseStatus(null)}
      />

      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
        className="h-full w-full rounded-md  "
      >
        <div className="mb-5 bg-white p-5">
          <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <DateSelect
              label="From Date"
              value={eReceiptRequestState.FromDate}
              isDisableFuture={true}
              onChange={(fieldName, fieldValue) => {
                updateEReceiptRequestState(
                  fieldName,
                  dayjs(fieldValue).format('YYYY-MM-DD')
                );
              }}
              name={'FromDate'}
            />
            <DateSelect
              label="To Date"
              value={eReceiptRequestState.ToDate}
              isDisableFuture={true}
              onChange={(fieldName, fieldValue) => {
                updateEReceiptRequestState(
                  fieldName,
                  dayjs(fieldValue).format('YYYY-MM-DD')
                );
              }}
              name={'ToDate'}
            />

            <button
              className="w-1/2 rounded bg-primary py-2 font-semibold uppercase text-onPrimary transition-all duration-300 hover:scale-105 disabled:bg-gray-400 "
              onClick={() => handleApiCall()}
              disabled={
                eReceiptRequestState.Errors.FromDate !== '' ||
                eReceiptRequestState.Errors.ToDate !== ''
              }
            >
              Get Receipt
            </button>
          </div>
        </div>

        {eReceiptsResponseData?.length === 0 && (
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
                      eReceipt
                    </motion.h1>
                    <motion.p
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                    >
                      eReceipt not found.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <div>
          <motion.div
            initial="initial"
            animate="animate"
            transition={MyTransition.StaggerChildren.Fast}
            className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2"
          >
            {eReceiptsResponseData?.map((receipt, index) => (
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={{ ...MyTransition.Spring.Low, delay: 0.1 * index }}
                key={index}
                onClick={() => handleGetVoucherDetails(receipt.VoucherId)}
              >
                <MyCard rounded={RoundedClass.Medium} shadow={Size.Small}>
                  <div className="w-full  p-4">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-file-invoice-dollar text-5xl"></i>
                        <div className="">
                          <div className="font-semibold">
                            {receipt?.BranchName}
                          </div>
                          <div>{receipt?.Narration}</div>
                          <div className="text-xs">
                            {moment(receipt?.TxnDate).format('DD-MMM-YYYY')}
                          </div>
                        </div>
                      </div>
                      <div className="font-semibold lg:text-xl">
                        {formatToTkSymbolMoney(receipt?.TotalAmount)}
                      </div>
                    </div>
                  </div>
                </MyCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default EReceiptPage;

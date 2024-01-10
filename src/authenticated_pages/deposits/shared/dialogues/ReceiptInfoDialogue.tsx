import { PDFDownloadLink } from '@react-pdf/renderer';
import { VoucherDetailsModel } from 'authenticated_pages/shared/model/data/VoucherDetailsModel';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import {
  NumberToWords,
  capitalizeAllWords,
} from 'global_shared/utils/NumberToWords';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import moment from 'moment';
import ReceiptPDF from '../../e_receipt/ReceiptPDF';

interface ReceiptInfoDialogueProps {
  isDialogueOpen: boolean;
  onClose: () => void;
  message: VoucherDetailsModel[] | null;
}

const ReceiptInfoDialogue: React.FC<ReceiptInfoDialogueProps> = ({
  isDialogueOpen,
  onClose,
  message,
}) => {
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const dateString = currentDate.toISOString().split('T')[0];
    const timeString = currentDate.toLocaleTimeString().replace(/:/g, '-');
    const seconds = currentDate.getSeconds();
    return `${dateString}_${timeString}_${seconds}`;
  };

  const fileName = getCurrentDateTime();

  return (
    <>
      <MyModal size={Size.Small} show={isDialogueOpen} onClose={onClose}>
        <MyDialogueView onCancel={onClose}>
          <div
            className="px-8 py-6 md:px-14"
            // style={{ maxHeight: window.innerHeight - 380 }}
          >
            <div>
              <img src={logoIcon} className="mx-auto  w-20" alt="" />
              <p className="text-center text-xl font-bold ">
                The Christian Co-operative Credit Union Ltd., Dhaka
              </p>
              <p className="py-2 text-center text-lg font-bold">E-Receipt</p>
              <div className="flex justify-between text-sm font-bold">
                <p>Scroll No: {message?.[0]?.ScrollNo}</p>
                <p>Voucher No: {message?.[0]?.VoucherNo}</p>
              </div>
              <p className="py-2 text-center text-lg font-bold ">
                {capitalizeAllWords(message?.[0]?.FullName!)}
              </p>
              <p className="pb-3 text-center">
                {moment(message?.[0]?.TxnDate).format('DD-MMM-YYYY')}
              </p>
            </div>

            <div className="relative">
              <div className="max-h-[60vh] min-h-[20vh] overflow-y-auto ">
                {/* <div className="overflow-y-auto  h-[55vh] md:h-[45vh] lg:h-[40vh]"> */}
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                  <thead className="sticky top-0 bg-gray-50 text-xs uppercase text-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Account No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Particulars
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {message?.map(
                      (receipt, index) =>
                        receipt?.CrAmount !== 0 && (
                          <tr
                            key={index}
                            className="bg-white text-black hover:bg-gray-50"
                          >
                            <td className="px-6 py-4">{receipt?.AccountNo}</td>
                            <td className="px-6 py-4">{receipt?.Particular}</td>
                            <td className="px-6 py-4 text-right">
                              {formatToTkSymbolMoney(receipt?.CrAmount)}
                            </td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
                <div>
                  <div className="flex justify-end gap-5 font-bold">
                    <p>Total:</p>
                    <p className="pr-6">
                      {formatToTkSymbolMoney(
                        message?.[message.length - 1]?.DrAmount!
                      )}
                    </p>
                  </div>
                  <p className="py-3 text-center">
                    {NumberToWords(message?.[message.length - 1]?.DrAmount!)}
                  </p>
                  <p className="text-center text-lg font-bold">
                    Teller:{' '}
                    {capitalizeAllWords(
                      message?.[message.length - 1]?.Originator!
                    )}
                  </p>
                  <PDFDownloadLink
                    document={<ReceiptPDF message={message}></ReceiptPDF>}
                    fileName={`${fileName}.pdf`}
                  >
                    <div className="mt-3 flex justify-center">
                      <MyButton
                        styleClass="rounded bg-primary p-2 font-semibold text-onPrimary transition-all duration-300 "
                        label={''}
                        name={''}
                        type={undefined}
                      >
                        Download PDF
                      </MyButton>
                    </div>
                  </PDFDownloadLink>
                  <div className="pt-5">
                    <p className="text-center text-xs">
                      Developed by DC Quantum Labs
                    </p>
                    <p className="text-center text-sm font-bold">
                      "This is a computer generated receipt. No signature is
                      required."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyDialogueView>
      </MyModal>
    </>
  );
};

export default ReceiptInfoDialogue;

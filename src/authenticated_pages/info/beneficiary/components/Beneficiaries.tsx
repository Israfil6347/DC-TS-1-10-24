import { BeneficiaryModel } from 'authenticated_pages/info/beneficiary/model/data/BeneficiaryModel';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import {
  formatToTkSymbolMoney,
  getFormattedAccountNumber,
} from 'global_shared/utils/textUtils';
import { useState } from 'react';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  04 July 2023
 *========================================================================**/
interface BeneficiariesProps {
  accountBeneficiariesRequestData: BeneficiaryModel[] | null;
  removeBeneficiaryHandler: (accountNo: string) => void;
}

const Beneficiaries: React.FC<BeneficiariesProps> = ({
  accountBeneficiariesRequestData,
  removeBeneficiaryHandler,
}) => {
  const [ConfirmRemoveBeneBeneficiary, setConfirmRemoveBeneBeneficiary] =
    useState<boolean>(false);
  const [RemoveBeneBeneficiaryName, setRemoveBeneBeneficiaryName] =
    useState<string>('');
  const [removeBeneficiaryAccountName, setRemoveBeneficiaryAccountName] =
    useState<string>('');

  return (
    <>
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
                  removeBeneficiaryHandler(removeBeneficiaryAccountName);
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

      <div className="">
        <div className="w-full pb-5 pt-8 text-center">
          <h3 className="text-xl font-bold text-primary">Beneficiaries</h3>
        </div>
        {accountBeneficiariesRequestData?.length === 0 ? (
          <div className="flex h-32 flex-col items-center justify-center">
            <p className="">Please, Add beneficiary.</p>
          </div>
        ) : (
          <div className="mb-5 max-h-[300px] overflow-y-auto px-4 ">
            <table className="table w-full ">
              <thead className="">
                <tr className="sticky -top-0 h-16 w-full border border-gray-100 bg-background text-base text-onSurface shadow-sm md:table-row">
                  <th className="border border-gray-200 p-2 text-left">
                    <p>Account</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left">
                    <p>Particulars</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-center">
                    <p>Remove</p>
                  </th>
                </tr>
              </thead>
              <tbody className="flex-1 bg-backgroundVariant sm:flex-none">
                {accountBeneficiariesRequestData &&
                  accountBeneficiariesRequestData?.map((element, index) => (
                    <tr
                      key={index}
                      className="table-row w-full flex-col flex-wrap border-t border-gray-100 text-center first:border-t-0 even:bg-red-50"
                    >
                      <td className="border border-gray-200 p-2 text-left">
                        <p>{element?.AccountNo}</p>
                      </td>
                      <td className="border border-gray-200 p-2 text-left">
                        <p>{element?.PersonName}</p>
                      </td>
                      <td className="border border-gray-200 p-2">
                        <div className="flex justify-center">
                          <button
                            onClick={() => {
                              // removeBeneficiaryHandler(element.AccountNo);
                              setRemoveBeneficiaryAccountName(
                                element.AccountNo
                              );
                              setConfirmRemoveBeneBeneficiary(true);
                              setRemoveBeneBeneficiaryName(element?.PersonName);
                            }}
                            type="button"
                            className="rounded bg-primaryVariant py-2 px-4 text-onPrimaryVariant shadow transition-all duration-300 hover:scale-105"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Beneficiaries;

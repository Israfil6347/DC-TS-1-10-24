import MySearchInput from 'global_shared/components/MySearchInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import { ChangeEvent } from 'react';
import { SearchAccountState } from '../hook/useSearchAccountState';
import { useLocation } from 'react-router-dom';

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

interface AddBeneficiaryProps {
  searchAccountState: SearchAccountState;
  onSearchTextChange: (fieldName: string, fieldValue: any) => void;
  searchBeneficiaryHandler: () => void;
  searchBeneficiaryRequestData: any;
  addBeneficiaryHandler: () => void;
  clearSearchAccountState: () => void;
  setSearchBeneficiaryResponseData: React.Dispatch<
    React.SetStateAction<any | null>
  >;
}

const AddBeneficiary: React.FC<AddBeneficiaryProps> = ({
  searchAccountState,
  onSearchTextChange,
  searchBeneficiaryHandler,
  searchBeneficiaryRequestData,
  addBeneficiaryHandler,
  clearSearchAccountState,
  setSearchBeneficiaryResponseData,
}) => {
  const location = useLocation();
  const urlArrays = location.pathname.split('/');

  return (
    <>
      {/* <LoaderDialogue isLoading={} /> */}
      <div className="w-full">
        <h3 className="w-full py-5 text-center text-xl font-bold text-primary">
          Add Beneficiary
        </h3>

        <div className="flex flex-col gap-4">
          <MySearchInput
            disabled={false}
            name="AccountNumber"
            id="AccountNumber"
            value={searchAccountState.AccountNumber}
            onChange={(event) => {
              onSearchTextChange(event.target.name, event.target.value);
            }}
            onSubmit={searchBeneficiaryHandler}
            error={searchAccountState?.Errors?.AccountNumber}
            label="Account Number"
            leftIcon={<i className="fa-solid fa-magnifying-glass"></i>}
          />
          <MyTextInput
            label={'Recipient Name'}
            leftIcon={<i className="fa-solid fa-users-viewfinder"></i>}
            name={'RecipientName'}
            disabled={true}
            inputType={'text'}
            value={
              searchBeneficiaryRequestData
                ? searchBeneficiaryRequestData?.AccountHolderInfo[0]?.FullName
                : ''
            }
            onChangeHandler={function (
              event: ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
          />
          {urlArrays[1] === 'info' ? (
            <div className="flex  items-center justify-center pb-5">
              <button
                onClick={() => {
                  addBeneficiaryHandler();
                  setSearchBeneficiaryResponseData(null);
                  clearSearchAccountState();
                }}
                disabled={
                  !searchBeneficiaryRequestData?.AccountHolderInfo[0]?.FullName
                }
                className={`w-full rounded border bg-primary p-2 font-semibold uppercase text-onPrimary disabled:bg-gray-400 md:w-2/3`}
              >
                Confirm Beneficiary
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default AddBeneficiary;

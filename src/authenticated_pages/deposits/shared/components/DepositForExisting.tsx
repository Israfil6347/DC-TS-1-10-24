import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
import { motion } from 'framer-motion';
import MySearchInput from 'global_shared/components/MySearchInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { getFormattedAccountNumber } from 'global_shared/utils/textUtils';
import { useContext, useState } from 'react';
import { GetCollectionLedgersRequestModel } from '../model/request/GetCollectionLedgersRequestModel';

interface DepositForExistingProps {
  accountHolderName: string;
  setBeneficiaryOpen: any;
  updateOtherInputs: any;
  DepositLatterDate: any;
}

const DepositForExisting: React.FC<DepositForExistingProps> = ({
  accountHolderName,
  setBeneficiaryOpen,
  updateOtherInputs,
  DepositLatterDate,
}) => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const [value, setValue] = useState('');

  const {
    data: accountListData,
    setData: setAccountListData,
    loading: searchLoading,
    executeCommand: searchExecuteCommand,
  } = useCommand<CollectionLedgersResponseModel | null>();

  const getMemberInfoHandler = () => {
    if (value !== '') {
      const baseRequestCollectionAccounts =
        new GetCollectionLedgersRequestModel(authUser);
      baseRequestCollectionAccounts.SearchText =
        getFormattedAccountNumber(value);

      searchExecuteCommand(
        process.env.REACT_APP_BASE_URL + '/deposits_V1/getCollectionAccount',
        JSON.stringify(baseRequestCollectionAccounts),
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
        }
      );
    }
  };
  return (
    <>
      <LoaderDialogue isLoading={searchLoading} />
      <div className="rounded-md bg-surface p-7 shadow">
        <motion.h2 className="text-center text-lg font-bold uppercase">
          Deposit for
        </motion.h2>
        <div className="my-3 flex items-center justify-center">
          <button
            className="w-full rounded bg-primary py-2  text-sm font-bold uppercase text-onPrimaryVariant shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:text-base"
            onClick={() => {
              setBeneficiaryOpen(true);
              setAccountListData(null);
              setValue('');
            }}
          >
            Existing Beneficiary
          </button>
        </div>

        <ul className="mt-6 divide-y overflow-hidden text-justify">
          <li className="w-full items-center py-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
            <div className="relative w-full">
              <MySearchInput
                name="Account Number"
                label="Account Number"
                disabled={false}
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
                onSubmit={getMemberInfoHandler}
                leftIcon={<i className="fa-solid fa-magnifying-glass"></i>}
              />
            </div>
          </li>

          <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
            <div className="w-full text-left md:w-1/2">Account Holder </div>
            <div className="w-full text-left md:w-1/2">
              {accountListData?.AccountHolderInfo[0]?.FullName ||
                accountHolderName}
            </div>
          </li>
          <li className="w-full items-center py-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
            <div className="w-full">
              <MyTextInput
                label="Remarks"
                name="Remarks"
                inputType="text"
                disabled={false}
                required={false}
                value={DepositLatterDate?.Remarks}
                error={DepositLatterDate?.Errors?.Remarks}
                onChangeHandler={(event) => {
                  updateOtherInputs(event.target.name, event.target.value);
                }}
                leftIcon={<i className="fa-regular fa-message"></i>}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DepositForExisting;

import { useContext, useEffect, useState } from 'react';
import MyProductLoanDetails from './components/product_loan_application/MyProductLoanDetails';
import useCommand from 'global_shared/hooks/useCommand';
import { CollateralAccountResponseModel } from './model/response/CollateralAccountResponseModel';
import { GetEligibleCollateralRequestModel } from './model/request/GetEligibleCollateralRequestModel';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  02 July 2023
 *========================================================================**/

interface MyProductLoanItemProps {
  loan: any;
  loanType: string;
}

const MyProductLoanItem: React.FC<MyProductLoanItemProps> = ({
  loan,
  loanType,
}) => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  // product loan update

  const {
    data: eligibleCollateralACCListResponseData,
    setData: setEligibleCollateralACCListData,
    status: eligibleCollateralACCListStatus,
    loading: eligibleCollateralACCListResponseDataLoading,
    executeCommand: eligibleCollateralACCListResponseDataExecuteCommand,
  } = useCommand<CollateralAccountResponseModel | null>();

  // useEffect(() => {
  //   const baseRequestEligibleCollateral = new GetEligibleCollateralRequestModel(
  //     authUser
  //   );

  //   baseRequestEligibleCollateral.ProductCode = loan?.LoanProductCode;

  //   eligibleCollateralACCListResponseDataExecuteCommand(
  //     process.env.REACT_APP_BASE_URL +
  //       '/loans_v1/getEligibleCollateralAccounts',
  //     JSON.stringify(baseRequestEligibleCollateral),
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         token: localStorage.getItem('token'),
  //       },
  //     }
  //   );
  // }, []);

  const ProductLoanDetailsHandler = () => {
    const baseRequestEligibleCollateral = new GetEligibleCollateralRequestModel(
      authUser
    );

    baseRequestEligibleCollateral.ProductCode = loan?.LoanProductCode;

    eligibleCollateralACCListResponseDataExecuteCommand(
      process.env.REACT_APP_BASE_URL +
        '/loans_v1/getEligibleCollateralAccounts',
      JSON.stringify(baseRequestEligibleCollateral),
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
      {eligibleCollateralACCListResponseData && (
        <MyProductLoanDetails
          loanDetails={
            eligibleCollateralACCListStatus === 'success' ? true : false
          }
          loanDetailsModel={loan}
          closeLoanDetails={() => {
            setEligibleCollateralACCListData(null);
          }}
          eligibleCollateralACCListResponseData={
            eligibleCollateralACCListResponseData!
          }
        />
      )}

      <div
        onClick={() => {
          ProductLoanDetailsHandler();
        }}
      >
        <div
          className={`flex items-center rounded-md border  bg-surface p-4 text-onBackground hover:cursor-pointer hover:shadow md:p-8 ${
            loan.IsDefaulter ? 'border-error bg-surface' : 'bg-surface'
          }  hover:animate-twPulse  rounded p-4 hover:shadow-sm`}
        >
          <i className="fa-solid fa-sack-dollar fill-primary  text-3xl"></i>

          <span className="ml-2 block">{loanType} </span>
        </div>
      </div>
    </>
  );
};

export default MyProductLoanItem;

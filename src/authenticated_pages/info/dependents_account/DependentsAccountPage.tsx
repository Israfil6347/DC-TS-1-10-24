import { DonutChartData } from 'authenticated_pages/shared/interfaces/DonutChartData';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyCard from 'global_shared/components/MyCard';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountModel } from '../../accounts/my_accounts/model/data/AccountModel';
import { PersonDependentAccountModel } from '../../accounts/my_accounts/model/data/AccountStatementModel';
import { PersonDependentAccountRequestModel } from './model/request/PersonDependentAccountRequestModel';

function DependentsAccountPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState<DonutChartData[]>([]);
  const {
    data: dependentAccountsResponseData,
    executeCommand: dependentAccountsRequestCommand,
  } = useCommand<AccountModel[] | null>();

  const {
    data: personDependentAccountResponseData,
    executeCommand: getPersonDependentAccountRequestExecuteCommand,
  } = useCommand<PersonDependentAccountModel[] | null>();

  useEffect(() => {
    const dependentAccountsRequestModel = new BaseRequestModel(authUser);
    dependentAccountsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/Accounts_V1/getDependentAccounts',
      JSON.stringify(dependentAccountsRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  useEffect(() => {
    if (dependentAccountsResponseData) {
      const newAccountData = dependentAccountsResponseData.map((item) => {
        const { AccountTypeName, Balance } = item;

        return {
          name: AccountTypeName,
          value: Balance,
        };
      });

      setAccountData(newAccountData);
    }
  }, [dependentAccountsResponseData]);

  useEffect(() => {
    const personDependentAccountRequestModel =
      new PersonDependentAccountRequestModel(authUser);
    personDependentAccountRequestModel.DependentPersonId = -1;
    personDependentAccountRequestModel.UserName = authUser.Email;
    personDependentAccountRequestModel.RolePermissionId = '6,1,1210';
    console.log(personDependentAccountRequestModel);

    getPersonDependentAccountRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/Accounts_V1/getDependentAccounts',
      JSON.stringify(personDependentAccountRequestModel),
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
      {personDependentAccountResponseData?.length !== 0 &&
      personDependentAccountResponseData !== null ? (
        <div className="flex flex-col-reverse justify-between md:flex-row">
          <motion.div
            initial="initial"
            animate="animate"
            transition={MyTransition.StaggerChildren.Fast}
            className="grid w-full grid-cols-1 gap-3 text-onSurface md:grid-cols-2 xl:grid-cols-3"
          >
            {personDependentAccountResponseData?.map((obj, key) => (
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={{ ...MyTransition.Spring.Low, delay: 0.1 * key }}
                key={key}
                onClick={() => {
                  // getAccountDetailsHandler(obj?.AccountNo);
                  navigate(`${obj.DependentPersonId}`);
                }}
              >
                <MyCard
                  rounded={RoundedClass.Medium}
                  shadow={Size.Small}
                  bgColor={'bg-surface'}
                  minimumHeight={80}
                >
                  <div className={`group flex cursor-pointer items-center p-4`}>
                    <div className="flex flex-col items-center justify-center">
                      <i className="fa-solid fa-piggy-bank text-3xl text-primary"></i>
                    </div>
                    <div className="">
                      <ul>
                        <li className="ml-4 grow text-left font-semibold">
                          {obj?.AccountHolderName}
                        </li>
                      </ul>
                    </div>

                    <br />
                    <p></p>
                  </div>
                </MyCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.Fast}
        >
          <section className="flex flex-col-reverse items-start gap-6 bg-surface text-justify md:flex-row">
            <div className="w-full">
              <div className="px-4 text-primary shadow-sm md:px-12">
                <div className="py-20 text-center">
                  <motion.h1
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="text-5xl font-extrabold"
                  >
                    Dependents Account
                  </motion.h1>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="-mt-1"
                  >
                    You do not have any Dependents Account
                  </motion.p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}

      {/* End account list */}
    </>
  );
}

export default DependentsAccountPage;

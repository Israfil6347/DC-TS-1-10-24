import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { useContext, useEffect, useState } from 'react';
import userImg from '../../../assets/images/User.png';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import { IsBloodDonateRequestModel } from './model/request/IsBloodDonateRequestModel';
import { bloodGroups } from 'global_shared/data/bloodGroups';

function MyInfoPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const [DonarBlood, setDonarBlood] = useState<boolean>(false);

  const {
    loading: userProfileResponseDataLoading,
    data: userProfileResponseData,
    message: userProfileResponseMessage,
    status: userProfileResponseStatus,
    setStatus: setUserProfileResponseStatus,
    executeCommand: userProfileRequestCommand,
  } = useCommand<string | null | any>();

  const {
    loading: bloodDonorResponseDataLoading,
    data: bloodDonorResponseData,
    message: bloodDonorResponseMessage,
    status: bloodDonorResponseStatus,
    executeCommand: bloodDonorRequestCommand,
  } = useCommand<string | null | any>();

  useEffect(() => {
    var userProfileRequestModel = new BaseRequestModel(authUser);
    userProfileRequestCommand(
      process.env.REACT_APP_BASE_URL + '/info_V1/getUserProfile',
      JSON.stringify(userProfileRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [DonarBlood, userProfileResponseStatus, bloodDonorResponseStatus]);

  useEffect(() => {
    setDonarBlood(userProfileResponseData?.[0]?.IsBloodDonor);
  }, [userProfileResponseData?.[0]?.IsBloodDonor]);

  const setDonarBloodHandler = (DonarBlood: any) => {
    setDonarBlood(DonarBlood);
    console.log(DonarBlood);
    const isBloodDonateModel = new IsBloodDonateRequestModel(authUser);
    isBloodDonateModel.IsBloodDonor = DonarBlood;

    bloodDonorRequestCommand(
      process.env.REACT_APP_BASE_URL + '/info_V1/UpdateBloodDonorStatus',
      JSON.stringify(isBloodDonateModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
    setDonarBlood(DonarBlood);
  };

  document.title = 'icoopERP | Dhaka Credit';

  return (
    <>
      <LoaderDialogue
        isLoading={
          userProfileResponseDataLoading || bloodDonorResponseDataLoading
        }
      />
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <div className="bg-surface px-6 py-20">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <motion.div
              variants={MyVariants.SlideInFromLeft}
              transition={MyTransition.Spring.Low}
              className="flex w-48 flex-col items-center justify-center overflow-hidden rounded-full shadow-md md:mb-0 md:w-56 md:rounded-md"
            >
              {authUser.UserPicture === '' ? (
                <img
                  className="overflow-hidden rounded-full p-2 md:rounded-md"
                  src={userImg}
                  alt="user"
                />
              ) : (
                <img
                  className="overflow-hidden rounded-full p-2 md:rounded-md"
                  src={`data:image/png;base64,${userProfileResponseData?.[0]?.UserPhoto}`}
                  alt="user"
                />
              )}
            </motion.div>
            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="w-full justify-center divide-y text-left md:ml-4 md:divide-y-0"
            >
              <h5 className=" my-5 flex justify-center text-center text-xl font-bold uppercase md:justify-start md:text-2xl lg:mb-2 lg:text-3xl">
                {!!authUser ? authUser.UserName : ''}
              </h5>

              <div className="mx-2 justify-center py-2 md:flex md:justify-start">
                <div className="w-full font-semibold md:w-1/3">User ID</div>
                <div className="w-full font-normal md:w-2/3">
                  {!!authUser ? authUser.Email : ''}
                </div>
              </div>
              <div className="mx-2 justify-center py-2 md:flex md:justify-start">
                <div className="w-full font-semibold md:w-1/3">
                  Registered Mobile Phone no
                </div>
                <div className="w-full font-normal md:w-2/3">
                  {!!authUser ? authUser.RegMobile : ''}
                </div>
              </div>

              <div className="mx-2 justify-center py-2 md:flex md:justify-start">
                <div className="w-full font-semibold md:w-1/3">
                  Present Address
                </div>
                <div className="w-2/3 whitespace-pre-wrap break-all font-normal ">
                  {!!authUser ? authUser.Address : ''}
                </div>
              </div>
              <div className="mx-2 justify-center py-2 md:flex md:justify-start">
                <div className="w-full font-semibold md:w-1/3">Email Id</div>
                <div className="w-2/3 whitespace-pre-wrap break-all font-normal ">
                  {userProfileResponseData?.[0]?.Email}
                </div>
              </div>
              <div className="mx-2 justify-center py-2 md:flex md:justify-start">
                <div className="w-full font-semibold md:w-1/3">NID</div>
                <div className="w-2/3 whitespace-pre-wrap break-all font-normal ">
                  {userProfileResponseData?.[0]?.NID}
                </div>
              </div>
              <div className="mx-2 justify-center py-2 md:flex md:justify-start">
                <div className="w-full font-semibold md:w-1/3">
                  Permanent Address
                </div>
                <div className="w-2/3 whitespace-pre-wrap break-all font-normal ">
                  {userProfileResponseData?.[0]?.PermanentAddressLine1 +
                    ',' +
                    userProfileResponseData?.[0]?.PermanentAddressLine3 +
                    ',' +
                    userProfileResponseData?.[0]?.PermanentAddressLine4 +
                    ',' +
                    userProfileResponseData?.[0]?.PermanentAddressLine2}
                </div>
              </div>

              {userProfileResponseData?.[0]?.BloodGroup === 'Unknown' ||
              userProfileResponseData?.[0]?.BloodGroup === '' ? (
                ''
              ) : (
                <div>
                  <div className="mx-2 justify-center py-2 md:flex md:justify-start">
                    <div className="w-full font-semibold md:w-1/3">
                      Blood Group
                    </div>
                    <div className="w-2/3 whitespace-pre-wrap break-all font-normal ">
                      {userProfileResponseData?.[0]?.BloodGroup}
                    </div>
                  </div>
                  <div className="mx-2 justify-center py-2 md:flex md:justify-start">
                    <div className="w-full pt-2 font-semibold md:w-1/3">
                      Donate blood and inspire others
                    </div>
                    <div className=" flex justify-center ">
                      <label htmlFor="" className="mr-4 pt-2">
                        Are you available to donate blood?
                      </label>
                      <div className="">
                        <MyCheckBox
                          disabled={false}
                          label="Yes"
                          value={
                            // userProfileResponseData?.[0]?.IsBloodDonor ||
                            // DonarBlood
                            //   ? true
                            //   : false
                            // userProfileResponseData?.[0]?.IsBloodDonor

                            DonarBlood
                          }
                          // error={
                          //   otherInfoSectionState.Errors
                          //     .WillingToJoinAnyDepartmentOrServiceCenter
                          // }
                          name="willinglyDonarBlood"
                          onChangeHandler={() => {
                            // setDonarBlood(!DonarBlood);
                            setDonarBloodHandler(!DonarBlood);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default MyInfoPage;

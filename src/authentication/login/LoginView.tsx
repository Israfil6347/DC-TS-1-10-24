import erp_logo from 'assets/images/logo/icoop_logo.png';
import image from 'assets/images/logo/logocccul.png';
import PhoneVerificationView from 'authentication/phone_verification/PhoneVerificationView';
import CryptoJS from 'crypto-js';
import { motion } from 'framer-motion';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyPasswordInput from 'global_shared/components/MyPasswordInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { TermsAndConditionModel } from 'global_shared/model/data/TermsAndConditionModel';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginViewInputState from './hooks/useLoginViewInputState';
import { AuthUserModel } from './model/data/AuthUserModel';
import { IAuthUserModel } from './model/data/IAuthUserModel';
import { LoginRequestModel } from './model/request/LoginRequestModel';
import { TermsConditionRequestModel } from './model/request/TermsConditionRequestModel';
import { LoginResponseModel } from './model/response/LoginResponseModel';
import { validateLoginViewInputState } from './validation/validateLoginViewInputState';

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
interface LoginViewProps {
  closeLoginWindow: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ closeLoginWindow }) => {
  const navigate = useNavigate();

  const { storeAuthUserData } = useContext(
    AuthUserContext
  ) as AuthUserContextType;

  const [openPhoneVerificationView, setOpenPhoneVerificationView] =
    useState(false);

  const {
    loginViewInputState,
    updateLoginViewInputState,
    resetLoginViewInputState,
  } = useLoginViewInputState();

  const {
    loading: userLoginResponseDataLoading,
    headers: userLoginResponseHeaders,
    data: userLoginResponseData,
    setData: setUserLoginResponseData,
    message: userLoginResponseMessage,
    status: userLoginResponseStatus,
    setStatus: setUserLoginResponseStatus,
    executeCommand: userLoginRequestExecuteCommand,
  } = useCommand<LoginResponseModel[] | null>();

  const {
    loading: termsConditionsResponseDataLoading,
    data: termsConditionsResponseData,
    status: termsConditionsStatus,
    setStatus: setTermsConditionsStatus,
    message: termsConditionsResponseMessage,
    setMessage: setTermsConditionsResponseMessage,
    executeCommand: TermsConditionsExecuteCommand,
  } = useCommand<TermsAndConditionModel | null>();

  useEffect(() => {
    if (userLoginResponseData) {
      closeLoginWindow();
      resetLoginViewInputState();

      const authUserModel: IAuthUserModel = new AuthUserModel();
      authUserModel.UserId = userLoginResponseData[0]?.userid;
      authUserModel.UserName = userLoginResponseData[0]?.UserName;
      authUserModel.UserPicture = userLoginResponseData[0]?.UserPicture;
      authUserModel.Email = userLoginResponseData[0]?.loginemail;
      authUserModel.Address = userLoginResponseData[0]?.Address;
      authUserModel.RegMobile = userLoginResponseData[0]?.RegMobile;
      authUserModel.RoleId = userLoginResponseData[0]?.RoleId;
      authUserModel.RoleName = userLoginResponseData[0]?.RoleName;
      authUserModel.WebPortalMenuList =
        userLoginResponseData[0]?.WebPortalMenuList;
      authUserModel.PersonId = userLoginResponseData[0]?.personid;
      authUserModel.EmployeeCode = userLoginResponseData[0]?.EmployeeCode;

      storeAuthUserData(authUserModel);
      localStorage.setItem('token', userLoginResponseHeaders?.token);
      navigate('info/my_info');
      window.location.reload();
    }

    return () => {
      setUserLoginResponseData(null);
    };
  }, [userLoginResponseData]);

  const handleLoginRequest = () => {
    let hasErrors = '';

    let fieldName: keyof typeof loginViewInputState;
    for (fieldName in loginViewInputState) {
      updateLoginViewInputState(fieldName, loginViewInputState[fieldName]);
      hasErrors =
        hasErrors +
        validateLoginViewInputState(fieldName, loginViewInputState[fieldName]);
    }

    if (hasErrors.length === 0) {
      const encryptPassword = CryptoJS.MD5(loginViewInputState.userPass);
      const loginRequestModel = new LoginRequestModel();
      loginRequestModel.UserName = loginViewInputState.userName;
      loginRequestModel.Password = encryptPassword.toString();
      loginRequestModel.RequestFrom = 'Web';

      console.log(JSON.stringify(loginRequestModel));
      userLoginRequestExecuteCommand(
        process.env.REACT_APP_BASE_URL + '/Auth_V2/UserLogin',

        JSON.stringify(loginRequestModel),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  };

  const TermsConditionsHandler = () => {
    const termsConditionsModel = new TermsConditionRequestModel();
    termsConditionsModel.ApplicationName = 'MFS';
    termsConditionsModel.ContentName = 'Terms And Conditions';
    termsConditionsModel.RequestFrom = 'Web';

    console.log(termsConditionsModel);

    TermsConditionsExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetMfsPolicy',
      JSON.stringify(termsConditionsModel),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <>
      <LoaderDialogue
        isLoading={
          userLoginResponseDataLoading || termsConditionsResponseDataLoading
        }
      />
      {localStorage.getItem('forgetPassword') === 'Sign Up' ? (
        <MyModal
          show={termsConditionsStatus === 'success' ? true : false}
          size={Size.Medium}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="flex w-full flex-col items-center py-6">
                <img src={image} alt="" />
                <motion.h2 className="text-center text-2xl font-extrabold uppercase">
                  Terms and Conditions
                </motion.h2>
              </div>
            }
            dialogueFooter={
              <div className="flex flex-col items-center justify-center gap-6 px-8 py-4 md:px-14 lg:flex-row">
                <MyButton
                  type="submit"
                  disabled={false}
                  label="ok"
                  name=""
                  styleClass="w-full md:w-1/3  rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg"
                  onClick={() => {
                    setTermsConditionsStatus(null);
                    setOpenPhoneVerificationView(true);
                  }}
                />
                <MyButton
                  type="submit"
                  label="Cancel"
                  name=""
                  styleClass="w-full md:w-1/3  rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg"
                  onClick={() => {
                    setTermsConditionsStatus(null);
                  }}
                />
              </div>
            }
            onCancel={() => {
              setTermsConditionsStatus(null);
            }}
          >
            <div>
              <div
                className="prose w-full max-w-full overflow-auto p-4  md:px-16"
                style={{ maxHeight: window.innerHeight - 400 }}
                dangerouslySetInnerHTML={{
                  __html: termsConditionsResponseData?.BanglaContent!,
                }}
              ></div>
            </div>
          </MyDialogueView>
        </MyModal>
      ) : (
        ''
      )}

      {/* Start login failed request dialogue */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={userLoginResponseStatus === 'failed' ? true : false}
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setUserLoginResponseStatus(null);
        }}
      >
        {userLoginResponseMessage}
      </FailedDialogue>

      {/* End of login failed request dialogue */}

      {/* Start phone verification dialogue */}
      <MyModal
        show={openPhoneVerificationView}
        size={Size.Small}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        <PhoneVerificationView
          closeDialogue={() => {
            setOpenPhoneVerificationView(false);
          }}
        />
      </MyModal>
      {/* End of phone verification dialogue */}

      {/* Start login view */}
      <div className="relative w-full overflow-hidden rounded-sm bg-surface py-6 px-6 shadow-sm md:px-10 lg:px-20">
        <MyButton
          onClick={() => {
            resetLoginViewInputState();
            setUserLoginResponseData(null);
            setUserLoginResponseStatus(null);
            closeLoginWindow();
          }}
          styleClass="absolute top-1 right-0 w-10 font-semibold transition-all transform duration-300 hover:scale-150 origin-center  hover:text-error"
          label={''}
          name={''}
          type={undefined}
        >
          <i className="fa-solid fa-xmark text-3xl"></i>
        </MyButton>
        <div className="flex w-full flex-col items-center text-onSurface">
          <div className="hover:animate-swing mb-6 flex w-full flex-col items-center hover:cursor-pointer">
            <img src={erp_logo} alt="" className="w-64" />
            <motion.h2 className="text-center text-2xl font-extrabold uppercase">
              Member Login
            </motion.h2>
            <h3 className="text-center text-sm">Login to your account</h3>
          </div>
          <form
            className="grid  w-full grid-cols-1 gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              handleLoginRequest();
            }}
          >
            <MyTextInput
              label="User Id/Email"
              value={loginViewInputState.userName}
              leftIcon={<i className="fa-solid fa-at"></i>}
              name="userName"
              id="username"
              required={true}
              error={loginViewInputState.errors.userName}
              inputType="text"
              onChangeHandler={(event) =>
                updateLoginViewInputState(event.target.name, event.target.value)
              }
            />

            <MyPasswordInput
              label="User Password"
              value={loginViewInputState.userPass}
              leftIcon={<i className="fa-solid fa-key"></i>}
              name="userPass"
              id="userPass"
              required={true}
              error={loginViewInputState.errors.userPass}
              onChangeHandler={(event) => {
                updateLoginViewInputState(
                  event.target.name,
                  event.target.value
                );
              }}
            />

            <div className="flex flex-col gap-6 lg:flex-row">
              <MyButton
                type="submit"
                label="Log in"
                styleClass="w-full rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105"
                name={''}
              />
            </div>
          </form>
        </div>
        <div
          className="mt-5 cursor-pointer text-center transition duration-150 hover:underline"
          onClick={() => {
            setOpenPhoneVerificationView(true);
            localStorage.setItem('forgetPassword', 'Forget Password');
          }}
        >
          Forgotten password?
        </div>
        <div className="flex items-center justify-center pt-4 lg:flex-row">
          <MyButton
            type="button"
            label="sign up"
            styleClass="w-2/4 rounded bg-orange-50 border border-orange-700 px-7 py-3 text-sm font-medium uppercase text-error hover:bg-orange-700 shadow-md transition-all duration-150 hover:scale-105 hover:text-white"
            onClick={() => {
              // setOpenPhoneVerificationView(true);
              TermsConditionsHandler();
              localStorage.setItem('forgetPassword', 'Sign Up');
            }}
            name={''}
          />
        </div>
      </div>
      {/* End login view */}
    </>
  );
};

export default LoginView;

import CryptoJS from 'crypto-js';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyPasswordInput from 'global_shared/components/MyPasswordInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { useNavigate } from 'react-router-dom';
import useUserPasswordResendRegisterState from './hook/useUserPasswordResendRegisterState';
import { UserRegistrationAndPasswordResetModel } from './model/request/UserRegistrationAndPasswordResetModel';
import { changePasswordValidation } from './validation/ValidateChangePasswordState';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  03 July 2023
 *========================================================================**/

interface UserPasswordResetViewProps {
  title: string;
  isUserPasswordResetViewOpen: boolean;
  closeUserPasswordResetView: () => void;
}

const UserPasswordResetView: React.FC<UserPasswordResetViewProps> = ({
  title,
  isUserPasswordResetViewOpen,
  closeUserPasswordResetView,
}) => {
  const navigate = useNavigate();

  const { userPasswordResetViewInputState, updateUserPasswordInputState } =
    useUserPasswordResendRegisterState();

  const {
    data: forgotPasswordOrUserRegistrationRequestData,
    setStatus: setForgotPasswordOrUserRegistrationRequestStatus,
    loading: forgotPasswordOrUserRegistrationRequestDataLoading,
    message: forgotPasswordOrUserRegistrationRequestMessage,
    status: forgotPasswordOrUserRegistrationRequestStatus,
    executeCommand: forgotPasswordOrUserRegistrationRequestCommand,
  } = useCommand<string | null>();

  const headers = {
    'Content-Type': 'application/json',
    token: localStorage.getItem('token'),
  };

  let encryptPassword = CryptoJS.MD5(userPasswordResetViewInputState?.newPass);

  const userRegistrationAndPasswordResetModel =
    new UserRegistrationAndPasswordResetModel();
  userRegistrationAndPasswordResetModel.Password = encryptPassword.toString();
  userRegistrationAndPasswordResetModel.MobileNumber =
    localStorage.getItem('mobile');
  userRegistrationAndPasswordResetModel.MobileNo =
    localStorage.getItem('mobile');
  userRegistrationAndPasswordResetModel.UserName =
    userPasswordResetViewInputState?.userName;
  userRegistrationAndPasswordResetModel.RequestFrom = 'Web';

  const userRegistrationSubmitHandler = () => {
    if (localStorage.getItem('forgetPassword') === 'Forget Password') {
      forgotPasswordOrUserRegistrationRequestCommand(
        process.env.REACT_APP_BASE_URL + '/securities_v1/forgotPassword',
        JSON.stringify(userRegistrationAndPasswordResetModel),
        { headers: headers }
      );
    } else {
      forgotPasswordOrUserRegistrationRequestCommand(
        process.env.REACT_APP_BASE_URL + '/Auth_V1/UserRegister',
        JSON.stringify(userRegistrationAndPasswordResetModel),
        { headers: headers }
      );
    }
  };

  return (
    <>
      <LoaderDialogue
        isLoading={forgotPasswordOrUserRegistrationRequestDataLoading}
      />

      {/* Begin user registration or password reset View open dialog */}
      <MyModal
        size={Size.Small}
        show={isUserPasswordResetViewOpen}
        onClose={() => closeUserPasswordResetView()}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="flex w-full flex-col items-center justify-center bg-background p-4">
              <img className="w-28" src={logoIcon} alt="" />
              <h3 className="pt-2 text-center text-xl font-bold"> {title}</h3>
            </div>
          }
          dialogueFooter={
            <div className=" flex items-center justify-center bg-background">
              <div className="bottom-0 flex w-2/5 flex-col  gap-4 p-4">
                <MyButton
                  onClick={() => {
                    var error = '';
                    let fieldName: keyof typeof userPasswordResetViewInputState;
                    for (fieldName in userPasswordResetViewInputState) {
                      updateUserPasswordInputState(
                        fieldName,
                        userPasswordResetViewInputState[fieldName]
                      );
                      error =
                        error +
                        changePasswordValidation(
                          fieldName,
                          userPasswordResetViewInputState[fieldName]
                        );
                    }

                    if (error) {
                      window.scrollTo({
                        top: window.innerHeight / 2,
                        behavior: 'smooth',
                      });
                    }

                    if (error.length === 0) {
                      userRegistrationSubmitHandler();
                    }
                  }}
                  type="button"
                  label="SUBMIT"
                  styleClass="w-full rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />
              </div>
            </div>
          }
          onCancel={() => closeUserPasswordResetView()}
        >
          <div
            className="mt-10 w-full space-y-3 self-center overflow-auto rounded-lg p-2  px-8 py-6 text-justify  md:mt-2 md:px-14"
            style={{ maxHeight: window.innerHeight - 400 }}
          >
            <MyTextInput
              label="User Id/Email"
              value={userPasswordResetViewInputState.userName}
              name="userName"
              required={true}
              error={userPasswordResetViewInputState.error.userName}
              inputType="text"
              onChangeHandler={(event) => {
                updateUserPasswordInputState(
                  event.target.name,
                  event.target.value
                );
              }}
              leftIcon={<i className="fa-solid fa-at"></i>}
            />
            <MyPasswordInput
              label="User Password"
              value={userPasswordResetViewInputState.newPass}
              name="newPass"
              required={true}
              error={userPasswordResetViewInputState.error.newPass}
              onChangeHandler={(event) => {
                updateUserPasswordInputState(
                  event.target.name,
                  event.target.value
                );
              }}
              leftIcon={<i className="fa-solid fa-lock"></i>}
            />

            <MyPasswordInput
              label="Confirm Password"
              value={userPasswordResetViewInputState.conPass}
              name="conPass"
              required={true}
              error={
                userPasswordResetViewInputState.conPass !==
                userPasswordResetViewInputState.newPass
                  ? 'Password do not match'
                  : ''
              }
              onChangeHandler={(event) => {
                updateUserPasswordInputState(
                  event.target.name,
                  event.target.value
                );
              }}
              leftIcon={<i className="fa-solid fa-lock"></i>}
            />
          </div>
        </MyDialogueView>
      </MyModal>
      {/* End user registration or password reset View open dialog */}

      {/* Begin user registration or password reset success dialog */}

      <SuccessDialogue
        isDialogueOpen={
          forgotPasswordOrUserRegistrationRequestStatus === 'success'
            ? true
            : false
        }
        onOkButtonClick={() => {
          setForgotPasswordOrUserRegistrationRequestStatus(null);
          closeUserPasswordResetView();
          navigate('/');
        }}
      >
        <div className="">{forgotPasswordOrUserRegistrationRequestData}</div>
      </SuccessDialogue>
      {/* End user registration or password reset success dialog */}

      {/* Begin user registration or password reset failed dialog */}

      <FailedDialogue
        isDialogueOpen={
          forgotPasswordOrUserRegistrationRequestStatus === 'failed'
            ? true
            : false
        }
        // onOkButtonClick={() => {
        //   navigate('/');
        // }}
        onCloseButtonClick={() => {
          setForgotPasswordOrUserRegistrationRequestStatus(null);
        }}
      >
        {forgotPasswordOrUserRegistrationRequestMessage}
      </FailedDialogue>
      {/* End user registration or password reset failed dialog */}
    </>
  );
};

export default UserPasswordResetView;

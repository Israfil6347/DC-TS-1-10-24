import CryptoJS from 'crypto-js';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyPasswordInput from 'global_shared/components/MyPasswordInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { ReactNode, useContext } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from 'react-router-dom';
import useChangePasswordState, {
  IChangePasswordStates,
} from './hooks/useChangePasswordState';
import { ChangePasswordRequestModel } from './model/request/ChangePasswordRequestModel';
import { validateChangePasswordState } from './validation/validateChangePasswordState';
import { Size } from 'global_shared/enum/Size';

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

function ChangePassword() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const navigate = useNavigate();
  const { updateChangePasswordState, changePasswordStates } =
    useChangePasswordState();

  const {
    data: changePasswordResponseData,
    loading: changePasswordResponseDataLoading,
    message: changePasswordResponseMessage,
    status: changePasswordResponseStatus,
    setStatus: setChangePasswordResponseStatus,
    executeCommand: changePasswordRequestCommand,
  } = useCommand<string | null>();

  const changePasswordRequestHandler = () => {
    const newEncryptedPassword = CryptoJS.MD5(
      changePasswordStates?.newpassword as string
    );
    const oldEncryptedPassword = CryptoJS.MD5(changePasswordStates?.password);

    const changePasswordRequestModel = new ChangePasswordRequestModel(authUser);
    changePasswordRequestModel.Password = oldEncryptedPassword.toString();
    changePasswordRequestModel.NewPassword = newEncryptedPassword.toString();

    changePasswordRequestCommand(
      process.env.REACT_APP_BASE_URL + '/securities_v1/changePassword',
      JSON.stringify(changePasswordRequestModel),
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
      <LoaderDialogue isLoading={changePasswordResponseDataLoading} />

      {/* Begin password change request success dialogue */}

      <SuccessDialogue
        isDialogueOpen={
          changePasswordResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setChangePasswordResponseStatus(null);
          navigate('/privacy');
          localStorage.clear();
        }}
      >
        {changePasswordResponseData as ReactNode}
      </SuccessDialogue>
      {/* End password change request success dialogue */}

      {/* Begin password change request failed dialogue */}

      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          changePasswordResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setChangePasswordResponseStatus(null);
          navigate('/privacy');
        }}
      >
        {changePasswordResponseMessage}
      </FailedDialogue>
      {/* Begin password change request failed dialogue */}

      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
        className="bg-surface"
      >
        <motion.section
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="flex flex-col-reverse items-start gap-6 text-justify md:flex-row"
        >
          <div className="w-full">
            <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
              <div className="py-20">
                <div className="">
                  <h6 className="mb-6 text-center text-xl font-semibold uppercase md:text-2xl">
                    Change password
                  </h6>
                  <div className="grid grid-cols-1 gap-4 p-2  lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <MyPasswordInput
                        label="Password"
                        id="password"
                        name="password"
                        leftIcon={<i className="fa-solid fa-lock"></i>}
                        value={changePasswordStates?.password}
                        required={true}
                        error={changePasswordStates?.error.password}
                        onChangeHandler={(event) => {
                          updateChangePasswordState(
                            event.target.name as keyof IChangePasswordStates,
                            event.target.value
                          );
                        }}
                      />
                    </div>
                    <div>
                      <MyPasswordInput
                        label="New Password"
                        id="newpassword"
                        name="newpassword"
                        leftIcon={<i className="fa-solid fa-lock"></i>}
                        value={changePasswordStates?.newpassword}
                        required={true}
                        error={changePasswordStates?.error.newpassword}
                        onChangeHandler={(event) => {
                          updateChangePasswordState(
                            event.target.name as keyof IChangePasswordStates,
                            event.target.value
                          );
                        }}
                      />
                      <PasswordStrengthBar
                        password={changePasswordStates?.newpassword}
                        minLength={6}
                        onChangeScore={(score, feedback) => {}}
                      />
                    </div>
                    <div>
                      <MyPasswordInput
                        label="Confirm Password"
                        id="confirmpassword"
                        name="confirmpassword"
                        leftIcon={<i className="fa-solid fa-lock"></i>}
                        value={changePasswordStates?.confirmpassword}
                        required={true}
                        error={
                          changePasswordStates?.newpassword !==
                          changePasswordStates?.confirmpassword
                            ? 'Password do not match'
                            : ''
                        }
                        onChangeHandler={(event) => {
                          updateChangePasswordState(
                            event.target.name as keyof IChangePasswordStates,
                            event.target.value
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center py-5 ">
                  <MyButton
                    type="submit"
                    label="Submit"
                    styleClass="w-48 rounded border py-2  mr-5 font-semibold uppercase text-onPrimary hover:scale-105 bg-primary"
                    onClick={() => {
                      var error = '';
                      for (var fieldName in changePasswordStates) {
                        fieldName in changePasswordStates &&
                          updateChangePasswordState(
                            fieldName as keyof IChangePasswordStates,
                            changePasswordStates[
                              fieldName as keyof IChangePasswordStates
                            ] as string
                          );
                        error =
                          error +
                          validateChangePasswordState(
                            fieldName as keyof IChangePasswordStates,
                            changePasswordStates[
                              fieldName as keyof IChangePasswordStates
                            ] as string
                          );
                      }
                      if (error.length === 0) {
                        changePasswordRequestHandler();
                      }
                    }}
                    name={''}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}

export default ChangePassword;

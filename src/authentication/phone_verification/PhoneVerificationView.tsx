import image from 'assets/images/logo/logocccul.png';
import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import UserPasswordResetView from 'authentication/password_reset/UserPasswordResetView';
import { motion } from 'framer-motion';
import MyButton from 'global_shared/components/MyButton';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import useCommand from 'global_shared/hooks/useCommand';
import { VerifyOTPRequestModel } from '../otp_validation/model/request/VerifyOTPRequestModel';
import usePhoneVerificationState from './hook/usePhoneVerificationState';
import { PhoneVerificationRequestModel } from './model/request/PhoneVerificationRequestModel';
import { validatePhoneVerificationState } from './validation/validatePhoneVerificationState';
import { useNavigate } from 'react-router-dom';
import { Size } from 'global_shared/enum/Size';

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

interface PhoneVerificationViewProps {
  closeDialogue: () => void;
}

const PhoneVerificationView: React.FC<PhoneVerificationViewProps> = ({
  closeDialogue,
}) => {
  const { phoneVerificationInputState, updatePhoneVerificationState } =
    usePhoneVerificationState();

  const {
    data: verifyMobileNumberResponseData,
    message: verifyMobileNumberResponseMessage,
    loading: verifyMobileNumberResponseDataLoading,
    status: verifyMobileNumberResponseStatus,
    setStatus: setVerifyMobileNumberResponseStatus,
    executeCommand: verifyMobileNumberRequestExecuteCommand,
  } = useCommand();

  const {
    data: verifyOTPResponseData,
    message: verifyOTPResponseMessage,
    setMessage: setVerifyOTPResponseMessage,
    loading: verifyOTPResponseDataLoading,
    status: verifyOTPResponseStatus,
    setStatus: setVerifyOTPResponseStatus,
    executeCommand: verifyOTPRequestExecuteCommand,
  } = useCommand();

  const verifyMobileNumberRequestHandler = () => {
    const verifyMobileNumberRequestModel = new PhoneVerificationRequestModel();
    verifyMobileNumberRequestModel.AccountNo = 'not found';
    verifyMobileNumberRequestModel.MobileNo =
      phoneVerificationInputState?.MobileNumber;
    verifyMobileNumberRequestModel.MobileNumber =
      phoneVerificationInputState?.MobileNumber;
    verifyMobileNumberRequestModel.RequestFrom = 'Web';

    console.log(JSON.stringify(verifyMobileNumberRequestModel));

    verifyMobileNumberRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/Auth_V1/VerifyMobileNumber',
      JSON.stringify(verifyMobileNumberRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  localStorage.setItem('mobile', phoneVerificationInputState?.MobileNumber);

  const verifyOTPRequestHandler = (otpValue: string) => {
    const verifyOTPRequestModel = new VerifyOTPRequestModel();
    verifyOTPRequestModel.MobileNumber =
      phoneVerificationInputState?.MobileNumber;
    verifyOTPRequestModel.MobileNo = phoneVerificationInputState?.MobileNumber;
    verifyOTPRequestModel.OTPRegId = verifyMobileNumberResponseData as string;
    verifyOTPRequestModel.otpValue = otpValue;

    verifyOTPRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/Auth_V1/verifyOTP',
      JSON.stringify(verifyOTPRequestModel),
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
      <LoaderDialogue
        isLoading={
          verifyMobileNumberResponseDataLoading || verifyOTPResponseDataLoading
        }
      />

      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={verifyOTPResponseStatus === 'failed' ? true : false}
        OkButtonText="Retry"
        onOkButtonClick={() => {
          setVerifyOTPResponseStatus(null);
        }}
        cancelButtonText="Back"
        onCloseButtonClick={() => {
          closeDialogue();
        }}
      >
        {verifyOTPResponseMessage}
      </FailedDialogue>

      <UserPasswordResetView
        title={localStorage.getItem('forgetPassword')!}
        isUserPasswordResetViewOpen={
          verifyOTPResponseStatus === 'success' ? true : false
        }
        closeUserPasswordResetView={closeDialogue}
      />

      {/*  Begin OTPValidation view  dialog */}

      {verifyMobileNumberResponseStatus === 'success' && (
        <OTPValidationView
          isOTPValidationViewOpen={
            verifyMobileNumberResponseStatus === 'success' ? true : false
          }
          closeOTPValidationView={() => {
            setVerifyMobileNumberResponseStatus(null);
            closeDialogue();
          }}
          otpValidateRequestHandler={verifyOTPRequestHandler}
          resendOTPRequestHandler={verifyMobileNumberRequestHandler}
        />
      )}

      {/*  End OTPValidation view  dialog */}

      {/*  Begin VerifyMobileNumber request failed dialog */}

      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          verifyMobileNumberResponseStatus === 'failed' ? true : false
        }
        onCloseButtonClick={() => {
          setVerifyMobileNumberResponseStatus(null);
        }}
        cancelButtonText="ok"
      >
        {verifyMobileNumberResponseMessage}
      </FailedDialogue>
      {/*  End VerifyMobileNumber request failed dialog */}

      {/*  Begin Phone verification dialog view */}
      <MyDialogueView
        dialogueHeader={
          <div className="flex w-full flex-col items-center py-6">
            <img src={image} alt="" />
            <motion.h2 className="text-center text-2xl font-extrabold uppercase">
              Phone Number Verification
            </motion.h2>
            <h3 className="text-center text-sm">Provide your phone number</h3>
          </div>
        }
        dialogueFooter={
          <div className="flex flex-col gap-6 px-8 py-4 md:px-14 lg:flex-row">
            <MyButton
              type="submit"
              label="Confirm"
              styleClass="w-full rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg"
              onClick={(event) => {
                event.preventDefault();
                var errors = '';
                let fieldName: keyof typeof phoneVerificationInputState;
                for (fieldName in phoneVerificationInputState) {
                  updatePhoneVerificationState(
                    fieldName,
                    phoneVerificationInputState[fieldName]
                  );
                  errors =
                    errors +
                    validatePhoneVerificationState(
                      fieldName,
                      phoneVerificationInputState[fieldName]
                    );
                }
                if (errors) {
                  window.scrollTo({
                    top: window.innerHeight / 2,
                    behavior: 'smooth',
                  });
                }

                if (errors.length === 0) {
                  verifyMobileNumberRequestHandler();
                }
              }}
              name={''}
            />
            <MyButton
              type="button"
              label="Exit"
              onClick={() => {
                closeDialogue();
              }}
              styleClass={`w-full 
              } rounded bg-primary px-7 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg`}
              name={''}
            />
          </div>
        }
        onCancel={() => {
          closeDialogue();
        }}
      >
        <div className="px-8 py-6 md:px-14">
          <MyTextInput
            label="Mobile Phone Number"
            value={phoneVerificationInputState.MobileNumber}
            name="MobileNumber"
            id="MobileNumber"
            required={true}
            leftIcon={<i className="fa-solid fa-mobile-screen-button"></i>}
            error={phoneVerificationInputState.errors.MobileNumber}
            inputType="text"
            onChangeHandler={(event) => {
              updatePhoneVerificationState(
                event.target.name,
                event.target.value
              );
            }}
          />
        </div>
      </MyDialogueView>
      {/*  End Phone verification dialog view */}
    </>
  );
};

export default PhoneVerificationView;

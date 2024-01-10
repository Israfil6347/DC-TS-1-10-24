import { motion } from 'framer-motion';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyTextInput from 'global_shared/components/MyTextInput';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import { CardHandler } from 'global_shared/model/data/CardHandler';
import { validateInstantLoanApplication } from '../validation/validateInstantLoanApplication';
import { InstantLoanEligibilityModel } from 'authenticated_pages/loans/shared/model/data/InstantLoanEligibilityModel';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CardAccountPinView from 'authenticated_pages/shared/components/CardAccountPinView';
import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import { validateCardVerificationState } from 'authenticated_pages/shared/validations/validateCardVerificationState';
import { stepStyle } from 'authenticated_pages/shared/style/stepperStyle';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  06 July 2023
 *========================================================================**/
const steps = ['LOAN INFORMATION', 'ACCOUNT HOLDER VERIFICATION'];
interface InstantLoanEligibleDialogProps {
  isEligibilityDialogueOpen: boolean;
  myCards: CardModel[] | null;
  closeDialogue: () => void;
  eligibilityData?: string;
  updateInstantLoanApplicationState: any;
  instantLoanApplicationInputState: any;
  cardVerificationState: any;
  updateCardVerificationState: any;
  verifyCardPinRequestHandler: () => void;
}

const InstantLoanEligibleDialog: React.FC<InstantLoanEligibleDialogProps> = ({
  isEligibilityDialogueOpen,
  myCards,
  closeDialogue,
  instantLoanApplicationInputState,
  updateInstantLoanApplicationState,
  eligibilityData,
  cardVerificationState,
  updateCardVerificationState,
  verifyCardPinRequestHandler,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);
  var instantLoanEligibilityData: InstantLoanEligibilityModel[] = [];
  try {
    if (eligibilityData !== undefined) {
      instantLoanEligibilityData = JSON.parse(eligibilityData);
    }
  } catch {
    instantLoanEligibilityData = [];
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  var myCardsWithAccounts: CardHandler | null = null;
  if (myCards !== null) {
    myCardsWithAccounts = new CardHandler(myCards);
  }

  React.useEffect(() => {
    if (myCards !== null) {
      updateCardVerificationState('CardNo', myCards?.[0].CardNo?.trim());
      updateCardVerificationState(
        'CardAccount',
        myCards?.[0].CardsAccounts?.[0].AccountNumber.trim()
      );
    }
  }, [myCards]);

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <MyModal
          size={Size.Small}
          show={isEligibilityDialogueOpen}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
        >
          <MyDialogueView
            dialogueHeader={
              <div className=" bg-background p-6">
                <div className="flex w-full flex-col items-center ">
                  <img src={logoIcon} alt="" className="w-28" />
                  <h3 className="mt-2 font-bold text-primary">
                    Instant Loan Apply
                  </h3>
                </div>
              </div>
            }
            dialogueFooter={
              <div className="flex items-center justify-center gap-6 bg-background px-14 py-4">
                <MyButton
                  disabled={activeStep === 0 ? true : false}
                  onClick={() => {
                    handleBack();
                  }}
                  type="button"
                  label="Back"
                  styleClass="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />
                <MyButton
                  disabled={
                    myCardsWithAccounts?.getHandledCard()[0].IsLockCard
                      ? true
                      : false
                  }
                  onClick={() => {
                    var error = '';
                    if (activeStep + 1 === 1) {
                      let fieldName: keyof typeof instantLoanApplicationInputState;
                      for (fieldName in instantLoanApplicationInputState) {
                        updateInstantLoanApplicationState(
                          fieldName,
                          instantLoanApplicationInputState[fieldName],
                          parseInt(instantLoanEligibilityData?.[0]?.LoanAmount)
                        );
                        error =
                          error +
                          validateInstantLoanApplication(
                            fieldName,
                            instantLoanApplicationInputState[fieldName],
                            parseInt(
                              instantLoanEligibilityData?.[0]?.LoanAmount
                            )
                          );
                      }

                      if (error.length === 0) {
                        handleNext();
                      }
                    }
                    if (activeStep + 1 === 2) {
                      let fieldName: keyof typeof cardVerificationState;
                      for (fieldName in cardVerificationState) {
                        updateCardVerificationState(
                          fieldName,
                          cardVerificationState[fieldName]
                        );
                        error =
                          error +
                          validateCardVerificationState(
                            fieldName,
                            cardVerificationState[fieldName]
                          );
                      }

                      if (error.length === 0) {
                        verifyCardPinRequestHandler();
                      }
                    }
                  }}
                  type="button"
                  label={activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  styleClass="disabled:text-onSurface disabled:bg-gray-200 w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />
              </div>
            }
            onCancel={() => closeDialogue()}
          >
            <div className="py-5">
              <div className="md:hidden">
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    sx={stepStyle}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
              <div className="hidden md:block">
                <Box sx={{ width: '100%' }}>
                  <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    sx={stepStyle}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
              <div
                className="w-full overflow-auto rounded-lg px-8 py-8 md:px-14"
                style={{ maxHeight: window.innerHeight - 400 }}
              >
                {activeStep + 1 === 1 && (
                  <div className="">
                    <h3 className=" rounded border border-onSurface p-2 font-bold text-primary lg:mt-2">
                      {instantLoanEligibilityData[0]?.LoanMemberType}
                    </h3>
                    <div>
                      <p className="py-3">
                        {instantLoanEligibilityData[0]?.LoanAmountRules}
                      </p>
                      <div className="mt-2 grid grid-cols-1">
                        <MyTextInput
                          label="Enter Between Eligible Amount"
                          name="AppliedAmount"
                          id="AppliedAmount"
                          inputType="number"
                          disabled={false}
                          required={false}
                          value={instantLoanApplicationInputState.AppliedAmount}
                          error={
                            instantLoanApplicationInputState.Errors
                              .AppliedAmount
                          }
                          onChangeHandler={(event) => {
                            updateInstantLoanApplicationState(
                              event.target.name,
                              event.target.value,
                              parseInt(
                                instantLoanEligibilityData?.[0]?.LoanAmount
                              )
                            );
                          }}
                          leftIcon={
                            <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeStep + 1 === 2 && (
                  <CardAccountPinView
                    titleCard=""
                    titleAccounts="Account Details"
                    showAccountInfo={false}
                    showCardInfo={true}
                    styleClasses="p-0"
                    myCards={myCards}
                    parentPageState={cardVerificationState}
                    updateParentPageState={updateCardVerificationState}
                  />
                )}
              </div>
            </div>
          </MyDialogueView>
        </MyModal>
      </motion.div>
    </>
  );
};

export default InstantLoanEligibleDialog;

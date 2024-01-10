import { InstantLoanEligibilityModel } from 'authenticated_pages/loans/shared/model/data/InstantLoanEligibilityModel';
import { motion } from 'framer-motion';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { Size } from 'global_shared/enum/Size';

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

interface InstantLoanNotEligibleDialogueProps {
  isNotEligibilityDialogueOpen: boolean;
  closeDialogue: () => void;
  notEligibleReason?: string;
}

const InstantLoanNotEligibleDialogue: React.FC<
  InstantLoanNotEligibleDialogueProps
> = ({ isNotEligibilityDialogueOpen, closeDialogue, notEligibleReason }) => {
  var eligibleCriteria: InstantLoanEligibilityModel[] = [];
  try {
    if (notEligibleReason !== undefined) {
      eligibleCriteria = JSON.parse(notEligibleReason);
    } else {
      eligibleCriteria = [];
    }
  } catch {
    eligibleCriteria = [];
  }
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <MyModal
          size={Size.Small}
          show={isNotEligibilityDialogueOpen}
          onClose={closeDialogue}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="flex w-full flex-col items-center bg-background p-6 ">
                <i className="fa-solid fa-face-frown text-6xl text-primary"></i>
                <h3 className="text-xl font-bold text-primary">
                  Sorry! You are not eligible for this loan.
                </h3>
              </div>
            }
            dialogueFooter={
              <div className="flex items-center justify-center gap-4 bg-background p-4">
                <MyButton
                  disabled={false}
                  onClick={() => {
                    closeDialogue();
                  }}
                  type="button"
                  label="ok"
                  styleClass="w-2/5  rounded border bg-primary p-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />
              </div>
            }
            onCancel={() => closeDialogue()}
          >
            <div className="mx:px-14 px-14 py-6 text-left text-onSurface ">
              <h3 className="text-lg font-bold text-error">Findings :-</h3>
              <ul className="list-disc text-lg font-semibold">
                {eligibleCriteria?.map((eligibleItem, index) => (
                  <li
                    key={index}
                    className="mt-2 flex items-center gap-2 text-onSurface"
                  >
                    {eligibleItem?.IsEligibile ? (
                      <i className="fa-solid fa-circle-check text-xl text-success"></i>
                    ) : (
                      <i className="fa-solid fa-circle-xmark  text-xl text-error"></i>
                    )}
                    {eligibleItem.ItemName}
                  </li>
                ))}
              </ul>
            </div>
          </MyDialogueView>
        </MyModal>
      </motion.div>
    </>
  );
};

export default InstantLoanNotEligibleDialogue;

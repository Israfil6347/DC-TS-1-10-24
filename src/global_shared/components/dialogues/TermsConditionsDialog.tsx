import { motion } from 'framer-motion';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import { TermsAndConditionModel } from 'global_shared/model/data/TermsAndConditionModel';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  04 July 2023
 *========================================================================**/

interface TermsConditionsDialogProps {
  dialogueTitle: string;
  dialogueContent: TermsAndConditionModel | null;
  isTermsAndConditionsDialog: boolean;
  closeOrRejectTermsAndConditionsDialog: () => void;
  acceptTermsAndConditions: () => void;
}

const TermsConditionsDialog: React.FC<TermsConditionsDialogProps> = ({
  dialogueTitle,
  dialogueContent,
  isTermsAndConditionsDialog,
  closeOrRejectTermsAndConditionsDialog,
  acceptTermsAndConditions,
}) => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <MyModal
          size={Size.Small}
          show={isTermsAndConditionsDialog}
          onClose={closeOrRejectTermsAndConditionsDialog}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="hover:animate-swing flex w-full flex-col items-center bg-background p-4 hover:cursor-pointer">
                <img src={logoIcon} alt="" className="w-28" />
                <h3 className="font-bold text-primary">{dialogueTitle}</h3>
              </div>
            }
            dialogueFooter={
              <div className=" flex items-center justify-center gap-4 bg-background p-4">
                <MyButton
                  onClick={() => {
                    closeOrRejectTermsAndConditionsDialog();
                  }}
                  type="button"
                  label="Decline"
                  styleClass="w-1/2 rounded border bg-primary py-2 px-4 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />

                <MyButton
                  onClick={() => {
                    acceptTermsAndConditions();
                    closeOrRejectTermsAndConditionsDialog();
                  }}
                  type="button"
                  label="Accept"
                  styleClass="w-1/2 rounded border bg-primary py-2 px-4 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />
              </div>
            }
            onCancel={closeOrRejectTermsAndConditionsDialog}
          >
            <div
              className="prose w-full max-w-full overflow-auto p-4  md:px-16"
              style={{ maxHeight: window.innerHeight - 400 }}
              dangerouslySetInnerHTML={{
                __html: dialogueContent?.BanglaContent!,
              }}
            ></div>
          </MyDialogueView>
        </MyModal>
      </motion.div>
    </>
  );
};

export default TermsConditionsDialog;

import { motion } from "framer-motion";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";
import MyModal from "global_shared/components/MyModal";
import MyDialogueView from "global_shared/components/dialogues/MyDialogueView";
import { logoIcon } from "global_shared/data/base64Icons";
import { Size } from "global_shared/enum/Size";
import ReactDOM from "react-dom";

interface UpComingDialogueProps {
  isUpcomingWindowOpen: boolean;
  closeUpcomingWindow: () => void;
}

const UpComingDialogue: React.FC<UpComingDialogueProps> = ({
  isUpcomingWindowOpen,
  closeUpcomingWindow,
}) => {
  if (isUpcomingWindowOpen) {
    return ReactDOM.createPortal(
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <MyModal
          size={Size.Small}
          show={isUpcomingWindowOpen}
          onClose={closeUpcomingWindow}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="sticky top-0 h-32 p-6">
                <div className="hover:animate-swing flex w-full flex-col items-center hover:cursor-pointer">
                  <img src={logoIcon} alt="" className="w-28" />
                  <h3 className="font-bold text-primary">
                    Dhaka Credit Web Portal
                  </h3>
                </div>
              </div>
            }
            dialogueFooter={
              <div className="flex w-full justify-center gap-4 p-4">
                <button
                  className=" w-2/5  rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  onClick={closeUpcomingWindow}
                >
                  Close
                </button>
              </div>
            }
            onCancel={closeUpcomingWindow}
          >
            <div className="content mt-5 bg-surface p-4 text-onSurface">
              <p className="text-center font-semibold">Upcoming Feature...</p>
            </div>
          </MyDialogueView>
        </MyModal>
      </motion.div>,
      document.getElementById("portal")!
    );
  } else {
    return null;
  }
};

export default UpComingDialogue;

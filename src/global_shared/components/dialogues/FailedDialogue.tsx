import { infoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import MyModal from '../MyModal';
import MyDialogueView from './MyDialogueView';

interface FailedDialogueProps {
  dialogueSize?: Size;
  isDialogueOpen: boolean;
  onCloseButtonClick?: () => void;
  onOkButtonClick?: () => void;
  children?: React.ReactNode;
  cancelButtonText?: string;
  OkButtonText?: string;
}

const FailedDialogue: React.FC<FailedDialogueProps> = ({
  dialogueSize,
  isDialogueOpen,
  onCloseButtonClick,
  onOkButtonClick,
  cancelButtonText = 'Cancel',
  OkButtonText = 'ok',
  children,
}) => {
  return (
    <MyModal
      size={dialogueSize}
      show={isDialogueOpen}
      onClose={() => onCloseButtonClick && onCloseButtonClick()}
    >
      <MyDialogueView
        dialogueHeader={
          <div className="w-full bg-surface ">
            <div className="flex w-full flex-col items-center gap-3 py-3">
              <img src={infoIcon} alt="" className="w-28" />
            </div>
          </div>
        }
        dialogueFooter={
          <div className="flex w-full items-center justify-center gap-4 p-4 ">
            {onCloseButtonClick && (
              <button
                className="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant md:w-2/6"
                onClick={onCloseButtonClick}
              >
                {cancelButtonText}
              </button>
            )}

            {onOkButtonClick && (
              <button
                className="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant md:w-2/6"
                onClick={onOkButtonClick}
              >
                {OkButtonText}
              </button>
            )}
          </div>
        }
        onCancel={() => onCloseButtonClick && onCloseButtonClick()}
      >
        <div className="px-8 py-6 text-center md:px-14">{children}</div>
      </MyDialogueView>
    </MyModal>
  );
};

export default FailedDialogue;

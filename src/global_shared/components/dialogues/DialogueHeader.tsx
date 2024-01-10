import { logoIcon } from 'global_shared/data/base64Icons';

interface DialogueHeaderProps {
  icon: JSX.Element;
  dialogueTitle: string;
}

const DialogueHeader: React.FC<DialogueHeaderProps> = ({
  icon,
  dialogueTitle,
}) => {
  return (
    <div className="w-full bg-background py-6">
      <div className="flex w-full flex-col items-center gap-3">
        {icon ? icon : <img src={logoIcon} alt="" />}
        <h3 className="font-bold text-primary">{dialogueTitle}</h3>
      </div>
    </div>
  );
};

export default DialogueHeader;

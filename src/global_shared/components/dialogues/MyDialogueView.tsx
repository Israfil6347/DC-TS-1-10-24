interface MyDialogueViewProps {
  dialogueHeader?: JSX.Element;
  children?: React.ReactNode;
  dialogueFooter?: JSX.Element;
  onCancel: () => void;
}

const MyDialogueView: React.FC<MyDialogueViewProps> = ({
  dialogueHeader,
  children,
  dialogueFooter,
  onCancel,
}) => {
  return (
    <div className="relative w-full">
      <div onClick={onCancel} className="group absolute top-4 right-4">
        <i className="fa-solid fa-xmark text-3xl transition-all duration-150 group-hover:scale-150 group-hover:cursor-pointer group-hover:text-error"></i>
      </div>
      <div>{dialogueHeader}</div>
      <div>{children}</div>
      <div>{dialogueFooter}</div>
    </div>
  );
};

export default MyDialogueView;

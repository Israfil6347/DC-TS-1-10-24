interface FloatingScrollUpProps {
  onClick: () => void;
}

const FloatingScrollUp: React.FC<FloatingScrollUpProps> = ({ onClick }) => {
  return (
    <div
      className="fixed right-10 bottom-5 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-primary text-onPrimary shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-up text-xl"></i>
    </div>
  );
};

export default FloatingScrollUp;

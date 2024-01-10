import { motion } from 'framer-motion';
import { MyAnimate } from 'global_shared/animations/animate/MyAnimate';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import ReactDOM from 'react-dom';

interface MyModalProps {
  show: boolean;
  onClose: () => void;
  rounded?: string;
  backgroundColor?: string;
  enterAnimation?: object;
  exitAnimation?: object;
  transition?: object;
  size?: Size;
  children?: React.ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({
  children,
  onClose,
  rounded = RoundedClass.Small,
  backgroundColor = 'bg-surface',
  size = Size.Medium,
  enterAnimation = MyAnimate.SlideInFromRight,
  exitAnimation = MyAnimate.SlideOutToLeft,
  show,
}) => {
  return ReactDOM.createPortal(
    <>
      {show && (
        <div
          className={`fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gray-900 bg-opacity-50 text-onSurface backdrop-blur-sm`}
        >
          {/* <button
            className="absolute top-2 right-2 w-6 font-semibold text-onPrimary transition-all duration-300 hover:scale-150 hover:text-error lg:top-6 lg:right-6 lg:w-10"
            onClick={() => onClose()}
          >
            <i className="fa-solid fa-xmark text-3xl"></i>
          </button> */}
          <motion.div
            initial={enterAnimation}
            animate={{ x: 0, y: 0, skewX: '0deg', opacity: 1 }}
            exit={exitAnimation}
            className={`w-full overflow-hidden ${backgroundColor} shadow-sm 
            ${rounded}
            
            ${size === Size.Small && 'md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12'}
            ${
              size === Size.Medium && 'md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12'
            }
            ${
              size === Size.Large &&
              'md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12'
            }`}
            style={{
              maxHeight: window.innerHeight - 60,
            }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </>,
    document.getElementById('portal')!
  );
};

export default MyModal;

import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

interface NotesProps {
  data:
    | {
        __html: string | TrustedHTML;
      }
    | undefined;
}

const Notes: React.FC<NotesProps> = ({ data }) => {
  return (
    <motion.div
      variants={MyVariants.SlideInFromLeft}
      transition={MyTransition.Spring.Low}
    >
      <div className="rounded-md bg-surface p-7 shadow">
        <motion.h2 className="text-center text-lg font-bold uppercase">
          NOTES
        </motion.h2>
        <div className="mt-6" dangerouslySetInnerHTML={data}></div>
      </div>
    </motion.div>
  );
};

export default Notes;

import { motion } from 'framer-motion';

interface InstructionProps {
  data:
    | {
        __html: string | TrustedHTML;
      }
    | undefined;
}

const Instruction: React.FC<InstructionProps> = ({ data }) => {
  return (
    <>
      <div className=" rounded-md bg-surface p-7 shadow">
        <motion.h2 className="text-center text-lg font-bold uppercase">
          Instruction
        </motion.h2>
        <div className="mt-6" dangerouslySetInnerHTML={data}></div>
      </div>
    </>
  );
};

export default Instruction;

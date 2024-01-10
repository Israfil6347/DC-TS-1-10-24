import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

interface ProfessionalDetailsViewProps {
  leaveApplicationRequestStates?: any;
}

const LeaveInformationSummery: React.FC<ProfessionalDetailsViewProps> = ({
  leaveApplicationRequestStates,
}) => {
  const leaveSummery = leaveApplicationRequestStates?.LeaveSummary.filter(
    (balance: any) => balance.Balance !== 0
  );
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
      className="mt-6 flex w-full flex-col justify-start "
    >
      <motion.div
        variants={MyVariants.SlideInFromLeft}
        transition={MyTransition.Spring.Low}
        className="rounded-md bg-surface p-7 shadow"
      >
        <motion.h2 className="text-center text-lg font-bold uppercase">
          Leave Balance
        </motion.h2>
        <ul className="mt-6 divide-y overflow-hidden text-justify">
          <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
            <div className="w-full text-left font-bold md:w-1/2">
              Leave Type
            </div>
            <div className="w-full text-right font-bold md:w-1/2">Balance</div>
          </li>
          {leaveSummery?.map((leaveDetails: any, index: any) => (
            <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
              <div className="w-full text-left md:w-1/2">
                {leaveDetails?.LeaveType}
              </div>
              <div className="w-full text-right md:w-1/2">
                {leaveDetails?.Balance}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default LeaveInformationSummery;

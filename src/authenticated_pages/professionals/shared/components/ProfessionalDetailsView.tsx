import userImg from 'assets/images/User.png';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import moment from 'moment';
interface ProfessionalDetailsViewProps {
  professionalDetails: any;
}

const ProfessionalDetailsView: React.FC<ProfessionalDetailsViewProps> = ({
  professionalDetails,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
      className="flex w-full flex-col justify-start gap-6 lg:w-5/12"
    >
      <motion.div
        variants={MyVariants.SlideInFromLeft}
        transition={MyTransition.Spring.Low}
        className="rounded-md bg-surface p-7 shadow"
      >
        <motion.h2 className="text-center text-lg font-bold uppercase">
          Employee Information
        </motion.h2>
        <div className="flex justify-center ">
          <div className="my-4  w-24 ">
            {professionalDetails?.PersonPhoto === '' ? (
              <img
                className="mb-2 h-20  w-20 rounded-full bg-white p-2 shadow"
                src={userImg}
                alt="user"
              />
            ) : (
              <img
                className="mb-2 h-20  w-20 rounded-full bg-white p-2 shadow"
                src={`data:image/png;base64,${professionalDetails?.PersonPhoto}`}
                alt="user"
              />
            )}
          </div>
        </div>
        <motion.h2 className="text-center text-lg font-bold uppercase">
          {professionalDetails?.FullName}
        </motion.h2>
        <motion.h2 className="my-2 text-center text-xl font-bold uppercase">
          {professionalDetails?.DesignationName}
        </motion.h2>
        <p className="text-center text-sm font-bold uppercase">
          {professionalDetails?.DepartmentName}
        </p>
      </motion.div>
      <motion.div
        variants={MyVariants.SlideInFromLeft}
        transition={MyTransition.Spring.Low}
        className="rounded-md bg-surface p-7 shadow"
      >
        <motion.h2 className="text-center text-lg font-bold uppercase">
          Employee Details
        </motion.h2>
        <ul className="mt-6 divide-y overflow-hidden text-justify">
          <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
            <div className="w-full text-left md:w-1/2">Employee Code</div>
            <div className="w-full text-right md:w-1/2">
              {professionalDetails?.EmployeeCode}
            </div>
          </li>

          <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
            <div className="w-full text-left md:w-1/2">Email</div>
            <div className="w-full text-right md:w-1/2">
              {professionalDetails?.EmployeeEmail}
            </div>
          </li>
          <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
            <div className="w-full text-left md:w-1/2">Supervisor</div>
            <div className="w-full text-right md:w-1/2">
              {professionalDetails?.SupervisorName}
            </div>
          </li>
          <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
            <div className="w-full text-left md:w-1/2">Category</div>
            <div className="w-full text-right md:w-1/2">
              {professionalDetails?.EmployeeCategoryName}
            </div>
          </li>
          <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
            <div className="w-full text-left md:w-1/2">Branch</div>
            <div className="w-full text-right md:w-1/2">
              {professionalDetails?.BranchName}
            </div>
          </li>
          {/* <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
            <div className="w-full text-left md:w-1/2">ID Card Number</div>
            <div className="w-full text-right md:w-1/2">
              {professionalDetails?.SupervisorName}
            </div>
          </li> */}
          <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
            <div className="w-full text-left md:w-1/2">Join Date</div>
            <div className="w-full text-right md:w-1/2">
              {moment(professionalDetails?.JoiningDate).format('DD-MMM-YYYY')}
            </div>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ProfessionalDetailsView;

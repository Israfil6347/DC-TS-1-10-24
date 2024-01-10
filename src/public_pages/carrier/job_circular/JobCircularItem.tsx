import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import SmallCardWithIcon from 'global_shared/components/SmallCardWithIcon';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import moment from 'moment';
import { JobCircularModel } from '../shared/model/JobCircularModel';

interface JobCircularItemProps {
  jobCircularModel?: JobCircularModel;
  indexNumber: number;
}

const JobCircularItem: React.FC<JobCircularItemProps> = ({
  jobCircularModel,
  indexNumber,
}) => {
  return (
    <motion.div
      variants={MyVariants.SlideInFromLeft}
      transition={{ ...MyTransition.Spring.Low, delay: 0.1 * indexNumber }}
    >
      <SmallCardWithIcon
        icon={<i className="fa-solid fa-briefcase text-5xl text-primary"></i>}
        rounded={RoundedClass.Medium}
        heading={jobCircularModel?.JobPosition}
        actionLevel={'View details'}
        action={`/job-circulars/${jobCircularModel?.JobPosition}/${jobCircularModel?.JobCircularId}`}
      >
        <div className="text-xs group-hover:cursor-pointer">
          <span className="">Deadline: </span>
          {moment(jobCircularModel?.ApplicationDeadline).format('DD-MMM-YYYY')}
        </div>
      </SmallCardWithIcon>
    </motion.div>
  );
};

export default JobCircularItem;

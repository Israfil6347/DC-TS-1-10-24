import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyCard from 'global_shared/components/MyCard';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import { FamilyAndRelativeViewModel } from '../model/data/FamilyAndRelativeViewModel';

interface FamilyRelativesProps {
  familyAndRelatives: FamilyAndRelativeViewModel[] | null;
}

const FamilyRelatives: React.FC<FamilyRelativesProps> = ({
  familyAndRelatives,
}) => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        variants={MyVariants.SlideInFromLeft}
        transition={MyTransition.Spring.Low}
        className="md:1/2  w-full bg-surface py-5"
      >
        <div className="text flex justify-center text-xl">
          <h1 className="font-bold uppercase text-primary">Family Members</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-2">
          {familyAndRelatives?.map((relation, index) => (
            <motion.div
              initial="initial"
              animate="animate"
              transition={MyTransition.StaggerChildren.Fast}
            >
              <MyCard
                rounded={RoundedClass.Medium}
                shadow={Size.Small}
                bgColor={'bg-surface'}
                minimumHeight={60}
                borderColor={`${
                  relation.RequestStatus === 'Approved'
                    ? 'border border-gray-300'
                    : 'border border-orange-400'
                }`}
              >
                <div
                  className={`group flex cursor-pointer items-center gap-4 p-4`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <i className="fa-solid fa-people-roof text-3xl"></i>
                  </div>
                  <div className="">
                    <p className="font-semibold">{relation?.FullName}</p>
                    <p className="text-xs">{relation.RelationName}</p>
                  </div>
                </div>
              </MyCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default FamilyRelatives;

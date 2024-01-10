import ChildCare from 'assets/images/project/dc_child.jpg';
import DCSchool from 'assets/images/project/dcschool.jpg';
import GirlHostel from 'assets/images/project/hostel.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import SmallCardWithIcon from 'global_shared/components/SmallCardWithIcon';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import useAutoScrollUp from 'global_shared/hooks/useAutoScrollUp';
import BeautyParlor from 'assets/images/service/beauty_parlor.jpg';
import CulturalAcademy from 'assets/images/service/cultural_academy.jpg';
import Gym from 'assets/images/service/gym.jpg';
import ServiceItem from 'public_pages/our_services/ServiceItem';
import SecurityService from 'assets/images/service/security.jpg';

function Projects() {
  useAutoScrollUp();
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <PageContainer>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="w-full"
          >
            <SmallCardWithIcon
              icon={
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={ChildCare}
                />
              }
              rounded={RoundedClass.Medium}
              action={'/projects/child-care/'}
              actionLevel={'Read More'}
              heading={'Dhaka Credit’s Child Care & Education Center'}
              height={''}
            >
              <p className="">
                World class standard child care facility is provided to the ...
              </p>
            </SmallCardWithIcon>
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="w-full"
          >
            <SmallCardWithIcon
              icon={
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={DCSchool}
                />
              }
              rounded={RoundedClass.Medium}
              action={'/projects/dc-school/'}
              actionLevel={'Read More'}
              heading={'Dhaka Credit Union School'}
              height={'h-32'}
            >
              <p className="">
                Education is the first step towards a brighter future for ...
              </p>
            </SmallCardWithIcon>
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="w-full"
          >
            <SmallCardWithIcon
              icon={
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={SecurityService}
                />
              }
              rounded={RoundedClass.Medium}
              action={'/services/security-service/'}
              actionLevel={'Read More'}
              heading={'Security Services'}
              height={'h-32'}
            >
              <p className="">
                D.C provides 'Security Services' to all types of companies...
              </p>
            </SmallCardWithIcon>
          </motion.div>

          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="w-full"
          >
            <SmallCardWithIcon
              icon={
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={GirlHostel}
                />
              }
              rounded={RoundedClass.Medium}
              action={'/projects/dc-hostel/'}
              actionLevel={'Read More'}
              heading={`Dhaka Credit Girl's Hostel`}
              height={'h-32'}
            >
              <p className="">
                Perfect for working women and students with in dhaka city ...
              </p>
            </SmallCardWithIcon>
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="w-full"
          >
            <SmallCardWithIcon
              icon={
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={BeautyParlor}
                />
              }
              rounded={RoundedClass.Medium}
              action={'/projects/beauty-parlor/'}
              actionLevel={'Read More'}
              heading={'Beauty Parlor'}
              height={'h-32'}
            >
              <p className="">
                Various housing projects are built for the betterment ...
              </p>
            </SmallCardWithIcon>
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="w-full"
          >
            <SmallCardWithIcon
              icon={
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={CulturalAcademy}
                />
              }
              rounded={RoundedClass.Medium}
              action={'/projects/cultural-academy/'}
              actionLevel={'Read More'}
              heading={'Cultural Academy'}
              height={'h-32'}
            >
              <p className="">
                D.C started its 'Cultural Academy' for cultural ...
              </p>
            </SmallCardWithIcon>
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="w-full"
          >
            <SmallCardWithIcon
              icon={
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src={Gym}
                />
              }
              rounded={RoundedClass.Medium}
              action={'/projects/gym/'}
              actionLevel={'Read More'}
              heading={'Gym'}
              height={'h-32'}
            >
              <p className="">
                Well-equipped 'Gym' with flexible timing and various ...
              </p>
            </SmallCardWithIcon>
          </motion.div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default Projects;

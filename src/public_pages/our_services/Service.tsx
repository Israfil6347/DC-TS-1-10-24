import AmbulanceService from 'assets/images/service/ambulance.png';
import ATM from 'assets/images/service/atm.jpg';
import DCTV from 'assets/images/service/dc_tv.jpg';
import DoctorChamber from 'assets/images/service/doctor.jpg';
import MMS from 'assets/images/service/mms.jpg';
import NewsService from 'assets/images/service/news.jpg';
import OtherServices from 'assets/images/service/others.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import useAutoScrollUp from 'global_shared/hooks/useAutoScrollUp';
import ServiceItem from './ServiceItem';

function Services() {
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
          >
            <ServiceItem
              url="/services/atm-service/"
              image={ATM}
              heading="24×7 ATM Service"
              subHeading="State-of-the-art 24×7 'ATM Services' for its members..."
            />
          </motion.div>

          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <ServiceItem
              url="/services/doctors-chamber-service/"
              image={DoctorChamber}
              heading="Doctor’s Chamber"
              subHeading="Expert doctors are ready to take care of you & your..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <ServiceItem
              url="/services/ambulance-service/"
              image={AmbulanceService}
              heading="Ambulance Service"
              subHeading="'Ambulance service' for our members and their family..."
            />
          </motion.div>

          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <ServiceItem
              url="/services/dc-tv/"
              image={DCTV}
              heading="D.C Online TV"
              subHeading="Internet-based online television Channel network..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <ServiceItem
              url="/services/dc-news/"
              image={NewsService}
              heading="D.C Online News"
              subHeading="‘dcnewsbd.com’ provides up-to-date information to..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <ServiceItem
              url="/services/mms/"
              image={MMS}
              heading="D.C App M.M.S"
              subHeading="New dimension to the digitization of ‘Dhaka Credit’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <ServiceItem
              url="/services/other-services/"
              image={OtherServices}
              heading="Other Services"
              subHeading="Various ‘‘Other Services’’ that is being offered......"
            />
          </motion.div>
        </div>
      </PageContainer>
    </motion.div>
  );
}
export default Services;

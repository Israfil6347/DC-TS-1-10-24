import image from 'assets/images/office_bearers/Ignatious_Hemanta_Corraya.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';

const PresidentMessage = () => {
  return (
    <PageContainer>
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.VeryFast}
        className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 md:text-justify lg:p-20 lg:text-justify"
      >
        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
        >
          <img
            src={image}
            className="float-left mr-4  mb-2 w-full rounded lg:w-96"
            alt=""
          />
        </motion.div>
        <div className="">
          <motion.h4
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mb-4 text-2xl font-semibold uppercase"
          >
            Presidents Message
          </motion.h4>
          <div className="mb-4 space-y-2 text-justify">
            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              In the fifties, the economic condition of Christian community of
              this region was extremely bad. They had to borrow money at very
              high interest from the usurious moneylenders. Observing this
              situation, the then Archbishop Lawrence Leo Grenar, CSC became
              very anxious. He started thinking how the economic condition of
              these Christians could be developed. He sent Reverent Father
              Charles Joseph Young CSC to Coady Institute, Canada for training
              on Co-operative. After receiving training, Father Charles Joseph
              Young CSC established `The Christian Co-operative Credit Union
              Limited, Dhaka (Dhaka Credit)’ in 3rd July, 1955 at Luxmibazar
              with only 50 members. With the establishment of Dhaka Credit, the
              Credit Union movement has been spaded though out the country
              afterword. Now, Dhaka Credit is the largest and oldest
              Co-operative Credit Union of its kind in Bangladesh. Dhaka Credit
              was awarded best cooperative award (Gold Medal) from the
              government of Bangladesh for its remarkable contributions in
              co-operative sectors.
            </motion.p>

            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Having vision to be A SMART and leading Co-operative Credit Union
              in Bangladesh and Asia to attain self-reliant and dignified
              community, Dhaka Credit is working hard. At present we are an
              organization of 86 product-service and projects having 45,546
              members and total BDT 1188 Crore assets. Dhaka Credit is working
              in 4 Districts (Dhaka, Narayangonj, Gazipur and Munshigonj) with
              12 Service Centers and 23 Collection booths.
            </motion.p>

            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Along with Credit Union’s regular activities, Dhaka Credit is
              running an International standard Child Care and Education Center,
              a School, two Resort and Training Center, three Women/girls
              Hostels, one GYM, one Cultural Academy, one Security Service etc.
              A 300-bedded Divine Mercy Hospital, the historical and only
              Cooperative hospital initiative in Bangladesh, is going to be
              inaugurated by December 2023. In addition, medical college,
              nursing college will also be established side by side in the same
              campus very soon.
            </motion.p>

            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              ICT is one of our main focuses and we have a full flagged ICT
              team. Our vision 2025 is to make Dhaka Credit paperless. At
              present our members are getting 24/7 ATM service in our 10
              premises. Using our Dhaka Credit App, member can know their
              account information and can transfer and withdraw money from their
              accounts. For introducing automated loan approval system, we have
              lunched Instant Loan. Our members are getting instant loan service
              by using our Dhaka Credit App. All the ICT applications Dhaka
              Credit using at present is developed by our own ICT team. Now we
              are working with other Credit Unions for their digitalization. On
              that view, a software has already been developed titled
              ERP(Enterprise Resource Planning). We are in a position to export
              that software worldwide.
            </motion.p>

            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              For strengthen cooperative movement in Bangladesh, Dhaka Credit is
              seriously working with the Central Association of Christian
              Cooperatives (CACCO) Ltd and The Cooperative Credit Union League
              of Bangladesh Ltd, CCULB. With the participation of our
              stakeholders; we will be able to utilize the optimum
              opportunities.
            </motion.p>

            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              We portray true Christian love and care through products &
              services of our great organization.
            </motion.p>

            <ul className=" pt-2">
              <li> Best wishes to everyone </li>
              <li> Ignatious Hemanta Corraya</li>
              <li> President</li>
              <li>The Christian Co-Operative Credit Union Ltd., Dhaka.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
};

export default PresidentMessage;

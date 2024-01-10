import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

const OurStory = () => {
  return (
    <motion.div
      className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 md:text-justify lg:p-20 lg:text-justify"
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
    >
      <div className="">
        <motion.h4
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="mb-4 text-2xl font-semibold uppercase"
        >
          Our Story
        </motion.h4>
        <div className="mb-2 space-y-4 text-justify">
          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            An american origin priest named
            <strong> Father Charles J. Young</strong> CSC founded, "The
            Christian Co-Operative Credit Union Limited" on July 3<sup>rd</sup>,
            1955, which is also popularly known as “Dhaka Credit”. It was
            registered under the Bengal co-operative act 1940.
          </motion.p>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            The main focus of this organization is to promote the standard of
            living of its members who are mainly living situated in the
            operational areas in four districts, such as Dhaka, Gazipur,
            Narayanganj, and Munshiganj districts. Gradually, Dhaka Credit is
            expanding its services to common people irrespective of their Caste
            or Creed and exceeding the traditional dealings with loans &amp;
            installments.
          </motion.p>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            Dhaka Credit’s headquarters is located at east Tejturibazar in the
            Dhaka metropolitan area. Currently, "Dhaka Credit" has around 86
            innovative products on loans and savings for its members and
            different kinds of social projects and services that are being
            developed and some already in service.
          </motion.p>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            Dhaka Credit is the first as well as one of the largest co-operative
            credit unions of its kind in Bangladesh, with over 45,546 active
            members, 12 service centers, 23 collection booths, and nearly 619
            highly qualified staff members. "Dhaka Credit" is constantly
            increasing its products and projects to better satisfy the changing
            and demanding needs of the members and to keep up with the demand,
            "Dhaka Credit" is also increasing its workforce to provide better
            employment and also services to its members. This organization has
            22 members on Managing Board. Dhaka recently celebrated its 68th
            anniversary on 3rd July 2023.
          </motion.p>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            Dhaka Credit is currently operating projects such as "Dhaka Credit"
            Resort and Training Center, International Standard Childcare &
            Education Center, Security Service, Dhaka Credit Union School,
            Cultural Academy, multipurpose Projects, Gym, Ambulance Service, an
            Internet-Based DCTVBD.com, news portal dcnewsbd.com, IELTS & English
            Spoken Course, 3 Girls Hostels, Students Project for part-time
            working students, Health Project, Funeral Support Fund, McCarthy
            Library, Archives, Job Linking Cells, etc..
          </motion.p>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            Along with savings products, "Dhaka Credit" has a long list of loan
            products that members can take advantage of with low interest. These
            loans includes General Loan, Business Loan, Car Loan, Capacity Based
            Loan, House Building Loan, Emergency Loan (Mother & Child),
            Competency-Based Loan, Small & Medium Business Loan, Credit Ceiling
            Loan, Solvency Loan for Higher Education, Solvency Loan for Going
            Abroad, Top-Up Loan, Dhaka Credit Flat Purchase Loan, Flat Purchase
            Loan, Dhaka Metropolitan House Building Loan, Consumer Loan, Bill
            Pay Loan, Loan against Monthly Savings, Gym Loan, Industrial Loan &
            General Credit Ceiling Loan, Loan against Long Term Savings Deposit,
            Secure Over Draft (SOD) Loan, Open Installment Loan, Own Share Loan,
            Etc.
          </motion.p>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            Dhaka Credit in its recent years, the Hospital Project Foundation
            Stone Laying Ceremony was attended by many dignitaries of the
            society headed by parliament member Meher Afroze Chumki in the
            chair. The Foundation Stone for the Multi-Purpose project was
            inaugurated by His Excellency Archbishop George Kocherry the Vatican
            Ambassador of Dhaka. There are more dream projects for Dhaka Credit
            in the Pipeline.
          </motion.p>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            The construction of Nadda Multi-Purpose Project will consist of a
            beauty parlor & Training Center,hostel for the girls of indigenous
            communities in Bangladesh. Besides these, Dhaka Credit will start
            seven more beauty parlor outlets in different parts of Dhaka with
            the concept of creating more job opportunities for the community.
          </motion.p>

          <motion.h4
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="text-2xl font-semibold"
          >
            Objectives:
          </motion.h4>

          <ul>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              To promote the habit of thrift among its Members.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              To Create Funds received from the members and then let them borrow
              these funds for the member’s productive purposes.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              To Promote Self-Reliant &amp; Mutual Benefits among the members to
              improve their Socio-Economic Conditions.
            </motion.li>
          </ul>

          <motion.h4
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="text-2xl font-semibold"
          >
            3 Year Strategic Plan
          </motion.h4>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            Dhaka Credit already had five 3 years strategic plans until now,
            these are as follows;
          </motion.p>

          <ul>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              1st 3-Year Strategic Plan (2004-2007)
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              2nd 3-Year Strategic Plan (2008-2011)
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              3rd 3-Year Strategic Plan (2011-2014)
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              4th 3-Year Strategic Plan (2014-2017)
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              5th 3-Year Strategic Plan (2017-2020)
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              6th 3-year Strategic Plan (2020-2023)
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              7th 3-year Strategic Plan (2023-2026) is running
            </motion.li>
          </ul>

          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            Currently, Dhaka Credit is working under these strategic plans for
            Financial Viability, Operational Efficiency, Member Satisfaction,
            Competitive Advantage Position, Employee Satisfaction, and Good
            Co-Operative Governance.
          </motion.p>

          <motion.h4
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="text-2xl font-semibold"
          >
            Patronized
          </motion.h4>

          <ul>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              We are patronizing the Freedom Fighter of our Liberation War in
              1971.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Christian Businessman by Creating Christian Businessman Forum.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Christian Writers through Christian Writers Forum.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Christian Bankers by creating Christian Bankers Association.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Children &amp; Women For Empowerment.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Encouraging &amp; Supporting Young Leadership.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Members for&nbsp;Entrepreneurship.
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStory;

import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import useAutoScrollUp from 'global_shared/hooks/useAutoScrollUp';
import LoanItem from './LoanItem';

function LoanProducts() {
  useAutoScrollUp();
  return (
    <div>
      <PageContainer>
        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.Fast}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/general-Loan/"
              Heading="General Loan"
              SubHeading="Any member can take loan for various purposes..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/business-loan/"
              Heading="Business Loan"
              SubHeading="‘‘Business Loan’’ provides financial assistance to businesses..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/smd-loan/"
              Heading="SMB Loan"
              SubHeading="Small &amp; medium size business requires this loan the most..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/car-loan/"
              Heading="Car Loan"
              SubHeading="Own the car of your dream with DC’s ‘‘Car Loan’’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/metro-house-building-loan/"
              Heading="Metro H.Building"
              SubHeading="Build a house with DC’s ‘‘Metropolitan House Building Loan’’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/flat-purchase-loan/"
              Heading="Flat Purchase"
              SubHeading="Owning a dream flat DC’s ‘‘Flat Purchase Loan’’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/house-building-loan/"
              Heading="House Building Loan"
              SubHeading=" Own a high rise building with DC’s ‘‘House Building Loan’’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/credit-ceiling-loan/"
              Heading="Credit Ceiling Loan"
              SubHeading="Business ‘‘CC Loan’’ is taken to overcome different financial crisis..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/industrial-loan/"
              Heading="Industrial Loan"
              SubHeading="‘‘Industrial loan’’ supports current and future entrepreneurs..."
            />
          </motion.div>
          {/*  <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/capacity-based-loan/"
              Heading="Capacity Based Loan"
              SubHeading="This loan is for financially solvent members of the union..."
            />
          </motion.div> */}
          {/* <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/general-cc-loan/"
              Heading="General CC Loan"
              SubHeading=" This loan is designed to improve the members standard of living..."
            />
          </motion.div> */}
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/going-abroad-loan/"
              Heading="For Going Abroad"
              SubHeading="Provide members with financial support for going Abroad..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/solvency-higher-edu/"
              Heading="Solvency For H.Edu"
              SubHeading="Students can utilize this loan for studying abroad..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/top-up-loan/"
              Heading="Top Up"
              SubHeading="Extra financial boost on ‘‘Top Up’’ other loans..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/bill-pay-loan/"
              Heading="Bill Pay Loan"
              SubHeading="This loan will help members overcome bill expenses..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/higher-education-loan/"
              Heading="Higher Education"
              SubHeading="Provides financial support for educational purpose..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/higher-education-support-loan/"
              Heading="Higher.Edu Support"
              SubHeading="This loan provides the maximum loan of BDT 15 Lac..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/professional-training-loan/"
              Heading="Prof. Training"
              SubHeading=" This loan is taken to cover professional training cost..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/consumer-loan/"
              Heading="Consumer Loan"
              SubHeading="This loan helps improve members standard of living..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/gym-loan/"
              Heading="D.C Gym Loan"
              SubHeading="Lead a healthy lifestyle with ‘‘Dhaka Credit’s Gym Loan’’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/loan-against-ltsd/"
              Heading="Loan Against LTSD"
              SubHeading="Any member can take loan against their ‘‘LTSD’’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/open-installment-loan/"
              Heading="Open Installment Loan"
              SubHeading="Depositors can take Loan against their..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/own-share-loan/"
              Heading="Own Share Loan"
              SubHeading="The members can take against their own share..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/secured-over-draft-loan/"
              Heading="Secured Over Draft"
              SubHeading="A savings depositor can make loan against long term savings..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/dc-flat-purchase-loan/"
              Heading="D.C Flat Purchase Loan"
              SubHeading="Own a D.C built flat with ‘‘D.C Flat Purchase Loan’’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/emergency-loan/"
              Heading="Emergency Loan"
              SubHeading="‘‘Emergency Loan’’ is for urgent treatment that may arise..."
            />
          </motion.div>
          {/* <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/competency-based-loan/"
              Heading="Competency Based Loan"
              SubHeading="Based on the financial condition &amp; ability to repay..."
            />
          </motion.div> */}
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/instant-loan/"
              Heading="Instant Loan"
              SubHeading=" Instant loan to meet the urgent financial needs..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/entrepreneur-loan/"
              Heading="Entrepreneur Loan"
              SubHeading="This loan is for financial needs of businessmen..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/double-loan-on-fixed-deposit/"
              Heading="Double Loan on FDR"
              SubHeading=" Double loan against the member’s fixed deposit..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <LoanItem
              url="/loan-products/various-other-loans/"
              Heading="Various Other Loans"
              SubHeading="Rest of the loan facilities are mentioned here..."
            />
          </motion.div>
        </motion.div>
      </PageContainer>
    </div>
  );
}

export default LoanProducts;

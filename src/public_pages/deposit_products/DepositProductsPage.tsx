import { motion } from "framer-motion";
import { MyVariants } from "global_shared/animations/animate/MyVariants";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";
import PageContainer from "global_shared/components/PageContainer";
import useAutoScrollUp from "global_shared/hooks/useAutoScrollUp";
import DepositItem from "./components/DepositItem";

function DepositProductsPage() {
  useAutoScrollUp();
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <PageContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/savings-account/"
              Heading="Savings"
              SubHeading=" ‘‘Savings Account’’  is mandatory for all other products in ‘‘Dhaka Credit’’..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/share-account/"
              Heading="Credit Account"
              SubHeading="This account is for self-reliant members of the union..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/std-account/"
              Heading="STD Account"
              SubHeading="STD Account provides interest to the depositors twice a year..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/bee-savers-account/"
              Heading="Bee-Savers"
              SubHeading="Children from 1 day to 12-year-old can become a “Bee-Savers”..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/smart-savers-account/"
              Heading="Smart Savers"
              SubHeading="This account promotes savings habit among teenagers..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/education-savings-account/"
              Heading="Education Savings"
              SubHeading="Helps member meet the educational expenses..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/ltsd-account/"
              Heading="LTSD Account"
              SubHeading="“LTSD” helps depositors earn high interest rate for a fixed rate..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/monthly-savings-account/"
              Heading="Monthly Savings"
              SubHeading="“Monthly Savings” prepares for any future requirements..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/festival-savings-account/"
              Heading="Festival Savings"
              SubHeading="Enjoy the festive season without worrying about the expenses..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/troimashik-savings-account/"
              Heading="Troimashik Savings"
              SubHeading="This accounts provides quarterly interest with min deposit of 1 Lac..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/aged-savings-account/"
              Heading="Aged Savings"
              SubHeading="This savings scheme ensures financial security after retirement..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/double-deposit-account/"
              Heading="Double Deposit"
              SubHeading="Provides double benefits for the depositors with certain period..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/millionaire-deposit-account/"
              Heading="Millionaire Deposit"
              SubHeading=" Become a millionaire within a certain period with this scheme..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/housing-deposit-account/"
              Heading="Housing Deposit"
              SubHeading="This scheme can make your dream of owning a House come true..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/marriage-deposit-account/"
              Heading="Marriage Deposit"
              SubHeading="Perfect for dealing with marriage cost for young couple &amp; parents..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/kotipoti-deposit-account/"
              Heading="Kotipoti Deposit"
              SubHeading="Premium deposit scheme for members to become “KotiPoti  Deposit” ..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/hospital-bond-account/"
              Heading="Hospital Bond"
              SubHeading="Become a part of “Divine Mercy General Hospital Bond” ..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/health-care-account/"
              Heading="D.C. H.C.S"
              SubHeading="“Dhaka Credit Health Care Scheme”  is for everyone... ..."
            />
          </motion.div>
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
          >
            <DepositItem
              url="/deposit-products/pension-benefit-account/"
              Heading="Pension Benefit"
              SubHeading="“Pension Benefit Scheme” for future retirement...... ..."
            />
          </motion.div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default DepositProductsPage;

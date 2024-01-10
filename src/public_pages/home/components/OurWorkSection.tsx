import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import { NavLink } from 'react-router-dom';

function OurWorkSection() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
        className="-mt-40 md:mt-0 "
      >
        <motion.h2
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="mb-20 -mt-10 text-center text-3xl font-bold"
        >
          What we do?..
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 ">
          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="group relative cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-sm">
                <i className="fa-solid fa-piggy-bank text-4xl text-onPrimary"></i>
              </div>
            </div>
            <NavLink
              className="block h-full rounded-lg bg-surface p-6 shadow-sm group-hover:shadow-md"
              to="deposit-products"
            >
              <div className="flex flex-col gap-3">
                <h5 className="mt-4 text-lg font-semibold">Deposit Accounts</h5>
                <p className="">
                  Dhaka Credit’s various deposit products are specially designed
                  for the betterment of the members. These deposits are designed
                  for meeting the current and future requirements that may arise
                  due to any situation.
                </p>
                <div className="">
                  <span className="py-2 text-gray-400 group-hover:text-primary">
                    View All
                  </span>
                </div>
              </div>
            </NavLink>
          </motion.div>

          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="group relative cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-sm">
                <i className="fa-solid fa-sack-dollar text-4xl text-onPrimary"></i>
              </div>
            </div>
            <NavLink
              className="block h-full rounded-lg bg-surface p-6 shadow-sm group-hover:shadow-md"
              to="loan-products"
            >
              <div className="flex flex-col gap-3">
                <h5 className="mt-4 text-lg font-semibold">Loan Products</h5>
                <p className="">
                  Dhaka Credit has introduced various loan products for its
                  members with the lowest interest rates. These loans are
                  designed in such a way that members can take loan easily
                  according to their need.
                </p>
                <div className="">
                  <span className="py-2 text-gray-400 group-hover:text-primary">
                    View All
                  </span>
                </div>
              </div>
            </NavLink>
          </motion.div>

          <motion.div
            variants={MyVariants.SlideInFromLeft}
            transition={MyTransition.Spring.Low}
            className="group relative cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-sm">
                <i className="fa-solid fa-truck-medical text-4xl text-onPrimary"></i>
              </div>
            </div>
            <NavLink
              className="block h-full rounded-lg bg-surface p-6 shadow-sm group-hover:shadow-md"
              to="services"
            >
              <div className="flex flex-col gap-3">
                <h5 className="mt-4 text-lg font-semibold">Our Services</h5>
                <p className="">
                  Dhaka Credit has become much more than just a financial
                  organization, it has begun providing services for the
                  different sectors to the members.
                </p>
                <div className="">
                  <span className="py-2 text-gray-400 group-hover:text-primary">
                    View All
                  </span>
                </div>
              </div>
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default OurWorkSection;

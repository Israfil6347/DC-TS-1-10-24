import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function PensionBenefitScheme() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
    >
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <div className=" text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <motion.h2
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-2 p-1 text-2xl font-semibold lg:text-3xl"
              >
                Pension Benefit Scheme
              </motion.h2>
              <div className="mb-4 p-1 text-justify">
                <motion.div
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  After a member retires, they can become dependent on others
                  for their daily expenses and are unable to live their life
                  according to their wants. This Pension Benefit Scheme Product
                  is for those members who want don’t to become dependent on
                  others for their daily expenses.
                </motion.div>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl"
                >
                  Features
                </motion.h4>
                <ul className="mt-5 list-disc">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The account will be divided into two stages. One stage is
                    for deposit and the other stage is for benefit. The members
                    will pay a monthly deposit in the first stage of the scheme
                    and in the second stage, the member will receive benefits
                    for the deposits made in the first stage of the scheme.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    After the completion of 1 year of this scheme, a depositor
                    can avail of a loan against 90% of the total deposit and the
                    interest rate will be at 12%.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Deposit: Tk 500, Tk 1000, and multiply of 1000 up to a
                    maximum of Tk 25000. The account’s deposit stages are for
                    6/9/12/15/18/21/24/27/30 years and based on the Deposit
                    stage, the account’s benefit stages are
                    4/6/8/10/12/14/16/18/20 years.
                  </motion.li>
                </ul>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl"
                >
                  Requirements
                </motion.h4>
                <ul className="mt-5 list-disc">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Any savings holder can avail of this scheme by filling up a
                    form.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    While opening the account, a color passport-size photo of
                    the nominee should be submitted.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Savings accounts holder can open multiple schemes.
                  </motion.li>
                </ul>
              </div>
              <div className="scrollbar-thin scrollbar-track-primary mx-2 mb-4 overflow-scroll">
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold"
                >
                  Account Period:
                </motion.h4>

                <motion.table
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="table w-full"
                >
                  <thead className="sticky -top-0 bg-white text-onSurface">
                    <tr className="">
                      <th className="border border-slate-600 p-2 text-left md:text-center">
                        <p>Period</p>
                      </th>
                      <th className="border border-slate-600 p-2 text-left md:text-center">
                        <p>Deposit Stage</p>
                      </th>
                      <th className="border border-slate-700 p-2 text-left md:text-center">
                        <p>Benefit Stage</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="flex-1 bg-backgroundVariant sm:flex-none">
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        10 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        6 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        4 Years
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        15 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        9 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        6 Years
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        20 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        12 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        8 Years
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        25 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        15 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        10 Years
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        30 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        18 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        12 Years
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        35 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        21 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        14 Years
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        40 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        24 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        16 Years
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        45 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        27 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        18 Years
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        50 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        30 years
                      </td>
                      <td className="border border-slate-700 p-2 text-left md:text-center">
                        20 Years
                      </td>
                    </tr>
                  </tbody>
                </motion.table>
              </div>

              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="scrollbar-thin scrollbar-track-primary mx-2 mb-4 overflow-scroll"
                // style={{ height: 776 }}
              >
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold"
                >
                  Benefits:
                </motion.h4>
                <motion.table
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="table w-full"
                >
                  <thead className="sticky -top-0 bg-white text-onSurface">
                    <tr className="">
                      <th
                        colSpan={2}
                        className="border border-slate-700 p-2 text-center"
                      >
                        Deposit Period (Years)
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        6 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        9 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        12 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        15 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        18 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        21 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        24 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        27 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        30 Years
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={2}
                        className="border border-slate-700 p-2 text-center"
                      >
                        Benefit Period (Years)
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        4 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        6 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        8 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        10 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        12 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        14 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        16 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        18 Years
                      </th>
                      <th className="border border-slate-700 p-2 text-left">
                        20 Years
                      </th>
                    </tr>
                  </thead>
                  <tbody className="flex-1 bg-backgroundVariant sm:flex-none">
                    <tr>
                      <td
                        rowSpan={12}
                        className="text-sideways border border-slate-700 p-2 text-left font-bold"
                      >
                        Monthly Deposit Amount and Benefit (taka)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left font-bold">
                        Monthly Deposit
                      </td>

                      <td
                        colSpan={9}
                        className="border border-slate-700 p-2 text-center font-bold"
                      >
                        Monthly Pension Benefit (Taka)
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        500
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1138
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1415
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1758
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2214
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2787
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3560
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4547
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5895
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7646
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        1000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2275
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2830
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3515
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4427
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5573
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7119
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9093
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11790
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15291
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        2000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4550
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5660
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7030
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8854
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11146
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14238
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        18186
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        23580
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        30582
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        3000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6825
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8490
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10545
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13281
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        16719
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        21357
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        27279
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        35370
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        45873
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        4000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9100
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11320
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14060
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17708
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22292
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        28476
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        36372
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        47160
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        61164
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        5000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11375
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14150
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17575
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22135
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        27865
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        35595
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        45465
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        58950
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        76455
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        10000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22750
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        28300
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        35150
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        44270
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        55730
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        71190
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        90930
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        117900
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        152910
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        15000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        34125
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        42450
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        52725
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        66405
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        83595
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        106785
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        136395
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        176850
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        229365
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        20000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        45500
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        56600
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        70300
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        88540
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        111460
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        142380
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        181860
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        235800
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        305820
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        25000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        56875
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        70750
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        87875
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        110675
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        139325
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        177975
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        227325
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        294325
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        382275
                      </td>
                    </tr>
                  </tbody>
                </motion.table>
              </motion.div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default PensionBenefitScheme;

import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function KotiPotiDeposit() {
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
                Kotipoti Deposit Scheme
              </motion.h2>
              <div className="mb-4 p-1 text-justify">
                <motion.div
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  It is a premium monthly deposit scheme for our valuable
                  members who want to be Kotipoti after a certain period. This
                  scheme will be very helpful to implement members’ future plans
                  successfully with small savings.
                </motion.div>

                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold"
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
                    Any christian individual having a savings account with
                    "Dhaka credit" can open this account.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Flexible tenure: (5 years to 20 years).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    More than one account can be opened by the same depositor.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    If the depositor fails to pay 1 monthly installment,
                    Maturity date will be extended for 1 month.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    If the depositor fails to pay 3 consecutive installments,
                    the account will be closed and the net payable amount will
                    be transferred to the link account.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    If the depositor wishes to withdraw the deposited amount
                    before the agreed term, the interest will be paid at the
                    prevailing savings rate but no interest will be paid if the
                    depositor withdraws the deposited amount before one year.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Advance installments may be deposited but no additional
                    interest will be paid for this.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The account holder may avail loan up to Loan 95% of the
                    payable amount. But this facility will be eligible after 1
                    year from opening the account.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Dhaka Credit reserves the right to change the
                    rules/procedures if it is deemed necessary.
                  </motion.li>
                </ul>
              </div>
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                style={{ height: 776 }}
                className="scrollbar-thin scrollbar-track-primary mx-2 mb-4 overflow-scroll border border-slate-700 md:border"
              >
                <table className="table w-full">
                  <thead className="sticky -top-0 bg-white text-onSurface">
                    <tr className="border border-slate-700">
                      <th
                        rowSpan={3}
                        className="border border-slate-600 p-2 text-left"
                      >
                        <p>Scroll No.</p>
                      </th>
                      <th
                        rowSpan={3}
                        className="border border-slate-600 p-2 text-left"
                      >
                        <p>Initial Deposit</p>
                      </th>
                      <th
                        rowSpan={3}
                        className="border border-slate-700 p-2 text-left"
                      >
                        <p>Interest Rate</p>
                      </th>
                      <th
                        colSpan={16}
                        className="border border-slate-700 bg-background p-2 text-center shadow-lg"
                      >
                        <p>Annual Based monthly Deposit Amount</p>
                      </th>
                    </tr>
                    <tr className="border border-slate-700 font-bold">
                      <td className="border border-slate-700 p-2 text-left">
                        <p>5</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>6</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>7</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>8</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>9</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>10</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>11</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>12</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>13</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>14</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>15</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>16</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>17</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>18</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>19</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>20</p>
                      </td>
                    </tr>

                    <tr className="font-bold">
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        <p>Years</p>
                      </td>
                    </tr>
                  </thead>
                  <tbody className="flex-1 bg-backgroundVariant sm:flex-none">
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        1
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        0
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        130860
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        103580
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        84280
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        69950
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        58930
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        50240
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        43220
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        37480
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        32700
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        28670
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        25260
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22340
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        19820
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17630
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15720
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14060
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        2
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        100,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        128760
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        101760
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        82640
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        68460
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        57550
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        48940
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        42000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        36310
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        31580
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        27600
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        24220
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        21320
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        18830
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        16660
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14770
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13120
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        3
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        200,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        126660
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        99930
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        81010
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        66960
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        56170
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        47650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        40780
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        35140
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        30460
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        26520
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        23170
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        20310
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17840
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15690
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13820
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12190
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        4
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        300,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        124560
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        98100
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        79370
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        65470
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        54790
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        46350
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        39550
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        33980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        29340
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        25440
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22130
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        19270
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        16850
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14730
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12880
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11250
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        5
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        400,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        122460
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        96270
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        77740
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        63980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        53410
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        45060
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        38330
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        32810
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        28220
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        24360
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        21080
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        18280
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15860
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13760
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11930
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10320
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        6
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        500,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        120360
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        94450
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        76110
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        62490
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        52030
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        43770
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        37100
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        31640
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        27100
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        23280
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        20040
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17260
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14870
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12790
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10940
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9390
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        7
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        600,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        118260
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        92620
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        74470
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        60700
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        50650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        42470
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        35880
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        30480
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        25980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22200
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        19000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        16250
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13880
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11820
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10030
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8460
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        8
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        700,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        116160
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        90790
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        72840
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        59510
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        49260
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        41111
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        34660
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        29310
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        24870
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        21130
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17950
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15230
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12890
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10850
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9080
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7530
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        9
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        800,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        114050
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        88960
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        71200
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        58020
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        47880
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        39880
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        33430
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        28140
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        23750
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        20050
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        16910
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14220
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11900
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9890
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8130
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6590
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        10
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        900,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        111950
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        87140
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        69570
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        56530
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        46500
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        38590
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        32210
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        26980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22630
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        18970
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15860
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13200
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10910
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8920
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7180
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5660
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        11
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,000,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        109850
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        85310
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        67930
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        55040
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        45120
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        37300
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        30990
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        25810
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        21510
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17890
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14820
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12190
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9920
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7950
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6230
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4730
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        12
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,100,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        107750
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        83480
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        66300
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        53540
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        43740
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        36000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        29760
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        24650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        20390
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        16810
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13770
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11170
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8930
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5280
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3800
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        13
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,200,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        105650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        81660
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        64660
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        52050
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        42360
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        34710
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        28540
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        23480
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        19270
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15730
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12730
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10160
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7940
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6010
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4340
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2870
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        14
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,300,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        103550
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        79830
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        63030
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        50560
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        40980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        33410
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        27310
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22310
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        18150
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14660
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11690
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9140
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6950
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5050
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3390
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1930
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        15
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,400,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        101450
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        78000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        61400
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        49070
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        39600
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        32120
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        26090
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        21150
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17040
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13580
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10640
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8130
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5960
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4080
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2440
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1000
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        16
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,500,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        99350
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        76170
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        59760
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        47580
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        38220
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        30830
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        24870
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        19980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15920
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12500
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9600
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7110
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4970
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3110
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1490
                      </td>
                      <td className="border border-slate-700 p-2 text-left"></td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        17
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,600,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        97250
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        74350
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        58130
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        46090
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        36840
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        29530
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        23640
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        18810
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14800
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11420
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8550
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6100
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2140
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        18
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,700,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        95150
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        72520
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        56490
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        44600
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        35460
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        28240
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        22420
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13680
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10340
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7510
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5080
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2990
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1170
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        19
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,800,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        93050
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        70690
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        54860
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        43110
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        34070
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        26940
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        21190
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        16480
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12560
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9260
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6460
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4070
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2000
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        20
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1,900,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        90950
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        68860
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        53220
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        41620
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        32690
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        25650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        19970
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15310
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11440
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8190
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5420
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3050
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1010
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        21
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2,000,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        88850
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        67040
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        51590
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        40120
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        31310
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        24360
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        18750
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        14150
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10320
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        7110
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4380
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2040
                      </td>
                      <td className="border border-slate-700 p-2 text-left"></td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        22
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2,100,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        86750
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        65210
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        49960
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        38630
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        29930
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        23060
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17520
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12980
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9210
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6030
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3330
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1020
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        23
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2,200,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        84650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        63380
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        48320
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        37140
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        28550
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        21770
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        16300
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        11810
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8090
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4950
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2290
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        24
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2,300,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        82550
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        61550
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        46690
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        35650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        27160
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        20470
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        15080
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        10650
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        6970
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        3870
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1240
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-slate-700 p-2 text-left">
                        25
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2,400,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        80450
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        59730
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        45050
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        34160
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        25790
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        19180
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        13850
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9480
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        5850
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2790
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2 text-left">
                        26
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        2,500,000.00
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        9.50%
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        78350
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        57900
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        43420
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        32670
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        24410
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        17890
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        12630
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        8320
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        4730
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        1720
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left">
                        &nbsp;
                      </td>
                      <td className="border border-slate-700 p-2 text-left"></td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default KotiPotiDeposit;

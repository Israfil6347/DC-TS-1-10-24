import familyLogo from 'assets/images/info/debit_card_family.png';
import logo from 'assets/images/info/golden_logo.png';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import { VirtualCardProps } from './VirtualCard';
import { CardHandler } from 'global_shared/model/data/CardHandler';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  04 July 2023
 *========================================================================**/
const PlasticCard: React.FC<VirtualCardProps> = ({
  card,
  setReissueHandler,
  cardData,
}) => {
  var cardReissue = null;
  if (cardData !== null) {
    cardReissue = new CardHandler(cardData);
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <motion.div
        variants={MyVariants.SlideInFromRight}
        transition={MyTransition.Spring.Low}
        className=""
      >
        <div className="h-[260px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-yellow-600/[0.6] to-yellow-800/[0.6] text-gray-800 shadow hover:shadow-md">
          <div className="relative h-full w-full">
            <img src={logo} alt="" className="absolute right-4 top-4 w-20" />
            <div className="flex h-full flex-col justify-between">
              <div className="h-4/12 bg-[#312f1a] px-4 py-5 text-[#dfb15d]">
                <h1 className="text-left font-bold uppercase lg:text-lg">
                  Dhaka credit
                </h1>

                <div className="flex w-full items-center justify-center">
                  <motion.h2 className="text-sm font-semibold uppercase lg:text-base">
                    Valid only in dhaka credit
                  </motion.h2>
                </div>
              </div>

              <div className="h-4/12 flex items-center justify-center text-sm lg:text-base">
                <ul>
                  <li className="text-center font-bold uppercase">
                    {card?.CardType}
                  </li>
                  <li className="text-center font-bold uppercase">
                    {card?.CardNo}
                  </li>
                  <li className="text-center font-bold uppercase">
                    {card?.ExpiryDate}
                  </li>
                </ul>
              </div>

              <div className="h-4/12 mb-6 flex w-full items-center justify-between px-4 pl-16 text-sm lg:text-base">
                <p className="font-bold uppercase"> {card?.Name}</p>
                <div className="text-right font-bold">
                  <p>{card?.CardsAccounts[0].AccountTypeName}</p>
                  <p> {card?.CardsAccounts[0].AccountNumber}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 h-4 w-full bg-[#312f1a]"></div>
            {!card?.IsUsable ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-80">
                <p className="text-center text-3xl text-white">In-active</p>
              </div>
            ) : (
              ''
            )}
            ss
            <img
              src={familyLogo}
              className="absolute bottom-5 left-2 w-12"
              alt=""
            />
          </div>
        </div>
        {!!cardReissue?.expiryDateHandler() ? (
          <div className="mt-6 flex justify-center self-center">
            <ul>
              <li className="text-sm text-error">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mr-2 h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <p className="font-bold">
                    {cardReissue?.expiryDateHandler()}
                  </p>
                </div>
              </li>
              <li className="mt-3">
                <button
                  className="w-full  rounded border bg-primary py-2 font-semibold uppercase text-onPrimary shadow-sm hover:scale-105 hover:bg-primaryVariant"
                  onClick={setReissueHandler}
                >
                  Re-issue Card
                </button>
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </motion.div>
    </motion.div>
  );
};

export default PlasticCard;

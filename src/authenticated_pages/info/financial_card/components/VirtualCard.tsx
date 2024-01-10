import imgcard from 'assets/images/info/card.png';
import logo from 'assets/images/logo/logocccul.png';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
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

export interface VirtualCardProps {
  card: any; //FIXME
  setReissueHandler: any; //FIXME
  cardData: any; //FIXME
}

const VirtualCard: React.FC<VirtualCardProps> = ({
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
        className="flex flex-col "
      >
        <div
          className={`h-[260px] w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat text-onSurface shadow hover:shadow-md`}
          style={{ backgroundImage: `url(${imgcard})` }}
        >
          <div className="relative h-full w-full p-4">
            <img src={logo} alt="" className="absolute right-4 top-4 w-20" />
            <div className="flex h-full flex-col justify-evenly">
              <div className="h-2/8">
                <h1 className="text-left font-bold uppercase lg:text-lg">
                  Dhaka credit
                </h1>

                <div className="flex w-full items-center justify-center">
                  <motion.h2 className="text-sm font-semibold uppercase lg:text-base">
                    Valid only in dhaka credit
                  </motion.h2>
                </div>
              </div>

              <div className="h-4/8 flex items-center justify-center text-sm lg:text-base">
                <ul>
                  <li className="text-center font-bold uppercase">
                    {card?.CardStageName}
                  </li>
                  <li className="text-center font-bold uppercase">
                    {card?.CardNo}
                  </li>
                  <li className="text-center font-bold uppercase">
                    {card?.ExpiryDate}
                  </li>
                </ul>
              </div>

              <div className="h-2/8 flex w-full items-center justify-between text-sm lg:text-base">
                <p className="font-bold uppercase">{card?.Name}</p>
                <div className="text-right font-bold">
                  <p>{card?.CardsAccounts[0]?.AccountTypeName}</p>
                  <p>{card?.CardsAccounts[0]?.AccountNumber}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 left-0 h-6 w-full bg-orange-200 bg-opacity-40"></div>
            {!card?.IsUsable ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-80">
                <p className="text-center text-3xl text-white">In-active</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        {!!cardReissue?.expiryDateHandler() ? (
          <div className="mt-6 flex justify-center">
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
                  <p className=" font-bold">
                    {cardReissue?.expiryDateHandler()}
                  </p>
                </div>
              </li>
              <li className="mt-3">
                <button
                  className="w-full rounded-sm border bg-primary py-1 font-semibold uppercase text-onPrimary shadow-sm hover:scale-105"
                  onClick={() => {
                    setReissueHandler();
                  }}
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

export default VirtualCard;

import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyPasswordInput from 'global_shared/components/MyPasswordInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import { CardHandler } from 'global_shared/model/data/CardHandler';
import { ChangeEvent } from 'react';

interface CardAccountPinViewProps {
  showAccountInfo: boolean;
  titleAccounts?: string;
  showCardInfo: boolean;
  titleCard?: string;
  styleClasses?: string;
  myCards: CardModel[] | null;
  // parentPageState: DepositRequestState;
  parentPageState: any;
  updateParentPageState: (fieldName: string, fieldValue: any) => void;
}

const CardAccountPinView: React.FC<CardAccountPinViewProps> = ({
  showAccountInfo,
  titleAccounts,
  showCardInfo,
  titleCard,
  myCards,
  styleClasses = 'p-7',
  parentPageState,
  updateParentPageState,
}) => {
  var card: CardHandler | null = null;
  if (myCards !== null) {
    card = new CardHandler(myCards);
  }

  return (
    <motion.div
      variants={MyVariants.SlideInFromRight}
      transition={MyTransition.Spring.Low}
      className={`flex w-full items-center justify-center  rounded-md bg-surface ${styleClasses}`}
    >
      {!showAccountInfo ? (
        ''
      ) : (
        <div className="w-full">
          <motion.h2 className="text-center text-lg font-bold">
            {titleAccounts}
          </motion.h2>
          <div className="mt-6 space-y-3">
            <MyTextInput
              label={'Account Type'}
              leftIcon={<i className="fa-solid fa-piggy-bank"></i>}
              name={''}
              disabled={true}
              inputType={'text'}
              value={card?.cardModel?.[0]?.CardsAccounts?.[0]?.AccountTypeName}
              onChangeHandler={function (
                event: ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error('Function not implemented.');
              }}
            />

            <MyTextInput
              label={'Balance'}
              disabled={true}
              leftIcon={<i className="fa-solid fa-bangladeshi-taka-sign"></i>}
              name={''}
              inputType={'text'}
              value={card?.cardModel?.[0]?.CardsAccounts?.[0]?.Balance.toString()}
              onChangeHandler={function (
                event: ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error('Function not implemented.');
              }}
            />
            <MyTextInput
              label={'Withdrawable Balance'}
              disabled={true}
              leftIcon={<i className="fa-solid fa-bangladeshi-taka-sign"></i>}
              name={''}
              inputType={'text'}
              value={card?.cardModel?.[0]?.CardsAccounts?.[0]?.WithdrawableBalance.toString()}
              onChangeHandler={function (
                event: ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
        </div>
      )}
      {!showCardInfo ? (
        ''
      ) : (
        <div className="w-full">
          {titleCard && (
            <h2 className="py-3 text-center text-lg font-bold">{titleCard}</h2>
          )}
          <div className="mt-2 grid grid-cols-1 gap-3  md:grid-cols-1">
            <div className="">
              <MyDropdown
                label="Account No"
                name="CardAccount"
                required={true}
                disabled={true}
                value={parentPageState.CardAccount}
                error={parentPageState.Errors.CardAccount}
                dropDownData={card?.getHandledCard()?.map((obj, index) => {
                  return {
                    id: index,
                    value: obj?.AccountNumber?.trim(),
                    label: obj?.AccountNumber?.trim(),
                  };
                })}
                onChange={(event) => {
                  updateParentPageState(event.target.name, event.target.value);
                }}
                leftIcon={<i className="fa-solid fa-piggy-bank"></i>}
              />
            </div>
            <div>
              <MyDropdown
                label="Selected Card"
                name="CardNo"
                required={true}
                disabled={true}
                value={parentPageState.CardNo}
                error={
                  card?.getHandledCard()[0]?.IsLockCard
                    ? 'Your card is locked'
                    : parentPageState.Errors.CardNo
                }
                dropDownData={myCards?.map((obj, index) => {
                  return {
                    value: obj?.CardNo?.trim(),
                    label: obj?.CardNo?.trim(),
                  };
                })}
                onChange={(event) => {
                  updateParentPageState(event.target.name, event.target.value);
                }}
                leftIcon={<i className="fa-regular fa-credit-card"></i>}
              />
              <span className="text-xs text-error">
                {card?.expiryDateHandler()}
              </span>
            </div>
            <div>
              <MyPasswordInput
                label="Card PIN"
                name="CardPIN"
                id="CardPIN"
                disabled={false}
                required={true}
                value={parentPageState?.CardPIN}
                error={parentPageState?.Errors?.CardPIN}
                onChangeHandler={(event) => {
                  updateParentPageState(event.target.name, event.target.value);
                }}
                leftIcon={<i className="fa-regular fa-credit-card"></i>}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CardAccountPinView;

import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import MyButton from 'global_shared/components/MyButton';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import TermsConditionsDialog from 'global_shared/components/dialogues/TermsConditionsDialog';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { TermsAndConditionModel } from 'global_shared/model/data/TermsAndConditionModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect, useState } from 'react';
import PlasticCard from './components/PlasticCard';
import VirtualCard from './components/VirtualCard';
import CardReissueDialogue from './dialogues/CardReissueDialogue';
import { CardIssueRequestModel } from './model/request/CardIssueRequestModel';
import { CardReissueRequestModel } from './model/request/CardReissueRequestModel';
import useCardReissueState from './hook/useCardReissueState';

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
function CardPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [isCardReissueDialogueOpen, setCardReissueDialogueOpen] =
    useState(false);
  const [isTermsAndConditionOpen, setTermsAndConditionOpen] = useState(false);

  const setReissueHandler = () => {
    if (!isCardReissueDialogueOpen) {
      setCardReissueDialogueOpen(true);
    } else {
      setCardReissueDialogueOpen(false);
    }
  };

  const { cardReissueState, updateCardReissueState } = useCardReissueState();

  const {
    data: myCardsResponseData,
    loading: myCardsResponseDataLoading,
    message: myCardsResponseMessage,
    status: myCardsResponseStatus,
    setStatus: setMyCardsResponseStatus,
    executeCommand: myCardsRequestCommand,
  } = useCommand<CardModel[]>();

  const {
    data: cardIssueResponseData,
    loading: cardIssueResponseDataLoading,
    message: cardIssueResponseMessage,
    status: cardIssueResponseStatus,
    setStatus: setCardIssueResponseStatus,
    executeCommand: cardIssueRequestCommand,
  } = useCommand<string | null>();

  const {
    data: termsAndConditionResponseData,
    loading: termsAndConditionResponseDataLoading,
    executeCommand: termsAndConditionRequestCommand,
  } = useCommand<TermsAndConditionModel | null>();

  const headers = {
    'Content-Type': 'application/json',
    token: localStorage.getItem('token'),
  };

  useEffect(() => {
    const termsAndConditionsRequestModel = {
      ApplicationName: 'MFS',
      ContentName: 'Terms And Conditions',
      RequestFrom: 'Web',
    };

    termsAndConditionRequestCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetMfsPolicy',
      JSON.stringify(termsAndConditionsRequestModel),
      { headers: headers }
    );

    var myCardsRequestModel = new BaseRequestModel(authUser);
    myCardsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V2/myCards',
      JSON.stringify(myCardsRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [isCardReissueDialogueOpen, cardIssueResponseStatus]);

  const applyForATMCardRequestHandler = () => {
    var cardIssueRequestModel = new CardIssueRequestModel(authUser);
    cardIssueRequestModel.cardTypeCode = '01';
    cardIssueRequestModel.WithCard = true;

    cardIssueRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/applyForCardIssue',
      JSON.stringify(cardIssueRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const {
    data: reissueResponseData,
    message: reissueResponseMessage,
    status: reissueResponseStatus,
    setStatus: setReissueResponseStatus,
    executeCommand: reissueRequestExecuteCommand,
  } = useCommand();

  const cardReissueRequestHandler = () => {
    const cardReissueRequestModel = new CardReissueRequestModel(authUser);
    if (myCardsResponseData !== null) {
      cardReissueRequestModel.NameOnCard = myCardsResponseData?.[0]?.Name;
      cardReissueRequestModel.CardNumber = myCardsResponseData?.[0]?.CardNo;
      cardReissueRequestModel.CardTypeCode = '01';
      cardReissueRequestModel.IsVirtual =
        cardReissueState?.IsVirtual === true ? false : true;
    }

    console.log(cardReissueRequestModel);

    reissueRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/applyForCardReIssue',
      JSON.stringify(cardReissueRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  return (
    <>
      <LoaderDialogue
        isLoading={
          cardIssueResponseDataLoading ||
          myCardsResponseDataLoading ||
          termsAndConditionResponseDataLoading
        }
      />

      {/* Begin ATM Card Issue Request failed dialogue */}
      <FailedDialogue
        isDialogueOpen={cardIssueResponseStatus === 'failed' ? true : false}
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setCardIssueResponseStatus(null);
        }}
      >
        {cardIssueResponseMessage}
      </FailedDialogue>
      {/* End ATM Card Issue Request failed dialogue */}

      {/* Begin ATM Card Issue Request success dialogue */}
      <SuccessDialogue
        isDialogueOpen={cardIssueResponseStatus === 'success' ? true : false}
        onOkButtonClick={() => {
          setCardIssueResponseStatus(null);
        }}
      >
        {cardIssueResponseData}
      </SuccessDialogue>
      {/* End ATM Card Issue Request success dialogue */}

      {/* Begin ATM card issue terms and condition dialogue */}
      <TermsConditionsDialog
        dialogueTitle="Terms And Conditions"
        dialogueContent={termsAndConditionResponseData}
        isTermsAndConditionsDialog={isTermsAndConditionOpen}
        closeOrRejectTermsAndConditionsDialog={() => {
          setTermsAndConditionOpen(false);
        }}
        acceptTermsAndConditions={() => {
          applyForATMCardRequestHandler();
        }}
      />
      {/* End ATM card issue terms and condition dialogue */}

      <CardReissueDialogue
        isVirtual={myCardsResponseData?.[0]?.IsVirtual!}
        cardDataList={myCardsResponseData}
        openCardReissue={isCardReissueDialogueOpen}
        feedbackCardReissue={setCardReissueDialogueOpen}
        reissueResponseData={reissueResponseData}
        reissueResponseMessage={reissueResponseMessage}
        reissueResponseStatus={reissueResponseStatus}
        setReissueResponseStatus={setReissueResponseStatus}
        submitHandler={cardReissueRequestHandler}
        cardReissueState={cardReissueState}
        updateCardReissueState={updateCardReissueState}
      />

      {myCardsResponseData?.length !== 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {myCardsResponseData?.map((card, index) => {
              if (card?.IsVirtual) {
                return (
                  <VirtualCard
                    key={index}
                    card={card}
                    setReissueHandler={setReissueHandler}
                    cardData={myCardsResponseData}
                  />
                );
              } else {
                return (
                  <PlasticCard
                    key={index}
                    card={card}
                    setReissueHandler={setReissueHandler}
                    cardData={myCardsResponseData}
                  />
                );
              }
            })}
          </div>
        </>
      ) : (
        <div className="bg-surface">
          <section className="flex flex-col-reverse items-start gap-6 text-justify md:flex-row">
            <div className="w-full">
              <div className="">
                <div className="flex  flex-col items-center bg-surface px-4 text-primary shadow-sm md:px-12">
                  <div className="animate-backInRight py-20 text-center">
                    <h1 className=" text-5xl font-extrabold">Cards</h1>
                    <p className="mt-5">You do not have any Card</p>
                    <MyButton
                      onClick={() => {
                        setTermsAndConditionOpen(true);
                      }}
                      type="button"
                      label="Virtual Debit Card Request"
                      styleClass="mt-5 w-auto rounded bg-primary px-7 py-3 text-sm font-Slow uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg"
                      name={''}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default CardPage;

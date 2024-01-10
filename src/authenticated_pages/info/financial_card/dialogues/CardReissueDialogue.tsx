import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyModal from 'global_shared/components/MyModal';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import useCardReissueState from '../hook/useCardReissueState';

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

interface CardReissueDialogueProps {
  openCardReissue: boolean;
  feedbackCardReissue: any; //FIXME
  isVirtual: boolean;
  cardDataList: any; //FIXME
  reissueResponseStatus: any; //FIXME
  setReissueResponseStatus: any; //FIXME
  reissueResponseMessage: any; //FIXME
  reissueResponseData: any; //FIXME
  submitHandler: any; //FIXME
  cardReissueState: any;
  updateCardReissueState: any;
}

const CardReissueDialogue: React.FC<CardReissueDialogueProps> = ({
  openCardReissue,
  feedbackCardReissue,
  isVirtual,
  cardDataList,
  reissueResponseStatus,
  setReissueResponseStatus,
  reissueResponseMessage,
  reissueResponseData,
  submitHandler,
  cardReissueState,
  updateCardReissueState,
}) => {
  return (
    <>
      {/* Begin card reissue Success dialogue */}

      <SuccessDialogue
        isDialogueOpen={reissueResponseStatus === 'success' ? true : false}
        onCloseButtonClick={() => {
          setReissueResponseStatus(null);
          feedbackCardReissue(false);
        }}
      >
        {reissueResponseData}
      </SuccessDialogue>
      {/* End card reissue Success dialogue */}

      {/* Begin card reissue failed dialogue */}
      <FailedDialogue
        isDialogueOpen={reissueResponseStatus === 'failed' ? true : false}
        // onOkButtonClick={() => {}}
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setReissueResponseStatus(null);
          feedbackCardReissue(false);
        }}
      >
        {reissueResponseMessage}
      </FailedDialogue>
      {/* End card reissue failed dialogue */}

      {/* Begin card reissue view dialogue */}
      <MyModal
        show={openCardReissue}
        size={Size.Small}
        onClose={() => {
          feedbackCardReissue(false);
          setReissueResponseStatus(null);
        }}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="hover:animate-swing flex w-full flex-col items-center bg-background p-4 hover:cursor-pointer">
              <img className="w-28" src={logoIcon} alt="" />
              <h3 className="font-bold text-primary">Card Reissue</h3>
            </div>
          }
          dialogueFooter={
            <div className=" flex  w-full items-center justify-center gap-4 bg-background p-4">
              <button
                className="w-full rounded-sm border bg-primary py-2 font-semibold uppercase text-onPrimary shadow-sm hover:scale-105 md:w-1/3"
                onClick={() => {
                  submitHandler();
                }}
              >
                Apply Now
              </button>
            </div>
          }
          onCancel={() => {
            feedbackCardReissue(false);
          }}
        >
          <div className="px-8 py-6 md:px-14">
            {isVirtual ? (
              ''
            ) : (
              <div className="flex  items-center text-start text-sm font-bold">
                <MyCheckBox
                  disabled={false}
                  name="IsVirtual"
                  value={cardReissueState.IsVirtual}
                  error={cardReissueState.Errors.IsVirtual}
                  onChangeHandler={(event) => {
                    updateCardReissueState(
                      event.target.name,
                      event.target.checked
                    );
                  }}
                  label={''}
                />
                <p className="">I want to have a plastic card</p>
              </div>
            )}
            <div className="content p-4">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-3">
                <div className="">
                  <MyTextInput
                    disabled={true}
                    label="Card Holder Name"
                    name="CardHolderName"
                    value={cardDataList?.[0]?.Name}
                    inputType="text"
                    required={true}
                    error={cardReissueState?.Errors.CardHolderName}
                    onChangeHandler={(event) => {
                      updateCardReissueState(
                        event.target.name,
                        event.target.value
                      );
                    }}
                    leftIcon={<i className="fa-regular fa-credit-card"></i>}
                  />
                </div>
                <div className="">
                  <MyTextInput
                    disabled={true}
                    label="Card Number"
                    name="CardNumber"
                    value={cardDataList?.[0]?.CardNo}
                    inputType="text"
                    required={true}
                    error={cardReissueState?.Errors.CardNumber}
                    onChangeHandler={(event) => {
                      updateCardReissueState(
                        event.target.name,
                        event.target.value
                      );
                    }}
                    leftIcon={<i className="fa-regular fa-credit-card"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        </MyDialogueView>
      </MyModal>
      {/* End card reissue view dialogue */}
    </>
  );
};

export default CardReissueDialogue;

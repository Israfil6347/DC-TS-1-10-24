import { useEffect, useState } from 'react';
import ForHours from './ForHours';
import ForDays from './ForDays';
import { WoooApplicationRequestState } from 'authenticated_pages/professionals/working_out_of_office/hooks/useWoooApplicationRequestStates';
import { ISelectWoooType } from './interface/SelectWoooTypeModel';

type ActiveTabType = 'for hours' | 'for days';

interface WoooApplicationTabPropType {
  updateWoooApplicationRequestState: (
    fieldName: string,
    fieldValue: any
  ) => void;
  woooApplicationRequestStates: WoooApplicationRequestState;
  selectWoooTypeData: ISelectWoooType[] | null;
  submitWoooApplicationHandler: () => void;
  submitWoooResponseData: string | null;
  submitWoooResponseStatus: string | null;
  submitWoooResponseMessage: string | null;
  closeModal?: () => void;
}

const WoooApplicationTab = ({
  updateWoooApplicationRequestState,
  woooApplicationRequestStates,
  selectWoooTypeData,
  submitWoooApplicationHandler,
  submitWoooResponseData,
  submitWoooResponseStatus,
  submitWoooResponseMessage,
  closeModal,
}: WoooApplicationTabPropType) => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('for hours');

  useEffect(() => {
    const isHourly = woooApplicationRequestStates?.IsHourly;

    if (isHourly !== undefined) {
      setActiveTab(isHourly ? 'for hours' : 'for days');
    }
  }, [woooApplicationRequestStates?.IsHourly]);

  return (
    <>
      {/* Loading Dialogue */}
      <div className="content h-full w-full overflow-y-scroll bg-surface p-4 text-left text-onBackground shadow-sm md:p-8">
        {/* TAB MENUS */}
        <div className="flex w-full justify-center">
          <div
            onClick={() => {
              setActiveTab('for hours');

              updateWoooApplicationRequestState('IsHourly', true);
            }}
            className={`flex h-[50px] w-full cursor-pointer items-center justify-center lg:w-[200px] ${
              activeTab === 'for hours'
                ? 'rounded bg-primary text-surface'
                : 'rounded border-b-4 border-slate-400 bg-surface text-slate-400 hover:border-primary hover:bg-background hover:text-primary hover:shadow-md'
            }`}
          >
            <h2 className="text-lg font-bold uppercase">For Hours</h2>
          </div>
          <div
            onClick={() => {
              setActiveTab('for days');

              updateWoooApplicationRequestState('IsHourly', false);
            }}
            className={`flex h-[50px] w-full cursor-pointer items-center justify-center lg:w-[200px] ${
              activeTab === 'for days'
                ? 'rounded bg-primary text-surface'
                : 'rounded border-b-4 border-slate-400 bg-surface text-slate-400 hover:border-primary hover:bg-background hover:text-primary hover:shadow-md'
            }`}
          >
            <h2 className={`text-lg font-bold uppercase`}>For Days</h2>
          </div>
        </div>

        {/* MAIN CONTENT */}
        {activeTab === 'for hours' ? (
          <ForHours
            woooApplicationRequestStates={woooApplicationRequestStates}
            updateWoooApplicationRequestState={
              updateWoooApplicationRequestState
            }
            selectWoooTypeData={selectWoooTypeData}
            submitWoooApplicationHandler={submitWoooApplicationHandler}
            woooResponseData={submitWoooResponseData}
            woooResponseStatus={submitWoooResponseStatus}
            woooResponseMessage={submitWoooResponseMessage}
            closeModal={closeModal}
          />
        ) : (
          <ForDays
            woooApplicationRequestStates={woooApplicationRequestStates}
            updateWoooApplicationRequestState={
              updateWoooApplicationRequestState
            }
            selectWoooTypeData={selectWoooTypeData}
            submitWoooApplicationHandler={submitWoooApplicationHandler}
            woooResponseData={submitWoooResponseData}
            woooResponseStatus={submitWoooResponseStatus}
            woooResponseMessage={submitWoooResponseMessage}
            closeModal={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default WoooApplicationTab;

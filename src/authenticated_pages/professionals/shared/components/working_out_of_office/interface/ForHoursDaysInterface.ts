import { WoooApplicationRequestState } from "authenticated_pages/professionals/working_out_of_office/hooks/useWoooApplicationRequestStates";
import { ISelectWoooType } from "./SelectWoooTypeModel";

export interface ForHoursDaysPropType {
    updateWoooApplicationRequestState: (
        fieldName: string,
        fieldValue: any
    ) => void;
    woooApplicationRequestStates: WoooApplicationRequestState;
    selectWoooTypeData: ISelectWoooType[] | null;
    submitWoooApplicationHandler: () => void;
    woooResponseMessage: string | null;
    woooResponseData: string | null;
    woooResponseStatus: string | null;
    closeModal?: () => void;
}
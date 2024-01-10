import { IApplicationSectionState } from 'public_pages/carrier/job_application/model/data/IApplicationSectionState';
import { IComputerProficiencySectionState } from 'public_pages/carrier/job_application/model/data/IComputerProficiencySectionState';
import { IDependentSectionState } from 'public_pages/carrier/job_application/model/data/IDependentSectionState';
import { IEducationalSectionState } from 'public_pages/carrier/job_application/model/data/IEducationalSectionState';
import { IJobHistorySectionState } from 'public_pages/carrier/job_application/model/data/IJobHistorySectionState';
import { ILanguageProficiencySectionState } from 'public_pages/carrier/job_application/model/data/ILanguageProficiencySectionState';
import { IOtherInfoSectionState } from 'public_pages/carrier/job_application/model/data/IOtherInfoSectionState';
import { IPersonSectionState } from 'public_pages/carrier/job_application/model/data/IPersonSectionState';
import { IReferenceSectionState } from 'public_pages/carrier/job_application/model/data/IReferenceSectionState';
import { ITrainingSectionState } from 'public_pages/carrier/job_application/model/data/ITrainingSectionState';

export interface IJobApplication {
  ComputerProficiency: IComputerProficiencySectionState[];
  Dependent: IDependentSectionState[] | null | undefined;
  Education: IEducationalSectionState[];
  JobApplicant: IPersonSectionState;
  JobApplication: IApplicationSectionState | null;
  JobHistory: IJobHistorySectionState[];
  LanguageProficiency: ILanguageProficiencySectionState[];
  OtherInformation: IOtherInfoSectionState;
  Reference: IReferenceSectionState[];
  Training: ITrainingSectionState[];
}

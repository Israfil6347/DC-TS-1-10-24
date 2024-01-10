import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import { resultOutOf } from 'global_shared/data/resultOutOf';
import useCommand from 'global_shared/hooks/useCommand';
import React, { useEffect } from 'react';
import { IEducationDegreeModel } from '../../model/data/IEducationDegreeModel';
import { IEducationLevelModel } from '../../model/data/IEducationLevelModel';

interface EductionItemProps {
  index: number;
  removeEducationalSectionState: (id: string) => void;
  item: any;
  updateEducationalSectionState: (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => void;
}
const EductionItem: React.FC<EductionItemProps> = ({
  index,
  removeEducationalSectionState,
  item,
  updateEducationalSectionState,
}) => {
  const {
    data: educationLevelResponseData,
    executeCommand: educationLevelRequestCommand,
  } = useCommand<IEducationLevelModel[]>();

  const {
    data: educationDegreeResponseData,
    executeCommand: EducationDegreesExecuteCommand,
  } = useCommand<IEducationDegreeModel[]>();

  const getEducationDegreeHandler = (value: any) => {
    const BODY = {
      EducationLevelId: value,
      RequestFrom: 'Web',
    };

    EducationDegreesExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetEducationDegrees',
      BODY,
      {}
    );
  };

  useEffect(() => {
    educationLevelRequestCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetEducationLevels'
    );
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div>
      <div className="pt-4" key={index}>
        <div className="mb-6 mt-6 border border-dashed p-2">
          <div className="flex justify-end pt-2 pb-4">
            <MyButton
              onClick={() => {
                removeEducationalSectionState(item.EducationUUId);
              }}
              type="button"
              styleClass="cursor-pointer text-primary hover:text-error"
              label={''}
              name={''}
            >
              <i className="fa-solid fa-trash-can text-2xl"></i>
            </MyButton>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
            <div className="">
              <MyDropdown
                disabled={false}
                label="Education Level"
                name="EducationLevelId"
                error={item.Errors.EducationLevelId}
                value={item?.EducationLevelId}
                dropDownData={educationLevelResponseData?.map((obj, index) => {
                  return {
                    id: index,
                    value: obj?.EducationLevelId,
                    label: obj?.EducationLevelName,
                  };
                })}
                onChange={(event) => {
                  const selected = educationLevelResponseData?.find((obj) => {
                    if (parseInt(event.target.value) === obj.EducationLevelId)
                      return {
                        value: obj?.EducationLevelId,
                        label: obj?.EducationLevelName,
                      };
                  });
                  updateEducationalSectionState(
                    'EducationLevelId',
                    event.target.value,
                    index
                  );
                  updateEducationalSectionState(
                    'EducationLevelName',
                    selected?.EducationLevelName,
                    index
                  );

                  getEducationDegreeHandler(event.target.value);
                }}
                leftIcon={<i className="fa-solid fa-graduation-cap"></i>}
              />
            </div>

            <div className="">
              <MyDropdown
                disabled={false}
                label="Name of Degree"
                name={`EducationalDegreeId`}
                id={`NameOfDegree`}
                value={item.EducationalDegreeId}
                required={true}
                error={item.Errors.EducationalDegreeId}
                dropDownData={educationDegreeResponseData?.map((obj, index) => {
                  return {
                    id: index,
                    value: obj?.EducationalDegreeId,
                    label: obj?.DegreeName,
                  };
                })}
                onChange={(event) => {
                  const selected = educationDegreeResponseData?.find((obj) => {
                    if (
                      parseInt(event.target.value) === obj.EducationalDegreeId
                    )
                      return {
                        value: obj?.EducationalDegreeId,
                        label: obj?.DegreeName,
                      };
                  });
                  updateEducationalSectionState(
                    'EducationalDegreeId',
                    event.target.value,
                    index
                  );
                  updateEducationalSectionState(
                    'DegreeName',
                    selected?.DegreeName,
                    index
                  );
                }}
                leftIcon={<i className="fa-solid fa-graduation-cap"></i>}
              />
            </div>

            <div className="">
              <MyTextInput
                disabled={false}
                label="Institute Name"
                name="InstituteName"
                id={`InstituteName`}
                value={item.InstituteName}
                inputType="text"
                required={true}
                error={item.Errors.InstituteName}
                onChangeHandler={(event) => {
                  updateEducationalSectionState(
                    event.target.name,
                    event.target.value,
                    index
                  );
                }}
                leftIcon={<i className="fa-solid fa-school-flag"></i>}
              />
            </div>
            <div className="">
              <MyTextInput
                disabled={false}
                label="Group/Major"
                name={`Major`}
                id={`Major`}
                value={item.Major}
                inputType="text"
                required={false}
                error={item.Errors.Major}
                onChangeHandler={(event) => {
                  updateEducationalSectionState(
                    event.target.name,
                    event.target.value,
                    index
                  );
                }}
                leftIcon={<i className="fa-solid fa-group-arrows-rotate"></i>}
              />
            </div>

            <div className="">
              <MyTextInput
                disabled={false}
                label="Passing Year"
                name={`PassingYear`}
                id={`PassingYear`}
                value={item.PassingYear}
                inputType="text"
                required={false}
                error={item.Errors.PassingYear}
                onChangeHandler={(event) => {
                  updateEducationalSectionState(
                    event.target.name,
                    event.target.value,
                    index
                  );
                }}
                leftIcon={<i className="fa-solid fa-calendar-week"></i>}
              />
            </div>
            <div className="">
              <MyTextInput
                disabled={false}
                label="Result"
                name={`Result`}
                id={`Result`}
                value={item.Result}
                inputType="number"
                required={false}
                error={item.Errors.Result}
                onChangeHandler={(event) => {
                  updateEducationalSectionState(
                    event.target.name,
                    event.target.value,
                    index
                  );
                }}
                leftIcon={<i className="fa-solid fa-graduation-cap"></i>}
              />
            </div>

            <div className="">
              <MyDropdown
                disabled={false}
                label="Result Out of"
                dropDownData={resultOutOf}
                value={item.ResultOutOf}
                name={`ResultOutOf`}
                id={`ResultOutOf`}
                error={item.Errors.ResultOutOf}
                onChange={(event) => {
                  updateEducationalSectionState(
                    event.target.name,
                    event.target.value,
                    index
                  );
                }}
                leftIcon={<i className="fa-solid fa-graduation-cap"></i>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EductionItem;

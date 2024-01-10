import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyImageInput from 'global_shared/components/MyImageInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import { bloodGroups } from 'global_shared/data/bloodGroups';
import { genders } from 'global_shared/data/genders';
import { maritalStatuses } from 'global_shared/data/maritalStatuses';
import useCommand from 'global_shared/hooks/useCommand';
import { useEffect, useState } from 'react';
import { IAddressModel } from '../model/data/IAddressModel';
import { INationalityModel } from '../model/data/INationalityModel';
import { IPersonSectionState } from '../model/data/IPersonSectionState';
import { IRelationshipTypeModel } from '../model/data/IRelationshipTypeModel';
import { IReligionModel } from '../model/data/IReligionModel';
import { validatePersonSectionState } from '../validation/validatePersonSectionState';

interface OtherInformationSectionProps {
  personSectionState: IPersonSectionState;
  updatePersonSectionState: (
    fieldName: string,
    fieldValue: any,
    objectProperty?: any
  ) => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const PersonSection: React.FC<OtherInformationSectionProps> = ({
  personSectionState,
  updatePersonSectionState,
  forwardHandler,
  backwardHandler,
  onSubmitHandler,
  viability,
}) => {
  const [show, setIsShow] = useState(false);

  // Fetching Relationships
  const {
    data: relationshipResponseData,
    executeCommand: relationshipsRequestCommand,
  } = useCommand<IRelationshipTypeModel[]>();

  // Fetching Nationality
  const {
    data: nationalitiesResponseData,
    executeCommand: nationalitiesRequestCommand,
  } = useCommand<INationalityModel[]>();

  // Fetching Religion
  const {
    data: religionsResponseData,
    executeCommand: religionsRequestCommand,
  } = useCommand<IReligionModel[]>();

  // Fetching Division
  const {
    data: divisionsResponseData,
    executeCommand: divisionsRequestCommand,
  } = useCommand<IAddressModel[]>();

  useEffect(() => {
    relationshipsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetRelationTypes'
    );

    nationalitiesRequestCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAllNationalities'
    );

    religionsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAllReligions'
    );

    divisionsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAddress',
      {
        DivisionId: -1,
        DistrictId: 0,
        PSId: 0,
        VillageOrAreaId: 0,
        RequestFrom: 'Web',
      }
    );

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const { data: PresentDistrictData, executeCommand: presentDistrictFunction } =
    useCommand<IAddressModel[]>();

  const getPresentDistrictHandler = (DivisionId: number) => {
    var BODY = {
      DivisionId: DivisionId,
      DistrictId: 0,
      PSId: 0,
      VillageOrAreaId: 0,
      RequestFrom: 'Web Client',
    };

    presentDistrictFunction(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAddress',
      BODY
    );
  };

  // Fetching Present Thana
  const { data: PresentThanaData, executeCommand: getThanaData } =
    useCommand<IAddressModel[]>();

  const getPresentPoliceStationHandler = (DistrictId: number) => {
    var BODY = {
      DivisionId: 0,
      DistrictId: DistrictId,
      PSId: 0,
      VillageOrAreaId: 0,
      RequestFrom: 'Web',
    };

    getThanaData(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAddress',
      BODY
    );
  };

  // Fetching Present Village
  const { data: PresentVillageData, executeCommand: getVillageData } =
    useCommand<IAddressModel[]>();

  const getPresentVillageHandler = (PSId: number) => {
    var BODY = {
      DivisionId: 0,
      DistrictId: 0,
      PSId: PSId,
      VillageOrAreaId: 0,
      RequestFrom: 'Web',
    };

    getVillageData(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAddress',
      BODY
    );
  };

  // Fetching permanent District
  const {
    data: PermanentDistrictData,
    executeCommand: getPermanentDistrictData,
  } = useCommand<IAddressModel[]>();

  const getPermanentDistrictHandler = (DivisionId: number) => {
    var BODY = {
      DivisionId: DivisionId,
      DistrictId: 0,
      PSId: 0,
      VillageOrAreaId: 0,
      RequestFrom: 'Web',
    };

    getPermanentDistrictData(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAddress',
      BODY
    );
  };

  // Fetching Permanent Thana
  const { data: PermanentThanaData, executeCommand: getPermanentThanaData } =
    useCommand<IAddressModel[]>();

  const getPermanentPoliceStation = (DistrictId: number) => {
    var BODY = {
      DivisionId: 0,
      DistrictId: DistrictId,
      PSId: 0,
      VillageOrAreaId: 0,
      RequestFrom: 'Web',
    };

    getPermanentThanaData(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAddress',
      BODY
    );
  };

  // Fetching Permanent Village
  const {
    data: PermanentVillageData,
    executeCommand: getPermanentVillageData,
  } = useCommand<IAddressModel[]>();

  const getPermanentVillageHandler = (PSId: number) => {
    var BODY = {
      DivisionId: 0,
      DistrictId: 0,
      PSId: PSId,
      VillageOrAreaId: 0,
      RequestFrom: 'Web',
    };

    getPermanentVillageData(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAddress',
      BODY
    );
  };

  return (
    <motion.div
      className={`border bg-surface py-16 px-4 shadow-sm md:py-20 md:px-20 ${viability}`}
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <motion.div
        variants={MyVariants.SlideInFromRight}
        transition={MyTransition.Spring.Low}
        className="text-onSurface"
      >
        <h6 className="mb-6 text-center text-xl font-semibold uppercase md:text-2xl">
          Personal Information
        </h6>
        <div className="grid-row-2 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="grid-cols-1 md:row-span-2">
            <MyImageInput
              disabled={false}
              label="Applicant Photo"
              name="ApplicantPhoto"
              value={personSectionState.ApplicantPhoto}
              required={true}
              error={personSectionState.Errors.ApplicantPhoto}
              heightClass="h-32"
              onChangeHandler={(fieldName, fieldValue) => {
                updatePersonSectionState(fieldName, fieldValue);
              }}
            />
          </div>
        </div>

        <div className="grid-row-1 grid grid-cols-1 gap-6 pt-6 md:grid-cols-4">
          <div className="grid-cols-1">
            <MyTextInput
              disabled={false}
              label="Full Name"
              name="ApplicantFullName"
              id="ApplicantFullName"
              leftIcon={<i className="fa-solid fa-circle-user"></i>}
              value={personSectionState.ApplicantFullName}
              inputType="text"
              required={true}
              error={personSectionState.Errors.ApplicantFullName}
              onChangeHandler={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="grid-cols-1">
            <MyTextInput
              disabled={false}
              label="Father's Name"
              name="FatherName"
              id="FatherName"
              leftIcon={<i className="fa-solid fa-person"></i>}
              value={personSectionState.FatherName}
              inputType="text"
              required={false}
              error={personSectionState.Errors.FatherName}
              onChangeHandler={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="">
            <MyTextInput
              disabled={false}
              label="Mother's Name"
              name="MotherName"
              id="MotherName"
              leftIcon={<i className="fa-solid fa-person-dress"></i>}
              value={personSectionState.MotherName}
              inputType="text"
              required={false}
              error={personSectionState.Errors.MotherName}
              onChangeHandler={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="">
            <DateSelect
              label="Date of Birth"
              name="DateOfBirth"
              isDisableFuture={true}
              value={personSectionState?.DateOfBirth}
              onChange={(fieldName, fieldValue) => {
                updatePersonSectionState(
                  fieldName,
                  dayjs(fieldValue).format('DD-MMM-YYYY')
                );
              }}
              error={personSectionState.Errors.DateOfBirth}
            />
          </div>

          <div className="">
            <MyTextInput
              disabled={false}
              label="National ID Number"
              name="NationalIdNumber"
              id="NationalIdNumber"
              leftIcon={<i className="fa-solid fa-address-card"></i>}
              value={personSectionState.NationalIdNumber}
              inputType="number"
              required={false}
              error={personSectionState.Errors.NationalIdNumber}
              onChangeHandler={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="">
            <MyTextInput
              disabled={false}
              label="E-Tin Number"
              name="ETinNumber"
              id="ETinNumber"
              leftIcon={<i className="fa-solid fa-square-poll-vertical"></i>}
              value={personSectionState.ETinNumber}
              inputType="number"
              required={false}
              error={personSectionState.Errors.ETinNumber}
              onChangeHandler={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="">
            <MyTextInput
              disabled={false}
              label="Passport Number"
              name="PassportNumber"
              id="PassportNumber"
              leftIcon={<i className="fa-solid fa-passport"></i>}
              value={personSectionState.PassportNumber}
              inputType="Text"
              required={false}
              error={personSectionState.Errors.PassportNumber}
              onChangeHandler={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="">
            <MyDropdown
              disabled={false}
              label="Select Nationality"
              name="Nationality"
              id="nationality"
              leftIcon={<i className="fa-solid fa-earth-americas"></i>}
              value={personSectionState.NationalityId}
              error={personSectionState.Errors.NationalityId}
              required={true}
              dropDownData={nationalitiesResponseData?.map((obj, index) => {
                return {
                  id: index,
                  value: obj?.NationalityId,
                  label: obj?.NationalityName,
                };
              })}
              onChange={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);

                const selected = nationalitiesResponseData?.find((obj) => {
                  if (parseInt(event.target.value) === obj.NationalityId)
                    return {
                      value: obj?.NationalityId,
                      label: obj?.NationalityName,
                    };
                });
                updatePersonSectionState('NationalityId', event.target.value);
                updatePersonSectionState(
                  'NationalityName',
                  selected?.NationalityName
                );
              }}
            />
          </div>

          <div className="">
            <MyDropdown
              disabled={false}
              label="Select Gender"
              name="Gender"
              id="Gender"
              leftIcon={<i className="fa-solid fa-venus-mars"></i>}
              value={personSectionState.Gender}
              error={personSectionState.Errors.Gender}
              required={true}
              dropDownData={genders}
              onChange={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="">
            <MyDropdown
              disabled={false}
              label="Select Blood Group"
              name="BloodGroup"
              id="BloodGroup"
              leftIcon={<i className="fa-solid fa-droplet"></i>}
              value={personSectionState.BloodGroup}
              error={personSectionState.Errors.BloodGroup}
              required={false}
              dropDownData={bloodGroups}
              onChange={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="">
            <MyDropdown
              disabled={false}
              label="Select Religion"
              name="ReligionId"
              id="ReligionId"
              leftIcon={<i className="fa-solid fa-hands-praying"></i>}
              value={personSectionState.ReligionId}
              error={personSectionState.Errors.ReligionId}
              required={true}
              dropDownData={religionsResponseData?.map((obj, index) => {
                return {
                  id: index,
                  value: obj?.ReligionId,
                  label: obj?.ReligionName,
                };
              })}
              onChange={(event) => {
                // updatePersonSectionState(event.target.name, event.target.value);
                const selected = religionsResponseData?.find((obj) => {
                  if (parseInt(event.target.value) === obj.ReligionId)
                    return {
                      value: obj?.ReligionId,
                      label: obj?.ReligionName,
                    };
                });
                updatePersonSectionState('ReligionId', event.target.value);
                updatePersonSectionState(
                  'ReligionName',
                  selected?.ReligionName
                );
              }}
            />
          </div>

          <div className="">
            <MyDropdown
              disabled={false}
              label="Select Marital Status"
              name="MaritalStatus"
              id="MaritalStatus"
              leftIcon={<i className="fa-solid fa-ring"></i>}
              value={personSectionState.MaritalStatus}
              error={personSectionState.Errors.MaritalStatus}
              required={false}
              dropDownData={maritalStatuses}
              onChange={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>

          <div className="">
            <MyTextInput
              disabled={false}
              label="Spouse’s Name (if married)"
              name="SpouseName"
              id="SpouseName"
              leftIcon={<i className="fa-solid fa-children"></i>}
              value={personSectionState.SpouseName}
              inputType="text"
              required={false}
              error={personSectionState.Errors.SpouseName}
              onChangeHandler={(event) => {
                updatePersonSectionState(event.target.name, event.target.value);
              }}
            />
          </div>
        </div>

        <div className="my-10">
          <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
            Emergency Contact
          </h6>
          <div className="w-full rounded-lg border border-dashed p-2 text-onSurface">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-8">
              <div className="">
                <MyTextInput
                  disabled={false}
                  label="Person's Name"
                  name="ApplicantEmergencyContactName"
                  id="ApplicantEmergencyContactName"
                  leftIcon={<i className="fa-solid fa-circle-user"></i>}
                  value={personSectionState.ApplicantEmergencyContactName}
                  inputType="text"
                  required={false}
                  error={
                    personSectionState.Errors.ApplicantEmergencyContactName
                  }
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div className="">
                <MyTextInput
                  disabled={false}
                  label="Mobile Number"
                  name="ApplicantEmergencyContactNumber"
                  id="ApplicantEmergencyContactNumber"
                  leftIcon={
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  }
                  value={personSectionState.ApplicantEmergencyContactNumber}
                  inputType="text"
                  required={false}
                  error={
                    personSectionState.Errors.ApplicantEmergencyContactNumber
                  }
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select Relation"
                  name="ApplicantEmergencyContactRelation"
                  id="ApplicantEmergencyContactRelationId"
                  leftIcon={<i className="fa-solid fa-people-arrows"></i>}
                  required={false}
                  value={personSectionState.ApplicantEmergencyContactRelationId}
                  error={
                    personSectionState.Errors
                      .ApplicantEmergencyContactRelationId
                  }
                  dropDownData={relationshipResponseData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.RelationTypeCode,
                      label: obj?.RelationName,
                    };
                  })}
                  onChange={(event) => {
                    // updatePersonSectionState(
                    //   event.target.name,
                    //   event.target.value
                    // );
                    const selected = relationshipResponseData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.RelationTypeId)
                        return {
                          value: obj?.RelationTypeId,
                          label: obj?.RelationName,
                        };
                    });
                    updatePersonSectionState(
                      'ApplicantEmergencyContactRelationId',
                      event.target.value
                    );
                    updatePersonSectionState(
                      'ApplicantEmergencyContactRelationName',
                      selected?.RelationName
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="present-address my-10">
          <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
            Present Address
          </h6>
          <div className="border border-dashed p-2 ">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-8">
              <div className="">
                <MyTextInput
                  disabled={false}
                  label="House/Road/Block"
                  name="PresentAddress1"
                  id="PresentAddress1"
                  leftIcon={<i className="fa-solid fa-road"></i>}
                  value={personSectionState.PresentAddress1}
                  inputType="text"
                  required={true}
                  error={personSectionState.Errors.PresentAddress1}
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div className="">
                <MyTextInput
                  disabled={false}
                  label="Post Office"
                  name="PresentAddress2"
                  id="PresentAddress2"
                  leftIcon={<i className="fa-solid fa-envelopes-bulk"></i>}
                  value={personSectionState.PresentAddress2}
                  inputType="text"
                  required={true}
                  error={personSectionState.Errors.PresentAddress2}
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select Division"
                  name="PresentDivisionId"
                  id="PresentDivision"
                  leftIcon={<i className="fa-solid fa-globe"></i>}
                  required={false}
                  value={personSectionState.PresentDivisionId}
                  dropDownData={divisionsResponseData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.DivisionId,
                      label: obj?.DivisionName,
                    };
                  })}
                  onChange={(event) => {
                    // updatePersonSectionState(
                    //   event.target.name,
                    //   event.target.value
                    // );

                    const selected = divisionsResponseData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.DivisionId)
                        return {
                          value: obj?.DivisionId,
                          label: obj?.DivisionName,
                        };
                    });
                    updatePersonSectionState(
                      'PresentDivisionId',
                      selected?.DivisionName
                    );
                    updatePersonSectionState(
                      'PresentDivisionName',
                      event.target.value
                    );

                    getPresentDistrictHandler(parseInt(event.target.value));
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select District"
                  name="PresentAddress4"
                  id="PresentAddress4"
                  leftIcon={<i className="fa-solid fa-city"></i>}
                  value={personSectionState.PresentAddress4}
                  error={personSectionState.Errors.PresentAddress4}
                  required={true}
                  dropDownData={PresentDistrictData?.map((obj, index) => {
                    return {
                      value: obj?.DistrictId,
                      label: obj?.DistrictName,
                    };
                  })}
                  onChange={(event) => {
                    // updatePersonSectionState(
                    //   event.target.name,
                    //   event.target.value
                    // );

                    const selected = PresentDistrictData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.DistrictId)
                        return {
                          value: obj?.DistrictId,
                          label: obj?.DistrictName,
                        };
                    });
                    updatePersonSectionState(
                      'PresentAddress4',
                      selected?.DistrictName
                    );
                    updatePersonSectionState(
                      'PresentDistrictName',
                      event.target.value
                    );

                    getPresentPoliceStationHandler(
                      parseInt(event.target.value)
                    );
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select Police Station"
                  name="PresentAddress3"
                  id="PresentAddress3"
                  leftIcon={
                    <i className="fa-solid fa-person-military-rifle"></i>
                  }
                  value={personSectionState.PresentAddress3}
                  error={personSectionState.Errors.PresentAddress3}
                  required={true}
                  dropDownData={PresentThanaData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.SubDistrictId,
                      label: obj?.SubDistrictName,
                    };
                  })}
                  onChange={(event) => {
                    // updatePersonSectionState(
                    //   event.target.name,
                    //   event.target.value
                    // );
                    const selected = PresentThanaData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.SubDistrictId)
                        return {
                          value: obj?.SubDistrictId,
                          label: obj?.SubDistrictName,
                        };
                    });
                    updatePersonSectionState(
                      'PresentAddress3',
                      selected?.SubDistrictName
                    );
                    updatePersonSectionState(
                      'SubDistrictName',
                      event.target.value
                    );
                    getPresentVillageHandler(parseInt(event.target.value));
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select Village/Mohalla"
                  name="PresentAddress5"
                  id="PresentAddress5"
                  leftIcon={<i className="fa-solid fa-house-flood-water"></i>}
                  value={personSectionState.PresentAddress5}
                  error={personSectionState.Errors.PresentAddress5}
                  required={true}
                  dropDownData={PresentVillageData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.VillageOrAreaId,
                      label: obj?.VillageOrAreaName,
                    };
                  })}
                  onChange={(event) => {
                    const selected = PresentVillageData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.VillageOrAreaId)
                        return {
                          value: obj?.VillageOrAreaId,
                          label: obj?.VillageOrAreaName,
                        };
                    });
                    updatePersonSectionState(
                      'PresentAddress5',
                      selected?.VillageOrAreaName
                    );
                    updatePersonSectionState(
                      'PresentVillageName',
                      event.target.value
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="permanent-address my-10">
          <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
            Permanent Address
          </h6>
          <div className="border border-dashed p-2">
            <MyCheckBox
              disabled={false}
              label="Same as present address? (Yes/No)"
              onChangeHandler={(event) => {
                if (event.target.checked) {
                  updatePersonSectionState(
                    'PermanentAddress1',
                    personSectionState.PresentAddress1
                  );
                  updatePersonSectionState(
                    'PermanentAddress2',
                    personSectionState.PresentAddress2
                  );
                  updatePersonSectionState(
                    'PermanentAddress4',
                    personSectionState.PresentAddress4
                  );
                  updatePersonSectionState(
                    'PermanentAddress3',
                    personSectionState.PresentAddress3
                  );
                  updatePersonSectionState(
                    'PermanentAddress5',
                    personSectionState.PresentAddress5
                  );
                  setIsShow(event.target.checked);
                } else {
                  updatePersonSectionState('PermanentAddress1', '');
                  updatePersonSectionState('PermanentAddress2', '');
                  updatePersonSectionState('PermanentAddress4', '');
                  updatePersonSectionState('PermanentAddress3', '');
                  updatePersonSectionState('PermanentAddress5', '');
                  setIsShow(event.target.checked);
                }
              }}
              name={''}
              value={show}
              error={undefined}
            />

            <div
              className={`grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-8 ${
                !show ? 'show' : 'hidden'
              }`}
            >
              <div className="">
                <MyTextInput
                  disabled={false}
                  label="House/Road/Block"
                  name="PermanentAddress1"
                  id="PermanentAddress1"
                  leftIcon={<i className="fa-solid fa-road"></i>}
                  value={personSectionState.PermanentAddress1}
                  inputType="text"
                  required={false}
                  error={personSectionState.Errors.PermanentAddress1}
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div className="">
                <MyTextInput
                  disabled={false}
                  label="Post Office"
                  name="PermanentAddress2"
                  id="PermanentAddress2"
                  leftIcon={<i className="fa-solid fa-envelopes-bulk"></i>}
                  value={personSectionState.PermanentAddress2}
                  inputType="text"
                  required={false}
                  error={personSectionState.Errors.PermanentAddress2}
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select Division"
                  name="PermanentDivision"
                  id="PermanentDivision"
                  value={personSectionState.PermanentDivisionId}
                  leftIcon={<i className="fa-solid fa-globe"></i>}
                  required={false}
                  dropDownData={divisionsResponseData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.DivisionId,
                      label: obj?.DivisionName,
                    };
                  })}
                  onChange={(event) => {
                    const selected = divisionsResponseData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.DivisionId)
                        return {
                          value: obj?.DivisionId,
                          label: obj?.DivisionName,
                        };
                    });
                    updatePersonSectionState(
                      'PermanentDivision',
                      selected?.DivisionName
                    );
                    updatePersonSectionState(
                      'PermanentDivisionName',
                      event.target.value
                    );
                    getPermanentDistrictHandler(parseInt(event.target.value));
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select District "
                  name="PermanentAddress4"
                  id="PermanentAddress4"
                  leftIcon={<i className="fa-solid fa-city"></i>}
                  value={personSectionState.PermanentAddress4}
                  error={personSectionState.Errors.PermanentAddress4}
                  required={false}
                  dropDownData={PermanentDistrictData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.DistrictId,
                      label: obj?.DistrictName,
                    };
                  })}
                  onChange={(event) => {
                    // updatePersonSectionState(
                    //   event.target.name,
                    //   event.target.value
                    // );
                    const selected = PermanentDistrictData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.DistrictId)
                        return {
                          value: obj?.DistrictId,
                          label: obj?.DistrictName,
                        };
                    });
                    updatePersonSectionState(
                      'PermanentAddress4',
                      selected?.DistrictName
                    );
                    updatePersonSectionState(
                      'PermanentAddress4Name',
                      event.target.value
                    );
                    getPermanentPoliceStation(parseInt(event.target.value));
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select Police Station"
                  name="PermanentAddress3"
                  id="PermanentAddress3"
                  leftIcon={
                    <i className="fa-solid fa-person-military-rifle"></i>
                  }
                  value={personSectionState.PermanentAddress3}
                  error={personSectionState.Errors.PermanentAddress3}
                  required={false}
                  dropDownData={PermanentThanaData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.SubDistrictId,
                      label: obj?.SubDistrictName,
                    };
                  })}
                  onChange={(event) => {
                    // updatePersonSectionState(
                    //   event.target.name,
                    //   event.target.value
                    // );

                    const selected = PermanentThanaData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.SubDistrictId)
                        return {
                          value: obj?.SubDistrictId,
                          label: obj?.SubDistrictName,
                        };
                    });
                    updatePersonSectionState(
                      'PermanentAddress3',
                      selected?.SubDistrictName
                    );
                    updatePersonSectionState(
                      'PermanentAddress3Name',
                      event.target.value
                    );
                    getPermanentVillageHandler(parseInt(event.target.value));
                  }}
                />
              </div>

              <div className="">
                <MyDropdown
                  disabled={false}
                  label="Select Village/Mohalla"
                  name="PermanentAddress5"
                  id="PermanentAddress5"
                  leftIcon={<i className="fa-solid fa-house-flood-water"></i>}
                  value={personSectionState.PermanentAddress5}
                  error={personSectionState.Errors.PermanentAddress5}
                  required={false}
                  dropDownData={PermanentVillageData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.VillageOrAreaId,
                      label: obj?.VillageOrAreaName,
                    };
                  })}
                  onChange={(event) => {
                    const selected = PermanentVillageData?.find((obj) => {
                      if (parseInt(event.target.value) === obj.VillageOrAreaId)
                        return {
                          value: obj?.VillageOrAreaId,
                          label: obj?.VillageOrAreaName,
                        };
                    });
                    updatePersonSectionState(
                      'PermanentAddress5',
                      selected?.VillageOrAreaName
                    );
                    updatePersonSectionState(
                      'PermanentAddress5Name',
                      event.target.value
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact my-10">
          <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
            Contact Number/Details
          </h6>
          <div className="border border-dashed p-2">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-8">
              <div className="">
                <MyTextInput
                  disabled={false}
                  label="Work"
                  name="ApplicantWorkNumber"
                  id="ApplicantWorkNumber"
                  leftIcon={
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  }
                  value={personSectionState.ApplicantWorkNumber}
                  inputType="text"
                  required={false}
                  error={personSectionState.Errors.ApplicantWorkNumber}
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div className="">
                <MyTextInput
                  disabled={false}
                  label="Home"
                  name="ApplicantHomeNumber"
                  id="ApplicantHomeNumber"
                  leftIcon={
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  }
                  value={personSectionState.ApplicantHomeNumber}
                  inputType="text"
                  required={false}
                  error={personSectionState.Errors.ApplicantHomeNumber}
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
              <div className="">
                <MyTextInput
                  disabled={false}
                  label="Cellphone"
                  name="ApplicantCellNumber"
                  id="ApplicantCellNumber"
                  leftIcon={
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  }
                  value={personSectionState.ApplicantCellNumber}
                  inputType="text"
                  required={true}
                  error={personSectionState.Errors.ApplicantCellNumber}
                  onChangeHandler={(event) => {
                    updatePersonSectionState(
                      event.target.name,
                      event.target.value
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <h6 className="text-light text-xs font-semibold uppercase md:text-sm">
          Email
        </h6>
        <div className="border border-dashed p-2">
          <div className=" grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-8">
            <div className="">
              <MyTextInput
                disabled={false}
                label="Email (Official)"
                name="ApplicantOfficialEmail"
                id="ApplicantOfficialEmail"
                leftIcon={<i className="fa-solid fa-at"></i>}
                value={personSectionState.ApplicantOfficialEmail}
                inputType="text"
                required={false}
                error={personSectionState.Errors.ApplicantOfficialEmail}
                onChangeHandler={(event) => {
                  updatePersonSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
              />
            </div>
            <div className="">
              <MyTextInput
                disabled={false}
                label="Email (Personal)"
                name="ApplicantPersonalEmail"
                id="ApplicantPersonalEmail"
                leftIcon={<i className="fa-solid fa-at"></i>}
                value={personSectionState.ApplicantPersonalEmail}
                inputType="text"
                required={true}
                error={personSectionState.Errors.ApplicantPersonalEmail}
                onChangeHandler={(event) => {
                  updatePersonSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
              />
            </div>
          </div>
        </div>

        <hr className="my-6"></hr>

        <div className="mt-6 flex items-center justify-between gap-6 px-2">
          <MyButton
            disabled={true}
            onClick={backwardHandler}
            type="button"
            label="Back"
            styleClass="inline-block cursor-pointer rounded  py-2 w-full text-sm font-bold uppercase bg-primary text-onPrimary disabled:bg-gray-400"
            name={''}
          />
          <MyButton
            onClick={() => {
              var error = '';
              let fieldName: keyof typeof personSectionState;

              for (fieldName in personSectionState) {
                updatePersonSectionState(
                  fieldName,
                  personSectionState[fieldName]
                );

                error =
                  error +
                  validatePersonSectionState(
                    fieldName,
                    personSectionState[fieldName]
                  );
              }
              if (error) {
                window.scrollTo({
                  top: window.innerHeight / 2,
                  behavior: 'smooth',
                });
              }

              if (error.length === 0) {
                forwardHandler();
              }
            }}
            type="button"
            label="Next"
            styleClass="inline-block cursor-pointer rounded  py-2 w-full text-sm font-bold uppercase bg-primary text-onPrimary hover:shadow disabled:bg-gray-400 transition duration-150 ease-out hover:scale-105 hover:ease-in"
            name={''}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonSection;

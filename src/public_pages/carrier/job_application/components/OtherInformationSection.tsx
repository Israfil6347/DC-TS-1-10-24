import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import MyTextarea from 'global_shared/components/MyTextarea';
import useCommand from 'global_shared/hooks/useCommand';
import { useEffect, useState } from 'react';
import { IOtherInfoSectionState } from '../model/data/IOtherInfoSectionState';
import { IRelationshipTypeModel } from '../model/data/IRelationshipTypeModel';
import { validateOtherInfoSectionState } from '../validation/validateOtherInfoSectionState';

interface OtherInformationSectionProps {
  otherInfoSectionState: IOtherInfoSectionState;
  updateOtherInfoSectionState: (fieldName: string, fieldValue: any) => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const OtherInformationSection: React.FC<OtherInformationSectionProps> = ({
  otherInfoSectionState,
  updateOtherInfoSectionState,
  forwardHandler,
  backwardHandler,
  onSubmitHandler,
  viability,
}) => {
  const [open, setIsOpen] = useState(false);
  const [openIsDisabilityDetails, setIsDisabilityDetails] = useState(false);

  // Fetching Relationships
  const { data, executeCommand } = useCommand<IRelationshipTypeModel[]>();

  useEffect(() => {
    executeCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetRelationTypes'
    );
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
          Other Information
        </h6>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="">
            <MyTextarea
              disabled={false}
              label="Skills"
              name="OtherSkills"
              rows={3}
              cols={0}
              value={otherInfoSectionState.OtherSkills}
              required={false}
              error={otherInfoSectionState.Errors.OtherSkills}
              onChange={(event) => {
                updateOtherInfoSectionState(
                  event.target.name,
                  event.target.value
                );
              }}
            />
          </div>
          <div className="">
            <MyTextarea
              disabled={false}
              label="Interests"
              name="Interests"
              rows={3}
              cols={0}
              value={otherInfoSectionState.Interests}
              required={false}
              error={otherInfoSectionState.Errors.Interests}
              onChange={(event) => {
                updateOtherInfoSectionState(
                  event.target.name,
                  event.target.value
                );
              }}
            />
          </div>
          <div className="">
            <MyTextarea
              disabled={false}
              label="List of Volunteer Organizations"
              name="VolunteeredOrganizations"
              rows={3}
              cols={0}
              value={otherInfoSectionState.VolunteeredOrganizations}
              required={false}
              error={otherInfoSectionState.Errors.VolunteeredOrganizations}
              onChange={(event) => {
                updateOtherInfoSectionState(
                  event.target.name,
                  event.target.value
                );
              }}
            />
          </div>
        </div>
        <div className="flex items-center py-3">
          <label htmlFor="" className="">
            Are you willing to join anywhere in Bangladesh?
            <MyCheckBox
              disabled={false}
              label="Yes"
              value={
                otherInfoSectionState.WillingToJoinAnyDepartmentOrServiceCenter
              }
              error={
                otherInfoSectionState.Errors
                  .WillingToJoinAnyDepartmentOrServiceCenter
              }
              name="WillingToJoinAnyDepartmentOrServiceCenter"
              onChangeHandler={(event) => {
                updateOtherInfoSectionState(
                  event.target.name,
                  event.target.checked
                );
              }}
            />
          </label>
        </div>

        <div className="flex items-center  py-3">
          <label htmlFor="" className="">
            Are you physically fit for extensive travel (if required) at any
            location?
            <MyCheckBox
              disabled={false}
              label="Yes"
              name="WillingToTravelAnyWhere"
              value={otherInfoSectionState.WillingToTravelAnyWhere}
              error={otherInfoSectionState.Errors.WillingToTravelAnyWhere}
              onChangeHandler={(event) => {
                updateOtherInfoSectionState(
                  event.target.name,
                  event.target.checked
                );
              }}
            />
          </label>
        </div>
        <div className="flex items-center  py-3">
          <label htmlFor="" className="">
            Are you a member of Dhaka Credit?
            <MyCheckBox
              disabled={false}
              label="Yes"
              name="MemberOfDhakaCredit"
              value={otherInfoSectionState.MemberOfDhakaCredit}
              error={otherInfoSectionState.Errors.MemberOfDhakaCredit}
              onChangeHandler={(event) => {
                updateOtherInfoSectionState(
                  event.target.name,
                  event.target.checked
                );
              }}
            />
          </label>
        </div>
        <div className="flex items-center  py-3">
          <label htmlFor="" className="">
            Do you have any objections to our making inquiries about your
            present employer?
            <MyCheckBox
              disabled={false}
              label="Yes"
              name="AnyObjectionForMakingInquiriesOfYou"
              value={otherInfoSectionState.AnyObjectionForMakingInquiriesOfYou}
              error={
                otherInfoSectionState.Errors.AnyObjectionForMakingInquiriesOfYou
              }
              onChangeHandler={(event) => {
                updateOtherInfoSectionState(
                  event.target.name,
                  event.target.checked
                );
              }}
            />
          </label>
        </div>

        <div
          className="relative my-3 w-full justify-between rounded border border-dashed p-3 text-onSurface"
          x-data="{ hasValue: '' }"
        >
          Do you have any relatives working at the CCCUL? If yes, please mention
          below:
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-8">
            <div className="">
              <MyTextInput
                disabled={false}
                inputType="text"
                label="Name of the Relative"
                name="DhakaCreditRelativeEmployeeName"
                id="DhakaCreditRelativeEmployeeName"
                value={otherInfoSectionState.DhakaCreditRelativeEmployeeName}
                required={false}
                error={
                  otherInfoSectionState.Errors.DhakaCreditRelativeEmployeeName
                }
                onChangeHandler={(event) => {
                  updateOtherInfoSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
                leftIcon={<i className="fa-solid fa-circle-user"></i>}
              />
            </div>
            <div className="">
              <MyTextInput
                disabled={false}
                inputType="text"
                label="Designation/Position"
                name="DhakaCreditRelativeEmployeePosition"
                id="DhakaCreditRelativeEmployeePosition"
                value={
                  otherInfoSectionState.DhakaCreditRelativeEmployeePosition
                }
                required={false}
                error={
                  otherInfoSectionState.Errors
                    .DhakaCreditRelativeEmployeePosition
                }
                onChangeHandler={(event) => {
                  updateOtherInfoSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
                leftIcon={<i className="fa-solid fa-ranking-star"></i>}
              />
            </div>

            <div className="">
              <MyDropdown
                disabled={false}
                label="Relationship"
                name="DhakaCreditRelativeEmployeeRelationship"
                value={
                  otherInfoSectionState?.DhakaCreditRelativeEmployeeRelationshipId
                }
                required={false}
                error={
                  otherInfoSectionState.Errors
                    .DhakaCreditRelativeEmployeeRelationshipId
                }
                dropDownData={data?.map((obj, index) => {
                  return {
                    id: index,
                    value: obj?.RelationTypeCode,
                    label: obj?.RelationName,
                  };
                })}
                onChange={(event) => {
                  // updateOtherInfoSectionState(
                  //   event.target.name,
                  //   event.target.value
                  // );
                  const selected = data?.find((obj) => {
                    if (parseInt(event.target.value) === obj.RelationTypeId)
                      return {
                        value: obj?.RelationTypeId,
                        label: obj?.RelationName,
                      };
                  });
                  updateOtherInfoSectionState(
                    'DhakaCreditRelativeEmployeeRelationshipId',
                    event.target.value
                  );
                  updateOtherInfoSectionState(
                    'DhakaCreditRelativeEmployeeRelationshipName',
                    selected?.RelationName
                  );
                }}
                leftIcon={<i className="fa-solid fa-people-arrows"></i>}
              />
            </div>
            <div className="">
              <MyTextInput
                disabled={false}
                inputType="text"
                label="Contact Number"
                name="DhakaCreditRelativeEmployeeContactNo"
                id="DhakaCreditRelativeEmployeeContactNo"
                value={
                  otherInfoSectionState.DhakaCreditRelativeEmployeeContactNo
                }
                required={false}
                error={
                  otherInfoSectionState?.Errors
                    ?.DhakaCreditRelativeEmployeeContactNo
                }
                onChangeHandler={(event) => {
                  updateOtherInfoSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
                leftIcon={<i className="fa-solid fa-mobile-screen-button"></i>}
              />
            </div>
          </div>
        </div>

        <div
          className="relative my-3 w-full justify-between rounded border border-dashed p-3 text-onSurface"
          x-data="{ hasValue: '' }"
        >
          Have you received any calls for other position(s) in the CCCUL during
          the last 1-2 years? If yes, please mention below:
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <div className="">
              <MyTextInput
                disabled={false}
                inputType="text"
                label="Name of the Position"
                name="PreviouslyCalledForPosition"
                id="PreviouslyCalledForPosition"
                value={otherInfoSectionState.PreviouslyCalledForPosition}
                required={false}
                error={otherInfoSectionState.Errors.PreviouslyCalledForPosition}
                onChangeHandler={(event) => {
                  updateOtherInfoSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
                leftIcon={<i className="fa-solid fa-pen-nib"></i>}
              />
            </div>
            <div className="">
              <DateSelect
                label="Date of Application"
                name="PreviouslyCalledForApplicationDate"
                value={otherInfoSectionState.PreviouslyCalledForApplicationDate}
                onChange={(fieldName, fieldValue) => {
                  updateOtherInfoSectionState(
                    fieldName,
                    dayjs(fieldValue).format('DD-MMM-YYYY')
                  );
                }}
                error={
                  otherInfoSectionState.Errors
                    .PreviouslyCalledForApplicationDate
                }
              />
            </div>
          </div>
        </div>

        <div className="flex items-center py-3">
          <label htmlFor="" className="">
            Do you have any physical or mental disabilities which might limit
            the performance of your work?
            <MyCheckBox
              disabled={false}
              label="Yes"
              name="HaveAnyPhysicalOrMentalDisabilities"
              value={otherInfoSectionState.HaveAnyPhysicalOrMentalDisabilities}
              error={
                otherInfoSectionState.Errors.HaveAnyPhysicalOrMentalDisabilities
              }
              onChangeHandler={(event) => {
                updateOtherInfoSectionState(
                  event.target.name,
                  event.target.checked
                );
                setIsDisabilityDetails(event.target.checked);
              }}
            />
          </label>
        </div>
        <div
          className={`my-3  py-3 ${
            !openIsDisabilityDetails ? 'hidden' : 'show'
          }`}
        >
          <MyTextarea
            disabled={false}
            label="Physical or Mental Disability Details"
            rows={3}
            cols={0}
            name="DisabilityDetails"
            value={otherInfoSectionState.DisabilityDetails}
            required={false}
            error={otherInfoSectionState.Errors.DisabilityDetails}
            onChange={(event) => {
              updateOtherInfoSectionState(
                event.target.name,
                event.target.value
              );
            }}
          />
        </div>

        <div>
          <div className="flex items-center">
            <label htmlFor="" className="">
              Have you ever been convicted of a crime? (If the answer is “Yes”
              please mention details)?
              <MyCheckBox
                disabled={false}
                label="Yes"
                name="EverConvictedCrime"
                value={otherInfoSectionState.EverConvictedCrime}
                error={otherInfoSectionState.Errors.EverConvictedCrime}
                onChangeHandler={(event) => {
                  setIsOpen(event.target.checked);
                  updateOtherInfoSectionState(
                    event.target.name,
                    event.target.checked
                  );
                }}
              />
            </label>
          </div>
          <div
            className={`ease overflow-hidden text-justify font-medium transition-all duration-700 ${
              !open ? 'hidden' : 'show'
            }`}
          >
            <div className="mt-4">
              <MyTextarea
                disabled={false}
                label="Crime Details"
                name="CrimeDetails"
                rows={4}
                cols={0}
                value={otherInfoSectionState.CrimeDetails}
                required={false}
                error={otherInfoSectionState.Errors.CrimeDetails}
                onChange={(event) => {
                  updateOtherInfoSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
              />
            </div>
          </div>
        </div>
        <hr className="my-6"></hr>
        <div className="mt-6 flex items-center justify-between gap-6">
          <MyButton
            disabled={false}
            onClick={backwardHandler}
            type="button"
            label="Back"
            styleClass="inline-block cursor-pointer rounded  py-2 w-full text-sm font-bold uppercase bg-primary text-onPrimary hover:shadow disabled:bg-gray-400 transition duration-150 ease-out hover:scale-105 hover:ease-in"
            name={''}
          />
          <MyButton
            onClick={() => {
              var error = '';
              let fieldName: keyof typeof otherInfoSectionState;
              for (fieldName in otherInfoSectionState) {
                updateOtherInfoSectionState(
                  fieldName,
                  otherInfoSectionState[fieldName]
                );
                error =
                  error +
                  validateOtherInfoSectionState(
                    fieldName,
                    otherInfoSectionState[fieldName]
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

export default OtherInformationSection;

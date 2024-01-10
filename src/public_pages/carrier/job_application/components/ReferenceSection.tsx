import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import { useEffect } from 'react';
import { referenceTypes } from '../data/referenceTypes';
import { IReferenceSectionState } from '../model/data/IReferenceSectionState';
import { validateReferenceSectionState } from '../validation/validateReferenceSectionState';

interface ReferenceSectionProps {
  referenceSectionState: IReferenceSectionState[];
  updateReferenceSectionState: (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => void;
  removeReferenceSectionState: (id: string) => void;
  addReferenceSectionState: () => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const ReferenceSection: React.FC<ReferenceSectionProps> = ({
  referenceSectionState,
  updateReferenceSectionState,
  removeReferenceSectionState,
  addReferenceSectionState,
  forwardHandler,
  backwardHandler,
  onSubmitHandler,
  viability,
}) => {
  useEffect(() => {
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
          Reference
        </h6>
        {referenceSectionState.map((item, index) => (
          <div
            className="mt-6 w-full rounded-lg border border-dashed p-2 text-onSurface"
            key={index}
          >
            <div className="">
              <div className="flex justify-end">
                <MyButton
                  onClick={() => {
                    removeReferenceSectionState(item.ReferenceUUId);
                  }}
                  type="button"
                  styleClass="cursor-pointer text-primary hover:text-error"
                  label={''}
                  name={''}
                >
                  <i className="fa-solid fa-trash-can text-2xl"></i>
                </MyButton>
              </div>
              <div className="my-4 grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
                <div className="grid grid-cols-1">
                  <MyDropdown
                    disabled={false}
                    label="Reference Type"
                    name={`ReferenceType`}
                    id={`ReferenceType_${index}`}
                    value={item.ReferenceType}
                    required={false}
                    error={item.Errors.ReferenceType}
                    dropDownData={referenceTypes}
                    onChange={(event) => {
                      updateReferenceSectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-t"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Name"
                    name={`ReferenceName`}
                    id={`ReferenceName_${index}`}
                    value={item.ReferenceName}
                    required={false}
                    error={item.Errors.ReferenceName}
                    onChangeHandler={(event) => {
                      updateReferenceSectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-registered"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Position"
                    name={`Position`}
                    id={`Position_${index}`}
                    value={item.Position}
                    required={false}
                    error={item.Errors.Position}
                    onChangeHandler={(event) => {
                      updateReferenceSectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-ranking-star"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Organization"
                    name={`OrganizationName`}
                    id={`OrganizationName_${index}`}
                    value={item.OrganizationName}
                    required={false}
                    error={item.Errors.OrganizationName}
                    onChangeHandler={(event) => {
                      updateReferenceSectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-building-ngo"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Mailing Address"
                    name={`MailingAddress`}
                    id={`mailingAddress_${index}`}
                    value={item.MailingAddress}
                    required={false}
                    error={item.Errors.MailingAddress}
                    onChangeHandler={(event) => {
                      updateReferenceSectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-envelopes-bulk"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Mobile"
                    name={`MobileNo`}
                    id={`MobileNo_${index}`}
                    value={item.MobileNo}
                    required={false}
                    error={item.Errors.MobileNo}
                    onChangeHandler={(event) => {
                      updateReferenceSectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-mobile-screen"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyTextInput
                    disabled={false}
                    inputType="email"
                    label="Email Address"
                    name={`Email`}
                    id={`Email_${index}`}
                    value={item.Email}
                    required={false}
                    error={item.Errors.Email}
                    onChangeHandler={(event) => {
                      updateReferenceSectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-at"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-4 p-4">
          <MyButton
            onClick={addReferenceSectionState}
            type="button"
            label={`Add ${
              referenceSectionState.length !== 0 ? 'Another' : 'Reference'
            } `}
            styleClass="cursor-pointer rounded-md border border-primary bg-primary py-2 px-4 text-sm font-bold uppercase text-onPrimary hover:bg-background hover:text-primary hover:shadow"
            name={''}
          />
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
              referenceSectionState.forEach((element, index) => {
                let fieldName: keyof typeof element;
                for (fieldName in element) {
                  updateReferenceSectionState(
                    fieldName,
                    element[fieldName],
                    index
                  );
                  error =
                    error +
                    validateReferenceSectionState(
                      fieldName,
                      element[fieldName]
                    );
                }
                if (error) {
                  window.scrollTo({
                    top: window.innerHeight / 2,
                    behavior: 'smooth',
                  });
                }
              });

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

export default ReferenceSection;

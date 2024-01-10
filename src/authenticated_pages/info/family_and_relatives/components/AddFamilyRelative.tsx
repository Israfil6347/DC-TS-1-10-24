import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyImageInput from 'global_shared/components/MyImageInput';
import MySearchInput from 'global_shared/components/MySearchInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import { ChangeEvent } from 'react';
import { RelationshipTypeCode } from '../enum/RelationshipTypeCode';
import { FamilyAndRelativeRequestState } from '../hooks/useFamilyAndRelativeRequestState';
import { validateFamilyAndRelativeRequestState } from '../validation/validateFamilyAndRelativeRequestState';
import { RelationshipTypeModel } from 'authenticated_pages/info/shared/model/data/RelationshipTypeModel';
import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
import MyButton from 'global_shared/components/MyButton';

interface AddFamilyRelativeProps {
  familyAndRelativeRequestState: FamilyAndRelativeRequestState;
  searchFamilyAndRelativeRequestData: CollectionLedgersResponseModel | null;
  getRelationshipTypesRequestData: RelationshipTypeModel[] | null;
  updateFamilyAndRelativeRequestState: (
    fieldName: string,
    fieldValue: any
  ) => void;
  searchFamilyAndRelativeHandler: () => void;
  addFamilyAndRelativeHandler: (accountNo: string) => void;
}

const AddFamilyRelative: React.FC<AddFamilyRelativeProps> = ({
  familyAndRelativeRequestState,
  searchFamilyAndRelativeRequestData,
  getRelationshipTypesRequestData,
  updateFamilyAndRelativeRequestState,
  searchFamilyAndRelativeHandler,
  addFamilyAndRelativeHandler,
}) => {
  return (
    <>
      <motion.div
        variants={MyVariants.SlideInFromRight}
        transition={MyTransition.Spring.Low}
        className="w-full bg-surface p-8 "
      >
        <div className="">
          <h1 className="text-center text-xl font-bold uppercase text-primary">
            Search and add family member
          </h1>

          <div className="relative my-6 w-full">
            <MySearchInput
              label="Account Number"
              value={familyAndRelativeRequestState?.relativeSearch}
              name="relativeSearch"
              leftIcon={<i className="fa-solid fa-magnifying-glass"></i>}
              disabled={false}
              error={familyAndRelativeRequestState?.Errors?.relativeSearch}
              onChange={(event) => {
                updateFamilyAndRelativeRequestState(
                  event.target.name,
                  event.target.value
                );
              }}
              onSubmit={(event) => searchFamilyAndRelativeHandler()}
            />
          </div>
          <MyTextInput
            label={'Account Holder Name'}
            name={''}
            disabled={true}
            value={
              searchFamilyAndRelativeRequestData?.AccountHolderInfo[0]?.FullName
            }
            inputType={'text'}
            onChangeHandler={function (
              event: ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error('Function not implemented.');
            }}
            leftIcon={<i className="fa-solid fa-person"></i>}
          />
          <div className="my-5 w-full">
            <MyDropdown
              name="RelationTypeCode"
              value={familyAndRelativeRequestState?.RelationTypeCode}
              label="Relationship"
              disabled={false}
              dropDownData={getRelationshipTypesRequestData?.map(
                (obj, index) => {
                  return {
                    id: index,
                    value: obj?.RelationTypeCode!,
                    label: obj?.RelationName!,
                  };
                }
              )}
              onChange={(event) => {
                updateFamilyAndRelativeRequestState(
                  event.target.name,
                  event.target.value
                );
              }}
              error={familyAndRelativeRequestState?.Errors?.RelationTypeCode}
              required={true}
              leftIcon={<i className="fa-solid fa-people-arrows"></i>}
            />
          </div>

          {familyAndRelativeRequestState.RelationTypeCode ===
            RelationshipTypeCode.Husband.toString() ||
          familyAndRelativeRequestState.RelationTypeCode ===
            RelationshipTypeCode.Wife.toString() ? (
            <MyImageInput
              label="RELATIONSHIP SUPPORTING IMAGE"
              name="RelationshipSupportingImage"
              required={false}
              disabled={false}
              heightClass="h-32"
              value={familyAndRelativeRequestState?.RelationshipSupportingImage}
              error={
                familyAndRelativeRequestState?.Errors
                  ?.RelationshipSupportingImage
              }
              onChangeHandler={(name, value) => {
                updateFamilyAndRelativeRequestState(name, value);
              }}
            />
          ) : (
            ''
          )}
        </div>
        <div className="bottom-0  w-full rounded  text-center ">
          <MyButton
            type="button"
            label="Add family member"
            disabled={
              searchFamilyAndRelativeRequestData === null ? true : false
            }
            name={''}
            onClick={() => {
              var error = '';
              let fieldName: keyof typeof familyAndRelativeRequestState;
              for (fieldName in familyAndRelativeRequestState) {
                updateFamilyAndRelativeRequestState(
                  fieldName,
                  familyAndRelativeRequestState[fieldName]
                );
                error =
                  error +
                  validateFamilyAndRelativeRequestState(
                    fieldName,
                    familyAndRelativeRequestState[fieldName]
                  );
              }

              if (error.length === 0) {
                addFamilyAndRelativeHandler(
                  familyAndRelativeRequestState.relativeSearch
                );
              }
            }}
            styleClass="w-full rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:scale-105"
          ></MyButton>
        </div>
      </motion.div>
    </>
  );
};
export default AddFamilyRelative;

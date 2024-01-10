import { PDFDownloadLink } from '@react-pdf/renderer';
import userImage from 'assets/images/User.png';
import MyButton from 'global_shared/components/MyButton';
import { IJobApplication } from 'global_shared/model/request/IJobApplication';
import { removeSpecialCharacters } from 'global_shared/utils/dateUtils';
import moment from 'moment';
import DownloadCvPDF from './DownloadCvPDF';

interface CVProps {
  jobApplicationData: IJobApplication | null;
  isSubmitView: boolean;
  onSubmitHandler: any;
}

const CV: React.FC<CVProps> = ({
  jobApplicationData,
  isSubmitView,
  onSubmitHandler,
}) => {
  const toDay = new Date();

  console.log(jobApplicationData);

  return (
    <div className="">
      <div className="  bg-surface px-8 py-6 lg:py-16 lg:px-20">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-flow-col lg:grid-cols-3">
            <div className="">
              {jobApplicationData?.JobApplicant?.ApplicantPhoto === '' ? (
                <img
                  className="overflow-hidden rounded-full p-2 md:rounded-md"
                  src={userImage}
                  alt="user"
                />
              ) : (
                <img
                  className="h-40 w-44 md:w-48"
                  src={`data:image/png;base64,${jobApplicationData?.JobApplicant?.ApplicantPhoto}`}
                  alt=""
                />
              )}
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold">
                {jobApplicationData?.JobApplicant?.ApplicantFullName}
              </div>
              <div className="">
                {jobApplicationData?.JobApplicant?.ApplicantWorkNumber}
              </div>
              <div className="">
                {jobApplicationData?.JobApplicant?.ApplicantPersonalEmail}
              </div>
              <div className="">
                {` 
                      ${jobApplicationData?.JobApplicant?.PresentAddress1},
                      ${jobApplicationData?.JobApplicant?.PresentAddress2},
                      ${jobApplicationData?.JobApplicant?.PresentAddress5},
                      ${jobApplicationData?.JobApplicant?.PresentAddress3},
                      ${jobApplicationData?.JobApplicant?.PresentAddress4}
                     
                     
                `}
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">Personal Information</div>
              <PDFDownloadLink
                document={
                  <DownloadCvPDF
                    jobApplicationData={jobApplicationData}
                    image={`data:image/png;base64, ${jobApplicationData?.JobApplicant?.ApplicantPhoto}`}
                    isSubmitView={undefined}
                  ></DownloadCvPDF>
                }
                fileName={`${jobApplicationData?.JobApplicant?.ApplicantFullName}.pdf`}
              >
                <div className="mt-3 flex justify-center">
                  <MyButton
                    styleClass="rounded bg-primary p-2 font-semibold text-onPrimary transition-all duration-300 "
                    label={''}
                    name={''}
                    type={undefined}
                  >
                    Download PDF
                  </MyButton>
                </div>
              </PDFDownloadLink>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 border p-2 lg:grid-cols-4">
              {jobApplicationData?.JobApplicant?.FatherName === '' ? (
                ''
              ) : (
                <div className="">
                  <div className="font-semibold">Father's Name</div>
                  <div className="">
                    {' '}
                    {jobApplicationData?.JobApplicant?.FatherName}
                  </div>
                </div>
              )}
              {jobApplicationData?.JobApplicant?.MotherName === '' ? (
                ''
              ) : (
                <div className="">
                  <div className="font-semibold">Mother's Name</div>
                  <div className="">
                    {' '}
                    {jobApplicationData?.JobApplicant?.MotherName}
                  </div>
                </div>
              )}
              {jobApplicationData?.JobApplicant?.DateOfBirth === '' ? (
                ''
              ) : (
                <div className="">
                  <div className="font-semibold">Date of Birth</div>
                  <div className="">
                    {moment(
                      jobApplicationData?.JobApplicant?.DateOfBirth
                    ).format('DD-MMM-YYYY')}
                  </div>
                </div>
              )}

              {jobApplicationData?.JobApplicant?.NationalIdNumber === '' ? (
                ''
              ) : (
                <div className="">
                  <div className="font-semibold">National ID</div>
                  <div className="">
                    {jobApplicationData?.JobApplicant?.NationalIdNumber}
                  </div>
                </div>
              )}

              {jobApplicationData?.JobApplicant?.ETinNumber === '' ? (
                ''
              ) : (
                <div className="">
                  <div className="font-semibold">E-Tin Number</div>
                  <div className="">
                    {jobApplicationData?.JobApplicant?.ETinNumber}
                  </div>
                </div>
              )}

              {jobApplicationData?.JobApplicant?.PassportNumber === '' ? (
                ''
              ) : (
                <div className="">
                  <div className="font-semibold">Passport Number</div>
                  <div className="">
                    {' '}
                    {jobApplicationData?.JobApplicant?.PassportNumber}
                  </div>
                </div>
              )}
              {isSubmitView ? (
                jobApplicationData?.JobApplicant?.Gender === '' ? null : (
                  <div className="">
                    <div className="font-semibold">Gender</div>
                    <div className="">
                      {jobApplicationData?.JobApplicant?.Gender}
                    </div>
                  </div>
                )
              ) : jobApplicationData?.JobApplicant?.ApplicantGender ===
                '' ? null : (
                <div className="">
                  <div className="font-semibold">Gender</div>
                  <div className="">
                    {jobApplicationData?.JobApplicant?.ApplicantGender}
                  </div>
                </div>
              )}

              {jobApplicationData?.JobApplicant?.BloodGroup === '' ? (
                ''
              ) : (
                <div className="">
                  <div className="font-semibold">Blood Group</div>
                  <div className="">
                    {jobApplicationData?.JobApplicant?.BloodGroup}
                  </div>
                </div>
              )}

              {isSubmitView ? (
                jobApplicationData?.JobApplicant?.ReligionId === null ? null : (
                  <div className="">
                    <div className="font-semibold">Religion</div>
                    <div className="">
                      {jobApplicationData?.JobApplicant?.ReligionName}
                    </div>
                  </div>
                )
              ) : jobApplicationData?.JobApplicant?.ReligionName ===
                '' ? null : (
                <div className="">
                  <div className="font-semibold">Religion</div>
                  <div className="">
                    {jobApplicationData?.JobApplicant?.ReligionName}
                  </div>
                </div>
              )}
              {isSubmitView ? (
                jobApplicationData?.JobApplicant?.NationalityId ===
                null ? null : (
                  <div className="">
                    <div className="font-semibold">Nationality</div>
                    <div className="">
                      {jobApplicationData?.JobApplicant?.NationalityName}
                    </div>
                  </div>
                )
              ) : jobApplicationData?.JobApplicant?.NationalityName ===
                '' ? null : (
                <div className="">
                  <div className="font-semibold">Nationality</div>
                  <div className="">
                    {' '}
                    {jobApplicationData?.JobApplicant?.NationalityName}
                  </div>
                </div>
              )}
              {isSubmitView ? (
                jobApplicationData?.JobApplicant?.MaritalStatus ===
                '' ? null : (
                  <div className="">
                    <div className="font-semibold">Marital Status</div>
                    <div className="">
                      {jobApplicationData?.JobApplicant?.MaritalStatus}
                    </div>
                  </div>
                )
              ) : jobApplicationData?.JobApplicant?.ApplicantMaritalStatus ===
                '' ? null : (
                <div className="">
                  <div className="font-semibold">Marital Status</div>
                  <div className="">
                    {' '}
                    {jobApplicationData?.JobApplicant?.ApplicantMaritalStatus}
                  </div>
                </div>
              )}

              {jobApplicationData?.JobApplicant?.SpouseName === '' ? (
                ''
              ) : (
                <div className="">
                  <div className="font-semibold">Spouse Name</div>
                  <div className="">
                    {jobApplicationData?.JobApplicant?.SpouseName}
                  </div>
                </div>
              )}

              {isSubmitView ? (
                jobApplicationData?.JobApplicant?.PermanentAddress1 ===
                '' ? null : (
                  <div className="">
                    <div className="font-semibold">Address</div>
                    <div className="">
                      {` 
                      ${jobApplicationData?.JobApplicant?.PermanentAddress1},
                      ${jobApplicationData?.JobApplicant?.PermanentAddress2},
                      ${jobApplicationData?.JobApplicant?.PermanentAddress5},
                      ${jobApplicationData?.JobApplicant?.PermanentAddress3},
                      ${jobApplicationData?.JobApplicant?.PermanentAddress4}  
                `}
                    </div>
                  </div>
                )
              ) : jobApplicationData?.JobApplicant?.PermanentAddress1 ===
                '' ? null : (
                <div className="">
                  <div className="font-semibold">Address</div>
                  <div className="">
                    {` 
                      ${jobApplicationData?.JobApplicant?.PermanentAddress1},
                      ${jobApplicationData?.JobApplicant?.PermanentAddress2},
                      ${jobApplicationData?.JobApplicant?.PermanentAddress5},
                      ${jobApplicationData?.JobApplicant?.PermanentAddress3},
                      ${jobApplicationData?.JobApplicant?.PermanentAddress4}   
                `}
                  </div>
                </div>
              )}
            </div>
            {jobApplicationData?.JobApplicant?.ApplicantWorkNumber === '' &&
            jobApplicationData?.JobApplicant?.ApplicantHomeNumber === '' &&
            jobApplicationData?.JobApplicant?.ApplicantOfficialEmail === '' ? (
              ''
            ) : (
              <div>
                <h4 className="mt-4 text-lg font-semibold underline">
                  Contact
                </h4>
                <div className="mt-4 grid grid-cols-1 gap-3 border p-2 lg:grid-cols-4">
                  <div className="">
                    <div className="font-semibold">Phone Number (Work)</div>
                    <div className="">
                      {jobApplicationData?.JobApplicant?.ApplicantWorkNumber}
                    </div>
                  </div>
                  <div className="">
                    <div className="font-semibold">Phone Number (Home)</div>
                    <div className="">
                      {jobApplicationData?.JobApplicant?.ApplicantHomeNumber}
                    </div>
                  </div>

                  <div className="">
                    <div className="font-semibold">Email(Official)</div>
                    <div className="">
                      {jobApplicationData?.JobApplicant?.ApplicantOfficialEmail}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {(jobApplicationData?.JobApplicant
              ?.ApplicantEmergencyContactName === '' &&
              jobApplicationData?.JobApplicant
                ?.ApplicantEmergencyContactNumber === '' &&
              jobApplicationData?.JobApplicant
                ?.ApplicantEmergencyContactRelationName === '') ||
            jobApplicationData?.JobApplicant
              ?.ApplicantEmergencyContactRelationId === null ? (
              ''
            ) : (
              <div>
                <h4 className="mt-4 text-lg font-semibold underline">
                  Emergency Contact
                </h4>
                <div className="mt-4 grid grid-cols-1 gap-3 border p-2 lg:grid-cols-4">
                  {jobApplicationData?.JobApplicant
                    ?.ApplicantEmergencyContactName === '' ? (
                    ''
                  ) : (
                    <div className="">
                      <div className="font-semibold">Name</div>
                      <div className="">
                        {
                          jobApplicationData?.JobApplicant
                            ?.ApplicantEmergencyContactName
                        }
                      </div>
                    </div>
                  )}
                  {jobApplicationData?.JobApplicant
                    ?.ApplicantEmergencyContactNumber === '' ? (
                    ''
                  ) : (
                    <div className="">
                      <div className="font-semibold">Number</div>
                      <div className="">
                        {
                          jobApplicationData?.JobApplicant
                            ?.ApplicantEmergencyContactNumber
                        }
                      </div>
                    </div>
                  )}

                  {jobApplicationData?.JobApplicant
                    ?.ApplicantEmergencyContactRelationName === '' ? (
                    <div className="">
                      <div className="font-semibold">Relation</div>
                      <div className="">
                        {
                          jobApplicationData?.JobApplicant
                            ?.ApplicantEmergencyContactRelationId
                        }
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <div className="font-semibold">Relation</div>
                      <div className="">
                        {
                          jobApplicationData?.JobApplicant
                            ?.ApplicantEmergencyContactRelationName
                        }
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {jobApplicationData?.Dependent?.length === 0 ? (
            ''
          ) : (
            <div className="pt-5">
              {jobApplicationData?.Dependent === undefined ? (
                ' '
              ) : (
                <div className="">
                  <h4 className="text-xl font-semibold">Dependents</h4>
                  <table className="mt-4 table w-full border">
                    <thead className="w-full">
                      <tr className="text-left">
                        <th className="px-2 py-4">Dependent Name</th>
                        <th className="px-2 py-4">Age</th>
                        <th className="px-2 py-4">Relation</th>
                      </tr>
                    </thead>
                    {jobApplicationData?.Dependent?.map((dependents, key) => (
                      <tbody className="w-full">
                        <tr className="border">
                          <td className="px-2 py-4">
                            <p className="font-normal">
                              {removeSpecialCharacters(
                                dependents?.DependentName
                              )}
                            </p>
                          </td>
                          <td className="px-2 py-4">
                            <p className="font-normal">
                              {' '}
                              {dependents?.DependentAge}
                            </p>
                          </td>
                          <td className="px-2 py-4">
                            <p className="font-normal">
                              {' '}
                              {dependents?.DependentRelationName}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              )}
            </div>
          )}
          {jobApplicationData?.JobHistory === undefined ? (
            ' '
          ) : (
            <div className="pt-5">
              <h4 className="mb-4 text-xl font-semibold">Job Histories</h4>

              <div className="grid grid-cols-1 gap-4 pb-10  lg:grid-cols-2">
                {jobApplicationData?.JobHistory?.map((JobHistory) => (
                  <div className="border p-3">
                    <div className="font-semibold">Organization Name</div>
                    <div className="">{JobHistory?.OrganizationName}</div>
                    <div className="font-semibold">Address</div>
                    <div className="">{JobHistory?.OrganizationAddress}</div>
                    <div className="font-semibold">Position</div>
                    <div className=""> {JobHistory?.Position}</div>
                    <div className="font-semibold">Salary</div>
                    <div className="">{JobHistory?.Salary}</div>
                    <div className="font-semibold">Joining Date</div>
                    <div className="">
                      {moment(JobHistory?.DurationFrom).format('DD-MMM-YYYY')}
                    </div>
                    {JobHistory?.DurationTo === null ||
                    JobHistory?.DurationTo === '' ? (
                      <div>
                        <div className="font-semibold">Resigning Date</div>
                        <div className="">On Going</div>
                      </div>
                    ) : (
                      <div>
                        <div className="font-semibold">Resigning Date</div>
                        <div className="">
                          {moment(JobHistory?.DurationTo).format('DD-MMM-YYYY')}
                        </div>
                      </div>
                    )}

                    <div className="font-semibold">Reason For Leaving</div>
                    <div className=""> {JobHistory?.ReasonForLeaving}</div>
                    <div className="font-semibold">No. of Emp. Supervised</div>
                    <div className="">
                      {JobHistory?.NoOfEmployeeSupervisedByYou}
                    </div>
                    <div className="font-semibold">Job Responsibilities</div>
                    <div className="">{JobHistory?.Responsibilities}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {jobApplicationData?.Education?.length === 0 ? (
            ' '
          ) : (
            <div className="">
              <div className="">
                <h4 className="text-xl font-semibold">Educations</h4>
                <table className="mt-4 table w-full border">
                  <thead className="w-full">
                    <tr className="text-left">
                      <th className="px-2 py-4">Name of Degree</th>
                      <th className="px-2 py-4">Institute Name</th>
                      <th className="px-2 py-4">Major/Group</th>
                      <th className="px-2 py-4">Result</th>
                      <th className="px-2 py-4">Passing Year</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {jobApplicationData?.Education?.map((Education, key) => (
                      <tr className="border">
                        <td className="px-2 py-4">
                          <p className="font-normal">
                            {Education?.EducationalDegreeName ||
                              Education?.DegreeName}
                          </p>
                        </td>
                        <td className="px-2 py-4">
                          <p className="font-normal">
                            {Education?.InstituteName}
                          </p>
                        </td>
                        <td className="px-2 py-4">
                          <p className="font-normal">{Education?.Major}</p>
                        </td>
                        <td className="px-2 py-4">
                          <p className="font-normal">
                            {Education?.Result} out of {Education?.ResultOutOf}
                          </p>
                        </td>
                        <td className="px-2 py-4">
                          <p className="font-normal">
                            {Education?.PassingYear}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {jobApplicationData?.Training?.length === 0 ? (
            ''
          ) : (
            <div className="pt-5">
              <h4 className="mb-4 text-xl font-semibold">Trainings</h4>

              <div className="grid grid-cols-1 gap-4 pb-10  lg:grid-cols-2">
                {jobApplicationData?.Training?.map((Training) => (
                  <div className="border p-3">
                    <div className="font-semibold">Training Title</div>
                    <div className=""> {Training?.TrainingTitle}</div>
                    <div className="font-semibold">Institute Name</div>
                    <div className="">{Training?.InstituteName}</div>
                    <div className="font-semibold">From Date</div>
                    <div className="">
                      {moment(Training?.DurationFrom).format('DD-MMM-YYYY')}
                    </div>
                    {/* <div className="font-semibold">To Date</div> */}
                    {/* <div className="">
                      {moment(Training?.DurationTo).format('DD-MMM-YYYY')}
                    </div> */}
                    <div className="font-semibold">Validity Date</div>
                    <div className="">
                      {moment(Training?.ValidityDate).format('DD-MMM-YYYY')}
                    </div>
                    <div className="font-semibold">Training Details</div>
                    <div className="">
                      <p>{Training?.TrainingDetails}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {jobApplicationData?.ComputerProficiency?.length === 0 ? (
            ''
          ) : (
            <div className="">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold">Computer Skills</div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 border p-2 lg:grid-cols-4">
                {jobApplicationData?.ComputerProficiency?.map(
                  (ComputerProficiency) => (
                    <div className="">
                      <div className="font-semibold">
                        {ComputerProficiency?.ComputerApplicationName} :
                      </div>
                      <div className="">
                        {ComputerProficiency?.ExpertiseLevel}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
          {jobApplicationData?.LanguageProficiency?.length === 0 ? (
            ''
          ) : (
            <div className="py-5">
              <div className="">
                <h4 className="text-xl font-semibold">Language</h4>
                <table className="mt-4 table w-full border">
                  <thead className="w-full">
                    <tr className="text-left">
                      <th className="px-2 py-4">Language Name</th>
                      <th className="px-2 py-4">Reading</th>
                      <th className="px-2 py-4">Writting</th>
                      <th className="px-2 py-4">Speaking</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {jobApplicationData?.LanguageProficiency?.map(
                      (LanguageProficiency) => (
                        <tr className="border">
                          <td className="px-2 py-4">
                            <p className="font-normal">
                              {LanguageProficiency?.LanguageName}
                            </p>
                          </td>
                          <td className="px-2 py-4">
                            <p className="font-normal">
                              {' '}
                              {LanguageProficiency?.ReadingProficiency}
                            </p>
                          </td>
                          <td className="px-2 py-4">
                            <p className="font-normal">
                              {LanguageProficiency?.WritingProficiency}
                            </p>
                          </td>
                          <td className="px-2 py-4">
                            <p className="font-normal">
                              {' '}
                              {LanguageProficiency?.SpeakingProficiency}
                            </p>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {jobApplicationData?.OtherInformation === undefined ? (
            ''
          ) : (
            <div className="space-y-3 pb-10">
              <h4 className="my-4 text-xl font-semibold ">Others Info</h4>
              {jobApplicationData?.OtherInformation?.OtherSkills === '' ? (
                ''
              ) : (
                <div className="">
                  <h4 className="font-semibold">Skills:</h4>
                  <p> {jobApplicationData?.OtherInformation?.OtherSkills}</p>
                </div>
              )}
              {jobApplicationData?.OtherInformation?.Interests === '' ? (
                ''
              ) : (
                <div className="">
                  <h4 className="font-semibold">Interests:</h4>
                  <p>{jobApplicationData?.OtherInformation?.Interests}</p>
                </div>
              )}
              {jobApplicationData?.OtherInformation
                ?.VolunteeredOrganizations === '' ? (
                ''
              ) : (
                <div className="">
                  <h4 className="font-semibold">
                    List of Valuntared Organization:
                  </h4>
                  <p>
                    {' '}
                    {
                      jobApplicationData?.OtherInformation
                        ?.VolunteeredOrganizations
                    }
                  </p>
                </div>
              )}

              <div className="">
                Are you willing to join any Department/Service
                Center/Project/Strategic Location of the CCCUL?
                <span className="font-semibold">
                  {jobApplicationData?.OtherInformation
                    ?.WillingToJoinAnyDepartmentOrServiceCenter
                    ? ' Yes'
                    : ' No'}
                </span>
              </div>

              <div className="">
                Are you willing to accept transfer to any of the Service
                Centers/Projects of Dhaka Credit?
                <span className="font-semibold">
                  {jobApplicationData?.OtherInformation
                    ?.WillingToTransferAnyDepartmentOrServiceCenter
                    ? ' Yes'
                    : ' No'}
                </span>
              </div>

              <div className="">
                Are you physically fit for extensive travel (if required) at any
                location?
                <span className="font-semibold">
                  {jobApplicationData?.OtherInformation?.WillingToTravelAnyWhere
                    ? ' Yes'
                    : ' No'}
                </span>
              </div>

              <div className="">
                Are you a member of Dhaka Credit?
                <span className="font-semibold">
                  {jobApplicationData?.OtherInformation?.MemberOfDhakaCredit
                    ? ' Yes'
                    : ' No'}
                </span>
              </div>
              {(jobApplicationData?.OtherInformation
                ?.DhakaCreditRelativeEmployeeName === '' &&
                jobApplicationData?.OtherInformation
                  ?.DhakaCreditRelativeEmployeePosition === '' &&
                jobApplicationData?.OtherInformation
                  ?.DhakaCreditRelativeEmployeeContactNo === '' &&
                jobApplicationData?.OtherInformation
                  ?.DhakaCreditRelativeEmployeeName === '') ||
              jobApplicationData?.OtherInformation
                ?.DhakaCreditRelativeEmployeeRelationshipId === null ? (
                ''
              ) : (
                <div className="">
                  <h4 className="font-semibold">
                    Do you have any relative working at the CCCUL? If yes,
                    please mention below:
                  </h4>
                  <table className="my-4 table w-full border">
                    <thead className="">
                      <tr className="w-full">
                        <th className="p-2 text-left">
                          <p>Name</p>
                        </th>
                        <th className="p-2 text-left">
                          <p>Designation/Position</p>
                        </th>
                        <th className="p-2 text-left">
                          <p>Relationship</p>
                        </th>
                        <th className="p-2 text-left">
                          <p>Contact Number</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="w-full">
                        <td className="p-2">
                          <p className="font-normal">
                            {
                              jobApplicationData?.OtherInformation
                                ?.DhakaCreditRelativeEmployeeName
                            }
                          </p>
                        </td>
                        <td className="p-2">
                          <p className="font-normal">
                            {
                              jobApplicationData?.OtherInformation
                                ?.DhakaCreditRelativeEmployeePosition
                            }
                          </p>
                        </td>
                        <td className="p-2">
                          <p className="font-normal">
                            {
                              jobApplicationData?.OtherInformation
                                ?.DhakaCreditRelativeEmployeeRelationshipName
                            }
                          </p>
                        </td>
                        <td className="p-2">
                          <p className="font-normal">
                            {
                              jobApplicationData?.OtherInformation
                                ?.DhakaCreditRelativeEmployeeContactNo
                            }
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {(jobApplicationData?.OtherInformation
                ?.PreviouslyCalledForPosition === '' &&
                jobApplicationData?.OtherInformation
                  ?.PreviouslyCalledForApplicationDate === '') ||
              jobApplicationData?.OtherInformation
                ?.PreviouslyCalledForApplicationDate === null ? (
                ''
              ) : (
                <div className="">
                  <h4 className="font-semibold">
                    Have you received any call for other position(s) in the
                    CCCUL during last 3-5 years? If yes, please mention below:
                  </h4>
                  <table className="my-4 table w-full border">
                    <thead className="">
                      <tr className="w-full">
                        <th className="p-2 text-left">
                          <p>Name of the Position</p>
                        </th>
                        <th className="p-2 text-left">
                          <p>Date of Application</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="w-full">
                        <td className="p-2">
                          <p className="font-normal">
                            {' '}
                            {
                              jobApplicationData?.OtherInformation
                                ?.PreviouslyCalledForPosition
                            }
                          </p>
                        </td>
                        <td className="p-2">
                          <p className="font-normal">
                            {jobApplicationData?.OtherInformation
                              ?.PreviouslyCalledForApplicationDate === null
                              ? ''
                              : moment(
                                  jobApplicationData?.OtherInformation
                                    ?.PreviouslyCalledForApplicationDate
                                ).format('DD-MMM-YYYY')}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              <div className="">
                <div className="">
                  Have you any objections to our making inquiries of your
                  present employer?
                  <span className="font-semibold">
                    {' '}
                    {jobApplicationData?.OtherInformation
                      ?.AnyObjectionForMakingInquiriesOfYou
                      ? ' Yes'
                      : ' No'}
                  </span>
                </div>
              </div>
              <div className="">
                <div className="">
                  Do you have any physical or mental disabilities which might
                  limit the performance of your work?(If answer is ‘Yes’, please
                  specify your disability)
                  <span className="font-semibold">
                    {' '}
                    {jobApplicationData?.OtherInformation
                      ?.HaveAnyPhysicalOrMentalDisabilities
                      ? ' Yes'
                      : ' No'}
                  </span>
                </div>
              </div>
              <div className="">
                <div className="">
                  Have you ever been convicted of a crime? (If answer is “Yes”
                  please mention details)
                  <span className="font-semibold">
                    {' '}
                    {jobApplicationData?.OtherInformation?.EverConvictedCrime
                      ? ' Yes'
                      : ' No'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {jobApplicationData?.Reference?.length === 0 ? (
            ''
          ) : (
            <div className="pt-5">
              <h4 className="mb-4 text-xl font-semibold">Reference</h4>

              <div className="grid grid-cols-1 gap-4 pb-10  lg:grid-cols-2">
                {jobApplicationData?.Reference?.map((References) => (
                  <div className="border p-3">
                    <div className="font-semibold">Reference Type</div>
                    <div className="">{References?.ReferenceType}</div>
                    <div className="font-semibold">Name</div>
                    <div className=""> {References?.ReferenceName}</div>
                    <div className="font-semibold">Position</div>
                    <div className="">{References?.Position}</div>
                    <div className="font-semibold">Organization</div>
                    <div className="">{References?.OrganizationName}</div>
                    <div className="font-semibold">Mailing Address</div>
                    <div className="">{References?.MailingAddress}</div>
                    <div className="font-semibold">Mobile</div>
                    <div className="">
                      <p>{References?.MobileNo}</p>
                    </div>
                    <div className="font-semibold">Email Address</div>
                    <div className="">
                      <p>{References?.Email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {jobApplicationData?.JobApplication?.EmploymentStatus === '' &&
          jobApplicationData?.JobApplication?.NoticePeriod === '' &&
          jobApplicationData?.JobApplication?.ExpectedSalary === '' ? (
            ''
          ) : (
            <div className="pb-10">
              <h4 className="text-xl font-semibold">Application</h4>
              <div className="font-semibold">
                Describe below how you fit into this position (max 100 words,
                please refer specifically to the Job Requirements)
              </div>
              <div className="text-primary hover:text-onSurface">
                {jobApplicationData?.JobApplication?.CoverLetter}
              </div>

              <div className="mt-3">
                <table className="mt-4 table w-full border">
                  <thead className="w-full">
                    <tr className="text-left">
                      <th className="px-2 py-4">Current Employment Status</th>
                      <th className="px-2 py-4">Required Notice Period</th>
                      <th className="px-2 py-4">Expected Salary</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    <tr className="border">
                      <td className="px-2 py-4">
                        <p className="font-normal">
                          {jobApplicationData?.JobApplication?.EmploymentStatus}
                        </p>
                      </td>
                      <td className="px-2 py-4">
                        <p className="font-normal">
                          {jobApplicationData?.JobApplication?.NoticePeriod}
                        </p>
                      </td>
                      <td className="px-2 py-4">
                        <p className="font-normal">
                          {jobApplicationData?.JobApplication?.ExpectedSalary}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        {isSubmitView ? (
          <div className="flex items-end justify-end">
            <MyButton
              disabled={false}
              onClick={() => onSubmitHandler()}
              type="button"
              label="Submit"
              styleClass="inline-block cursor-pointer rounded   py-2 w-1/5 text-sm font-bold uppercase bg-primary text-onPrimary hover:shadow disabled:bg-gray-400 transition duration-150 ease-out hover:scale-105 hover:ease-in"
              name={''}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default CV;

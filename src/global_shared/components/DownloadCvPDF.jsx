import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { logoIcon } from 'global_shared/data/base64Icons';
import { removeSpecialCharacters } from 'global_shared/utils/dateUtils';
import moment from 'moment';
import { GetCollectionLedgersRequestModel } from './../../authenticated_pages/shared/model/request/GetCollectionLedgersRequestModel';

const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    padding: '2cm',
  },
  logo: {
    width: 150,
    height: 'auto',
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  flexContainerGap: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  flexItemJobHistory: {
    width: '100%',
    paddingBottom: 7,
  },
  flexItemJobHistoryGap: {
    width: '100%',
    paddingBottom: 7,
  },
  flexItem: {
    width: '25%',
    paddingBottom: 7,
  },
  flexItemContact: {
    width: '33.33%',
    paddingBottom: 7,
  },
  title: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  titleApplication: {
    fontSize: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  titleWords: {
    fontSize: 13,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: '#f0f0f0',
    padding: 5,
  },

  titleTeller: {
    fontSize: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  titleDate: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  titleName: {
    fontSize: 11,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleFullName: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titlePadding: {
    paddingHorizontal: 5,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  subtitleAddress: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingVertical: 2,
    textTransform: 'uppercase',
  },
  headerRow: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 11,
  },
  row: {
    fontSize: 11,
    marginBottom: 10,
    width: '100%',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontSize: 8,
    fontWeight: 'bold',
    padding: 5,
  },
  tableRowCell: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
    paddingLeft: 5,
  },
  tableRowLastCell: {
    flex: 1,
    paddingLeft: 5,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 5,
    fontSize: 11,
    fontWeight: 'bold',
  },
  // footer: {
  //   marginTop: 10,
  //   fontSize: 8,
  //   textAlign: 'center'
  // },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableRowEduction: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColEmp: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColLeft: {
    width: '60%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    textAlign: 'left',
  },
  tableColLeftEmp: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColRight: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColRightEmp: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  tableCellDep: {
    textAlign: 'left',
  },
  tableCellParticulars: {
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 5,
    fontSize: 10,
  },
  tableCellRight: {
    textAlign: 'right',
    marginRight: 5,
    marginTop: 5,
    fontSize: 10,
  },
  tableCellParticular: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    fontSize: 10,
  },
  page: {
    flexDirection: 'column',
    position: 'relative',
    padding: '2cm',
  },

  JobHistory: {
    marginBottom: 15,
    paddingVertical: 2,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    paddingBottom: '70px', // Adjust this value to leave space for the footer
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30px', // Adjust this value to set the footer height
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
  },

  tableLang: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  tableRowLang: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColLang: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellLang: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  tableReference: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingVertical: 5,
  },
  tableRowReference: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColReference: {
    width: '15%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellReference: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  textPadding: {
    paddingVertical: 4,
  },
  CoverLetter: {
    fontSize: 11,
    textAlign: 'justify',
    paddingVertical: 5,
    lineHeight: 1.5,
  },

  footerText: {
    marginTop: '10px', // Adjust this value to add spacing between the footer lines
  },
});

const DownloadCvPDF = ({ jobApplicationData, isSubmitView, image }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.flexContainer}>
            <View style={styles.logo}>
              {jobApplicationData?.JobApplicant?.ApplicantPhoto === '' ? (
                <Image src={logoIcon} />
              ) : (
                // <Image
                //   src={`data:image/png;base64,${jobApplicationData?.JobApplicant?.ApplicantPhoto}`}
                // />
                <Image
                  source={`data:image/jpeg;base64,${jobApplicationData?.JobApplicant?.ApplicantPhoto}`} // also tried src
                  style={{ height: 150, width: 150 }}
                />
              )}
            </View>
            <View style={styles.titlePadding}>
              <Text style={styles.titleFullName}>
                {jobApplicationData?.JobApplicant?.ApplicantFullName}
              </Text>
              <Text style={styles.subtitle}>
                {jobApplicationData?.JobApplicant?.ApplicantWorkNumber}
              </Text>
              <Text style={styles.subtitle}>
                {jobApplicationData?.JobApplicant?.ApplicantPersonalEmail}
              </Text>
              <Text style={styles.subtitleAddress}>
                {` 
                      ${jobApplicationData?.JobApplicant?.PresentAddress1},
                      ${jobApplicationData?.JobApplicant?.PresentAddress2},
                      ${jobApplicationData?.JobApplicant?.PresentAddress5},
                      ${jobApplicationData?.JobApplicant?.PresentAddress3},
                      ${jobApplicationData?.JobApplicant?.PresentAddress4}
                  
                     
                `}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.titleWords}>Personal Information</Text>
          </View>
          <View style={styles.flexContainer}>
            <View style={styles.flexItem}>
              <Text style={styles.title}>Father's Name</Text>
              <Text style={styles.subtitle}>
                {jobApplicationData?.JobApplicant?.FatherName}
              </Text>
            </View>
            <View style={styles.flexItem}>
              <Text style={styles.title}>Mother's Name</Text>
              <Text style={styles.subtitle}>
                {jobApplicationData?.JobApplicant?.MotherName}
              </Text>
            </View>
            <View style={styles.flexItem}>
              <Text style={styles.title}>Date of Birth</Text>
              <Text style={styles.subtitle}>
                {' '}
                {jobApplicationData?.JobApplicant?.DateOfBirth}
              </Text>
            </View>
            <View style={styles.flexItem}>
              <Text style={styles.title}>National ID</Text>
              <Text style={styles.subtitle}>
                {jobApplicationData?.JobApplicant?.NationalIdNumber}
              </Text>
            </View>
            {jobApplicationData?.JobApplicant?.ETinNumber && (
              <View style={styles.flexItem}>
                <Text style={styles.title}>E-Tin Number</Text>
                <Text style={styles.subtitle}>
                  {jobApplicationData?.JobApplicant?.ETinNumber}
                </Text>
              </View>
            )}
            {jobApplicationData?.JobApplicant?.PassportNumber && (
              <View style={styles.flexItem}>
                <Text style={styles.title}>Passport Number</Text>
                <Text style={styles.subtitle}>
                  {jobApplicationData?.JobApplicant?.PassportNumber}
                </Text>
              </View>
            )}
            {isSubmitView
              ? jobApplicationData?.JobApplicant?.Gender && (
                  <View style={styles.flexItem}>
                    <Text style={styles.title}>Gender</Text>
                    <Text style={styles.subtitle}>
                      {' '}
                      {jobApplicationData?.JobApplicant?.Gender}
                    </Text>
                  </View>
                )
              : jobApplicationData?.JobApplicant?.ApplicantGender && (
                  <View style={styles.flexItem}>
                    <Text style={styles.title}>Gender</Text>
                    <Text style={styles.subtitle}>
                      {jobApplicationData?.JobApplicant?.ApplicantGender}
                    </Text>
                  </View>
                )}
            {jobApplicationData?.JobApplicant?.BloodGroup && (
              <View style={styles.flexItem}>
                <Text style={styles.title}>Blood Group</Text>
                <Text style={styles.subtitle}>
                  {' '}
                  {jobApplicationData?.JobApplicant?.BloodGroup}
                </Text>
              </View>
            )}
            {isSubmitView
              ? jobApplicationData?.JobApplicant?.ReligionId && (
                  <View style={styles.flexItem}>
                    <Text style={styles.title}>Religion</Text>
                    <Text style={styles.subtitle}>
                      {jobApplicationData?.JobApplicant?.ReligionId}
                    </Text>
                  </View>
                )
              : jobApplicationData?.JobApplicant?.ReligionName && (
                  <View style={styles.flexItem}>
                    <Text style={styles.title}>Religion</Text>
                    <Text style={styles.subtitle}>
                      {jobApplicationData?.JobApplicant?.ReligionName}
                    </Text>
                  </View>
                )}
            {isSubmitView
              ? jobApplicationData?.JobApplicant?.NationalityId && (
                  <View style={styles.flexItem}>
                    <Text style={styles.title}>Nationality</Text>
                    <Text style={styles.subtitle}>
                      {jobApplicationData?.JobApplicant?.NationalityName}
                    </Text>
                  </View>
                )
              : jobApplicationData?.JobApplicant?.NationalityName && (
                  <View style={styles.flexItem}>
                    <Text style={styles.title}>Nationality</Text>
                    <Text style={styles.subtitle}>
                      {jobApplicationData?.JobApplicant?.NationalityName}
                    </Text>
                  </View>
                )}

            {isSubmitView
              ? jobApplicationData?.JobApplicant?.MaritalStatus && (
                  <View style={styles.flexItem}>
                    <Text style={styles.title}>Marital Status</Text>
                    <Text style={styles.subtitle}>
                      {jobApplicationData?.JobApplicant?.MaritalStatus}
                    </Text>
                  </View>
                )
              : jobApplicationData?.JobApplicant?.ApplicantMaritalStatus && (
                  <View style={styles.flexItem}>
                    <Text style={styles.title}>Marital Status</Text>
                    <Text style={styles.subtitle}>
                      {jobApplicationData?.JobApplicant?.ApplicantMaritalStatus}
                    </Text>
                  </View>
                )}
            {jobApplicationData?.JobApplicant?.SpouseName && (
              <View style={styles.flexItem}>
                <Text style={styles.title}>Spouse Name</Text>
                <Text style={styles.subtitle}>
                  {' '}
                  {jobApplicationData?.JobApplicant?.SpouseName}
                </Text>
              </View>
            )}
          </View>

          <View>
            <Text style={styles.titleWords}>Contact</Text>
            <View style={styles.flexContainer}>
              <View style={styles.flexItemContact}>
                <Text style={styles.title}>Phone Number (Work)</Text>
                <Text style={styles.subtitle}>
                  {jobApplicationData?.JobApplicant?.ApplicantWorkNumber}
                </Text>
              </View>
              <View style={styles.flexItemContact}>
                <Text style={styles.title}>Phone Number (Home)</Text>
                <Text style={styles.subtitle}>
                  {jobApplicationData?.JobApplicant?.ApplicantHomeNumber}
                </Text>
              </View>
              <View style={styles.flexItemContact}>
                <Text style={styles.title}>Email(Official)</Text>
                <Text style={styles.subtitle}>
                  {jobApplicationData?.JobApplicant?.ApplicantOfficialEmail}
                </Text>
              </View>
            </View>
          </View>

          {(jobApplicationData?.JobApplicant?.ApplicantEmergencyContactName ===
            '' &&
            jobApplicationData?.JobApplicant
              ?.ApplicantEmergencyContactNumber === '' &&
            jobApplicationData?.JobApplicant
              ?.ApplicantEmergencyContactRelationName === '') ||
          jobApplicationData?.JobApplicant
            ?.ApplicantEmergencyContactRelationId === '' ? (
            ''
          ) : (
            <View>
              <Text style={styles.titleWords}>Emergency Contact</Text>
              <View style={styles.flexContainer}>
                <View style={styles.flexItemContact}>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.subtitle}>
                    {
                      jobApplicationData?.JobApplicant
                        ?.ApplicantEmergencyContactName
                    }
                  </Text>
                </View>
                <View style={styles.flexItemContact}>
                  <Text style={styles.title}>Number</Text>
                  <Text style={styles.subtitle}>
                    {
                      jobApplicationData?.JobApplicant
                        ?.ApplicantEmergencyContactNumber
                    }
                  </Text>
                </View>
                <View style={styles.flexItemContact}>
                  <Text style={styles.title}>Relation</Text>
                  <Text style={styles.subtitle}>
                    {
                      jobApplicationData?.JobApplicant
                        ?.ApplicantEmergencyContactRelationName
                    }
                  </Text>
                </View>
              </View>
            </View>
          )}
          {jobApplicationData?.Dependent?.length === 0 ? (
            ''
          ) : (
            <View>
              <Text style={styles.titleWords}>Dependents</Text>

              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableColLeft}>
                    <Text style={styles.tableCellParticulars}>
                      Dependent Name
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Age </Text>
                  </View>
                  <View style={styles.tableColRight}>
                    <Text style={styles.tableCell}>Relation</Text>
                  </View>
                </View>
                {jobApplicationData?.Dependent?.map((dependents, key) => (
                  <View style={styles.tableRow}>
                    <View style={styles.tableColLeft}>
                      <Text style={styles.tableCellParticulars}>
                        {removeSpecialCharacters(dependents?.DependentName)}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {dependents?.DependentAge}
                      </Text>
                    </View>
                    <View style={styles.tableColRight}>
                      <Text style={styles.tableCell}>
                        {dependents?.DependentRelationName}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          <Text style={styles.titleWords}>Job Histories</Text>

          <View style={styles.flexContainer}>
            {jobApplicationData?.JobHistory?.map((JobHistory, key) => (
              <View style={styles.flexItemJobHistoryGap}>
                <View style={styles.title}>
                  <Text style={styles.subtitle}>
                    Organization Name : {JobHistory?.OrganizationName}
                  </Text>
                  <Text style={styles.subtitle}>
                    Address : {JobHistory?.OrganizationAddress}
                  </Text>
                  <Text style={styles.subtitle}>
                    Position : {JobHistory?.Position}
                  </Text>
                  <Text style={styles.subtitle}>
                    Salary : {JobHistory?.Salary}
                  </Text>
                  <Text style={styles.subtitle}>
                    Joining Date :
                    {moment(JobHistory?.DurationFrom).format('DD-MMM-YYYY')}
                  </Text>
                  {JobHistory?.DurationTo === '' ? (
                    <Text style={styles.subtitle}>
                      Resigning Date : On Going
                    </Text>
                  ) : (
                    <Text style={styles.subtitle}>
                      Resigning Date :
                      {moment(JobHistory?.DurationTo).format('DD-MMM-YYYY')}
                    </Text>
                  )}

                  <Text style={styles.subtitle}>
                    Reason For Leaving : {JobHistory?.ReasonForLeaving}
                  </Text>
                  <Text style={styles.subtitle}>
                    No. of Emp. Supervised :
                    {JobHistory?.NoOfEmployeeSupervisedByYou}
                  </Text>
                  <Text style={styles.subtitle}>
                    Job Responsibilities : {JobHistory?.Responsibilities}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          {jobApplicationData?.Education?.length === 0 ? (
            ' '
          ) : (
            <View>
              <Text style={styles.titleWords}>Educations</Text>

              <View style={styles.table}>
                <View style={styles.tableRowEduction}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Name of Degree</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Institute Name</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Major/Group</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Result</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Passing Year</Text>
                  </View>
                </View>
                {jobApplicationData?.Education?.map((Education, key) => (
                  <View style={styles.tableRowEduction}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {Education?.EducationalDegreeName ||
                          Education?.DegreeName}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {Education?.InstituteName}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{Education?.Major}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {Education?.Result} out of {Education?.ResultOutOf}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {Education?.PassingYear}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}
          <Text style={styles.titleWords}>Trainings</Text>
          {jobApplicationData?.Training?.length === 0 ? (
            ''
          ) : (
            <View style={styles.flexContainer}>
              {jobApplicationData?.Training?.map((Training) => (
                <View style={styles.flexItemJobHistory}>
                  <View style={styles.title}>
                    <Text style={styles.subtitle}>
                      Training Title : {Training?.TrainingTitle}{' '}
                    </Text>
                    <Text style={styles.subtitle}>
                      Institute Name :{Training?.InstituteName}
                    </Text>
                    <Text style={styles.subtitle}>
                      From Date :
                      {moment(Training?.DurationFrom).format('DD-MMM-YYYY')}
                    </Text>
                    {/* <Text style={styles.subtitle}>
                      To Date :
                      {moment(Training?.DurationTo).format('DD-MMM-YYYY')}
                    </Text> */}

                    <Text style={styles.subtitle}>
                      Validity Date :
                      {moment(Training?.ValidityDate).format('DD-MMM-YYYY')}
                    </Text>

                    <Text style={styles.subtitle}>
                      Training Details :{Training?.TrainingDetails}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {jobApplicationData?.ComputerProficiency?.length === 0 ? (
            ''
          ) : (
            <View>
              <Text style={styles.titleWords}>Computer Skills</Text>
              <View style={styles.flexContainer}>
                {jobApplicationData?.ComputerProficiency?.map(
                  (ComputerProficiency) => (
                    <View style={styles.flexItem}>
                      <Text style={styles.title}>
                        {ComputerProficiency?.ComputerApplicationName}
                      </Text>
                      <Text style={styles.subtitle}>
                        {ComputerProficiency?.ExpertiseLevel}
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          )}
          {jobApplicationData?.LanguageProficiency?.length === 0 ? (
            ''
          ) : (
            <View>
              <Text style={styles.titleWords}>Language</Text>

              <View style={styles.tableLang}>
                <View style={styles.tableRowLang}>
                  <View style={styles.tableColLang}>
                    <Text style={styles.tableCellLang}>Language Name</Text>
                  </View>
                  <View style={styles.tableColLang}>
                    <Text style={styles.tableCellLang}>Reading</Text>
                  </View>
                  <View style={styles.tableColLang}>
                    <Text style={styles.tableCellLang}>Writing</Text>
                  </View>
                  <View style={styles.tableColLang}>
                    <Text style={styles.tableCellLang}>Speaking</Text>
                  </View>
                </View>
                {jobApplicationData?.LanguageProficiency?.map(
                  (LanguageProficiency) => (
                    <View style={styles.tableRowLang}>
                      <View style={styles.tableColLang}>
                        <Text style={styles.tableCellLang}>
                          {LanguageProficiency?.LanguageName}
                        </Text>
                      </View>
                      <View style={styles.tableColLang}>
                        <Text style={styles.tableCellLang}>
                          {LanguageProficiency?.ReadingProficiency}
                        </Text>
                      </View>
                      <View style={styles.tableColLang}>
                        <Text style={styles.tableCellLang}>
                          {LanguageProficiency?.WritingProficiency}
                        </Text>
                      </View>
                      <View style={styles.tableColLang}>
                        <Text style={styles.tableCellLang}>
                          {LanguageProficiency?.SpeakingProficiency}
                        </Text>
                      </View>
                    </View>
                  )
                )}
              </View>
            </View>
          )}
          {jobApplicationData?.OtherInformation === '' ? (
            ''
          ) : (
            <View>
              <Text style={styles.titleWords}>Others Info</Text>
              <View style={styles.title}>
                <View>
                  <Text>Skills:</Text>
                  <Text style={styles.subtitle}>
                    {jobApplicationData?.OtherInformation?.OtherSkills}
                  </Text>
                  {/* <Text>
                  Computer Fundamental, HTML, CSS, JavaScript, Bootstrap, PHP,
                  jQuery, WordPress. Laravel
                </Text> */}
                  <Text>Interest:</Text>
                  <Text style={styles.subtitle}>
                    {jobApplicationData?.OtherInformation?.Interests}
                  </Text>
                  <Text>List of Valuated Organization:</Text>
                  <Text style={styles.subtitle}>
                    {
                      jobApplicationData?.OtherInformation
                        ?.VolunteeredOrganizations
                    }
                  </Text>
                  <Text style={styles.subtitle}>
                    Are you willing to join any Department/Service
                    Center/Project/Strategic Location of the CCCUL?:
                    {jobApplicationData?.OtherInformation
                      ?.WillingToJoinAnyDepartmentOrServiceCenter
                      ? ' Yes'
                      : ' No'}
                  </Text>
                  <Text style={styles.subtitle}>
                    Are you willing to accept transfer to any of the Service
                    Centers/Projects of Dhaka Credit?:
                    {jobApplicationData?.OtherInformation
                      ?.WillingToTransferAnyDepartmentOrServiceCenter
                      ? ' Yes'
                      : ' No'}
                  </Text>
                  <Text style={styles.subtitle}>
                    Are you physically fit for extensive travel (if required) at
                    any location?:
                    {jobApplicationData?.OtherInformation
                      ?.WillingToTravelAnyWhere
                      ? ' Yes'
                      : ' No'}
                  </Text>
                  <Text style={styles.textPadding}>
                    Are you a member of Dhaka Credit?
                    {jobApplicationData?.OtherInformation?.MemberOfDhakaCredit
                      ? ' Yes'
                      : ' No'}
                  </Text>

                  <View>
                    <Text style={styles.textPadding}>
                      Do you have any relative working at the CCCUL? If yes,
                      please mention below:
                    </Text>
                    {jobApplicationData?.Reference?.length === 0 ? (
                      ''
                    ) : (
                      <View style={styles.tableReference}>
                        <View style={styles.tableRowReference}>
                          <View style={styles.tableColReference}>
                            Reference Type Name Position Organization Mailing
                            Address Mobile Email Address
                            <Text style={styles.tableCellReference}>
                              Reference Type
                            </Text>
                          </View>

                          <View style={styles.tableColReference}>
                            <Text style={styles.tableCellReference}>Name</Text>
                          </View>
                          <View style={styles.tableColReference}>
                            <Text style={styles.tableCellReference}>
                              Position
                            </Text>
                          </View>
                          <View style={styles.tableColReference}>
                            <Text style={styles.tableCellReference}>
                              Organization
                            </Text>
                          </View>
                          <View style={styles.tableColReference}>
                            <Text style={styles.tableCellReference}>
                              Mailing Address
                            </Text>
                          </View>
                          <View style={styles.tableColReference}>
                            <Text style={styles.tableCellReference}>
                              Mobile
                            </Text>
                          </View>
                          <View style={styles.tableColReference}>
                            <Text style={styles.tableCellReference}>
                              Email Address
                            </Text>
                          </View>
                        </View>
                        {jobApplicationData?.Reference?.map((References) => (
                          <View style={styles.tableRowReference}>
                            <View style={styles.tableColReference}>
                              <Text style={styles.tableCellReference}>
                                {References?.ReferenceType}
                              </Text>
                            </View>
                            <View style={styles.tableColReference}>
                              <Text style={styles.tableCellReference}>
                                {References?.ReferenceName}
                              </Text>
                            </View>
                            <View style={styles.tableColReference}>
                              <Text style={styles.tableCellReference}>
                                {References?.Position}
                              </Text>
                            </View>
                            <View style={styles.tableColReference}>
                              <Text style={styles.tableCellReference}>
                                {References?.OrganizationName}
                              </Text>
                            </View>
                            <View style={styles.tableColReference}>
                              <Text style={styles.tableCellReference}>
                                {References?.MailingAddress}
                              </Text>
                            </View>
                            <View style={styles.tableColReference}>
                              <Text style={styles.tableCellReference}>
                                {References?.MobileNo}
                              </Text>
                            </View>
                            <View style={styles.tableColReference}>
                              <Text style={styles.tableCellReference}>
                                {References?.Email}
                              </Text>
                            </View>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          )}
          {jobApplicationData?.JobApplication?.EmploymentStatus === '' &&
          jobApplicationData?.JobApplication?.NoticePeriod === '' &&
          jobApplicationData?.JobApplication?.ExpectedSalary === '' ? (
            ''
          ) : (
            <View>
              <Text style={styles.titleWords}>Application</Text>
              <Text style={styles.title}>
                Describe below how you fit into this position (max 100 words,
                please refer specifically to the Job Requirements):
              </Text>
              <Text style={styles.CoverLetter}>
                {jobApplicationData?.JobApplication?.CoverLetter}
              </Text>
            </View>
          )}

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColLeftEmp}>
                <Text style={styles.tableCell}>Current Employment Status </Text>
              </View>
              <View style={styles.tableColEmp}>
                <Text style={styles.tableCell}>Required Notice Period </Text>
              </View>
              <View style={styles.tableColRightEmp}>
                <Text style={styles.tableCell}>Expected Salary</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColLeftEmp}>
                <Text style={styles.tableCell}>
                  {jobApplicationData?.JobApplication?.EmploymentStatus}
                </Text>
              </View>
              <View style={styles.tableColEmp}>
                <Text style={styles.tableCell}>
                  {jobApplicationData?.JobApplication?.NoticePeriod}
                </Text>
              </View>
              <View style={styles.tableColRightEmp}>
                <Text style={styles.tableCell}>
                  {jobApplicationData?.JobApplication?.ExpectedSalary}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text>Developed by "Dhaka Credit ICT Squad"</Text>
            <Text>
              "This is a computer generated receipt. No signature is required."
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default DownloadCvPDF;

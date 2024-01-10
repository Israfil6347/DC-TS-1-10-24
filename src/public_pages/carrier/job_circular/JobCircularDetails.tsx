import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import useCommand from 'global_shared/hooks/useCommand';
import { default as moment } from 'moment';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { JobCircularModel } from '../shared/model/JobCircularModel';
function JobCircularDetails() {
  const { id } = useParams();

  // Fetching Relationships
  const {
    data: CareerData,
    loading,
    error,
    executeCommand,
  } = useCommand<JobCircularModel>();

  useEffect(() => {
    localStorage.setItem('JobCircularId', id!);
    executeCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetJobCircular',
      {
        jobCircularId: id,
        RequestFrom: 'Web',
      },
      {}
    );
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  console.log(CareerData);

  return (
    <>
      <LoaderDialogue isLoading={loading} />
      <PageContainer>
        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.VeryFast}
          className="text-left md:text-justify lg:text-justify"
        >
          <div className="content bg-surface px-6 py-6 shadow-sm lg:px-20 lg:py-20">
            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="text-3xl font-bold"
            >
              {CareerData?.JobPosition == null ? '' : CareerData?.JobPosition}
            </motion.h2>
            <motion.h6
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mb-4"
            >
              {CareerData?.OrganizationName}
            </motion.h6>
            <div className="mb-4 flex flex-col gap-4 text-justify">
              {CareerData?.TotalNumberOfVacancy == null ||
              CareerData?.TotalNumberOfVacancy == null ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Vacancy
                  </motion.h4>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {CareerData?.TotalNumberOfVacancy == null
                      ? ''
                      : CareerData?.TotalNumberOfVacancy}
                  </motion.p>
                </div>
              )}
              {CareerData?.JobContext === null ||
              CareerData?.JobContext === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Job Context
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    <div
                      className="prose max-w-full"
                      dangerouslySetInnerHTML={{
                        __html: CareerData?.JobContext!,
                      }}
                    />
                  </motion.p>
                </div>
              )}

              {CareerData?.JobResponsibility === null ||
              CareerData?.JobResponsibility === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Job Responsibilities
                  </motion.h4>

                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{
                      __html: CareerData?.JobResponsibility!,
                    }}
                  />
                </div>
              )}

              {CareerData?.EmploymentStatus == null ||
              CareerData?.EmploymentStatus === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Employment Status
                  </motion.h4>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {CareerData?.EmploymentStatus}
                  </motion.p>
                </div>
              )}

              {CareerData?.EducationalRequirements === null ||
              CareerData?.EducationalRequirements === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Educational Requirements
                  </motion.h4>

                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{
                      __html: CareerData?.EducationalRequirements!,
                    }}
                  />
                </div>
              )}

              {CareerData?.ExperienceRequirements == null ||
              CareerData?.ExperienceRequirements === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Experience Requirements
                  </motion.h4>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{
                      __html: CareerData?.ExperienceRequirements,
                    }}
                  />
                </div>
              )}
              {CareerData?.ReligionName === null ||
              CareerData?.ReligionName === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Religion
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {CareerData?.ReligionName}
                  </motion.p>
                </div>
              )}

              {CareerData?.AdditionalRequirements === null ||
              CareerData?.AdditionalRequirements === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Additional Requirements
                  </motion.h4>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{
                      __html: CareerData?.AdditionalRequirements!,
                    }}
                  />
                </div>
              )}

              {CareerData?.Age === null || CareerData?.Age === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Age
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {CareerData?.Age}
                  </motion.p>
                </div>
              )}
              {CareerData?.GenderName === null ||
              CareerData?.GenderName === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Gender
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {CareerData?.GenderName}
                  </motion.p>
                </div>
              )}
              {CareerData?.JobLocation === null ||
              CareerData?.JobLocation === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Job Location
                  </motion.h4>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {CareerData?.JobLocation}
                  </motion.p>
                </div>
              )}

              {CareerData?.Salary === null || CareerData?.Salary === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Salary
                  </motion.h4>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {CareerData?.Salary}
                  </motion.p>
                </div>
              )}
              {CareerData?.CompensationAndOtherBenefits === null ||
              CareerData?.CompensationAndOtherBenefits === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Compensation &amp; Other Benefits
                  </motion.h4>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{
                      __html: CareerData?.CompensationAndOtherBenefits!,
                    }}
                  />
                </div>
              )}
              {CareerData?.ApplicationDeadline == null ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Application Deadline
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {moment(CareerData?.ApplicationDeadline).format(
                      'DD-MMM-YYYY'
                    )}
                  </motion.p>
                </div>
              )}

              {CareerData?.PublishedDate === null ||
              CareerData?.PublishedDate === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Published On
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {moment(CareerData?.PublishedDate).format('DD-MMM-YYYY')}
                  </motion.p>
                </div>
              )}
              {CareerData?.ContactInfo == null ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Contact Info
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {CareerData?.ContactInfo}
                  </motion.p>
                </div>
              )}

              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
              >
                <NavLink
                  onClick={() => {
                    localStorage.setItem(
                      'JobCircularId',
                      CareerData?.JobCircularId.toString()!
                    );
                  }}
                  to="/job-circulars/job-application"
                  className="inline-block rounded-md bg-primary py-2 px-6 font-bold text-onPrimary shadow-sm"
                >
                  Apply
                </NavLink>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </>
  );
}

export default JobCircularDetails;

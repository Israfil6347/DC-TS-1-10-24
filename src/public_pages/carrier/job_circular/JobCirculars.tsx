import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import useCommand from 'global_shared/hooks/useCommand';
import { useEffect } from 'react';
import { JobCircularResponseModel } from '../shared/model/JobCircularResponseModel';
import JobCircularItem from './JobCircularItem';

function JobCirculars() {
  const { data, loading, executeCommand, status } =
    useCommand<JobCircularResponseModel | null>();

  console.log(status);

  useEffect(() => {
    var BODY = {
      ActiveStatus: 1,
      startRec: 0,
      pageSize: 10,
      searchText: null,
      RequestFrom: 'Web',
    };
    executeCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetJobCirculars',
      BODY,
      {}
    );
  }, []);

  console.log(data);

  return (
    <>
      <LoaderDialogue isLoading={loading} />
      <PageContainer>
        {data?.JobCirculars?.length !== 0 && data !== null ? (
          <>
            <motion.div
              initial="initial"
              animate="animate"
              transition={MyTransition.StaggerChildren.Fast}
              className="text-left md:text-justify lg:text-justify"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {data?.JobCirculars?.map((post, index) => (
                  <JobCircularItem
                    key={post.JobCircularId}
                    jobCircularModel={post}
                    indexNumber={index}
                  />
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <motion.section
            initial="initial"
            animate="animate"
            transition={MyTransition.StaggerChildren.Fast}
            className="text-onSurface"
          >
            <div className="text-left md:text-justify lg:text-justify">
              <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
                <motion.div className="text-center">
                  <motion.h1
                    variants={MyVariants.SlideInFromLeft}
                    transition={MyTransition.Spring.Low}
                    className="text-3xl font-extrabold"
                  >
                    No job circular at this moment
                  </motion.h1>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    Keep connected for future job circular.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </PageContainer>
    </>
  );
}

export default JobCirculars;

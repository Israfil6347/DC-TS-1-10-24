import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import useCommand from 'global_shared/hooks/useCommand';
import { JobCircularModel } from 'public_pages/carrier/shared/model/JobCircularModel';
import { JobCircularResponseModel } from 'public_pages/carrier/shared/model/JobCircularResponseModel';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function FloatingCarrier() {
  const url =
    process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetJobCirculars';
  const BODY = {
    ActiveStatus: 1,
    startRec: 0,
    pageSize: 3,
    searchText: null,
    RequestFrom: 'Web',
  };

  const { data, executeCommand, loading } =
    useCommand<JobCircularResponseModel>();

  useEffect(() => {
    executeCommand(url, BODY, {});
  }, []);

  return (
    <>
      <LoaderDialogue isLoading={loading} />
      {data?.JobCirculars?.length! > 0 && (
        <div className="absolute right-0 z-50 flex h-screen flex-col justify-center">
          <div className="min-h-96  fixed flex w-80 -translate-x-[40px] transform flex-row items-center duration-300 hover:-translate-x-[310px]">
            <p className="text-sideways rounded-l-md bg-primary px-2 py-6 text-center capitalize text-onPrimaryVariant shadow-md">
              Work With Us
            </p>
            <div className="flex h-full w-full flex-col items-center justify-around rounded-l-md bg-surface p-4 text-onSurface shadow-md">
              <div className="text-left">
                <h2 className="text-2xl font-semibold uppercase antialiased">
                  Job Portal
                </h2>
                <p className="text-xs">
                  Employment Creation is Our Goal; Self-Reliant Community is Our
                  Dream.
                </p>
              </div>

              {data === null ? (
                <p className="my-10 w-full text-left font-semibold">
                  Couldn't fetch data
                </p>
              ) : (
                <div className="my-10 w-full text-left">
                  <ul className="flex w-full flex-col divide-y ">
                    {data?.JobCirculars?.map(
                      (jobCircular: JobCircularModel) => (
                        <li
                          key={jobCircular?.JobCircularId}
                          className="group cursor-pointer overflow-hidden rounded-sm hover:bg-backgroundVariant hover:shadow-sm"
                        >
                          <NavLink
                            onClick={() => {
                              localStorage.setItem(
                                'JobCircularId',
                                jobCircular?.JobCircularId.toString()
                              );
                            }}
                            state={jobCircular.JobCircularId}
                            to={`/job-circulars/${jobCircular.JobPosition}/${jobCircular.JobCircularId}`}
                          >
                            <p className="rounded bg-yellow-50 p-2 hover:bg-yellow-100">
                              {jobCircular.JobPosition}
                            </p>
                          </NavLink>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              <NavLink
                to="job-circulars"
                className="float-right block pt-6 text-center hover:font-semibold hover:text-primary "
              >
                View All
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingCarrier;

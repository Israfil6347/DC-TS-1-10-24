import about from 'assets/images/hero/about.png';
import board_members from 'assets/images/hero/board_members.png';
import career from 'assets/images/hero/career.png';
import contact from 'assets/images/hero/contact.png';
import credit_committee from 'assets/images/hero/credit_committee.png';
import deposit from 'assets/images/hero/deposit.png';
import faqs from 'assets/images/hero/faqs.png';
import loan from 'assets/images/hero/loan.png';
import notice from 'assets/images/hero/notice.png';
import office_bearers from 'assets/images/hero/office_bearers.png';
import project from 'assets/images/hero/project.png';
import service from 'assets/images/hero/service.png';
import supervisory_committee from 'assets/images/hero/supervisory_committee.png';
import home_banner from 'assets/images/hero/home_banner.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Video from '../assets/video/video_bg.mp4';

interface IBannerTitle {
  heading?: string | null;
  subheading?: string | null;
  bannerImage?: string | null;
}

function Banner() {
  const [title, setTitle] = useState<IBannerTitle>({
    heading: '',
    subheading: '',
    bannerImage: '',
  });

  const location = useLocation();
  const urlArrays = location.pathname.split('/');
  const urlArray1st = urlArrays?.[1]?.replace(/[_-]/g, ' ');
  const urlArrayDecode = decodeURIComponent(urlArrays?.[2]);
  const urlArray2nd = urlArrayDecode.replace(/[_-]/g, ' ');
  // const urlArray2nd = urlArrays?.[2]?.replace(/[^a-zA-Z\s]/g, ' ');

  useEffect(() => {
    if (urlArrays[1] === 'services') {
      setTitle({
        heading: 'Our Services',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: service,
      });
    } else if (urlArrays[1] === 'projects') {
      setTitle({
        heading: 'Our Projects',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: project,
      });
    } else if (urlArrays[1] === 'loan-products') {
      setTitle({
        heading: 'Loan Products',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: loan,
      });
    } else if (urlArrays[1] === 'deposit-products') {
      setTitle({
        heading: 'Deposit Products',
        subheading: 'Save and Secure Your Money With Us',
        bannerImage: deposit,
      });
    } else if (urlArrays[1] === 'job-circulars') {
      setTitle({
        heading: 'Career',
        subheading:
          'Dhaka Credit is the first & largest Credit Union of its kind currently in Bangladesh.',
        bannerImage: career,
      });
    } else if (urlArrays[1] === 'about') {
      setTitle({
        heading: 'About Us',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: about,
      });
    } else if (urlArrays[1] === 'contact') {
      setTitle({
        heading: 'Contact Us',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: contact,
      });
    } else if (urlArrays[1] === 'Office-Bearers') {
      setTitle({
        heading: 'Office Bearers',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: office_bearers,
      });
    } else if (urlArrays[1] === 'Board-of-Directors') {
      setTitle({
        heading: 'Board of Directors',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: board_members,
      });
    } else if (urlArrays[1] === 'Credit-Committee') {
      setTitle({
        heading: 'Credit Committee',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: credit_committee,
      });
    } else if (urlArrays[1] === 'Supervisory-Committee') {
      setTitle({
        heading: 'Supervisory Committee',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: supervisory_committee,
      });
    } else if (urlArrays[1] === 'Notice') {
      setTitle({
        heading: 'Important Notices',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: notice,
      });
    } else if (urlArrays[1] === 'faq') {
      setTitle({
        heading: 'Frequently Asked Questions',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'info') {
      setTitle({
        heading: 'Info',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'accounts') {
      setTitle({
        heading: 'Accounts',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'loans') {
      setTitle({
        heading: 'Loans',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'deposits') {
      setTitle({
        heading: 'Deposits',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'transfer') {
      setTitle({
        heading: 'Transfer',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'Withdraw') {
      setTitle({
        heading: 'Withdraw',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'payment') {
      setTitle({
        heading: 'Payment',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'deposits') {
      setTitle({
        heading: 'Deposits',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'JobCirculars') {
      setTitle({
        heading: 'Job Portal Administration',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'Personnel') {
      setTitle({
        heading: 'Personnel',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'privacy') {
      setTitle({
        heading: 'Privacy',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else if (urlArrays[1] === 'board_members') {
      setTitle({
        heading: 'Board Members',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs,
      });
    } else {
      setTitle({
        heading: process.env.REACT_APP_COMPANY_NAME!,
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: home_banner,
      });
    }
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        <section className="absolute right-0 top-0 w-full">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 5 }}
            animate={{ opacity: 1 }}
            className="h-96"
          >
            {urlArray1st === '' ? (
              <div className="h-full  bg-cover bg-center bg-no-repeat  ">
                <div className="absolute inset-0  w-full overflow-hidden  bg-opacity-80 bg-fixed">
                  <div className="flex flex-row items-end justify-center bg-cover text-gray-300  ">
                    <div className="block md:hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        src={Video}
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: 'cover',
                          position: 'absolute',
                          top: '0%',
                          // Adjust these values to control the visible part
                          left: '50%',
                          transform: 'translate(-50%, -0%)',
                        }}
                      />
                    </div>
                    <div className="hidden md:block">
                      <video
                        autoPlay
                        loop
                        muted
                        src={Video}
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: 'cover',
                          position: 'absolute',
                          top: '60%',
                          // Adjust these values to control the visible part
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 h-full w-full overflow-hidden   bg-opacity-80 bg-fixed">
                    <div className="flex h-full flex-row items-end justify-center text-gray-300 ">
                      <div className="mb-24 px-6 text-center ">
                        <motion.h2
                          className="mb-2 hidden text-4xl  font-bold leading-tight tracking-tight md:hidden lg:block "
                          transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                          }}
                          exit={{
                            opacity: 0,
                            x: -window.innerWidth,
                            transition: { duration: 0.3 },
                          }}
                          initial={{
                            opacity: 0,
                            x: -window.innerWidth,
                          }}
                          animate={{ x: 0, opacity: 1 }}
                        >
                          {title.heading}
                        </motion.h2>
                        <motion.p
                          className="hover:typing-demo  hidden  text-sm md:hidden lg:block"
                          transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                          }}
                          exit={{
                            opacity: 0,
                            x: -window.innerWidth,
                            transition: { duration: 0.3 },
                          }}
                          initial={{
                            opacity: 0,
                            x: window.innerWidth,
                          }}
                          animate={{ x: 0, opacity: 1 }}
                        >
                          {title.subheading}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{ backgroundImage: `url(${title.bannerImage})` }}
                className="h-full bg-cover bg-center bg-no-repeat  "
              >
                <div className="absolute inset-0 h-full w-full overflow-hidden bg-gray-900 bg-opacity-80 bg-fixed">
                  <div className="flex h-full flex-row items-end justify-center text-gray-300 ">
                    <div className="mb-24 px-6 text-center">
                      <motion.h2
                        className="mb-2  text-4xl font-bold leading-tight tracking-tight"
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 20,
                        }}
                        exit={{
                          opacity: 0,
                          x: -window.innerWidth,
                          transition: { duration: 0.3 },
                        }}
                        initial={{
                          opacity: 0,
                          x: -window.innerWidth,
                        }}
                        animate={{ x: 0, opacity: 1 }}
                      >
                        {title.heading}
                      </motion.h2>
                      <motion.p
                        className="hover:typing-demo inline-block  text-sm"
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 20,
                        }}
                        exit={{
                          opacity: 0,
                          x: -window.innerWidth,
                          transition: { duration: 0.3 },
                        }}
                        initial={{
                          opacity: 0,
                          x: window.innerWidth,
                        }}
                        animate={{ x: 0, opacity: 1 }}
                      >
                        {title.subheading}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {urlArrays.length > 2 ? (
              <div className="px-4 text-onPrimary md:px-12">
                <div className="relative">
                  <div className="absolute left-0 -bottom-5">
                    <div className="flex uppercase">
                      <span className="cursor-not-allowed rounded-l-md bg-primaryVariant px-6 py-2 font-semibold ">
                        {urlArray1st === '' ? 'Home' : urlArray1st}
                      </span>
                      {/* ) : (
                        <NavLink
                          to={location}
                          className="rounded-l-md bg-primaryVariant px-6 py-2 font-semibold"
                        >
                          {urlArrays[1] === '' ? 'Home' : urlArrays[1]}
                        </NavLink>
                      )} */}

                      {urlArrays.length > 2 && (
                        <span className="cursor-not-allowed rounded-r-md bg-primary px-6 py-2">
                          {urlArray2nd}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </motion.div>
        </section>
      </AnimatePresence>
    </>
  );
}

export default Banner;

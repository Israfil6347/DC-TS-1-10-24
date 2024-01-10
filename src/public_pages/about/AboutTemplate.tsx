import SidebarMenus from 'authenticated_pages/shared/components/SidebarMenus';
import SidebarTemplate from 'authenticated_pages/shared/components/SidebarTemplate';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const AboutTemplate = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <SidebarTemplate
        sidebarMenuTitle={'About Us'}
        sidebarMenuExpended={false}
        setSidebarMenuExpended={function (sidebarMenuExpended: boolean): void {
          throw new Error('Function not implemented.');
        }}
      >
        <SidebarMenus>
          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink
              to="/about/founders-profile/"
              className=" flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('founders-profile')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                Founder's Profile
              </span>
            </NavLink>
          </li>

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/our-story/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('our-story')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                Our Story
              </span>
            </NavLink>
          </li>

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/mission-vision/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('mission-vision')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                Mission & Vision
              </span>
            </NavLink>
          </li>

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/core-values/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('core-values')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                Core Values
              </span>
            </NavLink>
          </li>

          {/* <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink
              to="/about/President-message/"
              className=" flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('President-message')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                President's Message
              </span>
            </NavLink>
          </li> */}

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/cu-movement/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('cu-movement')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                C.U Movement
              </span>
            </NavLink>
          </li>

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/Achievement/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('Achievement')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                Achievement
              </span>
            </NavLink>
          </li>

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/women-activity/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('women-activity')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                Women Activity
              </span>
            </NavLink>
          </li>

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/Gallery/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('Gallery')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                Gallery
              </span>
            </NavLink>
          </li>

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/publication/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('publication')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                Publication
              </span>
            </NavLink>
          </li>

          <li className="group flex items-center  overflow-hidden rounded-sm p-2 hover:bg-background hover:shadow-sm ">
            <NavLink to="/about/dc-calender/" className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
              <span
                className={` ${
                  location.pathname.includes('dc-calender')
                    ? 'ml-2 scale-105 text-lg font-bold'
                    : ''
                }`}
              >
                DC Calender
              </span>
            </NavLink>
          </li>
        </SidebarMenus>
      </SidebarTemplate>
    </>
  );
};

export default AboutTemplate;

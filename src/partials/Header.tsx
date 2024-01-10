import logo from 'assets/images/logo/logocccul.png';
import white_logo from 'assets/images/logo/white_logo.png';
import LoginView from 'authentication/login/LoginView';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  scroll: boolean;
}

const Header: React.FC<HeaderProps> = ({ scroll }) => {
  const navigate = useNavigate();

  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(false);
  const { authUser, clearAuthUserData } = useContext(
    AuthUserContext
  ) as AuthUserContextType;
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const closeLoginWindow = () => {
    setIsLoginWindowOpen(false);
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth > 836) {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    <>
      <MyModal
        show={isLoginWindowOpen}
        onClose={closeLoginWindow}
        size={Size.Small}
      >
        <LoginView closeLoginWindow={closeLoginWindow} />
      </MyModal>

      <section
        className={`sticky top-0 z-20 w-full bg-transparent transition-all duration-300 ${
          scroll ? 'mb-[394px] lg:mb-96' : 'mb-[394px] lg:mb-80'
        }`}
      >
        <div
          className={`hidden h-12 bg-background text-onBackground   ${
            scroll ? "'lg:hidden'" : 'lg:block'
          }`}
        >
          <div className="h-full px-4 md:px-12">
            <div className="flex h-full items-center justify-between">
              <ul className="flex gap-4 text-sm font-bold">
                <li>
                  <NavLink
                    to="management/office_bearers/"
                    className={`block hover:scale-110 ${
                      location.pathname.includes('office_bearers')
                        ? ' border-b-2 border-primary'
                        : 'border-transparent'
                    } `}
                  >
                    Office Bearers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="management/board_of_directors/"
                    className={`block hover:scale-110 ${
                      location.pathname.includes('board_of_directors')
                        ? ' border-b-2 border-primary'
                        : 'border-transparent'
                    } `}
                  >
                    Board of Directors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="management/credit_committee/"
                    className={`block hover:scale-110 ${
                      location.pathname.includes('credit_committee')
                        ? ' border-b-2 border-primary'
                        : 'border-transparent'
                    } `}
                  >
                    Credit Committee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="management/supervisory_committee/"
                    className={`block hover:scale-110 ${
                      location.pathname.includes('supervisory_committee')
                        ? ' border-b-2 border-primary'
                        : 'border-transparent'
                    } `}
                  >
                    Supervisory Committee
                  </NavLink>
                </li>
              </ul>
              <ul className="flex items-center gap-2">
                <li className="rounded-lg  p-2 text-sm font-bold hover:scale-110 ">
                  <button>
                    <NavLink
                      to="president-message"
                      className={`block   ${
                        location.pathname.includes('president-message')
                          ? ' border-b-2 border-primary'
                          : 'border-transparent'
                      } `}
                    >
                      President's Message
                    </NavLink>
                  </button>
                </li>

                <li className="group flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 shadow-md transition-all duration-300 hover:scale-125 hover:text-primary">
                  <button
                    onClick={() =>
                      window.open(
                        'https://www.facebook.com/dhakacredit',
                        '_blank'
                      )
                    }
                  >
                    <i className="fa-brands fa-facebook-f text-xl text-primary group-hover:text-error"></i>
                  </button>
                </li>

                <li className="group flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 shadow-md transition-all duration-300 hover:scale-125 hover:text-primary">
                  <a href="tel:+8809678771270" data-url="tel:+8809678771270">
                    <i className="fa-solid fa-phone-volume text-xl text-primary group-hover:text-error"></i>
                  </a>
                </li>
                <li className="group flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 shadow-md transition-all duration-300 hover:scale-125 hover:text-primary">
                  <button onClick={() => window.open('mailto: info@cccul.com')}>
                    <i className="fa-solid fa-envelope-open-text text-xl text-primary group-hover:text-error"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav
          className={`relative   ${
            scroll
              ? 'bg-surface text-onSurface shadow-sm'
              : 'bg-transparent text-onPrimary'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between px-4 md:px-12">
            <NavLink to="/" className="flex">
              {scroll ? (
                <img
                  className="my-3 h-10 md:h-12 lg:h-10"
                  src={logoIcon}
                  alt="header logo"
                />
              ) : (
                <img
                  className="my-3 h-10 md:h-12 lg:h-16"
                  src={white_logo}
                  alt="header logo"
                />
              )}
              <span
                className={`self-center pl-3 text-xl font-semibold ${
                  scroll ? 'lg:text-2xl ' : 'text-white lg:text-2xl'
                }`}
              >
                Dhaka Credit
              </span>
            </NavLink>
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="m-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-multi-level"
              onClick={() => {
                if (mobileMenu) {
                  setMobileMenu(false);
                } else {
                  setMobileMenu(true);
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`w-full md:block md:w-auto  ${
                mobileMenu ? 'absolute inset-0 h-screen bg-surface' : 'hidden'
              }`}
              id="navbar-multi-level"
            >
              <div className="flex justify-between border-b-2 border-primary bg-background md:border-none ">
                <div className="flex pt-3 md:hidden ">
                  <img className="h-10 pl-3" src={logo} alt="header logo" />
                  <span className="-mt-3 ml-3 self-center text-xl  font-semibold text-primary antialiased lg:text-2xl">
                    Dhaka Credit
                  </span>
                </div>
                <div className="">
                  <button
                    data-collapse-toggle="navbar-multi-level"
                    type="button"
                    className="  m-3 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                    aria-controls="navbar-multi-level"
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <ul
                className={`mt-4 flex flex-col items-center gap-2 py-4 pt-4 text-lg md:mt-0 md:flex-row md:items-center md:border-0 md:text-sm md:font-bold lg:gap-6 ${
                  scroll ? 'text-onSurface ' : 'text-onSurface lg:text-white '
                }`}
              >
                <li className="">
                  <NavLink
                    to="/"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname === '/'
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('services')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="projects"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('projects')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="loan-products"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('loan-products')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Loans
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="deposit-products"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('deposit-products')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Deposits
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="president-message"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('president-message')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    President's Message
                  </NavLink>
                </li> */}
                <li className="group relative inline-block">
                  <NavLink
                    to="job-circulars"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('job-circulars')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Career
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="about"
                    state="About"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('about')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="Notice"
                    state="Notice"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('Notice')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Notice
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="faq"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('faq')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    FAQs
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="contact"
                    className={`block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0 ${
                      location.pathname.includes('contact')
                        ? scroll
                          ? '  md:border-primary'
                          : 'text-xl font-bold md:border-onPrimary md:text-base'
                        : ''
                    } ${
                      scroll
                        ? ' md:hover:border-primary'
                        : ' md:hover:border-onPrimary'
                    }`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li
                  className="transition duration-150 ease-out hover:scale-110 hover:ease-in"
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  {authUser ? (
                    <MyButton
                      onClick={() => {
                        clearAuthUserData();
                        navigate('/');
                        localStorage.setItem('isLogin', '');
                        window.location.reload();
                      }}
                      type="button"
                      label="Logout"
                      styleClass="rounded bg-primary py-2 px-4 text-onPrimary"
                      name={''}
                    />
                  ) : (
                    <MyButton
                      onClick={() => setIsLoginWindowOpen(true)}
                      type="button"
                      label="Member Login"
                      styleClass="rounded bg-primary py-2 px-4 text-onPrimary"
                      name={''}
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;

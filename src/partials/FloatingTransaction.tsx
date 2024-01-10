import { motion } from 'framer-motion';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { logoIcon } from 'global_shared/data/base64Icons';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import { useContext, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const AccordionAnimation = {
  closed: { opacity: 0, height: 0, x: -500 },
  open: { opacity: 1, height: 'auto' },
};

function FloatingTransaction() {
  const [rightSideNav, setRightSideNav] = useState(false);
  const [collapseUp, setCollapseUp] = useState(false);
  const { IsMenuExist } = useAuthUserAndMenu();
  const { authUser, clearAuthUserData } = useContext(
    AuthUserContext
  ) as AuthUserContextType;
  const location = useLocation();

  const rightNavHandler = () => {
    if (rightSideNav) {
      setRightSideNav(false);
    } else {
      setRightSideNav(true);
    }
  };

  const urlArrays = location.pathname.split('/');

  const navigate = useNavigate();
  const onIdle = () => {
    clearAuthUserData();
    navigate('/');
  };

  const { start, reset, activate } = useIdleTimer({
    onIdle,
    timeout: 300 * 1000,
    promptBeforeIdle: 0,
    events: [
      'mousemove',
      'keydown',
      'wheel',
      'DOMMouseScroll',
      'mousewheel',
      'mousedown',
      'touchstart',
      'touchmove',
      'MSPointerDown',
      'MSPointerMove',
      'visibilitychange',
      'focus',
    ],
    immediateEvents: [],
    debounce: 0,
    throttle: 0,
    eventsThrottle: 200,
    element: document,
    startOnMount: true,
    startManually: false,
    stopOnIdle: true,
    crossTab: false,
    name: 'idle-timer',
    syncTimers: 0,
    leaderElection: false,
  });

  if (authUser != null) {
    return (
      <>
        <motion.div className="absolute z-50 flex h-screen flex-col justify-center">
          <div
            className={`fixed flex transform cursor-pointer flex-row items-center duration-300 ${
              rightSideNav ? 'w-80' : 'w-12'
            }`}
          >
            <div
              className={`flex h-full w-full flex-col items-center justify-evenly rounded-r-md bg-surface text-primary shadow-md`}
            >
              <div
                className={`flex h-16 w-full items-center  justify-between rounded-tr-md bg-error px-2 text-xl font-bold text-onError`}
                onClick={rightNavHandler}
              >
                {rightSideNav && (
                  <div className="flex items-center justify-end gap-2">
                    {authUser.UserPicture === '' ? (
                      <img
                        className="h-10 w-10 rounded-full border border-gray-800 shadow"
                        src={logoIcon}
                        alt="user"
                      ></img>
                    ) : (
                      <img
                        className="h-10 w-10 rounded-full border border-gray-800 shadow"
                        src={`data:image/png;base64, ${
                          authUser ? authUser?.UserPicture : ''
                        }`}
                        alt="user"
                      ></img>
                    )}

                    <p className="">
                      {authUser
                        ? authUser.UserName.replace(/\w+/g, function (w) {
                            return (
                              w[0].toUpperCase() + w.slice(1).toLowerCase()
                            );
                          })
                        : ''}
                    </p>
                  </div>
                )}
                <div className={` ${rightSideNav ? '' : 'pl-1'}`}>
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>

              <motion.ul
                className={`flex w-full transform flex-col divide-y text-left`}
                initial="open"
                animate={collapseUp ? 'closed' : 'open'}
                exit="open"
                variants={AccordionAnimation}
                transition={{ duration: 0.5 }}
              >
                <li
                  className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                  onClick={() => {
                    setRightSideNav(false);
                    navigate('info/my_info');
                  }}
                >
                  <div className={`flex items-center group-hover:bg-primary`}>
                    <i
                      className={`fa-solid fa-circle-info ml-1 py-2.5 text-xl group-hover:text-error ${
                        location.pathname.includes('info')
                          ? 'fa-beat-fade text-error'
                          : ''
                      }`}
                    ></i>

                    <NavLink
                      to="info"
                      className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                        rightSideNav
                          ? ''
                          : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                      }`}
                    >
                      <p
                        className={`${
                          rightSideNav
                            ? ''
                            : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                        } h-full px-2 font-semibold transition-all duration-300`}
                      >
                        Info
                      </p>
                    </NavLink>
                  </div>
                </li>

                {IsMenuExist('Accounts') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('accounts/my_accounts');
                    }}
                  >
                    <div
                      className={`flex items-center  group-hover:bg-primary`}
                    >
                      <i
                        className={`fa-solid fa-piggy-bank ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'accounts'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="accounts"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? 'group-hover:bg-primary group-hover:text-onPrimary'
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Accounts
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('Loans') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('/loans/my_loans');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-hand-holding-dollar ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'loans'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="/loans"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav ? 'block w-[300px]' : 'block w-[300px]'
                        }  ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Loans
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('Surety') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('surety/surety_given');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-user-shield ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'surety'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="surety"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Surety
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('Deposit') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('deposits/deposit_now');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-circle-dollar-to-slot ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'deposits'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="deposits"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Deposits
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('Transfer') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('transfer/transfer_within_dhaka_credit');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-money-bill-transfer ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'transfer'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="transfer"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Transfer
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('Withdraw') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('Withdraw/through_atm');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-sack-dollar ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'Withdraw'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="Withdraw"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Withdraw
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('payment') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('payment/dc_payment');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-credit-card ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'payment'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="payment"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Payment
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('Job Portal Administration') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('recruitment/JobCirculars');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-handshake ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'recruitment'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="recruitment"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary text-right'
                          } w-52 px-2 font-semibold transition-all duration-300`}
                        >
                          Job Portal Administration
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('Personnel') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('Personnel/leave_application');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-helmet-safety ml-1 py-2.5 text-xl group-hover:text-error    ${
                          urlArrays[1] === 'Personnel'
                            ? 'fa-beat-fade text-error'
                            : ''
                        }`}
                      ></i>

                      <NavLink
                        to="personnel"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Personnel
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}

                {IsMenuExist('Privacy') && (
                  <li
                    className={`group rounded-sm px-2 hover:bg-primary hover:shadow-sm`}
                    onClick={() => {
                      setRightSideNav(false);
                      navigate('privacy/change_Password');
                    }}
                  >
                    <div className={`flex items-center group-hover:bg-primary`}>
                      <i
                        className={`fa-solid fa-lock ml-1 py-2.5 text-xl group-hover:text-error  ${
                          urlArrays[1] === 'privacy'
                            ? 'fa-beat-fade text-error'
                            : ''
                        } `}
                      ></i>

                      <NavLink
                        to="privacy"
                        className={`rounded-r-md bg-transparent transition-all group-hover:text-onPrimary ${
                          rightSideNav
                            ? ''
                            : 'hidden py-2.5 text-onSurface group-hover:block group-hover:bg-primary group-hover:text-onPrimary'
                        }`}
                      >
                        <p
                          className={`${
                            rightSideNav
                              ? ''
                              : 'rounded-tr rounded-br border-r border-t border-b border-primary'
                          } h-full px-2 font-semibold transition-all duration-300`}
                        >
                          Privacy
                        </p>
                      </NavLink>
                    </div>
                  </li>
                )}
              </motion.ul>

              {!rightSideNav && (
                <div
                  className={`flex h-12 w-full items-center  justify-between rounded-br-md bg-error px-2 text-xl font-bold text-onError`}
                  onClick={() => {
                    setCollapseUp(!collapseUp);
                  }}
                >
                  <div className={`flex w-full justify-center`}>
                    <i
                      className={`fa-solid  ${
                        collapseUp ? 'fa-arrow-down' : 'fa-arrow-up'
                      }`}
                    ></i>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </>
    );
  } else {
    return null;
  }
}
export default FloatingTransaction;

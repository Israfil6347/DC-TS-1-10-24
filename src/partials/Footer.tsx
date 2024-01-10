import { logoIcon } from 'global_shared/data/base64Icons';
import { NavLink } from 'react-router-dom';
import erp_logo from '../assets/images/logo/erp_logo2.png';

function Footer() {
  return (
    <footer className="mt-auto bg-surface text-center text-onSurface">
      <div className=" flex flex-col items-center justify-center p-3 py-10">
        <NavLink
          to="#"
          className="mb-4 flex flex-col items-center justify-center"
        >
          <img className="h-16" src={logoIcon} alt="header logo" />
          {/* <h6 className="block text-2xl font-semibold">Dhaka Credit</h6> */}
          <p className="text-xl">{process.env.REACT_APP_COMPANY_NAME}</p>
          <p className="text-sm">{process.env.REACT_APP_COMPANY_ADDRESS}</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Dhaka Credit. All Rights Reserved.
          </p>
        </NavLink>

        <p className="text-sm font-bold">Powered by</p>
        <div className="">
          {/* <ul className="flex items-center gap-2">
            <li className="group flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 shadow-md transition-all duration-300 hover:scale-125 hover:text-primary">
              <button
                onClick={() =>
                  window.open("https://www.facebook.com/dhakacredit", "_blank")
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
              <button onClick={() => window.open("mailto: info@cccul.com")}>
                <i className="fa-solid fa-envelope-open-text text-xl text-primary group-hover:text-error"></i>
              </button>
            </li>
          </ul> */}
          <img src={erp_logo} alt="" className="h-10" />
        </div>
        <p>
          Developed by <strong>DC Quantum Labs</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

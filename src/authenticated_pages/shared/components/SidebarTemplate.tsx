import { motion } from 'framer-motion';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

interface SidebarTemplateProps {
  sidebarMenuExpended: boolean;
  setSidebarMenuExpended: (sidebarMenuExpended: boolean) => void;
  sidebarMenuTitle: string;
  children?: React.ReactNode;
}

const SidebarTemplate: React.FC<SidebarTemplateProps> = ({
  sidebarMenuExpended,
  setSidebarMenuExpended,
  sidebarMenuTitle,
  children,
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <PageContainer>
        <div className="flex  flex-col-reverse  gap-6 text-justify md:flex-row">
          <div
            className={`content w-full text-left text-onBackground   md:text-justify lg:text-justify`}
          >
            <Outlet />
          </div>

          <div
            className={`h-full w-full overflow-hidden rounded-md bg-surface shadow-sm transition-all duration-300 ${
              !sidebarMenuExpended ? 'md:w-96' : 'md:w-20'
            }`}
          >
            <motion.h2
              className="flex	 cursor-pointer items-center bg-primary p-6 font-semibold uppercase text-onPrimary hover:text-green-200"
              onClick={() => setSidebarMenuExpended(!sidebarMenuExpended)}
            >
              <span
                className={`${!sidebarMenuExpended ? 'md:block' : 'md:hidden'}`}
              >
                {sidebarMenuTitle}
              </span>
              <span className="ml-2">
                <div className="hidden md:block">
                  {!sidebarMenuExpended ? (
                    <i className="fa-solid fa-arrow-right"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-left"></i>
                  )}
                </div>
              </span>
            </motion.h2>
            <ul
              className={`flex w-full flex-col divide-y py-6 ${
                sidebarMenuExpended ? 'px-3' : 'px-5'
              } text-onSurface`}
            >
              {children}
            </ul>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default SidebarTemplate;

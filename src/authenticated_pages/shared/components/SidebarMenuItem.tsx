import { logoIconDataOnly } from 'global_shared/data/base64Icons';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface SidebarMenuItemProps {
  menuIcon?: string | null;
  isSidebarMenuExpended: boolean;
  menuTitle: string;
  menuUrlSegment: string;
  rolePermissionIds?: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  menuIcon,
  isSidebarMenuExpended,
  menuTitle,
  menuUrlSegment,
  rolePermissionIds,
}) => {
  const { IsMenuExist } = useAuthUserAndMenu();
  const location = useLocation();

  var icon64 = menuIcon;
  if (menuIcon === null || menuIcon === '') {
    icon64 = logoIconDataOnly;
  }

  useEffect(() => {
    location.pathname.includes(menuUrlSegment) &&
      localStorage.setItem('rolePermissionIds', rolePermissionIds!);
  }, [location.pathname]);

  return (
    <>
      {IsMenuExist(menuTitle) && (
        <li className="group flex items-center justify-center font-semibold hover:bg-background">
          <NavLink
            to={menuUrlSegment}
            className={`h-full w-full p-2 ${
              location.pathname.includes(menuUrlSegment) &&
              'bg-background font-bold text-primary'
            }`}
          >
            <div
              className={`flex items-center ${
                isSidebarMenuExpended && 'justify-center'
              }`}
            >
              <img
                src={`data:image/png;base64, ${icon64}`}
                alt=""
                className="h-5"
              />
              {!isSidebarMenuExpended && (
                <div className="h-full pl-2 text-left">{menuTitle}</div>
              )}
            </div>
          </NavLink>
        </li>
      )}
    </>
  );
};

export default SidebarMenuItem;

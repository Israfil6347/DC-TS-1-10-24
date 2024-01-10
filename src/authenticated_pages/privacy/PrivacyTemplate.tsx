import SidebarMenus from 'authenticated_pages/shared/components/SidebarMenus';
import SidebarTemplate from 'authenticated_pages/shared/components/SidebarTemplate';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import { useEffect, useState } from 'react';
import SidebarMenuItem from '../shared/components/SidebarMenuItem';
const PrivacyTemplate = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const [sidebarMenuExpended, setSidebarMenuExpended] = useState(false);
  const { authUser, GetMenu } = useAuthUserAndMenu();
  const changePassPrivacyMenu = GetMenu('Change Password');
  const pinResetPrivacyMenu = GetMenu('PIN Reset');

  if (authUser != null) {
    return (
      <>
        <SidebarTemplate
          sidebarMenuTitle={'Privacy'}
          sidebarMenuExpended={sidebarMenuExpended}
          setSidebarMenuExpended={setSidebarMenuExpended}
        >
          <SidebarMenus>
            <SidebarMenuItem
              menuIcon={changePassPrivacyMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={changePassPrivacyMenu?.MenuName!}
              menuUrlSegment={'change_Password'}
              rolePermissionIds={changePassPrivacyMenu?.RolePermissionIds}
            />
            <SidebarMenuItem
              menuIcon={pinResetPrivacyMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={pinResetPrivacyMenu?.MenuName!}
              menuUrlSegment={'pin_reset'}
              rolePermissionIds={pinResetPrivacyMenu?.RolePermissionIds}
            />
          </SidebarMenus>
        </SidebarTemplate>
      </>
    );
  } else {
    return null;
  }
};

export default PrivacyTemplate;

import SidebarMenuItem from 'authenticated_pages/shared/components/SidebarMenuItem';
import SidebarMenus from 'authenticated_pages/shared/components/SidebarMenus';
import SidebarTemplate from 'authenticated_pages/shared/components/SidebarTemplate';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import { useEffect, useState } from 'react';
const SuretyTemplate = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const [sidebarMenuExpended, setSidebarMenuExpended] = useState(false);
  const { authUser, GetMenu } = useAuthUserAndMenu();
  const suretyGivenMenu = GetMenu('Surety Given to');
  const suretyRequestsMenu = GetMenu('Surety Requests');
  if (authUser != null) {
    return (
      <>
        <SidebarTemplate
          sidebarMenuTitle={'Sureties'}
          sidebarMenuExpended={sidebarMenuExpended}
          setSidebarMenuExpended={setSidebarMenuExpended}
        >
          <SidebarMenus>
            <SidebarMenuItem
              menuIcon={suretyGivenMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={suretyGivenMenu?.MenuName!}
              menuUrlSegment={'surety_given'}
              rolePermissionIds={suretyGivenMenu?.RolePermissionIds}
            />
            <SidebarMenuItem
              menuIcon={suretyRequestsMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={suretyRequestsMenu?.MenuName!}
              menuUrlSegment={'surety_requests'}
              rolePermissionIds={suretyRequestsMenu?.RolePermissionIds}
            />
          </SidebarMenus>
        </SidebarTemplate>
      </>
    );
  } else {
    return null;
  }
};

export default SuretyTemplate;

import SidebarMenuItem from 'authenticated_pages/shared/components/SidebarMenuItem';
import SidebarTemplate from 'authenticated_pages/shared/components/SidebarTemplate';
import { IMenu } from 'authentication/login/model/data/IAuthUserModel';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import { useEffect, useState } from 'react';
import SidebarMenus from '../shared/components/SidebarMenus';
/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  04 July 2023
 *========================================================================**/
const MyAccountTemplate = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const [sidebarMenuExpended, setSidebarMenuExpended] = useState(false);
  const { authUser, GetMenu } = useAuthUserAndMenu();
  const myAccountMenu: IMenu | null = GetMenu('My Accounts');

  const openAccountMenu: IMenu | null = GetMenu('Open an Account');

  if (authUser != null) {
    return (
      <>
        <SidebarTemplate
          sidebarMenuTitle={'Accounts'}
          sidebarMenuExpended={sidebarMenuExpended}
          setSidebarMenuExpended={setSidebarMenuExpended}
        >
          <SidebarMenus>
            <SidebarMenuItem
              menuIcon={myAccountMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={myAccountMenu?.MenuName!}
              menuUrlSegment={'my_accounts'}
              rolePermissionIds={myAccountMenu?.RolePermissionIds}
            />

            <SidebarMenuItem
              menuIcon={openAccountMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={openAccountMenu?.MenuName!}
              menuUrlSegment={'open_an_account'}
              rolePermissionIds={openAccountMenu?.RolePermissionIds}
            />
          </SidebarMenus>
        </SidebarTemplate>
      </>
    );
  } else {
    return null;
  }
};

export default MyAccountTemplate;

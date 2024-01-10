import SidebarMenuItem from 'authenticated_pages/shared/components/SidebarMenuItem';
import SidebarMenus from 'authenticated_pages/shared/components/SidebarMenus';
import SidebarTemplate from 'authenticated_pages/shared/components/SidebarTemplate';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import { useEffect, useState } from 'react';

const MyDepositsTemplate = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const [sidebarMenuExpended, setSidebarMenuExpended] = useState(false);
  const { authUser, GetMenu } = useAuthUserAndMenu();
  const depositNowMenu = GetMenu('Deposit Now');
  const depositLaterMenu = GetMenu('Deposit Later');
  const throughBankMenu = GetMenu('Through Bank');
  const throughBkashMenu = GetMenu('Through bKash');
  const depositStatusMenu = GetMenu('Deposit Request Status');
  const eReceiptMenu = GetMenu('eReceipt');

  if (authUser != null) {
    return (
      <>
        <SidebarTemplate
          sidebarMenuExpended={sidebarMenuExpended}
          setSidebarMenuExpended={setSidebarMenuExpended}
          sidebarMenuTitle={'Deposit'}
        >
          <SidebarMenus>
            <SidebarMenuItem
              menuIcon={depositNowMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={depositNowMenu?.MenuName!}
              menuUrlSegment={'deposit_now'}
              rolePermissionIds={depositNowMenu?.RolePermissionIds}
            />
            <SidebarMenuItem
              menuIcon={depositLaterMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={depositLaterMenu?.MenuName!}
              menuUrlSegment={'deposit_later'}
              rolePermissionIds={depositLaterMenu?.RolePermissionIds}
            />
            <SidebarMenuItem
              menuIcon={throughBankMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={throughBankMenu?.MenuName!}
              menuUrlSegment={'deposit_bank'}
              rolePermissionIds={throughBankMenu?.RolePermissionIds}
            />
            <SidebarMenuItem
              menuIcon={throughBkashMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={throughBkashMenu?.MenuName!}
              menuUrlSegment={'through_bkash'}
              rolePermissionIds={throughBkashMenu?.RolePermissionIds}
            />
            <SidebarMenuItem
              menuIcon={depositStatusMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={depositStatusMenu?.MenuName!}
              menuUrlSegment={'deposit_request_status'}
              rolePermissionIds={depositStatusMenu?.RolePermissionIds}
            />
            <SidebarMenuItem
              menuIcon={eReceiptMenu?.MfsIcon}
              isSidebarMenuExpended={sidebarMenuExpended}
              menuTitle={eReceiptMenu?.MenuName!}
              menuUrlSegment={'e_receipt'}
              rolePermissionIds={eReceiptMenu?.RolePermissionIds}
            />
          </SidebarMenus>
        </SidebarTemplate>
      </>
    );
  } else {
    return null;
  }
};

export default MyDepositsTemplate;

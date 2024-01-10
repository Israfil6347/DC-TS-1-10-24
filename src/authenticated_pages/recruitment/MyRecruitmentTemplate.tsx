import useAuthUserAndMenu from "global_shared/hooks/useAuthUserAndMenu";
import { useEffect, useState } from "react";
import SidebarMenus from "../shared/components/SidebarMenus";
import SidebarMenuItem from "authenticated_pages/shared/components/SidebarMenuItem";
import SidebarTemplate from "authenticated_pages/shared/components/SidebarTemplate";
const MyRecruitmentTemplate = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [sidebarMenuExpended, setSidebarMenuExpended] = useState(false);
  const { GetMenu } = useAuthUserAndMenu();
  const jobCircularsMenu = GetMenu("Job Circulars");

  return (
    <>
      <SidebarTemplate
        sidebarMenuTitle={"Recruitment"}
        sidebarMenuExpended={sidebarMenuExpended}
        setSidebarMenuExpended={setSidebarMenuExpended}
      >
        <SidebarMenus>
          <SidebarMenuItem
            menuIcon={jobCircularsMenu?.MfsIcon}
            isSidebarMenuExpended={sidebarMenuExpended}
            menuTitle={jobCircularsMenu?.MenuName!}
            menuUrlSegment={"JobCirculars"}
          />
        </SidebarMenus>
      </SidebarTemplate>
    </>
  );
};

export default MyRecruitmentTemplate;

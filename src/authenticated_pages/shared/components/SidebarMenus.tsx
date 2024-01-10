import React from 'react';
interface SidebarMenusProps {
  children: React.ReactNode;
}

const SidebarMenus: React.FC<SidebarMenusProps> = ({ children }) => {
  return (
    <ul className="flex w-full flex-col divide-y text-onSurface">{children}</ul>
  );
};

export default SidebarMenus;

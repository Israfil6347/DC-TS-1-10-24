import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div
      className="mb-20 px-4 text-onSurface md:px-12"
      style={{ minHeight: window.innerHeight - 700 }}
    >
      {children}
    </div>
  );
};

export default PageContainer;

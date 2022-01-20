import React from 'react';

interface FooterLinkColumnProps {
  children: React.ReactNode;
}
const FooterLinkColumn = ({ children }) => {
  return <div className="flex flex-col gap-y-[16px]">{children}</div>;
};

export default FooterLinkColumn;

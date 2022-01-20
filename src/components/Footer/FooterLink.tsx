import React from 'react';

interface FooterLinkProps {
  children: string;
}
const FooterLink = ({ children }) => {
  return (
    <a href="#">
      <p className="text-[16px]">{children}</p>
    </a>
  );
};

export default FooterLink;

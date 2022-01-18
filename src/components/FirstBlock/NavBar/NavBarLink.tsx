import React from 'react';

interface NavBarLinkProps {
  value: string | JSX.IntrinsicElements['img'];
  textAlign?: 'text-left' | 'text-center' | 'text-right';
}
export default function NavBarLink({ value, textAlign }: NavBarLinkProps) {
  return (
    <a
      href="#"
      className={`text-white fancy-navlink-border text-base mr-[83px] ${
        textAlign ? textAlign : ''
      }`}
    >
      {value}
    </a>
  );
}

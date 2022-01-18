import React from 'react';
import NavBarLogo from './NavBarLogo';
import NavBarNavi from './NavBarNavi';

export default function NavBar() {
  return (
    <nav className="pt-[42px] flex w-full flex-wrap lg:flex-nowrap">
      <NavBarLogo />
      <div className="pl-0 lg:pl-[183px] w-full">
        <NavBarNavi />
      </div>
    </nav>
  );
}

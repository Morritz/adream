import React from 'react';
import { FBIcon, InstagramIcon } from './NavBarIcons';
import NavBarLink from './NavBarLink';

export default function NavBarNavi() {
  return (
    <div className="h-full flex flex-row items-center justify-between w-full flex-wrap xl:flex-nowrap gap-y-4">
      <div className="flex flex-row justify-between  flex-wrap lg:flex-nowrap gap-y-4">
        <NavBarLink value="Poznaj przestrzeń" />
        <NavBarLink value="Oferta" />
        <NavBarLink value="Lokalizacja" />
        <NavBarLink value="Własne biuro" />
        <NavBarLink value="Kontakt" />
      </div>
      <div className="flex flex-row justify-between gap-[26px]">
        <FBIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

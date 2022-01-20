import React from 'react';
import FooterDesignedByColumn from './FooterDesignedByColumn';
import FooterLink from './FooterLink';
import FooterLinkColumn from './FooterLinkColumn';
import FooterMainColumn from './FooterMainColumn';

export default function Footer() {
  return (
    <section className="relative w-full">
      <img
        src="/Glowna1/Group 586.svg"
        className="absolute md:right-[87.5px] 2xl:right-[175px] top-[170px] translate-y-[-50%] hidden md:block"
      ></img>
      <div className="w-full pt-[170px]"></div>
      <div className="flex flex-wrap-reverse text-white w-full bg-black min-h-[547px] px-[16px] md:px-[64px] 2xl:px-[175px] pt-[80px] pb-[45px] gap-x-[350px]">
        <FooterMainColumn />
        <div className="flex flex-wrap-reverse flex-row justify-between grow gap-y-[32px]">
          <div className="flex flex-row flex-wrap-reverse items-center gap-x-[183px] gap-y-[16px] pb-[45px]">
            <FooterLinkColumn>
              <FooterLink>Strona główna</FooterLink>
              <FooterLink>Poznaj przestrzeń</FooterLink>
              <FooterLink>Oferta</FooterLink>
            </FooterLinkColumn>
            <FooterLinkColumn>
              <FooterLink>Lokalizacja</FooterLink>
              <FooterLink>Własne biuro</FooterLink>
              <FooterLink>Kontakt</FooterLink>
            </FooterLinkColumn>
          </div>
          <FooterDesignedByColumn />
        </div>
      </div>
      {/* <p className="absolute md:right-[87.5px] 2xl:right-[175px] bottom-[45px] hidden md:block text-white">
        Proudly designed by
      </p> */}
    </section>
  );
}

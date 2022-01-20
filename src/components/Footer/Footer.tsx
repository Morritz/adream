import React from 'react';

export default function Footer() {
  return (
    <div className="w-full">
      <div className="w-full pt-[170px]"></div>
      <div className="flex flex-wrap-reverse text-white w-full bg-black min-h-[547px] px-[16px] md:px-[64px] 2xl:px-[175px] pt-[80px] pb-[45px] gap-x-[350px]">
        <div className="flex flex-col pb-[45px]">
          <div className="w-[250px] h-[75px] text-[65px] font-bold">LOGO</div>
          <div className="mt-[57px] flex flex-col justify-between h-[127px] w-[290px]">
            <p className="text-[16px] font-bold">
              ul. Towarowa 5/6
              <br /> 31-000 Kraków
            </p>
            <p className="text-[16px]">
              +48 999 999 999 <br />
              email@email.com
            </p>
          </div>
          <a href="#">
            <p className="mt-[145px] text-[12px]">Polityka prywatności</p>
          </a>
        </div>
        <div className="flex flex-row flex-wrap items-center gap-x-[183px] gap-y-[16px] pb-[45px]">
          <div className="flex flex-col gap-y-[16px]">
            <a href="#">
              <p className="text-[16px]">Strona główna</p>
            </a>
            <a href="#">
              <p className="text-[16px]">Poznaj przestrzeń</p>
            </a>
            <a href="#">
              <p className="text-[16px]">Oferta</p>
            </a>
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <a href="#">
              <p className="text-[16px]">Lokalizacja</p>
            </a>
            <a href="#">
              <p className="text-[16px]">Własne biuro</p>
            </a>
            <a href="#">
              <p className="text-[16px]">Kontakt</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

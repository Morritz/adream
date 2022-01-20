import React from 'react';

const FooterMainColumn = () => {
  return (
    <div className="flex flex-col">
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
  );
};

export default FooterMainColumn;

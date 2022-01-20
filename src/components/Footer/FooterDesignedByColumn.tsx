import React from 'react';

const FooterDesignedByColumn = () => {
  return (
    <div className="flex flex-col grow items-end justify-end">
      <div className="flex gap-x-[8px] items-end ">
        <p className="text-[12px] translate-y-[2px] h-[17px]">
          Proudly designed by
        </p>
        <img className="h-[19px]" src="/Glowna1/logo_adream.png"></img>
      </div>
    </div>
  );
};

export default FooterDesignedByColumn;

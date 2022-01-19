import React from 'react';
import NewsElement from './NewsElement';

export default function News() {
  return (
    <div className="w-full px-[16px] md:px-[64px] 2xl:px-[175px]">
      <h1 className="w-full text-center text-[48px] md:text-[65px] md:leading-[75px] font-bold pt-[139.5px] pb-[106.5px]">
        Aktualności
      </h1>
      <div className="flex flex-row justify-evenly flex-wrap gap-y-[32px] pb-[140px]">
        <NewsElement
          src="/Glowna1/shutterstock_1433594243.png"
          date="01.01.2021"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <NewsElement
          src="/Glowna1/shutterstock_1575692173.png"
          date="01.01.2021"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <NewsElement
          src="/Glowna1/shutterstock_763511722.png"
          date="01.01.2021"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

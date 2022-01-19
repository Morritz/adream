import React from 'react';

export default function Filler() {
  return (
    <section className="relative w-full min-h-[642px] md:pl-[175px]">
      <div className="relative">
        <img
          className="background-image pl-[160px]"
          src="/Glowna1/Group 258.png"
        ></img>
        <img
          src="/Glowna1/Group 576.svg"
          className="absolute md:right-[87.5px] 2xl:right-[175px] translate-y-[-50%] hidden md:block"
        ></img>
        <div className="relative ">
          <div className="pt-[200px]">
            <div className="bg-white 2xl:bg-transparent py-[64px] max-w-[523px] 2xl:max-w-[610px]">
              <p className="text-[48px] 2xl:text-[65px] 2xl:leading-[75px] font-bold max-w-[523px]">
                Lorem ipsum vs własne biuro
              </p>
              <div className="2xl:mt-[173px] w-full h-[16px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

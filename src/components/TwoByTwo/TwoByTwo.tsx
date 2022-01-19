import React from 'react';

export default function TwoByTwo() {
  return (
    <div className="w-full min-h-[940px] px-[16px] md:px-[64px] py-[140px] 2xl:px-[175px] flex flex-col gap-y-[28px]">
      <div className="flex flex-row gap-x-[30px] gap-y-[28px] flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between">
        <div className="relative">
          <img
            src="/Glowna1/shutterstock_1877634640.png"
            object-fit="cover"
          ></img>
          <div className="lg:absolute top-0 left-0 pt-[29px] pl-[29px]">
            <div className="relative bg-white p-[25px] h-[159px] w-[223px]">
              <div className="absolute h-[42px] w-[42px] bg-[#FFCC48]"></div>
              <h3 className="relative pt-[8px] pl-[10px] text-[28px] font-bold leading-[38px]">
                Biuro
              </h3>
              <div className="mt-[26px] ml-[10.5px] mr-[114.5px] border-2 border-black"></div>
              <p className="ml-[10px] mt-[10px]">od 1000 zł/msc</p>
            </div>
          </div>
          <button className="flex justify-center items-center arrow-right absolute bottom-0 right-0 h-[65px] w-[65px] md:h-[130px] md:w-[130px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <img
            src="/Glowna1/shutterstock_1723055614.png"
            object-fit="cover"
          ></img>
          <div className="lg:absolute top-0 left-0 pt-[29px] pl-[29px]">
            <div className="relative bg-white p-[25px] h-[195px] w-[241px]">
              <div className="absolute  h-[42px] w-[42px] bg-[#FFCC48]"></div>
              <h3 className="relative pt-[8px] pl-[10px] text-[28px] font-bold leading-[38px]">
                Lorem ipsum
              </h3>
              <div className="mt-[26px] ml-[10.5px] mr-[114.5px] border-2 border-black"></div>
              <p className="ml-[10px] mt-[10px]">od 500 zł/msc</p>
            </div>
          </div>
          <button className="flex justify-center items-center arrow-right absolute bottom-0 right-0 h-[65px] w-[65px] md:h-[130px] md:w-[130px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-x-[30px] gap-y-[28px] flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between">
        <div className="relative">
          <img
            src="/Glowna1/shutterstock_1677941275.png"
            object-fit="cover"
          ></img>
          <div className="lg:absolute  bottom-0 left-0 pb-[29px] pl-[29px]">
            <div className="relative bg-white p-[25px] h-[195px] w-[223px]">
              <div className="absolute h-[42px] w-[42px] bg-[#FFCC48]"></div>
              <h3 className="relative pt-[8px] pl-[10px] text-[28px] font-bold leading-[38px]">
                Biuro
                <br />
                lorem
              </h3>
              <div className="mt-[26px] ml-[10.5px] mr-[114.5px] border-2 border-black"></div>
              <p className="ml-[10px] mt-[10px]">od 100 zł/h</p>
            </div>
          </div>
          <button className="flex justify-center items-center arrow-right absolute bottom-0 right-0 h-[65px] w-[65px] md:h-[130px] md:w-[130px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <img src="/Glowna1/shutterstock_1433594243.png"></img>
          <div className="lg:absolute bottom-0 left-0 pb-[29px] pl-[29px]">
            <div className="relative bg-white p-[25px] h-[195px] w-[324px]">
              <div className="absolute h-[42px] w-[42px] bg-[#FFCC48]"></div>
              <h3 className="relative pt-[8px] pl-[10px] text-[28px] font-bold leading-[38px]">
                Biuro lorem ipsum Lorem
              </h3>
              <div className="mt-[26px] ml-[10.5px] mr-[114.5px] border-2 border-black"></div>
              <p className="ml-[10px] mt-[10px]">od 100 zł/h</p>
            </div>
          </div>
          <button className="flex justify-center items-center arrow-right absolute bottom-0 right-0 h-[65px] w-[65px] md:h-[130px] md:w-[130px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useEffect, useRef, useState } from 'react';
import { bgImageContext } from '../FirstBlock';

export default function BottomBar() {
  const arrowLeft = useRef<HTMLDivElement>(null);
  const arrowRight = useRef<HTMLDivElement>(null);

  const slider = useRef<HTMLDivElement>(null);

  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  const ctx = useContext(bgImageContext);

  const sliderAnimationFrame = () => {
    const percentage =
      ((new Date().getTime() - ctx.startTime.current.getTime()) / 10000) * 100;
    slider.current.style.backgroundPosition = `-${Math.min(100, percentage)}%`;
    requestAnimationFrame(sliderAnimationFrame);
  };

  useEffect(() => {
    requestAnimationFrame(sliderAnimationFrame);
  }, [ctx.startTime.current]);

  return (
    <div className="relative flex flex-wrap items-center">
      <div className="relative flex items-end justify-between lg:justify-start h-[125px] w-full">
        <div
          ref={arrowLeft}
          onMouseEnter={() => setLeftHovered(true)}
          onMouseLeave={() => setTimeout(() => setLeftHovered(false), 500)}
          onClick={ctx.previousImage}
          className={`arrow-left w-[72.5px] h-[59px] md:w-[145px] md:h-[118px] rounded-tr md:rounded-none flex justify-center items-center ${
            rightHovered && 'pointer-events-none'
          }`}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
          </svg>
        </div>
        <div
          ref={arrowRight}
          onMouseEnter={() => setRightHovered(true)}
          onMouseLeave={() => setTimeout(() => setRightHovered(false), 500)}
          className={`arrow-right w-[72.5px] h-[59px] md:w-[145px] md:h-[118px] rounded-tl md:rounded-none flex justify-center items-center ${
            leftHovered && 'pointer-events-none'
          }`}
          onClick={ctx.nextImage}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </div>
      <div ref={slider} className="slider bg-white w-full h-[8px]"></div>
    </div>
  );
}

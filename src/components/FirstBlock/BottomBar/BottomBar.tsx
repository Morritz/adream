import React, { useContext, useEffect, useRef, useState } from 'react';
import { bgImageContext } from '../FirstBlock';
import { ArrowLeft, ArrowRight } from '@/components/Arrows';

export default function BottomBar() {
  const arrowLeft = useRef<HTMLDivElement>(null);
  const arrowRight = useRef<HTMLDivElement>(null);

  const slider = useRef<HTMLDivElement>(null);

  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  const ctx = useContext(bgImageContext);

  const sliderAnimationFrame = () => {
    if (slider.current) {
      const percentage =
        ((new Date().getTime() - ctx.startTime.current.getTime()) / 10000) *
        100;
      slider.current.style.backgroundPosition = `-${Math.min(
        100,
        percentage,
      )}%`;
    }
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
          <ArrowLeft />
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
          <ArrowRight />
        </div>
      </div>
      <div ref={slider} className="slider bg-white w-full h-[8px]"></div>
    </div>
  );
}

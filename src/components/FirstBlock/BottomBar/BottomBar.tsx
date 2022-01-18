import React, { useContext, useRef, useState } from 'react';
import { bgImageContext } from '../FirstBlock';

export default function BottomBar() {
  const arrowLeft = useRef<HTMLDivElement>(null);
  const arrowRight = useRef<HTMLDivElement>(null);

  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  const ctx = useContext(bgImageContext);

  return (
    <div className="relative flex items-end justify-center lg:justify-start h-[125px] w-full">
      <div
        ref={arrowLeft}
        onMouseEnter={() => setLeftHovered(true)}
        onMouseLeave={() => setTimeout(() => setLeftHovered(false), 500)}
        onClick={ctx.previousImage}
        className={`arrow-left w-[145px] h-[118px] flex justify-center items-center ${
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
        className={`arrow-right w-[145px] h-[118px] flex justify-center items-center ${
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
  );
}

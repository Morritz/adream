import React from 'react';
import Button from './Button';
import ImageContainer from './ImageContainer';
import Row from './Row';

const padding = '29px';

interface DescriptionProps {
  variant: 'top-left' | 'bottom-left';
  height: number;
  width: number;
  title: string;
  subtitle: string;
}
const generateClasses = (variant: DescriptionProps['variant']) => {
  switch (variant) {
    case 'top-left':
      return `top-0 left-0 pt-[${padding}] pl-[${padding}]`;
    case 'bottom-left':
      return `bottom-0 left-0 pb-[${padding}] pl-[${padding}]`;
  }
};

export default function Description({
  variant,
  height,
  width,
  title,
  subtitle,
}: DescriptionProps) {
  return (
    <div className={`lg:absolute ${generateClasses(variant)}`}>
      <div
        className={`relative bg-white p-[25px] h-[${height}px] w-[${width}px]`}
      >
        <div className="absolute h-[42px] w-[42px] bg-[#FFCC48]"></div>
        <h3 className="relative pt-[8px] pl-[10px] text-[28px] font-bold leading-[38px]">
          {title}
        </h3>
        <div className="mt-[26px] ml-[10.5px] mr-[114.5px] border-2 border-black"></div>
        <p className="ml-[10px] mt-[10px]">{subtitle}</p>
      </div>
    </div>
  );
}

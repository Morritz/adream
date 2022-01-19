import React from 'react';

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
      return `two-by-two-tl`;
    case 'bottom-left':
      return `two-by-two-bl`;
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
        className={`relative bg-white p-[25px]`}
        style={{
          height: height,
          width: width,
        }}
      >
        <div className="absolute h-[42px] w-[42px] bg-[#FFCC48]"></div>
        <h3 className="relative pt-[8px] pl-[10px] text-[28px] font-bold leading-[38px]">
          {title}
        </h3>
        <div className="mt-[26px] ml-[10.5px] w-[49px] border-2 border-black"></div>
        <p className="ml-[10px] mt-[10px]">{subtitle}</p>
      </div>
    </div>
  );
}

import React from 'react';

interface RowProps {
  children: React.ReactNode;
}
export default function Row({ children }: RowProps) {
  return (
    <div className="flex flex-row justify-center lg:justify-between flex-wrap md:flex-nowrap gap-x-[137px] gap-y-[68.5px] lg:gap-y-[137px]">
      {children}
    </div>
  );
}

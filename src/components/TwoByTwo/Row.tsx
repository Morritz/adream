import React from 'react';

interface RowProps {
  children: React.ReactNode;
}

export default function Row({ children }: RowProps) {
  return (
    <div className="flex flex-row gap-x-[30px] gap-y-[28px] flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-evenly">
      {children}
    </div>
  );
}

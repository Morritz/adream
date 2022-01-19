import React from 'react';

interface BaseElementProps {
  children: React.ReactNode;
}
export default function BaseElement({ children }: BaseElementProps) {
  return <div className="relative w-[290px] min-h-[359px]">{children}</div>;
}

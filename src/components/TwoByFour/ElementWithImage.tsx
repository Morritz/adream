import React from 'react';
import BaseElement from './BaseElement';

interface ElementWithImageProps {
  src: string;
  text: string;
}
export default function ElementWithImage({ src, text }: ElementWithImageProps) {
  return (
    <BaseElement>
      <div className="h-[231px] flex items-end">
        <img src={src}></img>
      </div>
      <p className="pt-[44px] text-[28px] leading-[38px]">{text}</p>
    </BaseElement>
  );
}

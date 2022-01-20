import React from 'react';
import { ArrowRight } from '../Arrows';

export default function Button() {
  return (
    <button className="flex justify-center items-center arrow-right absolute bottom-0 right-0 h-[65px] w-[65px] md:h-[130px] md:w-[130px]">
      <ArrowRight />
    </button>
  );
}

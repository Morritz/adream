import React from 'react';
import { ArrowRight } from '../Arrows';

export default function ReadMoreButton() {
  return (
    <div className="pt-[103px] pb-[140px]">
      <button className="read-more-button w-full lg:w-[380px]">
        <div className="px-[30px] flex items-center justify-between">
          Dowiedz się więcej <ArrowRight />
        </div>
      </button>
    </div>
  );
}

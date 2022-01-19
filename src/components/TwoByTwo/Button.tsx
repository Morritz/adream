import React from 'react';

export default function Button() {
  return (
    <button className="flex justify-center items-center arrow-right absolute bottom-0 right-0 h-[65px] w-[65px] md:h-[130px] md:w-[130px]">
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
      </svg>
    </button>
  );
}

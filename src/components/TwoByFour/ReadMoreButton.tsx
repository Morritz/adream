import React from 'react';

export default function ReadMoreButton() {
  return (
    <div className="pt-[103px] pb-[140px]">
      <button className="readme-button w-full lg:w-[380px]">
        <div className="px-[30px] flex items-center justify-between">
          Dowiedz się więcej{' '}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </button>
    </div>
  );
}

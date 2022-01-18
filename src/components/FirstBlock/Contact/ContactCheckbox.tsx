import React, { useEffect, useRef, useState } from 'react';

export default function ContactCheckbox() {
  const checkBoxRef = useRef<HTMLInputElement>(null);
  const [checkedState, setCheckedState] = useState<boolean>(false);

  const check = () => {
    setCheckedState((prev) => {
      const newValue = !prev;
      checkBoxRef.current.checked = newValue;
      return newValue;
    });
  };

  return (
    <div className="flex">
      <div
        className="relative w-[20px] h-[20px] outline-none border border-black"
        onClick={check}
      >
        <input
          ref={checkBoxRef}
          type="checkbox"
          className="w-[20px] h-[20px] invisible"
        ></input>
        <svg
          className={`absolute top-0 left-[1px] w-[20px] h-[20px] ${
            checkedState ? 'visible' : 'invisible'
          }`}
          version="1.1"
          viewBox="0 0 20 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-9 -11)" fill="black">
            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
          </g>
        </svg>
      </div>
      <div className="pl-[15px] w-full">
        <p className="text-[10px] leading-[16px]">
          Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
          więcej...
        </p>
      </div>
    </div>
  );
}

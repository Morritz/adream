import React from 'react';

interface NewsElementProps {
  children?: React.ReactNode;
  src: string;
  date: string;
  text: string;
}

export default function NewsElement({ src, date, text }: NewsElementProps) {
  return (
    <div className="w-[450px] min-h-[539px]">
      <img className="w-[450px] h-[334px] object-cover" src={src} />
      <p className="mt-[33px] text-[18px]">{date}</p>
      <p className="mt-[15px] text-[28px] font-bold">{text}</p>
      <a href="#">
        <p className="mt-[19px] text-[18px] underline">Więcej</p>
      </a>
    </div>
  );
}

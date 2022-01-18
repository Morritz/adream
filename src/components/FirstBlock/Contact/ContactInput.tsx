import React from 'react';

interface ContactInputProps {
  placeholder: string;
  type?: 'text' | 'tel';
}
export default function ContactInput({ placeholder, type }: ContactInputProps) {
  return (
    <input
      type={type ? type : 'text'}
      placeholder={placeholder}
      className="bg-white max-w-[383px] h-[52px] border border-black p-[16px] outline-none"
    ></input>
  );
}

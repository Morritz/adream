import React from 'react';
import ContactButton from './ContactButton';
import ContactCheckbox from './ContactCheckbox';
import ContactInput from './ContactInput';

export default function Contact() {
  return (
    <div className="bg-white max-w-[449px] h-full p-[33px] min-h-[638px]">
      <h3 className="text-black text-[28px] font-bold">Lorem ipsum</h3>
      <h3 className="text-black text-[28px] font-bold">
        Lorem ipsum lorem ipsum
      </h3>
      <p className="text-[18px] text-[#727272]">
        consectetur adipiscing elit. Ut auctor arcu
      </p>
      <h4 className="text-[18px] text-black font-bold mt-[4px]">
        Zostaw kontakt, zadzwonimy do Ciebie
      </h4>
      <div className="pt-[34px] flex flex-col gap-[20px]">
        <ContactInput placeholder="Imię i nazwisko" />
        <ContactInput placeholder="Telefon" type="tel" />
        <ContactInput placeholder="Email" />
        <ContactInput placeholder="Lorem ipsum lorem ipsum" />
        <ContactCheckbox />
        <ContactButton />
      </div>
    </div>
  );
}

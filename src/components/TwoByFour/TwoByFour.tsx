import React from 'react';
import BaseElement from './BaseElement';
import ElementWithImage from './ElementWithImage';
import ReadMoreButton from './ReadMoreButton';
import Row from './Row';

export default function TwoByFour() {
  return (
    <section className="w-full min-h-[940px] px-[16px] md:px-[64px] 2xl:px-[175px] flex flex-col gap-y-[68.5px] lg:gap-y-[0px]">
      <Row>
        <BaseElement>
          <p className="font-bold text-[48px] leading-[58px]">
            Lorem ipsum dolor sit amet, conse
          </p>
          <div className="absolute bottom-[12px] w-[130px] border-4 border-black"></div>
        </BaseElement>
        <ElementWithImage
          src="/Glowna1/Group 603.svg"
          text="Lorem ipsum"
        ></ElementWithImage>
        <ElementWithImage
          src="/Glowna1/Group 602.svg"
          text="Lorem ipsum dolor sit amet conse"
        ></ElementWithImage>
        <ElementWithImage
          src="/Glowna1/Group 601.svg"
          text="Lorem ipsum dolor sit amet, conse"
        ></ElementWithImage>
      </Row>
      <Row>
        <ElementWithImage
          src="/Glowna1/Group 604.svg"
          text="Lorem ipsum dolor sit amet, conse"
        ></ElementWithImage>
        <ElementWithImage
          src="/Glowna1/Group 598.svg"
          text="Lorem ipsum dolor sit amet, conse lorem ipsum lorem ipsum"
        ></ElementWithImage>
        <ElementWithImage
          src="/Glowna1/Group 599.svg"
          text="Lorem ipsum dolor sit amet, conse lorem ipsum lorem"
        ></ElementWithImage>
        <ElementWithImage
          src="/Glowna1/Group 600.svg"
          text="Lorem ipsum dolor sit amet, conse lorem ipsum"
        ></ElementWithImage>
      </Row>
      <ReadMoreButton />
    </section>
  );
}

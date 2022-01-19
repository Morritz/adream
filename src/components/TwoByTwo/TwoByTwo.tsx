import React from 'react';
import Button from './Button';
import Description from './Description';
import ImageContainer from './ImageContainer';
import Row from './Row';

export default function TwoByTwo() {
  return (
    <div className="w-full min-h-[940px] px-[16px] md:px-[64px] py-[140px] 2xl:px-[175px] flex flex-col gap-y-[28px]">
      <Row>
        <ImageContainer src="/Glowna1/shutterstock_1877634640.png">
          <Description
            variant="top-left"
            height={159}
            width={223}
            title="Biuro"
            subtitle="od 1000 zł/msc"
          />
          <Button />
        </ImageContainer>

        <ImageContainer src="/Glowna1/shutterstock_1723055614.png">
          <Description
            variant="top-left"
            height={195}
            width={241}
            title="Lorem ipsum"
            subtitle="od 500 zł/msc"
          />
          <Button />
        </ImageContainer>
      </Row>

      <Row>
        <ImageContainer src="/Glowna1/shutterstock_1677941275.png">
          <Description
            variant="bottom-left"
            height={195}
            width={223}
            title="Biuro lorem"
            subtitle="od 100 zł/h"
          />
          <Button />
        </ImageContainer>

        <ImageContainer src="/Glowna1/shutterstock_1433594243.png">
          <Description
            variant="bottom-left"
            height={195}
            width={324}
            title="Biuro lorem ipsum Lorem"
            subtitle="od 100 zł/h"
          />
          <Button />
        </ImageContainer>
      </Row>
    </div>
  );
}

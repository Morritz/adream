import React from 'react';

import Contact from './Contact/Contact';
import HeroText from './HeroText';

export default function Hero() {
  return (
    <div className="h-full w-full pt-[69px]">
      <div className="flex flex-row w-full h-full gap-y-4 flex-wrap justify-center lg:flex-nowrap lg:justify-between">
        <HeroText />
        <Contact />
      </div>
    </div>
  );
}

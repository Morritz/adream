import React, { createContext, useEffect, useState } from 'react';
import BackgroundImage from './BackgroundImage';
import BottomBar from './BottomBar/BottomBar';
import Hero from './Hero';
import NavBar from './NavBar/NavBar';
import ShadowOverlay from './ShadowOverlay';

export const images = [
  '/Glowna1/shutterstock_615439679.png',
  '/Glowna1/shutterstock_1090078049.png',
  '/Glowna1/shutterstock_1790190785.png',
];

type ContextProps = {
  currentImage: number;
  images: string[];
  nextImage: () => void;
  previousImage: () => void;
};
export const bgImageContext = createContext<Partial<ContextProps>>({});

export default function FirstBlock() {
  let interval: NodeJS.Timer;
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    console.log(currentImage);
    if (currentImage > images.length - 2) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => {
        return prev + 1;
      });
    }
  };

  const nextImageButton = () => {
    resetInterval();
    nextImage();
  };

  const previousImageButton = () => {
    resetInterval();
    previousImage();
  };

  const previousImage = () => {
    if (currentImage < 1) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((prev) => {
        return prev - 1;
      });
    }
  };

  const makeInterval = () => setInterval(nextImage, 10 * 1000);

  const resetInterval = () => {
    clearInterval(interval);
    interval = makeInterval();
  };

  useEffect(() => {
    if (!interval) {
      interval = makeInterval();
    }
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <bgImageContext.Provider
      value={{
        currentImage: currentImage,
        images,
        nextImage: nextImageButton,
        previousImage: previousImageButton,
      }}
    >
      <div className="relative first-background w-full min-h-[940px]">
        <BackgroundImage />
        <ShadowOverlay />
        <div className="px-[16px] md:px-[64px] 2xl:px-[175px] mx-auto relative overflow-hidden">
          <NavBar />
          <Hero />
        </div>
        <BottomBar />
      </div>
    </bgImageContext.Provider>
  );
}

import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const photos = [
  {
    source: '/Glowna1/Component 16 – 1.png',
    height: 888,
    width: 625,
  },
  {
    source: '/Glowna1/shutterstock_579651031.png',
    height: 547,
    width: 770,
  },
  {
    source: '/Glowna1/shutterstock_1187833249.png',
    height: 321,
    width: 770,
  },
  {
    source: '/Glowna1/shutterstock_763511722.png',
    height: 578,
    width: 465,
  },
];

export default function Showcase() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const progressBar = useRef<HTMLDivElement>(null);
  const progressBarParent = useRef<HTMLDivElement>(null);

  const scrollable = useRef<HTMLDivElement>(null);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
  };

  const handleScroll = (el) => {
    const hasHorizontalScrollbar = el.scrollWidth > el.clientWidth;
    console.log(hasHorizontalScrollbar);
    if (hasHorizontalScrollbar) {
      let scrollPercentage =
        (100 * el.scrollLeft) / (el.scrollWidth - el.clientWidth);

      console.log(el.scrollHeight);

      scrollPercentage = scrollPercentage < 5 ? 5 : scrollPercentage;

      if (progressBar.current) {
        progressBar.current.style.width = scrollPercentage + '%';
        progressBarParent.current.style.visibility = 'visible';
      }
    } else {
      if (progressBar.current) {
        if (progressBarParent.current)
          progressBarParent.current.style.visibility = 'hidden';
      }
    }
  };

  useEffect(() => {
    const handler = () => handleScroll(scrollable.current);
    window.addEventListener('resize', handler);
    handler();
    return () => window.removeEventListener('resize', handler);
  }, [scrollable.current]);

  return (
    <>
      <div
        ref={progressBarParent}
        className="w-full p-4 flex justify-evenly items-center gap-4"
      >
        0%
        <div className="grow">
          <div
            ref={progressBar}
            className="h-[8px] bg-black"
            style={{
              width: '5%',
            }}
          ></div>
        </div>
        100%
      </div>
      <div
        ref={scrollable}
        className="relative w-full overflow-x-scroll overscroll-x-contain"
        onScroll={(e) => handleScroll(e.target)}
      >
        <div className="h-[888px] flex flex-col flex-wrap justify-between gap-x-[30px] gap-y-[20px] ">
          {photos.map((photo, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden grow flex flex-col justify-end hover:cursor-pointer"
                style={{
                  width: photo.width,
                  height: photo.height,
                }}
                onClick={() => openLightbox(index)}
              >
                <motion.img
                  src={photo.source}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    type: 'tween',
                  }}
                  style={{
                    margin: 'inherit',
                    width: photo.width,
                    height: photo.height,
                  }}
                ></motion.img>
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 bg-white ">
          <h1 className="text-[65px] font-bold text-right px-4">Galeria</h1>
          <div className="mt-[48px] w-[450px] h-[16px] bg-black"></div>
        </div>
      </div>
      <ModalGateway>
        {isModalOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={photos} />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';

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

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full overflow-x-scroll">
        <div className="relative h-[888px] flex flex-col flex-wrap justify-between gap-x-[30px] gap-y-[20px] ">
          {photos.map((photo, index) => {
            return (
              <div
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

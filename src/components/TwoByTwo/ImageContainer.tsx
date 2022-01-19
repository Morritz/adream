import { motion } from 'framer-motion';
import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode;
  src: string;
}

export default function ImageContainer({ children, src }: ImageContainerProps) {
  return (
    <div className="relative overflow-hidden">
      <motion.img
        src={src}
        object-fit="cover"
        whileHover={{
          scale: 1.2,
        }}
        transition={{ type: 'tween' }}
      ></motion.img>
      {children}
    </div>
  );
}

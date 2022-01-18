import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { bgImageContext } from './FirstBlock';

export default function BackgroundImage() {
  const ctx = useContext(bgImageContext);
  return (
    <AnimatePresence>
      <motion.img
        className="background-image"
        key={ctx.currentImage}
        src={ctx.images[ctx.currentImage]}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      />
    </AnimatePresence>
  );
}

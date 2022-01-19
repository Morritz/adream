import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode;
  src: string;
}

export default function ImageContainer({ children, src }: ImageContainerProps) {
  return (
    <div className="relative">
      <img src={src} object-fit="cover"></img>
      {children}
    </div>
  );
}

import React from 'react';
import { LOGO_IMAGE_URL } from '../assets/images';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img
      src={LOGO_IMAGE_URL}
      alt="LamarqueTech"
      className={`w-[60px] md:w-[100px] h-auto object-contain mt-1 ${className}`}
      draggable={false}
    />
  );
};

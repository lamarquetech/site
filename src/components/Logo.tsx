import React from 'react';
import { LOGO_IMAGE_URL } from '../assets/images';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'h-9',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20',
  };

  return (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Official 3D Chrome Emblem with Glow Frame */}
      <div className="relative flex items-center justify-center p-0.5 rounded-xl bg-gradient-to-br from-[#1E6DFF]/50 via-[#4DB8FF]/30 to-transparent p-[1px]">
        <div className="absolute inset-0 bg-[#4DB8FF] opacity-30 blur-md rounded-xl group-hover:opacity-70 transition-opacity duration-300"></div>
        <img
          src={LOGO_IMAGE_URL}
          alt="LamarqueTech Logo"
          referrerPolicy="no-referrer"
          className={`${sizeClasses[size]} w-auto object-contain rounded-lg relative z-10 filter drop-shadow-[0_0_14px_rgba(77,184,255,0.5)] transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-extrabold tracking-wider text-[#F7F9FC] text-lg sm:text-xl font-mono flex items-center gap-0.5">
            <span className="text-[#F7F9FC] group-hover:text-white transition-colors">LAMARQUE</span>
            <span className="text-[#4DB8FF] text-glow animate-aurora">TECH</span>
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#C8D2E5] uppercase font-semibold opacity-80 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
            <span>INTELLIGENCE & DEV</span>
          </span>
        </div>
      )}
    </div>
  );
};

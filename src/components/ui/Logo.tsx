import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'mark' | 'full' | 'image' | 'banner';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  withLink = true,
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-11',
  };

  const markSize = {
    sm: 24,
    md: 32,
    lg: 44,
  };

  // Pure SVG vector version of the official Tebib Labs geometric mark
  // Designed for dark forest backgrounds with neon mint accent
  const MarkSvg = ({ dimension }: { dimension: number }) => (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-label="Tebib Labs logo mark"
    >
      <rect width="100" height="100" rx="18" fill="#00F5A0" />
      {/* Official Tebib geometric structural glyph */}
      <path
        d="M25 35H45V45L55 60V75H45L35 60V45H25V35ZM55 25H75V65H55V25ZM25 45V75H35V60L25 45Z"
        fill="#050D0A"
      />
      <path
        d="M26 36H46V46L66 66H74V26H56V34L46 26H26V36Z"
        fill="#050D0A"
        opacity="0.95"
      />
    </svg>
  );

  const content = (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {variant === 'image' ? (
        <img
          src={`${import.meta.env.BASE_URL}images/tebib-mark.jpg`}
          alt="Tebib Labs"
          className={`${sizeClasses[size]} w-auto rounded-lg object-contain border border-[#152E23]`}
        />
      ) : variant === 'banner' ? (
        <img
          src={`${import.meta.env.BASE_URL}images/tebib-banner.png`}
          alt="Tebib Labs Banner"
          className="h-10 md:h-12 w-auto rounded-lg object-contain"
        />
      ) : (
        <>
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}images/tebib-mark.jpg`}
              alt="Tebib Labs Icon"
              className={`${sizeClasses[size]} aspect-square rounded-md object-cover border border-[#00F5A0]/20 shadow-[0_0_12px_rgba(0,245,160,0.15)]`}
            />
          </div>
          {variant === 'full' && (
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-bold text-lg tracking-tight text-white font-sans group-hover:text-[#00F5A0] transition-colors">
                Tebib
              </span>
              <span className="px-1.5 py-0.5 text-xs font-semibold rounded bg-[#00F5A0] text-[#050D0A] tracking-wider uppercase">
                Labs
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link to="/" className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] rounded-md">
        {content}
      </Link>
    );
  }

  return content;
};

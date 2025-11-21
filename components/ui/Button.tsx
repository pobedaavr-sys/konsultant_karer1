import React from 'react';
import { PHONE_HREF } from '../../constants';

interface ButtonProps {
  text: string;
  className?: string;
  onDesktopClick: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", onDesktopClick, fullWidth = false }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if desktop
    if (window.matchMedia("(min-width: 1024px)").matches) {
      e.preventDefault();
      onDesktopClick();
    }
    // On mobile, it acts as a normal link to tel:
  };

  return (
    <a
      href={PHONE_HREF}
      onClick={handleClick}
      className={`
        js-consultation-btn inline-flex items-center justify-center
        bg-primary text-white font-medium
        rounded-[50px] shadow-lg
        transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:bg-primarySoft
        px-8 py-3 md:px-10 md:py-4
        text-sm md:text-base
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {text}
    </a>
  );
};

export default Button;
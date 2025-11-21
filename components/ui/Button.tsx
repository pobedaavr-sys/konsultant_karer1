import React from 'react';
import { PHONE_HREF } from '../../constants';

interface ButtonProps {
  text: string;
  className?: string;
  onDesktopClick?: () => void;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  className = "", 
  onDesktopClick, 
  fullWidth = false, 
  href = PHONE_HREF,
  onClick
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }

    // Check if desktop and if a specific desktop handler is provided
    if (onDesktopClick && window.matchMedia("(min-width: 1024px)").matches) {
      e.preventDefault();
      onDesktopClick();
    }
    // Otherwise, default behavior (navigation or tel:) will occur
  };

  return (
    <a
      href={href}
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
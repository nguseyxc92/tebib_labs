import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs py-2 px-3.5 gap-1.5',
    md: 'text-sm py-2.5 px-5 gap-2',
    lg: 'text-base py-3 px-6 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#00F5A0] text-[#050D0A] font-semibold hover:bg-[#15FFAE] active:bg-[#00D98E] shadow-[0_2px_16px_rgba(0,245,160,0.18)] border border-[#00F5A0]/40',
    secondary:
      'bg-[#0D1D16] text-[#E1EAE5] font-medium border border-[#1A382C] hover:bg-[#132A20] hover:border-[#00F5A0]/40 active:bg-[#0A1812]',
    ghost:
      'bg-transparent text-[#B5C7BF] font-medium hover:text-[#00F5A0] hover:bg-[#00F5A0]/5 active:bg-[#00F5A0]/10',
    outline:
      'bg-transparent text-[#00F5A0] font-medium border border-[#00F5A0]/40 hover:bg-[#00F5A0]/10 active:bg-[#00F5A0]/20',
  };

  const baseClasses =
    'inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050D0A] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      ) : icon && iconPosition === 'left' ? (
        <span className="shrink-0">{icon}</span>
      ) : null}

      <span className="truncate">{children}</span>

      {!isLoading && icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};

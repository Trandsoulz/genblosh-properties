import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-[#D56A34] dark:text-[#0F172A] dark:hover:bg-[#C9A54E]',
    secondary: 'bg-[#D56A34] text-[#0F172A] hover:bg-[#C9A54E] transform hover:-translate-y-1',
    outline: 'border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#F8FAFC] dark:border-[#D56A34] dark:text-[#D56A34] dark:hover:bg-[#1E293B] transform hover:-translate-y-1'
  };
  
  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-8 py-3 text-lg'
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
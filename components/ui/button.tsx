// Button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'destructive';
}

const Button: React.FC<ButtonProps> = ({ variant = 'outline', className = '', children, ...props }) => {
  let buttonClasses = 'py-2 px-4 font-semibold focus:outline-none';

  if (variant === 'outline') {
    buttonClasses += ' border border-gray-300 bg-white text-gray-700 hover:bg-gray-100';
  } else if (variant === 'destructive') {
    buttonClasses += ' bg-red-500 text-white hover:bg-red-600';
  }

  buttonClasses += ` ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

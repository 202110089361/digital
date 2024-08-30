// Input.tsx

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`border border-gray-300 py-2 px-4 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;

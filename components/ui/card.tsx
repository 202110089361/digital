// Card.tsx

import React, { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white shadow-md rounded-3xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;

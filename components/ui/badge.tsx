// Badge.tsx

import React, { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'primary', className = '', children }) => {
  let badgeClasses = 'inline-block px-2 py-1 rounded-md text-sm font-semibold';

  if (variant === 'primary') {
    badgeClasses += ' bg-blue-500 text-white';
  } else if (variant === 'secondary') {
    badgeClasses += ' bg-green-500 text-white';
  }

  badgeClasses += ` ${className}`;

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

export default Badge;

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  padding?: 'small' | 'medium' | 'large';
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Card = ({
  children,
  padding = 'medium',
  hover = true,
  className = '',
  ...props
}: CardProps) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm';
  
  const paddingClasses: Record<string, string> = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const hoverClasses = hover ? 'hover:shadow-md transition-shadow duration-200' : '';

  return (
    <div
      className={`${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

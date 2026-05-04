import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'medium',
  ...props 
}) => {
  const baseClasses = 'rounded-lg transition-all duration-300';
  
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
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

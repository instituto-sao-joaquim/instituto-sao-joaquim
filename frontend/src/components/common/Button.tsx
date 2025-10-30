import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  children: React.ReactNode;
}

export default function Button({
  bgColor = 'bg-green-400',
  textColor = 'text-white',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-1.5 rounded-xl transition hover:brightness-90 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

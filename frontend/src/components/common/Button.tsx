import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  scrollToId?: string;
  children: React.ReactNode;
}

export default function Button({
  bgColor = 'bg-green-400',
  textColor = 'text-white',
  fontSize = 'text-sm',
  scrollToId,
  children,
  className = '',
  ...props
}: ButtonProps) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      className={`px-4 py-1.5 rounded-xl transition hover:brightness-90 ${bgColor} ${textColor} ${className} ${fontSize} cursor-pointer`}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

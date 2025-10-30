import { ReactNode } from 'react';

interface SectionBadgeProps {
  text: string;
  icon?: ReactNode;
  stroke?: string;
  fill?: string;
  gap?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  className?: string;
}

export default function SectionBadge({
  text,
  icon,
  stroke,
  fill,
  gap,
  bgColor = 'bg-white/30',
  borderColor = 'border-none',
  textColor = 'text-gray-800',
  className = '',
}: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex flex-row items-center justify-center ${gap} ${bgColor} backdrop-blur-md ${textColor} border ${borderColor} px-4 py-1.5 rounded-full text-xs font-medium shadow-md ${className} mb-8`}
    >
      <span className={`flex items-center justify-center ${stroke} ${fill}`}>{icon}</span>
      {text}
    </div>

  );
}

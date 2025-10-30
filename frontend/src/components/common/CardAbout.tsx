import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
  stroke?: string;
  fill?: string;
  bgColor?: string;
  borderColor?: string;
}

export default function CardAbout({ icon, title, text, stroke, fill, bgColor, borderColor }: CardProps) {
  return (
    <div className={`${bgColor} backdrop-blur-md border ${borderColor} rounded-lg p-6 flex flex-col gap-2 text-left shadow-md flex-1 max-w-78`}>
      <div className={`${stroke} ${fill}`}>{icon}</div>
      <h2 className="text-neutral-900 text-xl">{title}</h2>
      <p className="text-sm text-neutral-700 mb-2">{text}</p>
    </div>
  );
}

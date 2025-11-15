import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
  stroke?: string;
  fill?: string;
  bgColor?: string;
  borderColor?: string;
  fromColor?: string;
  toColor?: string;
}

export default function CardNatal({ icon, title, text, stroke, fill, bgColor, borderColor, fromColor, toColor }: CardProps) {
  return (
    <div className={`${bgColor} backdrop-blur-md border ${borderColor} rounded-2xl p-6 flex flex-col items-center text-center gap-2 shadow-md flex-1 lg:max-w-78 text-white transition-transform duration-300 ease-out hover:scale-105`} style={{
      background:
        `linear-gradient(110deg, var(${fromColor}) 0%, var(${toColor}) 100%)`,
    }}>
      <div className={`${stroke} ${fill}`}>{icon}</div>
      <h2 className="text-xl">{title}</h2>
      <p className="text-sm">{text}</p>
    </div>
  );
}

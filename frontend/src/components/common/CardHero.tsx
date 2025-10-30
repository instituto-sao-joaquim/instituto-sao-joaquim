import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  value: string;
  stroke?: string;
  fill?: string;
}

export default function CardHero({ icon, title, value, stroke, fill }: CardProps) {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4 flex flex-col items-center text-center shadow-md w-60">
      <div className={`mb-3 ${stroke} ${fill}`}>{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{value}</h3>
      <p className="text-neutral-300 text-sm">{title}</p>
    </div>
  );
}

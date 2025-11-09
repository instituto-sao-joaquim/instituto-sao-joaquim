import { ReactNode } from 'react';
import AnimatedCounter from './AnimatedCounter';

interface CardProps {
  icon: ReactNode;
  title: string;
  value: number;
  stroke?: string;
  fill?: string;
  plus?: boolean;
}

export default function CardHero({ icon, title, value, stroke, fill, plus }: CardProps) {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4 flex flex-col items-center text-center shadow-md md:w-60">
      <div className={`mb-3 ${stroke} ${fill}`}>{icon}</div>
      <h3 className="text-2xl font-bold mb-2">
        <AnimatedCounter value={value} showPlus={plus} />
      </h3>
      <p className="text-neutral-300 text-sm">{title}</p>
    </div>
  );
}

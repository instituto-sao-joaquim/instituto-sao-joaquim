import Link from "next/link";
import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
  stroke?: string;
  fill?: string;
  bgColor?: string;
  borderColor?: string;
  textButton?: string;
  bgButton?: string;
  textColorButton?: string;
  href: string;
}

export default function Card({ icon, title, text, stroke, fill, bgColor, borderColor, textButton, bgButton, textColorButton, href }: CardProps) {
  return (
    <div className={`${bgColor} backdrop-blur-md border ${borderColor} rounded-lg p-6 flex flex-col gap-2 text-left shadow-md flex-1 lg:max-w-78`}>
      <div className={`${stroke} ${fill}`}>{icon}</div>
      <h2 className="text-neutral-900 text-xl">{title}</h2>
      <p className="text-sm text-neutral-700 mb-2">{text}</p>
      <Link href={href} className={`
            px-4 py-1.5 rounded-xl transition hover:brightness-90 text-sm text-center
            ${bgButton || "bg-emerald-600"}
            ${textColorButton || "text-white"}
          `}>
        {textButton}
      </Link>
    </div>
  );
}

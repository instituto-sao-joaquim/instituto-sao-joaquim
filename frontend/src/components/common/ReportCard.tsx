"use client";

import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";

interface ReportCardProps {
  year: number;
  description: string;
  url?: string;
}

export default function ReportCard({ year, description, url }: ReportCardProps) {
  return (
    <div
      className={`rounded-lg p-6 flex flex-col items-center text-center gap-2 border shadow-sm flex-1 lg:max-w-78 ${url
        ? "bg-white border-neutral-200"
        : "bg-neutral-100 border-dashed border-neutral-300 opacity-70"
        }`}
    >
      <span
        className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-semibold ${url
          ? "bg-dark-blue/10 text-dark-blue"
          : "bg-neutral-300 text-neutral-700"
          }`}
      >
        Ano {year}
      </span>

      <p className="text-sm text-neutral-700">{description}</p>

      {url ? (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-dark-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition hover:brightness-90"
        >
          <FaFileAlt className="w-4 h-4" />
          Acessar relatório
        </Link>
      ) : (
        <span className="text-xs text-neutral-600">
          Relatório em elaboração
        </span>
      )}
    </div>
  );
}

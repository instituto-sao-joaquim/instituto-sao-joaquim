// Código atualizado conforme solicitado
"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export interface CarouselItem {
  src: string;
  title?: string;
}

interface ProjectCarouselProps {
  items: CarouselItem[];
  itemWidth?: string;
  itemHeight?: string;
  zoom?: number;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

export default function Carousel({
  items,
  itemWidth = "400px",
  itemHeight = "300px",
  zoom = 1.05,
  gradientFrom = "var(--color-dark-green)",
  gradientVia = "var(--color-light-green)",
  gradientTo = "transparent",
}: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));

  const openPreview = (i: number) => setPreviewIndex(i);
  const closePreview = () => setPreviewIndex(null);

  const previewNext = () =>
    setPreviewIndex((i) => (i! === items.length - 1 ? 0 : i! + 1));

  const previewPrev = () =>
    setPreviewIndex((i) => (i! === 0 ? items.length - 1 : i! - 1));

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${current * (parseInt(itemWidth) + 24)}px)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ minWidth: itemWidth, height: itemHeight }}
              onClick={() => openPreview(i)}
            >
              <div
                className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title || ""}
                    fill
                    className="object-cover object-center"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${gradientFrom}, color-mix(in srgb, ${gradientVia} 15%, transparent), ${gradientTo})`,
                    }}
                  />

                  {item.title && (
                    <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white font-semibold text-sm drop-shadow-md">
                        {item.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões laterais */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/40 hover:bg-black/60 p-2 rounded-full"
        >
          <AiOutlineLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/40 hover:bg-black/60 p-2 rounded-full"
        >
          <AiOutlineRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {previewIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-[fadeIn_0.25s_ease]"
          onClick={closePreview}
        >
          {/* Card (no mobile ocupa TELA TODA; em telas maiores usa dimensões) */}
          <div
            className="relative w-full h-full md:w-[85vw] md:h-[85vh] bg-white/5 backdrop-blur-xl md:rounded-2xl md:shadow-2xl overflow-hidden animate-[zoomIn_0.25s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagem */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={items[previewIndex].src}
                alt={items[previewIndex].title || ""}
                fill
                className="object-contain"
              />
            </div>

            {/* Setas — funcionam igual em todas as telas */}
            <button
              onClick={previewPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full"
            >
              <AiOutlineLeft className="text-white w-7 h-7" />
            </button>

            <button
              onClick={previewNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full"
            >
              <AiOutlineRight className="text-white w-7 h-7" />
            </button>

            {/* Botão de fechar */}
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 p-2 rounded-full cursor-pointer"
            >
              <AiOutlineClose className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "..";

type Campaign = {
  title: string;
  text?: string;
  image: string;
  link: string;
};

export default function Campaigns() {
  const campaigns: Campaign[] = [
    {
      title: "Natal Solidário",
      text:
        "Um gesto simples, um impacto enorme: com R$10 você transforma o Natal de uma criança.",
      image: "/images/campaigns/natalcapa2.png",
      link: "/campaigns/natal-encantado",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-neutral-50 mt-10 py-20 px-3 flex flex-col items-center justify-center" id="campaigns">
      {/* Conteúdo central */}
      <div className="relative z-10 h-full max-w-5xl">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <Badge text="Participe" bgColor="bg-transparent-green" textColor="text-dark-green" />
          <h2 className="text-4xl font-bold text-gray-900">Campanhas</h2>
        </div>
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Lado esquerdo: texto introdutório */}
          <div className="flex flex-col mb-10 lg:mb-0">
            <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>Confira as campanhas <span className="font-bold text-dark-orange">que realizamos</span></h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O Instituto São Joaquim promove campanhas que geram impacto real na
              vida de crianças e famílias. Conheça as iniciativas ativas e escolha
              como contribuir.
            </p>

            <ul className="text-gray-600 space-y-3">
              <li>
                <strong>Transparência:</strong> prestação de contas e relatórios
                públicos.
              </li>
              <li>
                <strong>Impacto:</strong> foco em crianças, educação e amparo
                familiar.
              </li>
              <li>
                <strong>Participe:</strong> doe, compartilhe ou voluntarie-se —
                toda ajuda conta!
              </li>
            </ul>
          </div>

          {/* Lado direito: abas no topo + imagem e conteúdo abaixo */}
          <div className="space-y-4">
            {/* Abas (topo) */}
            <div
              role="tablist"
              aria-label="Campanhas"
              className="flex gap-3 overflow-x-auto"
            >
              {campaigns.map((c, i) => (
                <button
                  key={c.title}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`camp-panel-${i}`}
                  id={`camp-tab-${i}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") {
                      setActive((prev) => Math.min(prev + 1, campaigns.length - 1));
                    } else if (e.key === "ArrowLeft") {
                      setActive((prev) => Math.max(prev - 1, 0));
                    }
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full border transition ${active === i
                    ? "bg-brand-green text-white bg-brand-green-700 shadow"
                    : "bg-white text-gray-700 border-gray-200 hover:shadow-sm"
                    }`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            {/* Painel da aba ativa */}
            <div
              id={`camp-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`camp-tab-${active}`}
              className="bg-gray-50 rounded-lg shadow-sm overflow-hidden"
            >
              {/* Imagem */}
              <div className="relative w-full h-72 overflow-hidden bg-gray-200">
                <Image
                  src={campaigns[active].image}
                  alt={campaigns[active].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500"
                />
              </div>

              {/* Conteúdo abaixo da imagem */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {campaigns[active].title}
                </h2>

                <p className="text-gray-700 mb-4">
                  {campaigns[active].text}
                </p>

                <div className="flex items-center gap-3">
                  <Link
                    href={campaigns[active].link}
                    className="inline-block px-4 py-1.5 rounded-xl bg-brand-green text-white font-medium shadow hover:bg-brand-green-600 transition hover:brightness-90 text-sm text-center"
                  >
                    Saiba mais
                  </Link>

                  <Link
                    href="/donate"
                    className="inline-block px-5 py-1.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 transition hover:brightness-90 text-sm text-center"
                  >
                    Quero doar
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

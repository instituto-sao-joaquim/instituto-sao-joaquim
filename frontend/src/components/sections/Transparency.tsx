"use client";

import Card from "@components/common/Card";
import ReportCard from "@components/common/ReportCard";
import Badge from "@components/common/SectionBadge";
import { useState } from "react";
import {
  FaBalanceScale,
  FaGlobe,
  FaProjectDiagram
} from "react-icons/fa";

const REPORTS_PER_PAGE = 6;

const reports = [
  { year: 2025, description: "Resumo dos projetos e ações realizadas em 2025.", url: "https://drive.google.com/file/d/1S0b_zlOAXXe_ZkAXwPq52tnKvul6vIxE/view?usp=sharing" },
];

export default function TransparencyAndProjects() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(reports.length / REPORTS_PER_PAGE);
  const startIndex = (page - 1) * REPORTS_PER_PAGE;
  const visibleReports = reports.slice(
    startIndex,
    startIndex + REPORTS_PER_PAGE
  );

  return (
    <section
      className="relative w-full bg-white mt-10 py-20 px-3 flex items-center justify-center"
      id="transparency"
    >
      <div className="relative z-10 max-w-5xl text-center">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <Badge
            text="Transparência Institucional"
            bgColor="bg-brand-blue/20"
            textColor="text-dark-blue"
          />
          <h2 className="text-4xl font-bold text-gray-900">
            Transparência e Prestação de Contas
          </h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Atuamos com responsabilidade, clareza e compromisso público com a
            sociedade, parceiros e beneficiários.
          </p>
        </div>

        {/* Cards institucionais */}
        <div className="flex flex-col justify-center gap-6 mb-16">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <Card
              icon={<FaGlobe className="w-12 h-12 fill-dark-green" />}
              title="Domínio Oficial"
              text="O domínio institutosaojoaquim.org.br é o site oficial, mantido e administrado exclusivamente pelo Instituto São Joaquim."
              bgColor="bg-light-green/10"
              borderColor="border-dark-green/30"
            />

            <Card
              icon={<FaBalanceScale className="w-12 h-12 fill-dark-orange" />}
              title="Regularidade Institucional"
              text="Organização da sociedade civil sem fins lucrativos, regularmente constituída e inscrita no CNPJ 61.696.288/0001-75."
              bgColor="bg-light-orange/10"
              borderColor="border-dark-orange/30"
            />

            <Card
              icon={<FaProjectDiagram className="w-12 h-12 fill-dark-blue" />}
              title="Projetos Executados"
              text="Desenvolvemos ações e programas sociais estruturados, com foco em impacto social e desenvolvimento comunitário."
              bgColor="bg-light-blue/10"
              borderColor="border-dark-blue/30"
            />
          </div>
        </div>

        {/* Bloco relatório anual */}
        <div className="flex flex-col items-center justify-center text-center gap-4 rounded-xl w-full md:py-10 text-gray-700 bg-neutral-50 p-6">
          <h2 className="text-xl sm:text-3xl md:text-2xl font-bold">
            Projetos desenvolvidos no ano
          </h2>

          <p className="max-w-4xl">
            Disponibilizamos o relatório anual contendo o resumo dos projetos,
            atividades e ações desenvolvidas pelo Instituto São Joaquim,
            reforçando nosso compromisso com a transparência e a prestação de
            contas.
          </p>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {visibleReports.map((report) => (
                <ReportCard key={report.year} {...report} />
              ))}
            </div>

            {/* Controles de paginação */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((p) => p - 1)}
                disabled={page === 1}
                className={`px-4 py-2 rounded-lg border text-sm transition
                  ${page === 1
                    ? "opacity-40"
                    : "cursor-pointer hover:bg-neutral-100"
                  }`}
              >
                Anterior
              </button>

              <span className="text-sm font-medium">
                Página {page} de {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page === totalPages}
                className={`px-4 py-2 rounded-lg border text-sm transition
                  ${page === totalPages
                    ? "opacity-40"
                    : "cursor-pointer hover:bg-neutral-100"
                  }`}
              >
                Próxima
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

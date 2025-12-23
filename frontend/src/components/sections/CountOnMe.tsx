"use client";

import Button from '@components/common/Button';
import CardWithButton from '@components/common/CardWithButton';
import Badge from '@components/common/SectionBadge';
import Image from "next/image";
import Link from "next/link";
import { BiDonateHeart } from 'react-icons/bi';
import { FaFileInvoiceDollar, FaHandHoldingUsd } from "react-icons/fa";

export default function CountOnMe() {
  return (
    <section className='w-full bg-neutral-50 flex flex-col items-center'>
      <div className="relative w-full min-h-screen bg-cover bg-top flex flex-col items-center justify-center px-3" style={{ backgroundImage: "url('/conte-comigo.jpg')" }}>
        {/* Overlay escura */}
        <div className="absolute inset-0 bg-black opacity-75 w-full"></div>

        {/* Conteúdo central */}
        <div className="relative flex flex-col items-center justify-center z-10 py-30 min-w-full max-w-5xl text-center text-white">
          <Badge icon={<BiDonateHeart className="w-5 h-5 fill-emerald-500" />} gap="gap-2" text="Programa de Apadrinhamento" bgColor='bg-emerald-600/30' borderColor='border-emerald-800' textColor='text-white' />

          <h1 className="text-2xl md:text-5xl font-bold mb-8 leading-tight max-w-5xl">Você tem interesse em auxiliar financeiramente crianças e adolescentes e transformar suas vidas?</h1>
          <p className="text-md md:text-xl mb-8 max-w-2xl">Torne-se padrinho ou madrinha: seu apoio financeiro mensal garante educação, alimentação e acompanhamento para nossas crianças.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button scrollToId='comoParticipar' bgColor="bg-emerald-600" textColor="text-white">
              Como Participar
            </Button>
            <Link href="/doacoes" className="text-gray-700 bg-gray-100 text-sm px-4 py-1.5 rounded-xl transition hover:brightness-90">
              Doe Agora
            </Link>
          </div>
        </div>
      </div>

      {/* Conteúdo imagem + texto */}
      <div className="flex flex-col items-center gap-4 max-w-5xl py-15 px-3" id="comoParticipar">
        <Badge text="Participe" bgColor='bg-emerald-600/20' textColor='text-emerald-800' />
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Imagem lateral esquerda */}
          <div className="w-full lg:flex-3">
            <Image
              src="/img-conte-comigo-apadrinhamento.png"
              alt="Instituto São Joaquim"
              width={800}
              height={384}
              className="w-full lg:w-auto h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Texto lateral direita */}
          <div className="lg:flex-3 text-left">
            <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>Saiba como você pode <span className="font-bold text-orange-500">fazer parte</span></h2>

            <div className="border-3 border-transparent border-l-emerald-500 px-4">
              <p className="text-gray-700">
                O apadrinhamento financeiro consiste em contribuir financeiramente para o desenvolvimento da criança e/ou o adolescente apadrinhado. Para tanto, ele poderá financiar alguma atividade que contribua para o desenvolvimento e bem-estar do adolescente, conforme sua necessidade, como atendimentos médicos, odontológicos, terapias diversas como psicologia, psicomotricidade relacional, fonoaudiologia, entre outras. Poderá também investir em cursos profissionalizantes, cursos de idiomas e informática, música e esportes, reforço escolar e dança.
              </p>
              <p className="text-left text-gray-700 mt-4">
                Você pode contribuir financiando tratamentos de saúde, psicoterapêuticos, cursos e profissionalização ou mesmo atividades educacionais ou de lazer.
              </p>
              <p className="text-left text-gray-700 mt-4">
                O processo é muito simples e intermediado pelo Projeto Conte Comigo.
              </p>
            </div>

            <Link href="/doacoes" className="block px-4 py-1.5 rounded-xl transition hover:brightness-90 text-sm text-center w-full md:w-xs mt-4 bg-orange-500 text-white">Tenho interesse em contribuir</Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 py-15 w-full text-center bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge text="Contribua" bgColor='bg-orange-400/20' textColor='text-orange-500' />
            <h2 className="text-4xl font-bold text-gray-900">Como contribuir com a associação?</h2>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
              Existem diversas formas de contribuir com o Instituto São Joaquim e fazer a diferença na vida de dezenas de pessoas.
            </p>
          </div>

          {/* 3 Cards abaixo */}
          <div className="flex flex-col justify-center gap-6 mb-16">
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
              <CardWithButton
                icon={<FaFileInvoiceDollar className="w-12 h-12 fill-cyan-600" />}
                title="Doe parte do seu I.R. sem gastar nada"
                text="Apoie sem gastar a mais: saiba como destinar parte do seu Imposto de Renda ao Instituto."
                bgColor='bg-cyan-600/10'
                borderColor='border-cyan-400/30'
                textButton='Saiba como'
                textColorButton='text-white'
                bgButton='bg-cyan-600'
                href='/contato'
              />


              <CardWithButton
                icon={<FaHandHoldingUsd className="w-12 h-12 fill-orange-500" />}
                title="Contribuição mensal."
                text="Seja padrinho/madrinha e garanta suporte contínuo às crianças."
                bgColor='bg-orange-500/10'
                borderColor='border-orange-400/30'
                textButton='Saiba como'
                textColorButton='text-white'
                bgButton='bg-orange-500'
                href='/contato'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Button from '@components/common/Button';
import CardHero from '@components/common/CardHero';
import Badge from '@components/common/SectionBadge';
import { FireIcon, HeartIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { LuBaby } from 'react-icons/lu';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-3"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Conteúdo central */}
      <div className="relative flex flex-col items-center justify-center z-10 py-30 min-w-full max-w-5xl text-center text-white">
        <Badge icon={<HeartIcon className="w-5 h-5 stroke-[1.5] stroke-brand-green" />} gap="gap-2" text="Transformando vidas desde 2025" bgColor='bg-brand-green/20' borderColor='border-dark-green' textColor='text-white' />

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">Instituto São Joaquim</h1>
        <p className="text-xl sm:text-xl md:text-2xl mb-8 max-w-2xl">Juntos, construindo uma comunidade justa e saudável.</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button scrollToId='about' bgColor="bg-dark-green" textColor="text-white">
            Conheça nossa missão
          </Button>
          <Button scrollToId='volunteer' bgColor="bg-gray-100" textColor="text-gray-700">
            Seja voluntário
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <CardHero icon={<LuBaby className="w-9 h-9 stroke-[1.5]  stroke-brand-green" />}
            title="Crianças atendidas"
            value={60} />

          {/* Nutrir para Crescer, Documento é Direito, Alimenta+, Viver Verde*/}
          <CardHero icon={<FireIcon className="w-9 h-9 stroke-[1.5] stroke-dark-orange" />}
            title="Pessoas atendidas em ação comunitária"
            value={500} plus={true} />

          <CardHero icon={<UserGroupIcon className="w-9 h-9 stroke-[1.5] stroke-dark-blue" />}
            title="Voluntários"
            value={20} plus={true} />
        </div>
      </div>
    </section>
  );
}

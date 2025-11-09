"use client";

import { CubeIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { FaHandsHelping } from 'react-icons/fa';
import { Badge } from '../';
import Card from '../common/CardWithButton';

export default function Projects() {
  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center justify-center bg-white px-3"
      id='projects'
    >
      {/* Conteúdo central */}
      <div className="relative z-10 py-15 max-w-5xl text-center">
        <div className="text-center mb-16">
          <Badge text="Nossos Programas" bgColor='bg-cyan-600/20' textColor='text-cyan-700' />
          <h2 className="text-4xl font-bold text-gray-900">Como Atuamos</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Desenvolvemos programas integrados que atendem às diversas necessidades das comunidades, promovendo desenvolvimento integral e sustentável.
          </p>
        </div>

        {/* 3 Cards abaixo */}
        <div className="flex flex-col justify-center gap-6 mb-16">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <Card
              icon={<GlobeAmericasIcon className="w-12 h-12 fill-emerald-500" />}
              title="Viver Verde"
              text="Foca na educação ambiental na primeira infância. O Viver Verde também atua junto à comunidade, com ações de
            conscientização e práticas em Sustentabilidade Ambiental."
              bgColor='bg-emerald-600/10'
              borderColor='border-emerald-400/30'
              textButton='Saiba Mais'
              textColorButton='text-white'
              bgButton='bg-emerald-500'
              href='programs/viver-verde'
            />

            <Card
              icon={<CubeIcon className="w-12 h-12 fill-orange-500" />}
              title="Alimenta+"
              text="Atua na área de Segurança Alimentar e Nutricional, sendo o pilar no combate à fome e garantindo o acesso contínuo a alimentos de qualidade para as famílias em vulnerabilidade."
              bgColor='bg-orange-500/10'
              borderColor='border-orange-400/30'
              textButton='Saiba Mais'
              textColorButton='text-white'
              bgButton='bg-orange-500'
              href='programs/alimenta-mais'
            />

            <Card
              icon={<FaHandsHelping className="w-12 h-12 fill-cyan-600" />}
              title="Conte Comigo"
              text="Garante apoio financeiro contínuo às ações do Instituto, organizando contribuições de padrinhos e famílias para fortalecer o desenvolvimento e o bem-estar das crianças atendidas."
              bgColor='bg-cyan-500/10'
              borderColor='border-cyan-400/30'
              textButton='Saiba Mais'
              textColorButton='text-white'
              bgButton='bg-cyan-600'
              href='donate'
            />
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center text-center gap-4 rounded-xl w-full px-3 md:px-6 py-10 text-white"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,188,125,0.89) 0%, rgba(245,74,0,0.8) 50%, rgba(0,146,184,0.89) 100%)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold">
            Quer saber mais sobre nossos programas?
          </h2>

          <p className="max-w-4xl">
            Entre em contato conosco e descubra como você pode participar ou apoiar nossas iniciativas.
          </p>

          <Link href="/contact" className="px-4 py-1.5 rounded-xl transition hover:brightness-90 text-sm text-gray-700 bg-gray-100">Fale Conosco</Link>
        </div>

      </div>
    </section>
  );
}

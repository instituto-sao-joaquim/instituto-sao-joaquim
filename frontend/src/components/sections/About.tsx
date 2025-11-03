import { FireIcon, HeartIcon, ScaleIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { Badge } from '../';
import Card from '../common/Card';

export default function About() {
  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center justify-center bg-neutral-50"
      id='about'
    >
      {/* Conteúdo central */}
      <div className="relative z-10 py-15 max-w-5xl text-center px-6">
        <div className="text-center mb-16">
          <Badge text="Sobre Nós" bgColor='bg-emerald-600/20' textColor='text-emerald-800' />
          <h2 className="text-4xl font-bold text-gray-900">Quem Somos</h2>
          <p className="mt-2 text-gray-700 mx-auto">
            O Instituto São Joaquim atua no desenvolvimento integral da comunidade, promovendo programas estratégicos de alimentação, educação ambiental, cidadania e inclusão social.
          </p>
        </div>

        {/* Conteúdo imagem + texto */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Imagem lateral esquerda */}
          <div className="w-full lg:flex-3">
            <Image
              src="/about-us.webp"
              alt="Instituto São Joaquim"
              width={800}
              height={384}
              className="w-full lg:w-auto h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Texto lateral direita */}
          <div className="lg:flex-2 text-left">
            <h2 className='text-2xl text-gray-900 mb-4 font-bold'>Nossa História</h2>
            <p className="text-gray-700 mb-4">
              O Instituto São Joaquim foi criado para apoiar a comunidade em todas as fases da vida, atuando desde a sobrevivência básica até o empoderamento social. Com programas como o Alimenta+ e o Viver Verde, e ações estratégicas como o Documento É Direito e palestras de capacitação, o ISJ já impactou dezenas de vidas.
            </p>
            <p className="text-gray-700">
              Para 2026, a instituição planeja ampliar suas atividades, incluindo programas esportivos e atendimentos especializados em áreas jurídicas, nutricionais e psicossociais.
            </p>
          </div>
        </div>

        {/* 3 Cards abaixo */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          <Card
            icon={<FireIcon className="w-12 h-12 fill-emerald-600" />}
            title="Missão"
            text="Promover a dignidade, a cidadania e o desenvolvimento integral das famílias da comunidade, por meio de ações em segurança alimentar, educação, direitos e construção de um futuro sustentável."
            bgColor='bg-emerald-600/10'
            borderColor='border-emerald-400/30'
          />
          <Card
            icon={<HeartIcon className="w-12 h-12 fill-red-500" />}
            title="Visão"
            text="Ser referência na transformação social da comunidade, garantindo dignidade, acesso à segurança alimentar e ferramentas para exercer a cidadania, construindo um futuro sustentável."
            bgColor='bg-orange-500/10'
            borderColor='border-orange-400/30'
          />
          <Card
            icon={<ScaleIcon className="w-12 h-12 fill-cyan-600" />}
            title="Valores"
            text="Dignidade humana, solidariedade, compromisso com o futuro, solidariedade, empoderamento
            comunitário, transparência."
            bgColor='bg-cyan-500/10'
            borderColor='border-cyan-400/30'
          />
        </div>
      </div>
    </section>
  );
}

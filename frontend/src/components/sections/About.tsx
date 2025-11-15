import { FireIcon, HeartIcon, ScaleIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { Badge } from '../';
import Card from '../common/Card';

export default function About() {
  return (
    <section
      className="relative w-full bg-cover bg-center px-3 flex items-center justify-center bg-neutral-50"
      id='about'
    >
      {/* Conteúdo central */}
      <div className="relative z-10 py-15 max-w-5xl text-center">
        <div className="text-center mb-16">
          <Badge text="Sobre Nós" bgColor='bg-brand-green/20' textColor='text-dark-green' />
          <h2 className="text-4xl font-bold text-gray-900">Quem Somos</h2>
          <p className="mt-2 text-gray-700 mx-auto max-w-2xl">
            O Instituto São Joaquim atua no desenvolvimento integral da comunidade, promovendo programas estratégicos de alimentação, educação ambiental, cidadania e inclusão social.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-16">
          <Card
            icon={<FireIcon className="w-12 h-12 fill-dark-green" />}
            title="Missão"
            text="Promover a dignidade, a cidadania e o desenvolvimento integral das famílias da comunidade, por meio de ações em segurança alimentar, educação, direitos e construção de um futuro sustentável."
            bgColor='bg-brand-green/10'
            borderColor='border-dark-green/30'
          />
          <Card
            icon={<HeartIcon className="w-12 h-12 fill-brand-red" />}
            title="Visão"
            text="Ser referência na transformação social da comunidade, garantindo dignidade, acesso à segurança alimentar e ferramentas para exercer a cidadania, construindo um futuro sustentável."
            bgColor='bg-brand-orange/10'
            borderColor='border-dark-orange/30'
          />
          <Card
            icon={<ScaleIcon className="w-12 h-12 fill-dark-blue" />}
            title="Valores"
            text="Dignidade humana, solidariedade, compromisso com o futuro, solidariedade, empoderamento
            comunitário, transparência."
            bgColor='bg-brand-blue/10'
            borderColor='border-dark-blue/30'
          />
        </div>

        {/* Conteúdo imagem + texto */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
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
              <h2 className='text-2xl text-gray-900 font-bold mb-2'>Nossa História</h2>
              <p className="text-gray-700">
                O Instituto São Joaquim foi fundado em junho de 2025, no bairro Dias Macedo, em Fortaleza (CE), movido pelo desejo de gerar impacto social positivo na comunidade. Nasceu da união de pessoas comprometidas em promover o desenvolvimento humano e fortalecer vínculos comunitários, com foco especial na infância e nas famílias em situação de vulnerabilidade. Mesmo sendo uma instituição jovem, o Instituto já vem se estruturando para realizar projetos que estimulem a educação, a solidariedade e o protagonismo social. Mesmo sendo uma instituição jovem, o Instituto já vem se estruturando para realizar projetos que estimulem a educação, a solidariedade e o protagonismo social.
              </p>
            </div>
          </div>

          <div className="md:flex-1 lg:flex-3 text-left">
            <p className="text-gray-700">
              Para isso, atua por meio de núcleos especializados, como o Núcleo de Educação, voltado para o acompanhamento pedagógico e apoio às crianças; o Núcleo de Esporte, que promove atividades físicas e recreação; o Núcleo de Desenvolvimento Institucional e Sustentabilidade, que gerencia os voluntários, coordena os principais programas e garante a continuidade das ações; o Núcleo de Comunicação e Engajamento, responsável pela divulgação e relacionamento com a comunidade; e o Núcleo de Contabilidade e Apoio Financeiro, que organiza e presta contas das contribuições e recursos do Instituto. Nosso propósito é construir, desde agora, uma história marcada pela colaboração e pelo cuidado com o outro.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Texto lateral esquerda */}
            <div className="md:flex-1 lg:flex-3 text-left">
              <h2 className='text-2xl text-gray-900 font-bold mb-2'>Nossos Objetivos</h2>
              <p className="text-gray-700">
                O Instituto São Joaquim tem como objetivo principal promover o desenvolvimento integral de crianças, famílias e da comunidade do bairro Dias Macedo, por meio de ações socioeducativas, culturais e ambientais. Buscamos fortalecer vínculos familiares e comunitários, estimular a solidariedade e ampliar o acesso a oportunidades que contribuam para uma vida mais digna e sustentável. Atuamos em rede com parceiros, voluntários e apoiadores, acreditando que a transformação social acontece quando caminhamos juntos.
              </p>
            </div>

            {/* Imagem lateral direita */}
            <div className="w-full md:flex-1 lg:flex-2">
              <Image
                src="/about-us2.jpeg"
                alt="Crianças no Instituto"
                width={200}
                height={200}
                className="w-screen md:w-sm object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

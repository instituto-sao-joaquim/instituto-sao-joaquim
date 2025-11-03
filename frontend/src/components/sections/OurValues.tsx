import { FaHandHoldingHeart, FaHandsHelping, FaLandmark, FaPeopleCarry, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import { FaHandsHoldingChild } from 'react-icons/fa6';
import { Badge } from '../';
import Card from '../common/Card';

export default function OurValues() {
  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center justify-center bg-white"
      id='ourValues'
    >
      {/* Conteúdo central */}
      <div className="relative z-10 py-15 max-w-5xl text-center px-6">
        <div className="text-center mb-16">
          <Badge text="Nossos Valores" bgColor='bg-orange-400/20' textColor='text-orange-500' />
          <h2 className="text-4xl font-bold text-gray-900">O Que Nos Move</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Nossos valores são os pilares que sustentam todas as nossas ações e decisões, garantindo coerência e impacto positivo.
          </p>
        </div>

        {/* 3 Cards abaixo */}
        <div className="flex flex-col justify-center gap-6 mb-16">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <Card
              icon={<FaHandHoldingHeart className="w-12 h-12 fill-emerald-600" />}
              title="Dignidade Humana"
              text="Acreditamos que toda pessoa merece respeito, oportunidades e condições dignas de vida."
              bgColor='bg-emerald-600/10'
              borderColor='border-emerald-400/30'
            />
            <Card
              icon={<FaHandsHelping className="w-12 h-12 fill-orange-500" />}
              title="Solidariedade"
              text="Apoiamos a comunidade através da cooperação, cuidado mútuo e ajuda prática a quem precisa."
              bgColor='bg-orange-500/10'
              borderColor='border-orange-400/30'
            />
            <Card
              icon={<FaSeedling className="w-12 h-12 fill-cyan-600" />}
              title="Compromisso com o Futuro"
              text="Investimos no desenvolvimento sustentável da comunidade, planejando ações de longo prazo para promover autonomia."
              bgColor='bg-cyan-500/10'
              borderColor='border-cyan-400/30'
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <Card
              icon={<FaPeopleCarry className="w-12 h-12 fill-cyan-600" />}
              title="Empoderamento Comunitário"
              text="Capacitamos famílias e indivíduos para exercerem seus direitos e participarem ativamente da sociedade."
              bgColor='bg-emerald-600/10'
              borderColor='border-emerald-400/30'
            />
            <Card
              icon={<FaShieldAlt className="w-12 h-12 fill-orange-500" />}
              title="Transparência"
              text="Pautamos todas as nossas ações em princípios éticos sólidos e total transparência."
              bgColor='bg-orange-500/10'
              borderColor='border-orange-400/30'
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-4 rounded-xl w-full px-6 py-10 text-gray-700 bg-neutral-50"
        >
          <h2 className="text-xl sm:text-3xl md:text-2xl font-bold">
            Certificações e Reconhecimentos
          </h2>

          <p className="max-w-4xl">
            Estamos em processo de obtenção de certificações que reforçam nosso compromisso com a transparência e a responsabilidade social.
          </p>

          <div>
            <div className="inline-flex flex-row items-center justify-center bg-red-400/20 backdrop-blur-md text-red-500 px-4 py-1.5 rounded-full text-xs font-medium shadow-md mb-4">
              Em Andamento
            </div>
            <div className='flex gap-6'>
              <div className="bg-white backdrop-blur-md rounded-lg p-6 flex flex-col items-center gap-2 text-left shadow-md flex-1 lg:max-w-60">
                <div className='flex items-center justify-center w-15 h-15 rounded-full bg-emerald-600'>
                  <FaLandmark className="w-5 h-5 fill-white" />
                </div>
                <h2 className="text-neutral-900 text-sm">CMAS</h2>
                <p className="text-xs text-neutral-700 mb-2 text-center">Conselho Municipal de Assistência Social</p>
              </div>
              <div className="bg-white backdrop-blur-md rounded-lg p-6 flex flex-col items-center gap-2 text-left shadow-md flex-1 lg:max-w-60">
                <div className='flex items-center justify-center w-15 h-15 rounded-full bg-orange-500'>
                  <FaHandsHoldingChild className="w-5 h-5 fill-white" />
                </div>
                <h2 className="text-neutral-900 text-sm">COMDICA</h2>
                <p className="text-xs text-neutral-700 mb-2 text-center">Conselho Municipal dos Direitos da Criança e do Adolescente</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

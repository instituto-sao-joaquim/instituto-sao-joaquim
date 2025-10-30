import { FireIcon, HeartIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Badge, CardHero } from '.';
import Button from './common/Button';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Overlay escura */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 py-45 max-w-5xl h-screen text-center text-white px-6">
        <Badge icon={<HeartIcon className="w-5 h-5 stroke-[1.5] stroke-emerald-500" />} gap="gap-2" text="Transformando vidas desde 2025" bgColor='bg-emerald-600/30' borderColor='border-emerald-800' textColor='text-white' />

        <h1 className="text-6xl font-bold mb-8">Instituto São Joaquim</h1>
        <p className="text-xl mb-8">Juntos, construindo uma comunidade justa e saudável.</p>

        <div className="flex justify-center gap-4 mb-8">
          <Button bgColor="bg-emerald-600" textColor="text-white">
            Conheça nossa missão
          </Button>
          <Button bgColor="bg-gray-100" textColor="text-gray-700">
            Seja voluntário
          </Button>
        </div>

        <div className="flex justify-center gap-4">
          <CardHero icon={<UserGroupIcon className="w-9 h-9 stroke-[1.5] stroke-emerald-500" />}
            title="Vidas Impactadas"
            value="100+" />

          {/* Nutrir para Crescer, Documento é Direito, Alimenta+, Viver Verde*/}
          <CardHero icon={<FireIcon className="w-9 h-9 stroke-[1.5] stroke-orange-500" />}
            title="Programas Ativos"
            value="4" />

          <CardHero icon={<HeartIcon className="w-9 h-9 stroke-[1.5] stroke-cyan-500" />}
            title="Voluntários"
            value="200+" />
        </div>
      </div>
    </section>
  );
}

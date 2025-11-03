import { CubeIcon, GlobeAmericasIcon, IdentificationIcon, SquaresPlusIcon } from '@heroicons/react/24/solid';
import { Badge } from '../';
import Card from '../common/Card';

export default function Projects() {
  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center justify-center bg-white"
      id='projects'
    >
      {/* Conteúdo central */}
      <div className="relative z-10 py-15 max-w-5xl text-center px-6">
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
            />

            <Card
              icon={<CubeIcon className="w-12 h-12 fill-orange-500" />}
              title="Alimenta+"
              text="Atua na área de Segurança Alimentar e Nutricional, sendo o pilar no combate à fome e garantindo o acesso contínuo a alimentos de qualidade para as famílias em vulnerabilidade."
              bgColor='bg-orange-500/10'
              borderColor='border-orange-400/30'
            />

            <Card
              icon={<IdentificationIcon className="w-12 h-12 fill-cyan-600" />}
              title="Documento É Direito"
              text="Uma parceria com o Governo do Estado que impacta toda a comunidade através da facilitação da retirada de documentos essenciais."
              bgColor='bg-cyan-500/10'
              borderColor='border-cyan-400/30'
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <Card
              icon={<SquaresPlusIcon className="w-12 h-12 fill-emerald-500" />}
              title="Nutrir para Crescer"
              text="Garantindo suporte nutricional essencial para o desenvolvimento integral de crianças de 1 a 3 anos e 11 meses de idade."
              bgColor='bg-emerald-600/10'
              borderColor='border-emerald-400/30'
            />
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center text-center gap-4 rounded-xl w-full px-6 py-10 text-white"
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

          <a
            href="mailto:institutosaojoaquim.isj@gmail.com"
            className="px-4 py-1.5 rounded-xl hover:bg-gray-100 text-gray-700 transition mt-2 bg-white">
            Fale Conosco
          </a>
        </div>

      </div>
    </section>
  );
}

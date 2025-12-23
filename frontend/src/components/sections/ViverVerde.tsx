"use client";

import Carousel from "@/components/common/Carousel";
import LiDot from "@/components/common/LiDot";
import Badge from '@components/common/SectionBadge';
import Image from "next/image";
import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";
import { FaRegHandshake, FaRegHeart } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { LuLeaf, LuSprout } from "react-icons/lu";
import { PiTreeEvergreenDuotone } from "react-icons/pi";

export default function ViverVerde() {
  return (
    <section
      id="viver-verde"
      className="relative w-full py-15 px-3 bg-white flex flex-col items-center gap-10"
    >
      <div className="max-w-5xl w-full flex flex-col gap-10 mt-15">
        {/* HEADER */}
        <div className="w-full text-center">
          <PiTreeEvergreenDuotone
            strokeWidth={3}
            className="w-12 h-12 sm:w-14 sm:h-14 fill-brand-green stroke-2 mx-auto mb-2 float"
          />

          <h2 className="text-sm sm:text-md text-dark-green">Programa Viver Verde</h2>
          <h3 className="text-lg sm:text-2xl text-brand-green my-2 font-semibold">
            Pequenas atitudes transformam o mundo
          </h3>
          <span className="bg-dark-green w-24 h-[3px] rounded-full block mx-auto mb-6" />

          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-3 px-2 sm:px-0">
            O Programa Viver Verde é uma iniciativa do Instituto São Joaquim que une educação
            ambiental, sustentabilidade e participação comunitária em ações práticas e transformadoras.
            Acreditamos que cuidar do planeta é um compromisso compartilhado — cada pessoa pode fazer parte
            dessa mudança.
          </p>

          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
            Realizamos projetos contínuos que estimulam a consciência ecológica desde a infância até a vida adulta,
            criando vínculos com a natureza e promovendo impacto positivo nas comunidades onde atuamos.
          </p>
        </div>

        {/* EIXOS */}
        <div className="w-full flex flex-col items-center gap-6">
          <h2 className="text-lg sm:text-xl text-dark-green font-bold mb-2">Nossos três eixos de ação</h2>

          {/* BLOCO 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 w-full px-3">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/programs/viver_verde/guardioes.jpeg"
                alt="Pequenos Guardiões da Natureza"
                width={1200}
                height={800}
                className="w-full h-[55vw] sm:h-[45vw] md:h-[40vw] lg:h-80 object-cover rounded-xl shadow-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>

            <div className="lg:w-1/2 text-gray-700 px-1 sm:px-3">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-dark-green w-12 h-12 rounded-2xl flex items-center justify-center">
                  <LuSprout className="w-6 h-6 stroke-white" />
                </span>
                <h3 className="text-brand-green text-lg font-bold">Pequenos Guardiões da Natureza</h3>
              </div>

              <p className="my-2 leading-relaxed">
                Projetos para crianças que despertam o cuidado com o meio ambiente por meio de atividades
                lúdicas, sensoriais e práticas.
              </p>

              <ul className="flex flex-col gap-2 text-sm">
                <LiDot>Oficinas ambientais e atividades artísticas</LiDot>
                <LiDot>Envolvimento das famílias</LiDot>
                <LiDot>Vivências na natureza e cuidado com o jardim coletivo</LiDot>
                <LiDot>Criação do Jardim dos Guardiões</LiDot>
              </ul>
            </div>
          </div>

          {/* BLOCO 2 */}
          {/* ESSE BLOCO AINDA NÃO ESTÁ SENDO DESENVOLVIDO PELA ONG
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 w-full px-3">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/programs/viver_verde/saberes-da-terra.jpg"
                alt="Saberes da Terra"
                width={1200}
                height={800}
                className="w-full h-[55vw] sm:h-[45vw] md:h-[40vw] lg:h-80 object-cover rounded-xl shadow-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>

            <div className="lg:w-1/2 text-gray-700 px-1 sm:px-3">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-dark-blue w-12 h-12 rounded-2xl flex items-center justify-center">
                  <LuLeaf className="w-6 h-6 stroke-white" />
                </span>
                <h3 className="text-brand-blue text-lg font-bold">Saberes da Terra</h3>
              </div>

              <p className="my-2 leading-relaxed">
                Espaço de aprendizado intergeracional onde famílias cultivam, cozinham e trocam saberes ligados à terra.
              </p>

              <ul className="flex flex-col gap-2 text-sm">
                <LiDot color="var(--color-dark-blue)">Implantação de hortas e espaços verdes</LiDot>
                <LiDot color="var(--color-dark-blue)">Compostagem comunitária</LiDot>
                <LiDot color="var(--color-dark-blue)">Oficinas culinárias com ingredientes locais</LiDot>
                <LiDot color="var(--color-dark-blue)">Trocas culturais e rodas de memória</LiDot>
              </ul>
            </div>
          </div>
          */}

          {/* BLOCO 3 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 w-full px-3">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/programs/viver_verde/saboaria.jpeg"
                alt="Saboaria Social"
                width={1200}
                height={800}
                className="w-full h-[55vw] sm:h-[45vw] md:h-[40vw] lg:h-80 object-top object-cover rounded-xl shadow-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>

            <div className="lg:w-1/2 text-gray-700 px-1 sm:px-3">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-dark-orange w-12 h-12 rounded-2xl flex items-center justify-center">
                  <LuSprout className="w-6 h-6 stroke-white" />
                </span>
                <h3 className="text-brand-orange text-lg font-bold">Saboaria Social</h3>
              </div>

              <p className="my-2 leading-relaxed">
                Capacitação para transformar óleo reciclado em produtos artesanais, gerando renda e incentivando a economia circular.
              </p>

              <ul className="flex flex-col gap-2 text-sm">
                <LiDot color="var(--color-dark-orange)">Formação em técnicas de saboaria</LiDot>
                <LiDot color="var(--color-dark-orange)">Ponto de coleta de óleo usado</LiDot>
                <LiDot color="var(--color-dark-orange)">Autonomia financeira para mulheres</LiDot>
                <LiDot color="var(--color-dark-orange)">Economia circular e reaproveitamento</LiDot>
              </ul>
            </div>
          </div>
        </div>

        {/* BLOCO 4 */}
        <div className="flex flex-col items-center pt-5">
          <Badge text="Implantação prevista para 2026" bgColor='bg-brand-red/10' textColor='text-brand-red' />
          <div className="flex flex-col lg:flex-row items-center gap-8 w-full px-3">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/programs/viver_verde/espaco-mais-verde.jpg"
                alt="Saberes da Terra"
                width={1200}
                height={800}
                className="w-full h-[55vw] sm:h-[45vw] md:h-[40vw] lg:h-80 object-cover rounded-xl shadow-md"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>

            <div className="lg:w-1/2 text-gray-700 px-1 sm:px-3">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-dark-blue w-12 h-12 rounded-2xl flex items-center justify-center">
                  <LuLeaf className="w-6 h-6 stroke-white" />
                </span>
                <h3 className="text-brand-blue text-lg font-bold">Espaço Mais Verde</h3>
              </div>

              <p className="my-2 leading-relaxed">
                Transformação de espaços do ISJ em ambientes de aprendizado sustentável, integrando crianças e famílias à educação ambiental, alimentação saudável e responsabilidade ecológica.
              </p>

              <ul className="flex flex-col gap-2 text-sm">
                <LiDot color="var(--color-dark-blue)">Construção e manutenção de uma Horta Vertical como modelo de cultivo urbano.</LiDot>
                <LiDot color="var(--color-dark-blue)">Implantação de Hortas e Espaços Verdes que servem como locais de cultivo, troca de saberes e aprendizagem prática.</LiDot>
                <LiDot color="var(--color-dark-blue)">Desenvolvimento da Compostagem Comunitária, fechando o ciclo de resíduos e educando sobre o reaproveitamento orgânico.</LiDot>
              </ul>
            </div>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="text-center w-full">
          <h2 className="text-lg text-dark-green font-semibold mb-6">Momentos do Projeto</h2>

          <Carousel
            items={[
              { src: "/images/programs/viver_verde/saboaria1.jpeg", title: "Saboaria Social" },
              { src: "/images/programs/viver_verde/saboaria2.jpeg", title: "Saboaria Social" },
              { src: "/images/programs/viver_verde/guardioes.jpeg", title: "Pequenos Guardiões" },
              { src: "/images/programs/viver_verde/guardioes1.jpeg", title: "Pequenos Guardiões" },
              { src: "/images/programs/viver_verde/guardioes2.jpeg", title: "Pequenos Guardiões" },
              { src: "/images/programs/viver_verde/guardioes3.jpeg", title: "Pequenos Guardiões" },
              { src: "/images/programs/viver_verde/grupo-guardioes.jpeg", title: "Pequenos Guardiões" },
            ]}
            itemWidth="300px"
            itemHeight="220px"
            gradientTo="transparent"
          />
        </div>

        {/* CTA */}
        <div
          className="flex flex-col items-center justify-center text-center gap-4 rounded-xl w-full px-3 md:px-6 py-8 text-white"
          style={{
            background: `linear-gradient(110deg, var(--color-dark-green) 0%, var(--color-light-green) 50%, var(--color-dark-green) 100%)`,
          }}
        >
          <BiDonateHeart className="w-8 h-8 sm:w-10 sm:h-10" />
          <h3 className="text-lg">Junte-se a nós</h3>

          <p className="max-w-3xl px-2 sm:px-0">
            Estamos em busca de parcerias para ampliar o impacto do Programa Viver Verde.
            Convidamos empresas, organizações e voluntários a se unirem a nós nesta jornada.
            <strong> Juntos por um futuro melhor.</strong>
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link
              href="/voluntariado/volunteer"
              className="inline-flex items-center gap-2 bg-white text-dark-green rounded-xl py-3 px-4 text-sm font-bold transition-transform duration-200 hover:scale-105"
            >
              <FaRegHandshake className="w-4 h-4" />
              Seja um parceiro
            </Link>

            <Link
              href="/doacoes"
              className="inline-flex items-center gap-2 bg-white text-dark-green rounded-xl py-3 px-4 text-sm font-bold transition-transform duration-200 hover:scale-105"
            >
              <FiGift className="w-4 h-4" />
              Fazer uma doação
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-4 justify-center text-center px-3 md:px-6 py-8 text-gray-700">
          <h3 className="text-dark-green text-lg">Parceiros e Colaboradores</h3>

          <div className="w-full flex items-center justify-center gap-6 flex-wrap ">
            <div className="min-w-[300px] flex items-center justify-center gap-2 border border-gray-100 rounded-xl shadow-md px-6 py-3 transition-transform duration-500 hover:scale-105 will-change-transform">
              <span><FaRegHeart className="fill-dark-green" /></span>
              <p className="text-sm">SEUMA - Secretaria Municipal de Urbanismo e Meio Ambiente | Prefeitura de Fortaleza</p>
            </div>

            <div className="min-w-[300px] flex items-center justify-center gap-2 border border-gray-100 rounded-xl shadow-md px-6 py-3 transition-transform duration-500 hover:scale-105 will-change-transform">
              <span><FaRegHeart className="fill-dark-green" /></span>
              <p className="text-sm">Creche Pequenos Passinhos</p>
            </div>

            <div className="min-w-[300px] flex items-center justify-center gap-2 border border-gray-100 rounded-xl shadow-md px-6 py-3 transition-transform duration-500 hover:scale-105 will-change-transform">
              <span><FaRegHeart className="fill-dark-green" /></span>
              <p className="text-sm">Dona Denise | Espaço de Arte e Cultura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

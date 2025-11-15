import Link from "next/link";
import { FaHeart, FaSeedling } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { SlPresent } from "react-icons/sl";
import CardNatal from "../common/CardNatal";

export default function Natal() {
  return (
    <section className="relative w-full bg-brand-green mt-10 py-20 px-3 flex flex-col items-center justify-center" id="natal">
      {/* Neve caindo */}
      <div className="mt-10 pointer-events-none absolute left-0 top-0 w-full h-[150vh] overflow-hidden">
        {/* 20 flocos (pode ajustar a quantidade) */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            className="snowflake text-white text-4xl"
            style={{
              top: "-3%",
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 24}px`,
              animationDuration: `${Math.random() * 6 + 10}s`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 h-full max-w-5xl flex flex-col items-center">
        <span><SlPresent strokeWidth={3} className="w-12 h-12 fill-white float stroke-2 mb-6" /></span>
        <h2 className="text-xl text-white">Natal Solidário</h2>


        <span className="bg-dark-orange w-20 h-[3px] rounded-4xl mt-4"></span>
        <p className="mt-2 text-white max-w-2xl mx-auto my-6">Neste Natal, você pode mudar o dia — e a vida — de uma criança.</p>

        <div className="bg-white text-gray-700 px-2 md:px-10 py-12 rounded-4xl text-center">
          <div className="md:max-w-4xl flex flex-col items-center gap-4">
            <p className="md:max-w-3xl">O Instituto São Joaquim está realizando o <strong>Natal Solidário</strong>, uma campanha que leva brinquedos, carinho e esperança para os pequenos que mais precisam.</p>
            <p>Todo ano, centenas de famílias passam por momentos difíceis, e muitas crianças acabam ficando sem viver a magia do Natal. Com a sua doação, mesmo que pequena, você ajuda a colocar brilho nos olhos, espalha alegria e mostra que ninguém está sozinho.</p>

            <span className="text-dark-green rounded-full py-2 px-4 bg-light-green/20 font-bold flex flex-col md:flex-row items-center gap-2 transition-transform duration-300 ease-out hover:scale-105 text-sm"><FaHeart /> Simples pra você. Gigante pra quem recebe.</span>
          </div>

          {/* Cards */}
          <div className="flex flex-col items-center justify-center gap-6 mt-16">
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
              <CardNatal
                icon={<SlPresent className="w-12 h-12 fill-white" />}
                title="Brinquedos"
                text="Presentes que levam alegria e diversão."
                borderColor='border-dark-green'
                fromColor='--color-dark-green'
                toColor='--color-brand-green'
              />
              <CardNatal
                icon={<FaRegHeart className="w-12 h-12 fill-white" />}
                title="Carinho"
                text="Amor e atenção para cada criança."
                borderColor='border-dark-orange'
                fromColor='--color-dark-orange'
                toColor='--color-brand-orange'
              />
              <CardNatal
                icon={<FaSeedling className="w-12 h-12 fill-white" />}
                title="Esperança"
                text="Um futuro mais feliz e promissor."
                borderColor='border-dark-blue'
                fromColor='--color-dark-blue'
                toColor='--color-brand-blue'
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
              <div className="border-dark-orange bg-dark-orange rounded-2xl p-6 shadow-md lg:max-w-100 text-white flex flex-col gap-2 transition-transform duration-300 ease-out hover:scale-105" style={{
                background:
                  "linear-gradient(110deg, var(--color-dark-orange) 0%, var(--color-brand-orange) 100%)",
              }}>
                <p className="text-sm">Doe a partir de</p>
                <p className="text-5xl">R$ 10,00</p>
                <p className="text-sm">e transforme sua generosidade em um sorriso inesquecível</p>
              </div>
            </div>

            <Link
              href="/donate"
              className="border-dark-orange bg-dark-orange rounded-xl py-3 text-white text-sm text-center flex items-center justify-center gap-2 w-50 transition-transform duration-300 ease-out hover:scale-105">
              <SlPresent className="w-4 h-4 fill-white" />
              Fazer uma doação
            </Link>
          </div>
        </div>

        <p className="text-white max-w-2xl mt-12 text-center">Sua contribuição vai além do presente — ela representa esperança, amor e a certeza de que cada criança merece viver a magia do Natal. 🎄✨</p>
      </div>
    </section>
  );
}

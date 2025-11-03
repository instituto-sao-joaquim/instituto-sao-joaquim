"use client";

import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = useCallback(
    (id: string) => {
      if (pathname !== "/") {
        // salva o destino e vai para home
        sessionStorage.setItem("scrollTo", id);
        router.push("/");
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollTo");
    if (targetId && pathname === "/") {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 70;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollTo");
      }, 300); // espera um pouco até a página renderizar
    }
  }, [pathname]);

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 md:px-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Coluna 1 - Logo + Nome + Slogan + Redes sociais */}
        <div>
          <div className="flex flex-col gap-3 mb-3">
            <div className="flex gap-3">
              <Image
                src="/logo.jpg"
                alt="Instituto São Joaquim"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h2 className="text-white font-bold text-lg">
                  Instituto São Joaquim
                </h2>
                <p className="text-xs text-gray-400">Transformando vidas</p>
              </div>
            </div>

            <div>
              <p className="text-xs">ONG dedicada à transformação social através da educação, desenvolvimento comunitário e inclusão.</p>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex gap-4 mt-4 w-full">
            <a
              href="https://www.instagram.com/institutosaojoaquimm/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 hover:text-orange-400 transition" />
            </a>

            <a
              href="mailto:institutosaojoaquim.isj@gmail.com"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <EnvelopeIcon className="w-6 h-6 hover:text-orange-400 transition" />
            </a>

            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 hover:text-orange-400 transition" />
            </a>
          </div>
        </div>

        {/* Coluna 2 - Navegação principal */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Navegação</h3>
          <nav className="flex flex-col items-start space-y-2 text-sm">
            {[
              { label: "Início", id: "home" },
              { label: "Sobre", id: "about" },
              { label: "Programas", id: "projects" },
              { label: "Voluntariado", id: "volunteer" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className="cursor-pointer hover:text-white transition"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Coluna 3 - Programas */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Programas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#nutrir" className="hover:text-white transition">
                Nutrir para Crescer
              </Link>
            </li>
            <li>
              <Link href="#documento" className="hover:text-white transition">
                Documento é Direito
              </Link>
            </li>
            <li>
              <Link href="#alimenta" className="hover:text-white transition">
                Alimenta+
              </Link>
            </li>
            <li>
              <Link href="#viver" className="hover:text-white transition">
                Viver Verde
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 4 - Contato */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="w-5 h-5 mt-0.5 text-emerald-400" />
              <span>Rua Pedro Dantas, 335 - Dias Macedo, Fortaleza, CE | CEP: 60860-150</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-emerald-400" />
              <a
                href="mailto:institutosaojoaquim.isj@gmail.com"
                className="hover:text-white transition"
              >
                institutosaojoaquim.isj@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-emerald-400" />
              <a
                href="tel:+5585994118816 "
                className="hover:text-white transition"
              >
                (85) 99411-8816
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-emerald-400" />
              <span>Seg a Sex — 8h às 11h e 13h às 16h</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-sm text-gray-500 gap-2">
        <p>
          © {new Date().getFullYear()} Instituto São Joaquim. Todos os direitos reservados.
        </p>

        <p>CNPJ: 61.696.288/0001-75</p>
      </div>

    </footer>
  );
}

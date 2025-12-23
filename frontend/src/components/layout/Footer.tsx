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
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = useCallback(
    (id: string) => {
      if (pathname !== "/") {
        sessionStorage.setItem("scrollTo", id);
        router.push("/");
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 70;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
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
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
        sessionStorage.removeItem("scrollTo");
      }, 300);
    }
  }, [pathname]);

  const footerItems = [
    { label: "Início", scrollId: "home" },
    { label: "Quem Somos", scrollId: "about" },
    { label: "Programas", scrollId: "projetos" },
    { label: "Campanhas", href: "/campanhas" },
    { label: "Voluntariado", scrollId: "voluntariado" },
  ];

  const footerPrograms = [
    { label: "Viver Verde", href: "/projetos/viver-verde" },
    { label: "Alimenta+", href: "/projetos/alimenta-mais" },
    { label: "Conte Comigo", href: "/conte-comigo" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-12 pb-6 md:px-12 w-full">
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
              <FaInstagram className="w-6 h-6 hover:text-dark-orange transition" />
            </a>

            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 hover:text-dark-orange transition" />
            </a>

            <a
              href="https://www.linkedin.com/company/institutosaojoaquim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 hover:text-dark-orange transition" />
            </a>

            <a
              href="mailto:institutosaojoaquim.isj@gmail.com"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <EnvelopeIcon className="w-6 h-6 hover:text-dark-orange transition" />
            </a>
          </div>
        </div>

        {/* Coluna 2 - Navegação principal */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Navegação</h3>
          <ul className="flex flex-col items-start space-y-2 text-sm">

            {footerItems.map((item) =>
              item.href ? (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label}>
                  <button
                    onClick={() => handleScroll(item.scrollId!)}
                    className="text-left hover:text-white transition cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              )
            )}

          </ul>
        </div>

        {/* Coluna 3 - Programas */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Programas</h3>
          <ul className="space-y-2 text-sm">
            {footerPrograms.map((item) =>
              item.href ? (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label}>
                  <button
                    onClick={() => handleScroll(item.href!)}
                    className="text-left hover:text-white transition cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Coluna 4 - Contato */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="w-5 h-5 mt-0.5 text-light-green" />
              <span>Rua Pedro Dantas, 335 - Dias Macedo, Fortaleza, CE | CEP: 60860-150</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-light-green" />
              <a
                href="mailto:institutosaojoaquim.isj@gmail.com"
                className="hover:text-white transition"
              >
                institutosaojoaquim.isj@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-light-green" />
              <a
                href="tel:+5585994118816 "
                className="hover:text-white transition"
              >
                (85) 99411-8816
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-light-green" />
              <span>Seg a Sex — 8h às 11h e 14h às 17h</span>
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

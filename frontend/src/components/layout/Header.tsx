"use client";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        setMenuOpen(false);
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
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpg"
            alt="Instituto São Joaquim"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-800">
              Instituto São Joaquim
            </span>
            <span className="text-xs text-gray-400">Transformando vidas</span>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex space-x-8">
          {[
            { label: "Início", id: "home" },
            { label: "Sobre", id: "about" },
            { label: "Programas", id: "projects" },
            { label: "Voluntariado", id: "volunteer" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="cursor-pointer relative text-gray-700 hover:text-green-600 after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* BOTÕES À DIREITA (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => handleScroll('contact')}
            className="px-4 py-1.5 border border-gray-700 rounded-xl hover:bg-gray-100 text-gray-700 transition cursor-pointer"
          >
            Contato
          </button>
          <Link
            href="/donate"
            className="px-4 py-1.5 bg-orange-400 text-white hover:bg-orange-500 transition rounded-xl"
          >
            Doe Agora
          </Link>
        </div>


        {/* BOTÃO MOBILE */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-green-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* MENU MOBILE (Overlay) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } lg:hidden`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MENU MOBILE (Painel) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg transition-transform duration-300 transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden z-60`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <span className="font-semibold text-lg text-gray-800">
            Menu
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <XMarkIcon className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 px-6 py-8 text-gray-700">
          {[
            { label: "Início", id: "home" },
            { label: "Sobre", id: "about" },
            { label: "Programas", id: "projects" },
            { label: "Voluntariado", id: "volunters" },
            { label: "Equipe", id: "team" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-lg text-left hover:text-green-600 transition"
            >
              {label}
            </button>
          ))}

          <hr className="border-gray-200" />

          <Link
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 border border-gray-700 rounded-xl hover:bg-gray-100 text-gray-700 transition text-center"
          >
            Contato
          </Link>
          <Link
            href="/doar"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 bg-orange-400 text-white hover:bg-orange-500 transition rounded-xl text-center"
          >
            Doe Agora
          </Link>
        </nav>
      </div>
    </header>
  );
}

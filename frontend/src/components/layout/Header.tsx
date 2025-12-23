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
        sessionStorage.setItem("scrollTo", id);
        router.push("/");
        setMenuOpen(false);
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

  // MENU DESKTOP CONFIG
  const desktopItems = [
    { label: "Início", scrollId: "home" },
    { label: "Quem Somos", scrollId: "about" },
    { label: "Programas", scrollId: "projetos" },
    { label: "Campanhas", href: "/campanhas" },
    { label: "Voluntariado", scrollId: "voluntariado" },
    { label: "Transparência", href: "/transparencia" },
  ];

  // MENU MOBILE CONFIG
  const mobileItems = [
    { label: "Início", scrollId: "home" },
    { label: "Quem Somos", scrollId: "about" },
    { label: "Programas", scrollId: "projetos" },
    { label: "Campanhas", href: "/campanhas" },
    { label: "Voluntariado", scrollId: "voluntariado" },
    { label: "Transparência", href: "/transparencia" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">

        {/* LOGO */}
        <div className="flex items-center justify-around space-x-3">
          <Image
            src="/isj-logo.png"
            alt="Instituto São Joaquim"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex space-x-8">
          {desktopItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="cursor-pointer relative text-gray-700 hover:text-brand-green after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleScroll(item.scrollId!)}
                className="cursor-pointer relative text-gray-700 hover:text-brand-green after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        {/* BOTÕES DESKTOP */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/contact"
            className="px-4 py-1.5 bg-gray-100 hover:bg-gray-300 text-gray-700 transition rounded-xl"
          >
            Contato
          </Link>

          <Link
            href="/donate"
            className="px-4 py-1.5 bg-dark-orange text-white hover:brightness-90 transition rounded-xl"
          >
            Doe Agora
          </Link>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-brand-green"
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

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } lg:hidden`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MENU MOBILE */}
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
          {mobileItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-left hover:text-brand-green transition"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleScroll(item.scrollId!)}
                className="text-lg text-left hover:text-brand-green transition"
              >
                {item.label}
              </button>
            )
          )}

          <hr className="border-gray-200" />

          <Link
            href="/contact"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-300 text-gray-700 transition rounded-xl text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>

          <Link
            href="/donate"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 bg-orange-400 text-white hover:bg-dark-orange transition rounded-xl text-center"
          >
            Doe Agora
          </Link>
        </nav>
      </div>
    </header>
  );
}

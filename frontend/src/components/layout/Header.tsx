"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

export default function Header() {
  const handleScroll = useCallback((id: string) => {
    if (typeof window === 'undefined') return; // evita SSR access
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 20; // altura real do header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);


  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Esquerda: Logo + Nome */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.jpg"
            alt="Instituto São Joaquim"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-800">Instituto São Joaquim</span>
            <span className="text-xs text-gray-400">Transformando vidas</span>
          </div>
        </div>

        {/* Centro: Navegação */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => handleScroll('home')}
            className="relative text-gray-700 hover:text-green-600 after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Início
          </button>
          <button
            onClick={() => handleScroll('about')}
            className="relative text-gray-700 hover:text-green-600 after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Sobre
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="relative text-gray-700 hover:text-green-600 after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Programas
          </button>
          <button
            onClick={() => handleScroll('volunters')}
            className="relative text-gray-700 hover:text-green-600 after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Voluntariado
          </button>
          <button
            onClick={() => handleScroll('time')}
            className="relative text-gray-700 hover:text-green-600 after:block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Equipe
          </button>
        </nav>

        {/* Direita: Botões */}
        <div className="flex items-center space-x-4">
          <Link
            href="#contato"
            className="px-4 py-1.5 border border-gray-700 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            Contato
          </Link>
          <Link
            href="/doar"
            className="px-4 py-1.5 bg-orange-400 text-white hover:bg-orange-500 transition rounded-xl"
          >
            Doe Agora
          </Link>
        </div>
      </div>
    </header>
  );
}

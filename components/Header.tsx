
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-pacifico text-blue-600">Антикризисное управление</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Главная
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              О компании
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Услуги
            </Link>
            <Link href="/advantages" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Преимущества
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Отзывы
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Консультация
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Главная
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                О компании
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Услуги
              </Link>
              <Link href="/advantages" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Преимущества
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Отзывы
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap inline-block text-center">
                Консультация
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

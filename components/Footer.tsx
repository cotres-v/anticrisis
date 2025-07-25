
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-pacifico text-blue-400 mb-4">Антикризисное управление</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Профессиональные услуги по банкротству физических лиц. 
              Более 5 лет опыта, 100% успешных дел.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/+79252032030" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-telegram-line text-lg"></i>
              </a>
              <a href="https://wa.me/79252032030" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
              <a href="tel:+79252032030" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-phone-line text-lg"></i>
              </a>
              <a href="https://vk.com/khoma1603" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-vk-line text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Главная</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">О компании</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Услуги</Link></li>
              <li><Link href="/advantages" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Преимущества</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Отзывы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <a href="tel:+79252032030" className="hover:underline">+7 (925) 203-20-30</a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <a href="tel:+79671957666" className="hover:underline">+7 (967) 195-76-66</a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                <span>Khomenko281@gmail.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>Москва, ул. Селезневская 29с2</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Антикризисное управление. Все права защищены.</p>
          <p> ИП Хоменко. </p>
        </div>
      </div>
    </footer>
  );
}

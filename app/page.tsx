
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20modern%20office%20environment%20with%20confident%20business%20people%20in%20suits%20working%20with%20legal%20documents%20and%20financial%20papers%2C%20bright%20natural%20lighting%20from%20large%20windows%2C%20clean%20minimalist%20interior%20design%20with%20glass%20surfaces%20and%20modern%20furniture%2C%20representing%20trust%20and%20expertise%20in%20legal%20financial%20services%2C%20corporate%20atmosphere%20with%20blue%20and%20white%20color%20scheme&width=1920&height=1080&seq=hero-bankruptcy&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
          <div className="w-full max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Законное списание долгов
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Помогаем физическим лицам законно избавиться от долговых обязательств. 
              Работаем по всей территории Российской Федерации.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap text-center">
                Бесплатная консультация
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap text-center">
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы обеспечиваем полное сопровождение процедуры банкротства с гарантией результата
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Опытные юристы</h3>
              <p className="text-gray-600">
                Наша команда состоит из квалифицированных юристов из ведущих вузов Москвы с многолетним опытом в области банкротства и финансового права.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-time-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Быстрое решение</h3>
              <p className="text-gray-600">
                Средний срок процедуры 8-12 месяцев благодаря опыту и отлаженным процессам.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-wallet-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Доступные цены</h3>
              <p className="text-gray-600">
                Фиксированная стоимость услуг без скрытых платежей и доплат.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по банкротству для физических лиц
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Банкротство физических лиц</h3>
              <p className="text-gray-700 mb-6">
                Избавление от долгов по кредитам, займам, коммунальным платежам и другим обязательствам.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span>Возможно указать стоимость</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span>Срок 8-12 месяцев</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Все услуги и цены
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Завершенных дел</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Успешных исходов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8-12</div>
              <div className="text-blue-100">Месяцев средний срок</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать процедуру банкротства?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Получите бесплатную консультацию и узнайте точную стоимость услуг для вашей ситуации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">
              Получить консультацию
            </Link>
            <a href="tel:+79252032030" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              +7 (925) 203-20-30
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

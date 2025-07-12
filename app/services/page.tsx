
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Полный спектр услуг по банкротству с гарантией качества и фиксированными ценами
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Individual Bankruptcy */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-2xl text-white"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Банкротство физических лиц</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Полное освобождение от долгов по кредитам, займам, коммунальным платежам 
                и другим обязательствам через процедуру банкротства.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Что входит в услугу:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      <span>Консультация и анализ документов</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      <span>Подготовка заявления в суд</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      <span>Представительство в суде</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      <span>Работа с финансовым управляющим</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      <span>Сопровождение до завершения</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Условия:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Срок:</strong> 8-12 месяцев</li>
                  </ul>
                </div>
              </div>
              
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Заказать услугу
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Сопутствующие услуги для полного решения ваших правовых вопросов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Услуга 1</h3>
              <p className="text-gray-700 mb-6">
                Описание услуги будет добавлено позже
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <div>Стоимость: по запросу</div>
                <div>Срок: по запросу</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-scales-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Услуга 2</h3>
              <p className="text-gray-700 mb-6">
                Описание услуги будет добавлено позже
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <div>Стоимость: по запросу</div>
                <div>Срок: по запросу</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Услуга 3</h3>
              <p className="text-gray-700 mb-6">
                Описание услуги будет добавлено позже
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <div>Стоимость: по запросу</div>
                <div>Срок: по запросу</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Нужна помощь в выборе услуги?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Получите бесплатную консультацию и узнайте, какая процедура подходит именно вам
          </p>
          <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">
            Получить консультацию
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}


'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Advantages() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Наши преимущества</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Почему более 500 клиентов выбрали именно нас для решения своих финансовых проблем
          </p>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-shield-check-line text-2xl text-green-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">100% успешных дел</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                За 5 лет работы мы успешно завершили более 500 дел по банкротству.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span>Тщательный анализ каждого дела перед принятием</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span>Работаем только с реальными делами</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20success%20concept%20with%20upward%20trending%20graphs%20and%20charts%2C%20modern%20office%20environment%2C%20successful%20business%20people%20celebrating%20achievement%2C%20bright%20lighting%20representing%20growth%20and%20positive%20results%2C%20financial%20success%20and%20legal%20victory%20theme&width=600&height=400&seq=success-stats&orientation=landscape" 
                alt="Статистика успеха"
                className="rounded-xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20law%20office%20with%20experienced%20lawyers%20working%20efficiently%20with%20legal%20documents%2C%20digital%20technology%20integration%2C%20streamlined%20workflow%20processes%2C%20professional%20consultation%20meeting%2C%20representing%20speed%20and%20efficiency%20in%20legal%20services&width=600&height=400&seq=efficiency&orientation=landscape" 
                alt="Быстрота работы"
                className="rounded-xl shadow-lg object-cover w-full h-80"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-time-line text-2xl text-blue-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Быстрое решение вопросов</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Средний срок процедуры банкротства у нас составляет 8-12 месяцев против 12-18 месяцев у конкурентов благодаря отлаженным процессам и опыту.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-blue-600"></i>
                  </div>
                  <span>Автоматизированная подготовка документов</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-blue-600"></i>
                  </div>
                  <span>Налаженные связи с судами и управляющими</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-blue-600"></i>
                  </div>
                  <span>Проактивная работа по делу</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-wallet-line text-2xl text-orange-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Фиксированные цены</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Вы знаете точную стоимость услуг с самого начала. Никаких скрытых 
                платежей, доплат и неожиданных расходов в процессе работы.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-orange-600"></i>
                  </div>
                  <span>Бесплатная первичная консультация</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-orange-600"></i>
                  </div>
                  <span>Возможность рассрочки платежа</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-orange-600"></i>
                  </div>
                  <span>Все расходы включены в стоимость</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Transparent%20pricing%20concept%20with%20clear%20financial%20documents%2C%20calculator%20and%20money%2C%20honest%20business%20practice%20illustration%2C%20professional%20financial%20consultation%2C%20representing%20fair%20and%20transparent%20pricing%20in%20legal%20services&width=600&height=400&seq=pricing&orientation=landscape" 
                alt="Прозрачные цены"
                className="rounded-xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Сравнение с конкурентами
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Посмотрите, чем мы отличаемся от других компаний на рынке
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-blue-600 text-white font-semibold">
                <div className="p-4">Критерий</div>
                <div className="p-4 text-center">Антикризисное управление</div>
                <div className="p-4 text-center">Конкурент А</div>
                <div className="p-4 text-center">Конкурент Б</div>
              </div>
              
              <div className="grid grid-cols-4 gap-0 border-b border-gray-200">
                <div className="p-4 font-medium">Процент успешных дел</div>
                <div className="p-4 text-center text-green-600 font-bold">100%</div>
                <div className="p-4 text-center">85%</div>
                <div className="p-4 text-center">78%</div>
              </div>
              
              <div className="grid grid-cols-4 gap-0 border-b border-gray-200 bg-gray-50">
                <div className="p-4 font-medium">Средний срок процедуры</div>
                <div className="p-4 text-center text-green-600 font-bold">8-12 мес.</div>
                <div className="p-4 text-center">10-12 мес.</div>
                <div className="p-4 text-center">12-18 мес.</div>
              </div>

              <div className="grid grid-cols-4 gap-0 border-b border-gray-200 bg-gray-50">
                <div className="p-4 font-medium">Опытные юристы</div>
                <div className="p-4 text-center text-green-600 font-bold">Да</div>
                <div className="p-4 text-center">Нет</div>
                <div className="p-4 text-center">Частично</div>
              </div>
              
              <div className="grid grid-cols-4 gap-0 border-b border-gray-200">
                <div className="p-4 font-medium">24/7 поддержка</div>
                <div className="p-4 text-center text-green-600 font-bold">Да</div>
                <div className="p-4 text-center">Рабочие часы</div>
                <div className="p-4 text-center">Рабочие часы</div>
              </div>
              
              <div className="grid grid-cols-4 gap-0">
                <div className="p-4 font-medium">Опыт работы</div>
                <div className="p-4 text-center text-green-600 font-bold">5+ лет</div>
                <div className="p-4 text-center">5 лет</div>
                <div className="p-4 text-center">3 лет</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Дополнительные преимущества
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 поддержка</h3>
              <p className="text-gray-600">
                Наши консультанты доступны круглосуточно для ответов на ваши вопросы
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-file-shield-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Конфиденциальность</h3>
              <p className="text-gray-600">
                Полная конфиденциальность данных и защита персональной информации
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-graduation-cap-line text-3xl text-pink-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Консультация клиентов</h3>
              <p className="text-gray-600">
                Бесплатные консультации по финансовой грамотности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Убедитесь в наших преимуществах лично
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Получите бесплатную консультацию и оцените профессионализм нашей команды
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">
              Бесплатная консультация
            </Link>
            <a href="tel:+74951234567" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

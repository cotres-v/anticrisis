
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      city: 'Москва',
      category: 'individual',
      rating: 5,
      date: '15.11.2024',
      text: 'Огромная благодарность команде Антикризисное управление! Долги по кредитам в размере 1,2 млн рублей висели над нами как дамоклов меч. Процедура прошла быстро и без лишних нервов. Юристы всё объяснили доступно, документы подготовили качественно. Рекомендую всем, кто оказался в похожей ситуации!',
      debt: '1 200 000 ₽',
      duration: '7 месяцев'
    },
    {
      id: 2,
      name: 'Дмитрий Козлов',
      city: 'Санкт-Петербург',
      category: 'individual',
      rating: 5,
      date: '08.11.2024',
      text: 'После развода остались кредиты жены, которые пришлось платить мне. Сумма была неподъемная - 850 тысяч. Обратился в Антикризисное управление по совету знакомого. Процедура заняла 6 месяцев, теперь я свободен от долгов. Цена услуги полностью оправдана результатом.',
      debt: '850 000 ₽',
      duration: '6 месяцев'
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      city: 'Нижний Новгород',
      category: 'business',
      rating: 5,
      date: '02.11.2024',
      text: 'Пришлось закрывать ИП из-за пандемии, долги составили более 2 млн рублей. В Антикризисное управление отнеслись с пониманием к моей ситуации, провели процедуру профессионально. Особенно хочу отметить работу Андрея Петрова - настоящий профессионал своего дела!',
      debt: '2 100 000 ₽',
      duration: '8 месяцев'
    },
    {
      id: 4,
      name: 'Сергей Волков',
      city: 'Екатеринбург',
      category: 'individual',
      rating: 5,
      date: '28.10.2024',
      text: 'Банкротство физического лица - сложная процедура, но с командой Антикризисное управление всё прошло гладко. Долги по кредитным картам в сумме 670 тысяч были списаны полностью. Юристы держали меня в курсе всех этапов, отвечали на вопросы в любое время.',
      debt: '670 000 ₽',
      duration: '6 месяцев'
    },
    {
      id: 5,
      name: 'Мария Федорова',
      city: 'Казань',
      category: 'individual',
      rating: 5,
      date: '22.10.2024',
      text: 'Потеряла работу, не смогла платить по кредитам. Долг вырос до 950 тысяч с учетом штрафов и пеней. В Антикризисное управление мне помогли быстро и качественно. Процедура заняла всего 7 месяцев, сейчас могу спокойно планировать будущее без долгового бремени.',
      debt: '950 000 ₽',
      duration: '7 месяцев'
    },
    {
      id: 6,
      name: 'Алексей Морозов',
      city: 'Ростов-на-Дону',
      category: 'business',
      rating: 5,
      date: '18.10.2024',
      text: 'Банкротство ООО - непростая задача, но команда справилась на отлично. Долги перед поставщиками составляли 5 млн рублей. Процедура длилась 10 месяцев, но результат того стоил. Особенно благодарен за помощь в защите от субсидиарной ответственности.',
      debt: '5 000 000 ₽',
      duration: '10 месяцев'
    },
    {
      id: 7,
      name: 'Ольга Новикова',
      city: 'Воронеж',
      category: 'individual',
      rating: 5,
      date: '12.10.2024',
      text: 'Обратилась в Антикризисное управление после того, как микрозаймы выросли до неподъемной суммы - 750 тысяч рублей. Консультация была бесплатной, объяснили все нюансы. Процедура прошла без сюрпризов, долги списали полностью. Очень довольна работой юристов!',
      debt: '750 000 ₽',
      duration: '6 месяцев'
    },
    {
      id: 8,
      name: 'Владимир Кузнецов',
      city: 'Самара',
      category: 'individual',
      rating: 5,
      date: '05.10.2024',
      text: 'После болезни накопились долги по кредитам и коммунальным платежам. Общая сумма составила 1,1 млн рублей. В Антикризисное управление отнеслись с пониманием, помогли собрать все документы. Процедура заняла 8 месяцев, но теперь я могу жить спокойно.',
      debt: '1 100 000 ₽',
      duration: '8 месяцев'
    }
  ];

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Отзывы наших клиентов</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Более 500 довольных клиентов, которые смогли решить свои финансовые проблемы
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">5.0</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Рекомендуют нас</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
              <div className="text-gray-600">Месяцев средний срок</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Все отзывы
              </button>
              <button 
                onClick={() => setActiveFilter('individual')}
                className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'individual' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Физические лица
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                    <p className="text-gray-600">{review.city}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <div key={i} className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-star-fill text-yellow-400"></i>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {review.text}
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Сумма долга:</span>
                      <div className="font-semibold text-red-600">{review.debt}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Срок процедуры:</span>
                      <div className="font-semibold text-green-600">{review.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы на внешних платформах
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Нас рекомендуют на всех популярных площадках
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Яндекс.Карты</h3>
              <div className="text-3xl font-bold text-yellow-500 mb-2">5.0</div>
              <p className="text-gray-600">45 отзывов</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Отзовик</h3>
              <div className="text-3xl font-bold text-yellow-500 mb-2">5.0</div>
              <p className="text-gray-600">1 отзыв</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2ГИС</h3>
              <div className="text-3xl font-bold text-yellow-500 mb-2">5.0</div>
              <p className="text-gray-600">5 отзывов</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Станьте следующим довольным клиентом
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Присоединитесь к тысячам людей, которые уже решили свои финансовые проблемы с нашей помощью
          </p>
          <Link href="/contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">
            Получить бесплатную консультацию
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

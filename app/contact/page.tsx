'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, FormEvent, ChangeEvent } from 'react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  debt: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    debt: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          debt: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Получите бесплатную консультацию</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ответим на все вопросы и поможем выбрать оптимальное решение для вашей ситуации
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Заполните форму для консультации
              </h2>

              <form id="consultation-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Тип услуги
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="individual">Банкротство физического лица</option>
                      <option value="business">Банкротство юридического лица</option>
                      <option value="ip">Банкротство ИП</option>
                      <option value="restructuring">Реструктуризация долгов</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="debt" className="block text-sm font-medium text-gray-700 mb-2">
                      Примерная сумма долга
                    </label>
                    <select
                      id="debt"
                      name="debt"
                      value={formData.debt}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">Выберите сумму</option>
                      <option value="300-500">300-500 тыс. руб.</option>
                      <option value="500-1000">500 тыс. - 1 млн руб.</option>
                      <option value="1000-3000">1-3 млн руб.</option>
                      <option value="3000-5000">3-5 млн руб.</option>
                      <option value="5000+">Более 5 млн руб.</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Опишите вашу ситуацию
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Расскажите подробнее о своей ситуации (до 500 символов)"
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 символов
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.phone}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? 'Отправляем...' : 'Получить консультацию'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-green-800">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line"></i>
                      </div>
                      <span>Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-red-800">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-error-warning-line"></i>
                      </div>
                      <span>Произошла ошибка. Попробуйте еще раз или позвоните нам напрямую.</span>
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-500">
                  * Обязательные поля. Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Контактная информация
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Телефон
                    </h3>
                    <p className="text-gray-700">
                      <a href="tel:+79252032030" className="hover:text-blue-600 cursor-pointer">
                        +7 (925) 203-20-30
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Работаем 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      <a href="mailto:Khomenko281@gmail.ru" className="hover:text-blue-600 cursor-pointer">
                        Khomenko281@gmail.ru
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Адрес офиса
                    </h3>
                    <p className="text-gray-700">Москва, улица Сущёвский Вал, 5с3</p>
                    <p className="text-sm text-gray-500">Пн-Пт: 9:00-20:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-message-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Мессенджеры
                    </h3>
                    <div className="flex space-x-3">
                      <a href="https://t.me/+79252032030" className="text-blue-500 hover:text-blue-600 cursor-pointer">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-telegram-line text-xl"></i>
                        </div>
                      </a>
                      <a href="https://wa.me/79252032030" className="text-green-500 hover:text-green-600 cursor-pointer">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-whatsapp-line text-xl"></i>
                        </div>
                      </a>
                      <a href="https://vk.com/khoma1603" className="text-[#07F] hover:text-[#0057D9] cursor-pointer">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-vk-line text-xl"></i>
                        </div>
                      </a>
                    </div>
                    <p className="text-sm text-gray-500">Быстрый ответ в любое время</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Как нас найти
                </h3>
                <div className="bg-gray-200 rounded-xl overflow-hidden h-64">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac15ee80a2528cb3ea5b2dcfb3086d2e934028c75807486f5dcd675968b027a1e&amp;source=constructor"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Сколько стоит процедура банкротства?
              </h3>
              <p className="text-gray-700">
                Стоимость банкротства физического лица зависит от сложности дела.
                Точную цену Вы сможете узнать на консультации.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Сколько времени займет процедура?
              </h3>
              <p className="text-gray-700">
                В среднем процедура банкротства физического лица занимает 8-12 месяцев.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Какие документы нужны для банкротства?
              </h3>
              <p className="text-gray-700">
                Полный список документов мы предоставим на консультации. В основном это справки о доходах, 
                документы по кредитам и займам, выписки со счетов.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Можно ли сохранить квартиру при банкротстве?
              </h3>
              <p className="text-gray-700">
                Да, единственное жилье, не обремененное ипотекой, сохраняется при банкротстве. 
                Также есть способы защитить и другое имущество.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

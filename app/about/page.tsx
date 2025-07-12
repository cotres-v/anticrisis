
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20law%20firm%20office%20interior%20with%20experienced%20lawyers%20in%20business%20suits%20having%20a%20meeting%20around%20a%20conference%20table%2C%20legal%20books%20and%20documents%20visible%2C%20natural%20lighting%20through%20large%20windows%2C%20sophisticated%20corporate%20environment%20representing%20trust%20and%20expertise%20in%20legal%20services&width=1920&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">О компании Антикризисное управление</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Более 5 лет помогаем людям и компаниям решать финансовые проблемы 
            через процедуру банкротства
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Наша история
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Компания Антикризисное управление была основана в 2020 году группой опытных юристов, 
                специализирующихся на финансовом праве и процедурах несостоятельности.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                За годы работы мы помогли более чем 500 клиентам избавиться от долгового бремени и начать новую финансовую жизнь. 
                Наш опыт охватывает все виды банкротства - от простых потребительских дел до сложных дел с ипотечным жильем.
              </p>
              <p className="text-lg text-gray-700">
                Мы гордимся тем, что 100% наших дел завершаются успешно, а клиенты рекомендуют нас своим знакомым.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20of%20lawyers%20and%20legal%20experts%20in%20modern%20office%20environment%2C%20confident%20professionals%20in%20business%20attire%2C%20teamwork%20and%20collaboration%20in%20legal%20services%2C%20warm%20lighting%20and%20professional%20atmosphere%20representing%20expertise%20and%20trust&width=600&height=500&seq=team-photo&orientation=portrait" 
                alt="Команда Антикризисное управление"
                className="rounded-xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша миссия и ценности
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Миссия</h3>
              <p className="text-gray-700">
                Помочь людям освободиться от долгового бремени и получить возможность финансового возрождения через законные процедуры банкротства.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Честность</h3>
              <p className="text-gray-700">
                Мы всегда говорим правду о перспективах дела, не даем ложных обещаний 
                и работаем только в рамках закона.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Профессионализм</h3>
              <p className="text-gray-700">
                Наша команда постоянно повышает квалификацию и следит за изменениями 
                в законодательстве о банкротстве.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Опытные юристы и специалисты по банкротству с безупречной репутацией
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20middle-aged%20male%20lawyer%20in%20dark%20business%20suit%2C%20confident%20expression%2C%20modern%20office%20background%2C%20executive%20portrait%20photography%20style%2C%20representing%20expertise%20and%20authority%20in%20legal%20services&width=300&height=400&seq=lawyer-1&orientation=portrait" 
                alt="Андрей Петров"
                className="w-48 h-64 object-cover object-top rounded-xl mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Андрей Петров</h3>
              <p className="text-blue-600 mb-4">Управляющий партнер</p>
              <p className="text-gray-600">
                15 лет опыта в арбитражном праве, более 500 успешных дел по банкротству
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20female%20lawyer%20in%20navy%20blue%20business%20suit%2C%20confident%20smile%2C%20modern%20law%20office%20background%2C%20executive%20portrait%20photography%20style%2C%20representing%20expertise%20and%20professionalism%20in%20legal%20services&width=300&height=400&seq=lawyer-2&orientation=portrait" 
                alt="Елена Смирнова"
                className="w-48 h-64 object-cover object-top rounded-xl mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Елена Смирнова</h3>
              <p className="text-blue-600 mb-4">Ведущий юрист</p>
              <p className="text-gray-600">
                12 лет специализации на банкротстве физических лиц, 95% выигранных дел
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20young%20male%20lawyer%20in%20charcoal%20gray%20business%20suit%2C%20approachable%20expression%2C%20modern%20corporate%20office%20background%2C%20executive%20portrait%20photography%20style%2C%20representing%20competence%20and%20reliability%20in%20legal%20services&width=300&height=400&seq=lawyer-3&orientation=portrait" 
                alt="Дмитрий Козлов"
                className="w-48 h-64 object-cover object-top rounded-xl mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Дмитрий Козлов</h3>
              <p className="text-blue-600 mb-4">Юрист-консультант</p>
              <p className="text-gray-600">
                8 лет опыта, специалист по корпоративному банкротству и реструктуризации
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

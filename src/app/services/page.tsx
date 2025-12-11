// app/page.tsx
import React from 'react';
import { CheckCircle, Code, TrendingUp, Briefcase, Shield, Zap, Users, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      {/* Hero sekcija */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stručne Usluge za Vaš Digitalni Uspjeh
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pružamo usluge izrade web stranica, digitalnog marketinga i poslovnog savjetovanja kako bismo vam pomogli da ostvarite svoje poslovne ciljeve.
            </p>
          </div>
          
          {/* Brojke */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Zadovoljnih klijenata</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">300+</div>
              <div className="text-gray-600">Projekata</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Godina iskustva</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Podrška</div>
            </div>
          </div>
          
          {/* Usluge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Naše Usluge</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Code className="w-10 h-10" />}
                title="Izrada Web Stranica"
                description="Moderni, responzivni i optimizirani websajtovi koji pretvaraju posjetioce u kupce."
                features={[
                  "Next.js/React aplikacije",
                  "Responsive dizajn",
                  "SEO optimizacija",
                  "Brzo učitavanje",
                  "Integracije s CMS-om"
                ]}
                color="blue"
              />
              
              <ServiceCard 
                icon={<TrendingUp className="w-10 h-10" />}
                title="Digitalni Marketing"
                description="Povećajte svoju online prisutnost i ostvarite veći povrat na investiciju."
                features={[
                  "SEO optimizacija",
                  "Google Ads kampanje",
                  "Društveni mediji",
                  "Email marketing",
                  "Analitika i izvještaji"
                ]}
                color="green"
              />
              
              <ServiceCard 
                icon={<Briefcase className="w-10 h-10" />}
                title="Poslovno Savjetovanje"
                description="Strateški savjeti za rast i digitalnu transformaciju vašeg poslovanja."
                features={[
                  "Digitalna strategija",
                  "Analiza tržišta",
                  "Planiranje rasta",
                  "Optimizacija procesa",
                  "Tehnološke preporuke"
                ]}
                color="purple"
              />
            </div>
          </div>
          
          {/* Cijene */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cjenovni Paketi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard 
                title="Osnovni"
                price="1.499€"
                description="Idealno za početnike i male tvrtke"
                features={[
                  "Responsive web stranica",
                  "Osnovni SEO",
                  "5 stranica",
                  "Kontakt forma",
                  "1 mjesec podrške"
                ]}
                recommended={false}
                color="gray"
              />
              
              <PricingCard 
                title="Profesionalni"
                price="2.999€"
                description="Najpopularniji izbor za rastuće tvrtke"
                features={[
                  "Napredna web aplikacija",
                  "Full SEO optimizacija",
                  "Do 15 stranica",
                  "CMS integracija",
                  "Digitalni marketing osnove",
                  "3 mjeseca podrške",
                  "Analitika i izvještaji"
                ]}
                recommended={true}
                color="blue"
              />
              
              <PricingCard 
                title="Enterprise"
                price="Po dogovoru"
                description="Kompletno rješenje za velike tvrtke"
                features={[
                  "Custom web aplikacija",
                  "Full-stack razvoj",
                  "Integracije s ERP/CRM",
                  "Kompletan digitalni marketing",
                  "Poslovno savjetovanje",
                  "12 mjeseci podrške",
                  "Dedicated account manager"
                ]}
                recommended={false}
                color="purple"
              />
            </div>
          </div>
          
          {/* Dodatne usluge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Dodatne Usluge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AdditionalServiceCard 
                icon={<Shield className="w-8 h-8" />}
                title="Web Security"
                description="Zaštita od napada i sigurnosni auditi"
              />
              <AdditionalServiceCard 
                icon={<Zap className="w-8 h-8" />}
                title="Performance Optimization"
                description="Ubrzavanje postojеćih stranica i aplikacija"
              />
              <AdditionalServiceCard 
                icon={<Users className="w-8 h-8" />}
                title="Social Media Management"
                description="Upravljanje društvenim mrežama i content plan"
              />
              <AdditionalServiceCard 
                icon={<Globe className="w-8 h-8" />}
                title="Multilingual Websites"
                description="Višejezični websajtovi za globalno tržište"
              />
            </div>
          </div>
          
          {/* CTA sekcija */}
          <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Spremni za Digitalnu Transformaciju?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas danas za besplatnu konsultaciju i ponudu prilagođenu vašim potrebama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1">
                Zakažite sastanak
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300">
                Pozovite nas: +385 1 234 567
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Komponenta za prikaz usluge
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: 'blue' | 'green' | 'purple';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <div className={`p-6 ${colorClasses[color]}`}>
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-6">{description}</p>
      </div>
      <div className="p-6">
        <h4 className="font-bold text-gray-800 mb-4">Uključeno:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Komponenta za prikaz cijena
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
  color: 'gray' | 'blue' | 'purple';
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, recommended, color }) => {
  const colorClasses = {
    gray: 'border-gray-300',
    blue: 'border-blue-500',
    purple: 'border-purple-500'
  };

  const buttonClasses = {
    gray: 'bg-gray-600 hover:bg-gray-700',
    blue: 'bg-blue-600 hover:bg-blue-700',
    purple: 'bg-purple-600 hover:bg-purple-700'
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg border-2 ${colorClasses[color]} overflow-hidden ${recommended ? 'relative scale-105 z-10' : ''}`}>
      {recommended && (
        <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 font-bold">
          Najpopularnije
        </div>
      )}
      <div className="p-8 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {price !== "Po dogovoru" && <span className="text-gray-600"> / jednokratno</span>}
        </div>
        <p className="text-gray-600 mb-8">{description}</p>
        
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${buttonClasses[color]}`}>
          Odaberite paket
        </button>
      </div>
    </div>
  );
};

// Komponenta za dodatne usluge
interface AdditionalServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdditionalServiceCard: React.FC<AdditionalServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
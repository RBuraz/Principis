import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white font-sans">
      {/* Navigacija */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">
              <span className="text-amber-600">Principis</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#pocetna" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Početna</a>
              <a href="#usluge" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Usluge</a>
              <a href="#onama" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">O nama</a>
              <a href="#kontakt" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Kontakt</a>
            </div>
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero sekcija */}
      <section id="pocetna" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 to-amber-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-amber-600">Principis</span> - Vaš partner za poslovni uspjeh
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pružamo stručne usluge savjetovanja, projektnog upravljanja i poslovnog konsaltinga temeljene na iskustvu i inovacijama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#usluge" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center">
                Naše usluge
              </a>
              <a href="#kontakt" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center">
                Kontaktirajte nas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge sekcija */}
      <section id="usluge" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Naše Usluge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Poslovno savjetovanje', desc: 'Strategijski savjeti za rast i razvoj vašeg poslovanja', icon: '💼' },
              { title: 'Projektno upravljanje', desc: 'Kompletna koordinacija projekata od ideje do realizacije', icon: '📊' },
              { title: 'Financijski konsalting', desc: 'Optimizacija finansijskih procesa i analiza rizika', icon: '💰' },
              { title: 'Digitalna transformacija', desc: 'Modernizacija poslovnih procesa kroz tehnologiju', icon: '🚀' },
              { title: 'Obrazovanje i obuke', desc: 'Specializirane radionice za razvoj vaših timova', icon: '🎓' },
              { title: 'Operativna podrška', desc: 'Kontinuirana podrška u svakodnevnom poslovanju', icon: '🔧' },
            ].map((usluga, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{usluga.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{usluga.title}</h3>
                <p className="text-gray-600">{usluga.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O nama sekcija */}
      <section id="onama" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Zašto <span className="text-amber-600">Principis</span>?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Principis je obrt osnovan na temeljima stručnosti, pouzdanosti i inovativnosti. Naš cilj je biti pouzdan partner u ostvarivanju vaših poslovnih ciljeva.
              </p>
              <ul className="space-y-3">
                {[
                  'Više od 10 godina iskustva',
                  'Personalizirani pristup svakom klijentu',
                  'Transparentnost u svakom koraku',
                  'Tim iskusnih stručnjaka',
                  'Fleksibilnost i prilagodljivost'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="text-amber-600 mr-3">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-linear-to-br from-blue-900 to-amber-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Naše vrijednosti</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg">Profesionalizam</h4>
                  <p className="text-blue-100">Vrhunski standardi u svakom aspektu našeg rada</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Pouzdanost</h4>
                  <p className="text-blue-100">Održavamo obećanja i rokove</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Inovativnost</h4>
                  <p className="text-blue-100">Kontinuirano učenje i primjena najboljih praksi</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Partnerstvo</h4>
                  <p className="text-blue-100">Vaš uspjeh je naš uspjeh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt sekcija */}
      <section id="kontakt" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kontaktirajte nas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Pošaljite upit</h3>
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Ime i prezime *" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-500 focus:outline-none text-white placeholder-white/70" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="email" placeholder="Email *" required className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-500 focus:outline-none text-white placeholder-white/70" />
                  <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-500 focus:outline-none text-white placeholder-white/70" />
                </div>
                <div>
                  <textarea placeholder="Poruka *" required rows={5} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-500 focus:outline-none text-white placeholder-white/70"></textarea>
                </div>
                <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors w-full">
                  Pošalji poruku
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontakt informacije</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-amber-600 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Telefon</h4>
                    <p className="text-blue-200">+385 91 234 567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email</h4>
                    <p className="text-blue-200">info@principis.hr</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Lokacija</h4>
                    <p className="text-blue-200">Sarajevo, Bosna i Hercegovina</p>
                    <p className="text-blue-200">Radno vrijeme: 08:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">
                <span className="text-amber-600">Principis</span>
              </div>
              <p className="text-gray-400 mt-2">Vaš partner za poslovni uspjeh</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© {new Date().getFullYear()} Principis obrt. Sva prava pridržana.</p>
              <p className="text-gray-500 text-sm mt-2">OIB: 12345678901</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
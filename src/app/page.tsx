import Emailform from "@/components/contact/email-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white font-sans">
      {/* Hero sekcija */}
      <section id="pocetna" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 to-amber-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-amber-600">Principis</span> - Vaš partner za
              poslovni uspjeh
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pružamo stručne usluge savjetovanja, projektnog upravljanja i
              poslovnog konsaltinga temeljene na iskustvu i inovacijama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#usluge"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
              >
                Naše usluge
              </a>
              <a
                href="#kontakt"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
              >
                Kontaktirajte nas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge sekcija */}
      <section id="usluge" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Naše Usluge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Poslovno savjetovanje",
                desc: "Strategijski savjeti za rast i razvoj vašeg poslovanja",
                icon: "💼",
              },
              {
                title: "Projektno upravljanje",
                desc: "Kompletna koordinacija projekata od ideje do realizacije",
                icon: "📊",
              },
              {
                title: "Financijski konsalting",
                desc: "Optimizacija finansijskih procesa i analiza rizika",
                icon: "💰",
              },
              {
                title: "Digitalna transformacija",
                desc: "Modernizacija poslovnih procesa kroz tehnologiju",
                icon: "🚀",
              },
              {
                title: "Obrazovanje i obuke",
                desc: "Specializirane radionice za razvoj vaših timova",
                icon: "🎓",
              },
              {
                title: "Operativna podrška",
                desc: "Kontinuirana podrška u svakodnevnom poslovanju",
                icon: "🔧",
              },
            ].map((usluga, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{usluga.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {usluga.title}
                </h3>
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
                Principis je obrt osnovan na temeljima stručnosti, pouzdanosti i
                inovativnosti. Naš cilj je biti pouzdan partner u ostvarivanju
                vaših poslovnih ciljeva.
              </p>
              <ul className="space-y-3">
                {[
                  "Više od 10 godina iskustva",
                  "Personalizirani pristup svakom klijentu",
                  "Transparentnost u svakom koraku",
                  "Tim iskusnih stručnjaka",
                  "Fleksibilnost i prilagodljivost",
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
                  <p className="text-blue-100">
                    Vrhunski standardi u svakom aspektu našeg rada
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Pouzdanost</h4>
                  <p className="text-blue-100">Održavamo obećanja i rokove</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Inovativnost</h4>
                  <p className="text-blue-100">
                    Kontinuirano učenje i primjena najboljih praksi
                  </p>
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

      <Emailform />
    </div>
  );
}

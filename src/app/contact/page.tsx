import Link from "next/link";
import Emailform from "@/components/contact/email-form";

export default function ComponentName() {
  return (
    <>
      <section id="kontakt" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Kontakt informacije
            </h3>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Kontaktirajte nas putem bilo koje od dostupnih opcija. Odgovorit
              ćemo vam u najkraćem mogućem roku.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column - Contact cards */}
              <div className="space-y-6">
                {/* WhatsApp kontakt - dodan na početak */}
                <Link
                  href="https://wa.me/385955690132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex flex-col md:flex-row items-center bg-blue-800/50 hover:bg-blue-800/70 p-6 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="bg-green-600 p-4 rounded-lg mb-4 md:mb-0 md:mr-6">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                        WhatsApp
                      </h4>
                      <p className="text-blue-200 group-hover:text-white">
                        095 569 0132
                      </p>
                      <span className="inline-block mt-2 text-sm text-green-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        Kliknite za razgovor na WhatsApp →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Telefon */}
                <Link href="tel:+38591234567" className="block group">
                  <div className="flex flex-col md:flex-row items-center bg-blue-800/50 hover:bg-blue-800/70 p-6 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="bg-amber-600 p-4 rounded-lg mb-4 md:mb-0 md:mr-6">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                        Telefon
                      </h4>
                      <p className="text-blue-200 group-hover:text-white">
                        +385 91 234 567
                      </p>
                      <span className="inline-block mt-2 text-sm text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        Kliknite za poziv →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Email */}
                <Link href="mailto:info@principis.hr" className="block group">
                  <div className="flex flex-col md:flex-row items-center bg-blue-800/50 hover:bg-blue-800/70 p-6 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="bg-amber-600 p-4 rounded-lg mb-4 md:mb-0 md:mr-6">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                        Email
                      </h4>
                      <p className="text-blue-200 group-hover:text-white">
                        info@principis.hr
                      </p>
                      <span className="inline-block mt-2 text-sm text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        Kliknite za slanje emaila →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Lokacija */}
                <div className="flex flex-col md:flex-row items-center bg-blue-800/50 p-6 rounded-xl">
                  <div className="bg-amber-600 p-4 rounded-lg mb-4 md:mb-0 md:mr-6">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold mb-2">Lokacija</h4>
                    <p className="text-blue-200">Solin, Hrvatska</p>
                  </div>
                </div>
              </div>

              {/* Right column - Radno vrijeme */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                  <svg
                    className="w-16 h-16 mx-auto mb-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="text-2xl md:text-3xl font-bold mb-2">
                    Radno vrijeme
                  </h4>
                  <p className="text-blue-200">Kada smo dostupni za vas</p>
                </div>

                <div className="w-full space-y-4">
                  {/* Ponedjeljak - Petak */}
                  <div className="flex items-center justify-between bg-blue-800/30 p-4 rounded-lg hover:bg-blue-800/40 transition-colors">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                        <span className="font-bold">P-P</span>
                      </div>
                      <div>
                        <p className="font-medium">Ponedjeljak - Petak</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-amber-400">
                        08:00 - 20:00
                      </p>
                      <p className="text-sm text-blue-300">Dostupni 12 sati</p>
                    </div>
                  </div>

                  {/* Subota */}
                  <div className="flex items-center justify-between bg-blue-800/30 p-4 rounded-lg hover:bg-blue-800/40 transition-colors">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mr-4 border border-red-600/30">
                        <span className="font-bold text-red-300">Sub</span>
                      </div>
                      <div>
                        <p className="font-medium">Subota</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-red-400">
                        Ne radimo
                      </p>
                      <p className="text-sm text-blue-300">Zatvoreno</p>
                    </div>
                  </div>

                  {/* Nedjelja */}
                  <div className="flex items-center justify-between bg-blue-800/30 p-4 rounded-lg hover:bg-blue-800/40 transition-colors">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mr-4 border border-red-600/30">
                        <span className="font-bold text-red-300">Ned</span>
                      </div>
                      <div>
                        <p className="font-medium">Nedjelja</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-red-400">
                        Ne radimo
                      </p>
                      <p className="text-sm text-blue-300">Zatvoreno</p>
                    </div>
                  </div>
                </div>

                {/* Info box */}
                <div className="mt-8 p-4 bg-blue-800/40 rounded-lg border border-blue-700/50 text-center">
                  <p className="text-sm text-blue-200">
                    <span className="font-bold text-amber-400">Napomena:</span>{" "}
                    WhatsApp poruke možete slati bilo kada, odgovaramo čim
                    budemo dostupni.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-12 pt-8 border-t border-blue-700 text-center">
              <p className="text-blue-200">
                Odgovor na WhatsApp poruku obično stiže unutar nekoliko minuta.
                Radnim danima odgovaramo na pozive i emailove u roku od 24 sata.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

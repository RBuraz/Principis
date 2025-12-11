import Emailform from "@/components/contact/email-form";

export default function ComponentName() {
  return (
    <>
      <section id="kontakt" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div>
            <h3 className="text-2xl font-bold mb-6">Kontakt informacije</h3>
            <div className="space-y-8">
              {/* WhatsApp kontakt - dodan na početak */}
              <div className="flex items-start">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6"
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
                <div>
                  <h4 className="text-xl font-bold mb-2">WhatsApp</h4>
                  <p className="text-blue-200">095 569 0132</p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start">
                <div className="bg-amber-600 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6"
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
                <div>
                  <h4 className="text-xl font-bold mb-2">Telefon</h4>
                  <p className="text-blue-200">+385 91 234 567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-amber-600 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6"
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
                <div>
                  <h4 className="text-xl font-bold mb-2">Email</h4>
                  <p className="text-blue-200">info@principis.hr</p>
                </div>
              </div>

              {/* Lokacija */}
              <div className="flex items-start">
                <div className="bg-amber-600 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6"
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
                <div>
                  <h4 className="text-xl font-bold mb-2">Lokacija</h4>
                  <p className="text-blue-200">Sarajevo, Bosna i Hercegovina</p>
                  <p className="text-blue-200">Radno vrijeme: 08:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Emailform />
    </>
  );
}

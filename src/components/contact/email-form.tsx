"use client";

import { useState, useEffect } from "react";

export default function Emailform() {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    /* Logic goes here */
  }, []);

  return (
    <>
      {/* Kontakt sekcija */}
      <section id="kontakt" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Kontaktirajte nas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Pošaljite upit</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ime i prezime *"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-500 focus:outline-none text-white placeholder-white/70"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-500 focus:outline-none text-white placeholder-white/70"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-500 focus:outline-none text-white placeholder-white/70"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Poruka *"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-amber-500 focus:outline-none text-white placeholder-white/70"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors w-full"
                >
                  Pošalji poruku
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

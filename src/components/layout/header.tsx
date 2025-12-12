"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">
              <Link href="/" className="text-amber-600">
                Principis
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-amber-600 font-medium transition-colors"
              >
                Početna
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:text-amber-600 font-medium transition-colors"
              >
                Usluge
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-900 hover:text-amber-600 font-medium transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/about-us"
                className="text-gray-900 hover:text-amber-600 font-medium transition-colors"
              >
                O nama
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-amber-600 font-medium transition-colors"
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900 p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-bold text-amber-600">
                  Principis
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-900"
                  aria-label="Zatvori izbornik"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <Link
                  href="/"
                  className="block py-2 text-gray-900 hover:text-amber-600 font-bold transition-colors border-b border-gray-400"
                  onClick={closeMenu}
                >
                  Početna
                </Link>
                <Link
                  href="/services"
                  className="block py-2 text-gray-900 hover:text-amber-600 font-bold transition-colors border-b border-gray-400"
                  onClick={closeMenu}
                >
                  Usluge
                </Link>
                <Link
                  href="/about-us"
                  className="block py-2 text-gray-900 hover:text-amber-600 font-bold transition-colors border-b border-gray-400"
                  onClick={closeMenu}
                >
                  O nama
                </Link>
                <Link
                  href="/portfolio"
                  className="block py-2 text-gray-900 hover:text-amber-600 font-bold transition-colors border-b border-gray-400"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
                {/* Call to Action Button */}
                <div className="pt-6">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center bg-amber-600 text-white py-3 px-5 rounded-lg font-bold hover:bg-amber-700 transition-colors"
                  >
                    Kontaktirajte nas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

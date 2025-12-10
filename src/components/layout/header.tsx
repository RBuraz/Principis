import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">
            <Link href="/" className="text-amber-600">
              Principis
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Početna
            </Link>
            <Link
              href="#usluge"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Usluge
            </Link>
            <Link
              href="#onama"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              O nama
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
            >
              Kontakt
            </Link>
          </div>
          <button className="md:hidden text-gray-700">
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
          </button>
        </div>
      </div>
    </nav>
  );
}

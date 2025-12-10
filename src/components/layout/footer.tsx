export default function Footer() {
  return (
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
            <p className="text-gray-400">
              © {new Date().getFullYear()} Principis obrt. Sva prava pridržana.
            </p>
            <p className="text-gray-500 text-sm mt-2">OIB: 12345678901</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

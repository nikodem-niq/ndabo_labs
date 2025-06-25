import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Mój Projekt
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gray-300">
            Strona główna
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            O nas
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
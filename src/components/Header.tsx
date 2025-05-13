import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/assets/frezza_logo.png" alt="Frezza Marketing Logo" width={150} height={50} />
          </a>
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/" legacyBehavior><a className="hover:text-red-500">Início</a></Link>
          <Link href="#services" legacyBehavior><a className="hover:text-red-500">Serviços</a></Link>
          <Link href="#portfolio" legacyBehavior><a className="hover:text-red-500">Portfolio</a></Link>
          <Link href="#about" legacyBehavior><a className="hover:text-red-500">Sobre</a></Link>
          <Link href="#contact" legacyBehavior><a className="hover:text-red-500">Contato</a></Link>
          <Link href="#contact" legacyBehavior>
            <a className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Fale Conosco
            </a>
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button - to be implemented later if needed */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


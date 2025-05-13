import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/assets/frezza_logo.png" alt="Frezza Marketing Logo" width={180} height={60} className="mb-4" />
            </a>
          </Link>
          <p className="text-sm">
            Sua agência de marketing digital focada em performance, criação de conteúdo audiovisual e resultados reais para empresas que querem crescer online.
          </p>
          {/* Add social media icons here if available/requested */}
        </div>

        <div>
          <h5 className="text-white font-bold text-lg mb-4">Links Rápidos</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" legacyBehavior><a className="hover:text-red-500">Início</a></Link></li>
            <li><Link href="#services" legacyBehavior><a className="hover:text-red-500">Serviços</a></Link></li>
            <li><Link href="#portfolio" legacyBehavior><a className="hover:text-red-500">Portfólio</a></Link></li>
            {/* Assuming 'Depoimentos' links to a section or page */}
            <li><Link href="#testimonials" legacyBehavior><a className="hover:text-red-500">Depoimentos</a></Link></li> 
            <li><Link href="#about" legacyBehavior><a className="hover:text-red-500">Sobre Nós</a></Link></li>
            <li><Link href="#contact" legacyBehavior><a className="hover:text-red-500">Contato</a></Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold text-lg mb-4">Serviços</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="#services" legacyBehavior><a className="hover:text-red-500">Gravação de Vídeo</a></Link></li>
            <li><Link href="#services" legacyBehavior><a className="hover:text-red-500">Edição de Vídeo</a></Link></li>
            <li><Link href="#services" legacyBehavior><a className="hover:text-red-500">Modelo para Publicidade</a></Link></li>
            <li><Link href="#services" legacyBehavior><a className="hover:text-red-500">Tráfego Pago</a></Link></li>
            <li><Link href="#services" legacyBehavior><a className="hover:text-red-500">Tráfego Orgânico</a></Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold text-lg mb-4">Contato</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:frezza.trafego@gmail.com" className="hover:text-red-500">frezza.trafego@gmail.com</a></li>
            <li><a href="tel:+5515991273423" className="hover:text-red-500">(15) 99127-3423</a></li>
            <li>
              <a 
                href="https://wa.me/5515991273423" // Substitua pelo link correto do WhatsApp
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 flex items-center"
              >
                <Image src="/assets/whatsapp_icon.svg" alt="WhatsApp" width={16} height={16} className="mr-2" /> {/* Assuming whatsapp_icon.svg exists */}
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Frezza Marketing. Todos os direitos reservados.</p>
        <div className="mt-2">
          <Link href="/termos-de-uso" legacyBehavior><a className="hover:text-red-500 mx-2">Termos de Uso</a></Link>
          <span className="text-gray-500">|</span>
          <Link href="/politica-de-privacidade" legacyBehavior><a className="hover:text-red-500 mx-2">Política de Privacidade</a></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


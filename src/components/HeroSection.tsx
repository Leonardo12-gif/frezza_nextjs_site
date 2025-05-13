import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transformamos <span className="text-red-500">cliques</span> em <span className="text-red-500">resultados reais</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Sua marca com mais visibilidade, estratégia e performance. Conte com quem entende de crescimento digital.
          </p>
          {/* Frase de Impacto 1 */}
          <p className="text-xl md:text-2xl text-yellow-400 italic mb-8">
            "O sucesso de amanhã começa com a estratégia digital de hoje."
          </p>
          <div className="flex space-x-4">
            <Link href="#services" legacyBehavior>
              <a className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded text-lg">
                Nossos Serviços &rarr;
              </a>
            </Link>
            <Link href="#contact" legacyBehavior>
              <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded text-lg">
                Fale Conosco
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative w-full h-96">
          {/* Placeholder for image - will use one from assets or a generic one */}
          {/* Assuming a hero image was saved as hero_image.png in public/assets */}
          {/* <Image src="/assets/hero_image.png" alt="Equipe de marketing trabalhando" layout="fill" objectFit="contain" /> */}
          <div className="bg-gray-700 w-full h-full rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-2xl">[Imagem Hero Principal Aqui]</p>
          </div>
           <div className="absolute top-10 right-0 bg-gray-800 p-3 rounded-lg shadow-lg">
            <p className="text-green-400 font-bold text-2xl">+300%</p>
            <p className="text-sm">Aumento de ROI</p>
          </div>
          <div className="absolute bottom-10 left-0 bg-gray-800 p-3 rounded-lg shadow-lg">
            <p className="text-blue-400 font-bold text-2xl">+10K</p>
            <p className="text-sm">Campanhas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import Link from 'next/link';
import Image from 'next/image';

const PortfolioSection = () => {
  // Placeholder for portfolio items - ideally, these would come from a CMS or data file
  const portfolioItems = [
    {
      title: "Campanha Cliente X",
      description: "Aumento de 300% no ROI com tráfego pago estratégico.",
      imageUrl: "/assets/portfolio_placeholder_1.png", // Replace with actual image path
      link: "#"
    },
    {
      title: "Consultoria Empresa Y",
      description: "Reestruturação de presença digital e SEO.",
      imageUrl: "/assets/portfolio_placeholder_2.png", // Replace with actual image path
      link: "#"
    },
    {
      title: "Lançamento Produto Z",
      description: "Estratégia de conteúdo e social media que viralizou.",
      imageUrl: "/assets/portfolio_placeholder_3.png", // Replace with actual image path
      link: "#"
    }
  ];

  const youtubeVideoId = "5MOgMKqzjrY"; // ID do vídeo do YouTube

  return (
    <section id="portfolio" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Nosso Portfólio</h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          Conheça alguns dos nossos trabalhos e cases de sucesso que falam por si.
        </p>
        {/* Frase de Impacto 3 */}
        <p className="text-2xl text-center text-yellow-400 italic mb-12">
          "Resultados que inspiram confiança, parcerias que constroem o futuro."
        </p>

        {/* Seção do Vídeo do YouTube */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-red-500 mb-6">Por que investir em Marketing Digital?</h3>
          <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="Por que investir em marketing"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
           <p className="text-center mt-4 text-gray-400">
            Clique no vídeo acima e descubra a importância de investir em marketing para o crescimento do seu negócio.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden group">
              <div className="relative w-full h-60">
                <Image src={item.imageUrl} alt={item.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-red-500">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <Link href={item.link} legacyBehavior>
                  <a className="text-yellow-400 hover:text-yellow-300 font-semibold">Ver Projeto &rarr;</a>
                </Link>
              </div>
            </div>
          ))}
        </div> */}
        
        <div className="text-center">
          <Link href="https://www.canva.com/design/DAGnNVfR_5M/-yolqU0vIpgnDVtABM1DGw/view?utm_content=DAGnNVfR_5M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h096fb20bc1" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
              Confira nosso portfólio completo no Canva
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;


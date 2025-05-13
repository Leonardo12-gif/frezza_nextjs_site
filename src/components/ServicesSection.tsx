import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      title: "Gravação de Vídeo",
      description: "Produção audiovisual profissional com equipamentos de última geração para criar conteúdo de alta qualidade para sua marca.",
      icon: "/assets/servico_gravacao_video.png", // Placeholder, use actual icon or image
      iconAlt: "Ícone de Gravação de Vídeo"
    },
    {
      title: "Edição de Vídeo",
      description: "Pós-produção detalhada com efeitos visuais, colorização e finalização que transformam seu material bruto em conteúdo impactante.",
      icon: "/assets/servico_edicao_video.png", // Placeholder
      iconAlt: "Ícone de Edição de Vídeo"
    },
    {
      title: "Modelo para Publicidade",
      description: "Modelos profissionais masculinos e femininos para campanhas publicitárias, ensaios fotográficos e gravações comerciais.",
      icon: "/assets/servico_modelo_publicidade.png", // Placeholder
      iconAlt: "Ícone de Modelo para Publicidade"
    },
    {
      title: "Tráfego Pago",
      description: "Gerenciamento estratégico de campanhas em Google Ads, Meta Ads e TikTok Ads para alcançar seu público e maximizar o ROI.",
      icon: "/assets/traffic_icon.svg", // Assuming a generic icon, replace if specific one exists
      iconAlt: "Ícone de Tráfego Pago"
    },
    {
      title: "Tráfego Orgânico (SEO)",
      description: "Otimização de sites e conteúdo para melhorar o ranking nos motores de busca e atrair visitantes qualificados naturalmente.",
      icon: "/assets/seo_icon.svg", // Assuming a generic icon
      iconAlt: "Ícone de SEO"
    },
    {
      title: "Consultoria de Marketing",
      description: "Análise completa do seu negócio e desenvolvimento de estratégias de marketing personalizadas para atingir seus objetivos.",
      icon: "/assets/consulting_icon.svg", // Assuming a generic icon
      iconAlt: "Ícone de Consultoria"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          Soluções completas para elevar sua presença digital e impacto visual.
        </p>
        {/* Frase de Impacto 2 */}
        <p className="text-2xl text-center text-red-500 italic mb-12">
          "Inovação que gera resultados, criatividade que constrói marcas."
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-red-500/30 transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-6 rounded-full bg-red-600 flex items-center justify-center">
                <Image src={service.icon} alt={service.iconAlt} width={150} height={150} className="rounded-md" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


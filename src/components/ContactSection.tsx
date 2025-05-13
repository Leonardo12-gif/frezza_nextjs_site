const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">Quer resultados agora?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Entre em contato pelo WhatsApp para um atendimento rápido e personalizado, ou preencha o formulário ao lado e retornaremos o mais breve possível.
          </p>
          {/* Frase de Impacto 4 */}
          <p className="text-2xl text-yellow-400 italic mb-8">
            "Sua jornada para o sucesso digital começa com uma conversa."
          </p>
          <a 
            href="https://wa.me/5515991273423" // Substitua pelo link correto do WhatsApp
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 mb-6 md:mb-0"
          >
            Falar no WhatsApp
          </a>
        </div>
        
        <div className="bg-gray-700 p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-center text-red-500">Envie uma Mensagem</h3>
          <form action="#" method="POST"> {/* Idealmente, isso enviaria para um endpoint de API */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome *</label>
              <input type="text" name="name" id="name" placeholder="Seu nome" required className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-red-500 focus:ring-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail *</label>
              <input type="email" name="email" id="email" placeholder="seu@email.com" required className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-red-500 focus:ring-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Telefone (opcional)</label>
              <input type="tel" name="phone" id="phone" placeholder="(00) 00000-0000" className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-red-500 focus:ring-red-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem *</label>
              <textarea name="message" id="message" rows={4} placeholder="Sua mensagem..." required className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-500 focus:border-red-500 focus:ring-red-500"></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300"
              >
                Enviar Mensagem &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


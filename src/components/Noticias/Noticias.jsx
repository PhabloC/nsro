import React from "react";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa"; // Substituindo os ícones por react-icons
import BgImg from "../../assets/Banner/faq-bg.jpg"; // Imagem de fundo para a seção de notícias

const newsItems = [
  {
    id: 1,
    title: "Grande Atualização: Jogo em desenvolvimento",
    excerpt:
      "Estamos em fase de desenvolvimento e planejamos lançar uma grande atualização em breve.",
    date: "02/05/2025",
    image: BgImg, // Corrigido: Removidas as chaves ao redor de BgImg
    category: "Atualização",
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12 font-poppins">
          <h2 className="text-3xl md:text-4xl font-ninja font-bold text-white mb-2">
            Últimas <span className="text-orange-500">Notícias</span>
          </h2>
          <p className="text-white/70">
            Fique por dentro das novidades e atualizações do jogo.
          </p>
        </div>

        {/* Grid de notícias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center ">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-700/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group"
            >
              {/* Imagem */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute top-3 left-3 bg-orange-500 text-xs font-medium text-white px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center text-white/60 text-sm mb-3">
                  <FaCalendarAlt size={14} className="mr-1" />
                  {item.date}
                </div>

                <h3 className="text-xl font-ninja font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/70 mb-4">{item.excerpt}</p>

                <a
                  href="#"
                  className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                >
                  Ler mais <FaChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

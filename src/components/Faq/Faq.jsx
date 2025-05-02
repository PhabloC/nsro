import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FaqBg from "../../assets/Banner/ramen.jpg";

const faqItems = [
  {
    question: "Como começar a jogar Naruto Shipuuden Ragnarok Online?",
    answer:
      "Para começar, faça o download do cliente do jogo, crie uma conta gratuita e siga o guia de instalação. Após a instalação, você poderá escolher sua aldeia ninja e começar sua jornada.",
  },
  {
    question: "O jogo é gratuito para jogar?",
    answer:
      "Sim, Naruto Shippuden Ragnarok Online é completamente gratuito para jogar. Existem itens cosméticos opcionais disponíveis na loja do jogo que não afetam o gameplay.",
  },
  {
    question: "Quais são os requisitos mínimos do sistema?",
    answer:
      "Os requisitos mínimos incluem Windows 7/8/10 (64-bit), processador Intel Core i3, 4GB de RAM, placa de vídeo compatível com DirectX 11 e 8GB de espaço em disco.",
  },
  {
    question: "Como reportar bugs ou problemas técnicos?",
    answer:
      "Você pode reportar bugs através do nosso canal de suporte no Discord oficial. Nossa equipe de suporte está disponível 24/7 para ajudar com quaisquer problemas.",
  },
  {
    question: "Posso jogar com amigos?",
    answer:
      "Sim! O jogo possui sistema de party, clãs e eventos em grupo. Você pode se juntar a outros jogadores para missões, dungeons e batalhas PvP.",
  },
  {
    question: "Com que frequência o jogo é atualizado?",
    answer:
      "Lançamos atualizações de conteúdo mensalmente, incluindo novos eventos, missões e itens. Patches de balanceamento são aplicados semanalmente.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-20 bg-gray-900 overflow-hidden font-poppins"
    >
      {/* Fundo fixo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${FaqBg})`,
          backgroundAttachment: "fixed", // Fundo fixo
        }}
      ></div>

      {/* Camada de sobreposição para escurecer o fundo */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-ninja font-bold text-white mb-4">
            Perguntas <span className="text-orange-500">Frequentes</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre Naruto Ragnarok
            Online.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:border-orange-500/30"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleItem(index)}
              >
                <span className="text-white font-medium">{item.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-orange-500 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-orange-500 flex-shrink-0" />
                )}
              </button>

              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-48 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-white/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

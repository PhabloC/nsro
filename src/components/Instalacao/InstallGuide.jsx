import React from "react";
import { FaDownload, FaUserPlus, FaCog, FaPlayCircle } from "react-icons/fa"; // Substituindo os ícones por react-icons

const steps = [
  {
    icon: <FaDownload size={24} className="text-orange-500" />,
    title: "Download do Cliente",
    description:
      "Baixe o cliente mais recente do jogo através do nosso site oficial.",
    tip: "Certifique-se de ter espaço suficiente em disco (mínimo 8GB).",
  },
  {
    icon: <FaUserPlus size={24} className="text-orange-500" />,
    title: "Criar Conta",
    description:
      "Registre-se gratuitamente usando seu email para criar sua conta.",
    tip: "Use uma senha forte e guarde suas informações de login em local seguro.",
  },
  {
    icon: <FaCog size={24} className="text-orange-500" />,
    title: "Instalação",
    description: "Execute o instalador e siga as instruções na tela.",
    tip: "O processo de instalação leva aproximadamente 10 minutos.",
  },
  {
    icon: <FaPlayCircle size={24} className="text-orange-500" />,
    title: "Iniciar o Jogo",
    description: "Abra o launcher, faça login e comece sua jornada ninja!",
    tip: "Recomendamos assistir ao tutorial inicial para aprender os controles básicos.",
  },
];

export default function InstallGuide() {
  return (
    <section
      id="install-guide"
      className="py-20 bg-gray-800 relative overflow-hidden font-poppins"
    >
      {/* Oriental-style background pattern */}
      <div className="absolute inset-0 bg-naruto-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-ninja font-bold text-white mb-4">
            Guia de <span className="text-orange-500">Instalação</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Siga estes passos simples para começar sua jornada em Naruto
            Shippuden Ragnarok Online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:border-orange-500/30"
            >
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-black">
                {index + 1}
              </div>

              {/* Content */}
              <div className="bg-gray-700/30 rounded-full p-4 inline-block mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-ninja font-bold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-white/70 mb-4">{step.description}</p>

              <div className="bg-gray-700/30 rounded-lg p-3">
                <p className="text-sm text-orange-500">
                  <span className="font-bold">Dica:</span> {step.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

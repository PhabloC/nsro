import React from "react";
import { FaDownload, FaDesktop, FaMicrochip, FaHdd } from "react-icons/fa"; // Substituindo os ícones por react-icons

export default function Download() {
  return (
    <section
      id="download"
      className="py-20 bg-gray-900 relative overflow-hidden font-poppins"
    >
      {/* Elementos decorativos */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-ninja font-bold text-white mb-4">
            <span className="text-orange-500">Baixe</span> e Jogue Agora
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Junte-se a milhares de jogadores e comece sua jornada ninja no mundo
            de Naruto Shippuden Ragnarok Online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Requisitos do Sistema */}
          <div className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700">
            <h3 className="text-2xl font-ninja font-bold text-white mb-6">
              Requisitos do Sistema
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium flex items-center mb-3">
                    <FaDesktop className="text-orange-500 mr-2" /> Mínimos
                  </h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>• Windows 7/8/10 (64-bit)</li>
                    <li>• Processador: Intel Core i3</li>
                    <li>• Memória: 4 GB RAM</li>
                    <li>• Gráficos: DirectX 11</li>
                    <li>• Armazenamento: 8 GB</li>
                  </ul>
                </div>

                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium flex items-center mb-3">
                    <FaMicrochip className="text-orange-500 mr-2" />{" "}
                    Recomendados
                  </h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>• Windows 10 (64-bit)</li>
                    <li>• Processador: Intel Core i5</li>
                    <li>• Memória: 8 GB RAM</li>
                    <li>• Gráficos: NVIDIA GTX 960</li>
                    <li>• Armazenamento: 12 GB</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h4 className="text-white font-medium flex items-center mb-3">
                  <FaHdd className="text-orange-500 mr-2" /> Tamanho do Cliente
                </h4>
                <p className="text-white/70 text-sm">
                  Cliente Completo: 5.2 GB
                </p>
              </div>
            </div>
          </div>

          {/* Botões de Download */}
          <div className="p-6 bg-gradient-to-br from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg border border-orange-500/30 text-center">
            <h3 className="text-2xl font-ninja font-bold text-white mb-6">
              Pronto para a Aventura?
            </h3>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Baixe o cliente mais recente e entre no mundo de Naruto Shippuden
              Ragnarok Online. Atualizações automáticas garantem que você sempre
              tenha a versão mais recente.
            </p>

            <div className="space-y-4">
              <button className="w-full md:w-auto px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
                <FaDownload size={20} className="inline-block mr-2" />
                Download Cliente Completo (5.2 GB)
              </button>

              <p className="text-white/50 text-sm">ou</p>

              <button className="w-full md:w-auto px-6 py-3 border border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition">
                Download Patch (800 MB)
              </button>

              <p className="text-white/70 text-xs mt-4">
                Versão 1.2.5 • Atualizado em 07/05/2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

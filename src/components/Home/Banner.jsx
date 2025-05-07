import React, { useEffect, useState } from "react";
import BannerBg from "../../assets/Banner/banner-new8.jpg";

export default function Banner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${BannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl mx-auto text-center ">
          <h1 className=" text-white text-4xl md:text-6xl font-poppins font-bold leading-tight mb-6">
            <span className="block">Entre no mundo de</span>
            <span className="text-orange-500">
              Naruto Shippuden Ragnarok Online
            </span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl mb-8 font-poppins">
            Uma experiência única de MMORPG que combina o universo de Naruto com
            a jogabilidade clássica de Ragnarok Online. Venha fazer parte dessa
            história.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 font-poppins">
            <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
              Baixar Agora
            </button>
            <button className="px-6 py-3 border border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition">
              Criar Conta
            </button>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg inline-block">
            <p className="text-white text-sm">
              Versão <span className="text-orange-500 font-medium">1.2.5</span>{" "}
              • Atualizado em{" "}
              <span className="text-orange-500 font-medium">02/05/2025</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

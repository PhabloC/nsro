import { FaRegMap } from "react-icons/fa"; // Certifique-se de importar os ícones corretamente
import { useEffect, useState } from "react";
import { BsGiftFill } from "react-icons/bs";
import { LuSword } from "react-icons/lu";
import { HiUsers } from "react-icons/hi";

const featuresData = [
  {
    icon: <LuSword size={36} className="text-orange-500" />,
    title: "Combate Dinâmico",
    description:
      "Sistema de combate inspirado em jutsus com combos, elementos e habilidades especiais exclusivas.",
  },
  {
    icon: <HiUsers size={36} className="text-orange-500" />,
    title: "Kekkei Genkai Únicas",
    description:
      "Escolha entre diversas Kekkei Genkai inspiradas nos clãs e personagens de Naruto, cada uma com habilidades e evolução única.",
  },
  {
    icon: <FaRegMap size={36} className="text-orange-500" />,
    title: "Mundo Vasto",
    description:
      "Explore as aldeias ninjas, florestas misteriosas e dungeons secretas em um mundo vasto baseado no universo de Naruto.",
  },
  {
    icon: <BsGiftFill size={36} className="text-orange-500" />,
    title: "Eventos Especiais",
    description:
      "Participe de eventos temáticos semanais com recompensas exclusivas e desafios inspirados nos arcos da história de Naruto.",
  },
];

export default function Features() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="features"
      className="relative py-20 bg-gray-900 overflow-hidden font-poppins"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-orange-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-blue-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-ninja font-bold text-white mb-4">
            Características do <span className="text-orange-500">Jogo</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Descubra o que torna Naruto Ragnarok Online uma experiência única
            que combina o melhor dos dois mundos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/20 border border-transparent hover:border-orange-500/30"
              style={{
                transform: `translateY(${
                  Math.sin((scrollY + index * 100) * 0.002) * 20
                }px)`,
              }}
              aria-label={`Feature ${feature.title}`}
            >
              <div className="bg-gray-700/50 rounded-full p-4 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-ninja font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

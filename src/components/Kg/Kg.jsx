import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

// Importando as imagens corretamente
import HarunoImg from "../../assets/Slider/Haruno.jpg";
import UchihaImg from "../../assets/Slider/Uchiha.jpg";
import HyugaImg from "../../assets/Slider/Hyuga.jpg";
import MomochiImg from "../../assets/Slider/Momochi.jpg";
import NaraImg from "../../assets/Slider/Nara.jpg";
import OrochimaruImg from "../../assets/Slider/Orochimaru.jpg";
import SabakuImg from "../../assets/Slider/Sabaku.jpg";
import SasoriImg from "../../assets/Slider/Sasori.jpg";
import UzumakiImg from "../../assets/Slider/Uzumaki.jpg";
import KidoumaroImg from "../../assets/Slider/Kidoumaro.jpg";

export default function Kg() {
  const items = [
    { id: 1, name: "Uzumaki", image: UzumakiImg },
    { id: 2, name: "Uchiha", image: UchihaImg },
    { id: 3, name: "Hyuga", image: HyugaImg },
    { id: 4, name: "Momochi", image: MomochiImg },
    { id: 5, name: "Nara", image: NaraImg },
    { id: 6, name: "Orochimaru", image: OrochimaruImg },
    { id: 7, name: "Sabaku", image: SabakuImg },
    { id: 8, name: "Sasori", image: SasoriImg },
    { id: 9, name: "Haruno", image: HarunoImg },
    { id: 10, name: "Kidoumaro", image: KidoumaroImg },
  ];

  return (
    <div className="pt-16 gap-20 pb-20 bg-gray-900 flex flex-col items-center justify-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-ninja font-bold text-white mb-2">
          Kekkei <span className="text-orange-500">Genkai </span>
        </h2>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-5xl"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="group relative transition-transform duration-300"
          >
            <div
              className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[400px] flex items-center justify-center
            "
            >
              {/* Imagem com efeito de zoom */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Nome com efeito de subida */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl md:text-2xl font-ninja font-bold text-white text-center mb-2 opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Paginação personalizada */}
      <div className="custom-pagination mt-4"></div>
    </div>
  );
}

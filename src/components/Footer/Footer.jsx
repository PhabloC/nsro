import Instagram from "../../assets/Header/instagram.png";
import Youtube from "../../assets/Header/youtube.png";
import Discord from "../../assets/Header/discord.png";
import Logo from "../../assets/Header/logo.png";
import FooterBg from "../../assets/Footer/footer-bg.png";

export default function Footer() {
  return (
    <footer className="bg-gray-950 relative w-full h-[100vh] bg-cover bg-center flex flex-col justify-between overflow-hidden">
      {/* Conteúdo principal */}
      <div className="container mx-auto flex items-center h-full text-white ml-[60px] mt-24  ">
        {/* Logo, Texto e Redes Sociais - Alinhado à esquerda e centrado verticalmente */}
        <div className="flex flex-col items-start space-y-4 ">
          <img src={Logo} alt="Logo" className="h-24" />
          <p className="text-[16px] text-left max-w-xs">
            Uma experiência única de MMORPG que combina o universo de Naruto com
            a jogabilidade clássica de Ragnarok Online.
          </p>
          <div className="flex space-x-4">
            <img
              src={Instagram}
              alt="Instagram"
              className="h-8 cursor-pointer hover:opacity-80"
            />
            <img
              src={Youtube}
              alt="Youtube"
              className="h-8 cursor-pointer hover:opacity-80"
            />
            <img
              src={Discord}
              alt="Discord"
              className="h-8 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>

        {/* Links no centro da página */}
        <nav
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-white font-medium absolute left-1/2 transform -translate-x-1/2
        mt-[-150px]"
        >
          <p className="cursor-pointer hover:text-[#F97718]">HOME</p>
          <p className="cursor-pointer hover:text-[#F97718]">DOWNLOAD</p>
          <p className="cursor-pointer hover:text-[#F97718]">DOAÇÃO</p>
          <p className="cursor-pointer hover:text-[#F97718]">REGISTRAR</p>
        </nav>
      </div>

      {/* Direitos reservados no final */}
      <div className="text-sm text-center text-white py-4">
        <p>©2025 NARUTO SHIPPUDEN RAGNAROK ONLINE – NSRO</p>
        <p>TODOS OS DIREITOS RESERVADOS</p>
      </div>
    </footer>
  );
}

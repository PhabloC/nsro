import Logo from "../../assets/Header/logo.png";
import Instagram from "../../assets/Header/instagram.png";
import Youtube from "../../assets/Header/youtube.png";
import Discord from "../../assets/Header/discord.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>

        {/* Links */}
        <nav className="flex space-x-8 text-white font-medium">
          <p className="cursor-pointer hover:text-gray-300">DOWNLOAD</p>
          <p className="cursor-pointer hover:text-gray-300">NOTÍCIAS</p>
          <p className="cursor-pointer hover:text-gray-300">CONTATO</p>
          <p className="cursor-pointer hover:text-gray-300">DOAÇÃO</p>
          <p className="cursor-pointer hover:text-gray-300">REGISTRO</p>
        </nav>

        {/* Redes sociais */}
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
    </header>
  );
}

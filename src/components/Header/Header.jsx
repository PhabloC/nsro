import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Substituindo os ícones do menu por react-icons
import Logo from "../../assets/Header/logo.png";
import Instagram from "../../assets/Header/instagram.png";
import Youtube from "../../assets/Header/youtube.png";
import Discord from "../../assets/Header/discord.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "DOWNLOAD", href: "#download" },
    { name: "NOTÍCIAS", href: "#news" },
    { name: "CONTATO", href: "#contact" },
    { name: "DOAÇÃO", href: "#donation" },
    { name: "REGISTRO", href: "#register" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Evita o comportamento padrão do link
                window.scrollTo({ top: 0, behavior: "smooth" }); // Rola suavemente para o topo
              }}
            >
              <img src={Logo} alt="Logo" className="h-16 w-50 cursor-pointer" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium text-sm transition-all hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="h-8 cursor-pointer hover:opacity-80"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="YouTube"
            >
              <img
                src={Youtube}
                alt="Youtube"
                className="h-8 cursor-pointer hover:opacity-80"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="Discord"
            >
              <img
                src={Discord}
                alt="Discord"
                className="h-8 cursor-pointer hover:opacity-80"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-orange-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-orange-500 transition-all text-lg font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-white/20">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label="Instagram"
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="h-8 cursor-pointer hover:opacity-80"
                  />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label="YouTube"
                >
                  <img
                    src={Youtube}
                    alt="Youtube"
                    className="h-8 cursor-pointer hover:opacity-80"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label="Discord"
                >
                  <img
                    src={Discord}
                    alt="Discord"
                    className="h-8 cursor-pointer hover:opacity-80"
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

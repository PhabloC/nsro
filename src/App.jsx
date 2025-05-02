import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./components/Home/Banner";
import Features from "./components/Features/Features";
import Noticias from "./components/Noticias/Noticias";
import InstallGuide from "./components/Instalacao/InstallGuide";
import Faq from "./components/Faq/Faq";
import Download from "./components/Download/Download";

export default function App() {
  return (
    <div className="h-screen">
      <Header />
      <Banner />
      <Features />
      <Noticias />
      <InstallGuide />
      <Faq />
      <Download />
      <Footer />
    </div>
  );
}

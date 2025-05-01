import BannerBg from "../../assets/Banner/header-bg.jpg";
export default function Banner() {
  return (
    <div
      className="relative w-full h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerBg})` }}
    ></div>
  );
}

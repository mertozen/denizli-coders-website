import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Rooster1 from "./assets/rooster_codes.webp";
import denizli_coders_logo from "./assets/denizlicoders1.png";
import instagram_icon from "./assets/instagram_icon.webp";
import linkedin_icon from "./assets/linkedin_icon.webp";
import telegram_icon from "./assets/telegram_icon.webp";



function App() {
  const telegram_link = "https://t.me/denizlicoders"
  const instagram_link = "https://www.instagram.com/denizlicoders/"
  return (
    <>
      <Navbar logo={denizli_coders_logo} title1={"Hakkımızda"} title2= {"Etkinlikler"} title3 ={"Ekibimiz"} button={"Bize Katıl!"} url={telegram_link} />
      <Menu image= {Rooster1} description1={"Denizlinin kod tutkunları burada buluşuyor!"} description2 = {"Kodla, geliş, fark yarat!"} button1= {"Daha Fazla Öğren!"} />
      <Card title={""} />
      <Events title={""} />
      <Footer logo={denizli_coders_logo} title1={"Hakkımızda"} title2={"Ekibimiz"} button={"Şimdi Katıl!"} url1={""} icon1={linkedin_icon} url2={instagram_link} icon2= {instagram_icon} url3= {telegram_link} icon3={telegram_icon} url={telegram_link}/>
    </>
  );
}

export default App;

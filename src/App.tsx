import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Rooster1 from "./assets/rooster_codes.webp";
import denizli_coders_logo from "./assets/denizli_coders_logo.webp";

function App() {
  return (
    <>
      <Navbar logo={denizli_coders_logo} title1={"About Us"} title2= {"Events"} title3 ={"Our Team"} button={"Join Us"} />
      <Menu image= {Rooster1} description1={"Denizlinin kod tutkunları burada buluşuyor!"} description2 = {"Kodla, geliş, fark yarat!"} button1= {"Learn More"} />
      <Card title={""} />
      <Events title={""} />
      <Footer title={""} />
    </>
  );
}

export default App;

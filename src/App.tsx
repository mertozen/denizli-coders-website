import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CookieConsent from "react-cookie-consent";
import rooster_codes from "./assets/rooster_codes.png";
import denizli_coders_logo from "./assets/denizlicoders-removebg.png";
import instagram_icon from "./assets/instagram_icon.png";
import linkedin_icon from "./assets/linkedin_icon.png";
import telegram_icon from "./assets/telegram_icon.png";
import datingevent from "./assets/datingevent.jpg";
import docker101 from "./assets/docker101.jpg";
import meet from "./assets/meet.jpg";
import { useTranslation } from "react-i18next";
import denizlicodersImage from "./assets/denizlicoders1.png";
import educationImage from "./assets/egitimphoto.png";
import projectImage from "./assets/projephoto.png";

function App() {
  const telegram_link = "https://t.me/denizlicoders";
  const instagram_link = "https://www.instagram.com/denizlicoders/";
  const linkedin_link = "https://www.linkedin.com/company/denizli-coders/";
  const { t } = useTranslation();

  const cardData = [
    {
      title: "Vizyon ve Misyonumuz",
      paragraphs: [
        {
          heading: "Vizyonumuz",
          content:
            "Denizli’yi yazılım ve teknoloji alanında öncü bir merkeze dönüştürmek.",
        },
        {
          heading: "Misyonumuz",
          content:
            "Yazılım tutkunlarını bir araya getirerek bilgi paylaşımını artırmak, etkinlikler ve eğitimlerle yerel yetenekleri geliştirmek.",
        },
      ],
      image: denizlicodersImage,
    },
    {
      title: "Eğitimler",
      paragraphs: [
        {
          heading: "Denizli Coders Eğitimleri",
          content:
            "Alanında uzman eğitmenler ve konuklarla, yazılım dünyasında öne çıkan mimari ve teknolojileri öğrenin! Teorik bilgiyi pratik uygulamalarla birleştirerek kariyerinizi ileri taşıyın.",
        },
      ],
      image: educationImage,
    },
    {
      title: "Projeler",
      paragraphs: [
        {
          content:
            "Üyelerimizi projelere dahil ederek teknik destek ve gerçek iş deneyimi sunuyoruz.",
        },
      ],
      image: projectImage,
    },
    {
      title: t("Ekibimiz"),
      paragraphs: [
        {
          heading: "",
          content: "",
        },
      ],
      image: denizli_coders_logo, 
    },
  ];
  


  return (
    <>
      <div>
        <CookieConsent
          location="bottom"
          buttonText={t("Kabul Et")}
          declineButtonText={t("Reddet")}
          enableDeclineButton
          cookieName="moverCookieConsent"
          style={{ background: "#0000cd", color: "#fff" }}
          buttonStyle={{
            background: "#000080",

            color: "#fff",

            fontSize: "14px",
          }}
          declineButtonStyle={{
            background: "#fff",

            color: "#000080",

            fontSize: "14px",
          }}
          expires={150}
        >
          {t(
            "İçeriği kişiselleştirmek, reklamları daha uygun hale getirmek ve etkileşimi ölçmek amacıyla çerezler ve benzeri teknolojiler kullanıyoruz. 'Kabul Et' butonuna tıklayarak, Çerez Politikamızda belirtilen şartları kabul etmiş olursunuz. Daha iyi bir deneyim için bize katılın!"
          )}
        </CookieConsent>
      </div>

      <div id="navbar">
      <Navbar
        logo={denizli_coders_logo}
        about_tag={t("Hakkımızda")}
        events_tag={t("Etkinlikler")}
        team_tag={t("Ekibimiz")}
        join_button={t("Bize Katıl!")}
        tg_url={telegram_link}
      />
      </div>
      
      <div id="mainPage">
      <Menu
        rooster_coding_image={rooster_codes}
        main_header={t("Denizli'nin kod tutkunları burada buluşuyor!")}
        sub_header={t("Kodla, geliş, fark yarat!")}
        learn_more_button={t("Daha Fazla Öğren!")}/>
      </div>
      <div id="about">
      <main className="flex flex-col items-center space-y-32 py-32 px-4">
      {cardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          paragraphs={item.paragraphs}
          image={item.image}
        />
      ))}
    </main>
    </div>

      <div id="events">
      <Events
        event_title={t("Etkinliklerimiz")}
        images={[datingevent, docker101, meet]}/> 
      </div>

      <Footer
        logo={denizli_coders_logo}
        about_tag={t("Hakkımızda")}
        team_tag={t("Ekibimiz")}
        join_button={t("Şimdi Katıl!")}
        linkedin_url={linkedin_link}
        linkedin_icon={linkedin_icon}
        instagram_url={instagram_link}
        instagram_icon={instagram_icon}
        telegram_url={telegram_link}
        telegram_icon={telegram_icon}
        tg_url={telegram_link}/>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CookieConsent from "react-cookie-consent";
import rooster_codes from "./assets/rooster_codes.webp";
import denizli_coders_logo from "./assets/denizlicoders1-removebg.png";
import instagram_icon from "./assets/instagram_icon.webp";
import linkedin_icon from "./assets/linkedin_icon.webp";
import telegram_icon from "./assets/telegram_icon.webp";
import datingevent from "./assets/datingevent.jpg";
import docker101 from "./assets/docker101.jpg";
import meet from "./assets/meet.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



function App() {
  const telegram_link = "https://t.me/denizlicoders";
  const instagram_link = "https://www.instagram.com/denizlicoders/";
  const linkedin_link = "https://www.linkedin.com/company/denizli-coders/"
  const {t} = useTranslation()
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
          {t("İçeriği kişiselleştirmek, reklamları daha uygun hale getirmek ve etkileşimi ölçmek amacıyla çerezler ve benzeri teknolojiler kullanıyoruz. 'Kabul Et' butonuna tıklayarak, Çerez Politikamızda belirtilen şartları kabul etmiş olursunuz. Daha iyi bir deneyim için bize katılın!")}
        </CookieConsent>
      </div>

      <Navbar 
        logo={denizli_coders_logo}
        about_tag={t("Hakkımızda")}
        events_tag={t("Etkinlikler")}
        team_tag={t("Ekibimiz")}
        join_button={t("Bize Katıl!")}
        tg_url={telegram_link}
      />
      <Menu 
        rooster_coding_image={rooster_codes}
        main_header={t("Denizlinin kod tutkunları burada buluşuyor!")}
        sub_header={t("Kodla, geliş, fark yarat!")}
        learn_more_button={t("Daha Fazla Öğren!")}
      />
    
      <Card title={""} />
      <Events
        event_title={t("Etkinliklerimiz")}
        images={[datingevent, docker101, meet]}
      />
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
        tg_url={telegram_link}
      />
   
    </>
  );
}

export default App;

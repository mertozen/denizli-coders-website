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

function App() {
  const telegram_link = "https://t.me/denizlicoders";
  const instagram_link = "https://www.instagram.com/denizlicoders/";
  return (
    <>
      <div className="fixed bottom-0 w-full">
        <CookieConsent
          location="bottom"
          buttonText="Kabul Et"
          declineButtonText="Reddet"
          enableDeclineButton
          cookieName="moverCookieConsent"
          expires={150}
          containerClasses="!bg-blue-700 !text-white !p-2 md:!p-2 flex flex-col md:flex-row items-center justify-between"
          buttonClasses="!bg-blue-900 !text-white !px-4 !py-2 !rounded-md !text-sm md:!text-base hover:!bg-blue-800 transition"
          declineButtonClasses="!bg-white !text-blue-900 !px-4 !py-2 !rounded-md !text-sm md:!text-base hover:!bg-gray-200 transition"
          style={{ backgroundColor: "#0000cd", color: "#fff" }}
          buttonStyle={{
            backgroundColor: "#000080",
            color: "#fff",
            fontSize: "14px",
          }}
          declineButtonStyle={{
            backgroundColor: "#fff",
            color: "#000080",
            fontSize: "14px",
          }}
        >
          <p className="text-current ">
            İçeriği kişiselleştirmek, reklamları daha uygun hale getirmek ve
            etkileşimi ölçmek amacıyla çerezler ve benzeri teknolojiler
            kullanıyoruz. 'Kabul Et' butonuna tıklayarak, Çerez Politikamızda
            belirtilen şartları kabul etmiş olursunuz.
          </p>
        </CookieConsent>
      </div>

      <Navbar
        logo={denizli_coders_logo}
        about_tag={"Hakkımızda"}
        events_tag={"Etkinlikler"}
        team_tag={"Ekibimiz"}
        join_button={"Bize Katıl!"}
        tg_url={telegram_link}
      />
      <Menu
        rooster_coding_image={rooster_codes}
        main_header={"Denizlinin kod tutkunları burada buluşuyor!"}
        sub_header={"Kodla, geliş, fark yarat!"}
        learn_more_button={"Daha Fazla Öğren!"}
      />
      <Card title={""} />
      <Events
        event_title={"Our Event"}
        images={[datingevent, docker101, meet]}
      />
      <Footer
        logo={denizli_coders_logo}
        about_tag={"Hakkımızda"}
        team_tag={"Ekibimiz"}
        join_button={"Şimdi Katıl!"}
        linkedin_url={""}
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

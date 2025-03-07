import React from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Footer from "./components/Footer";
import MissionAndEducationCards from "./components/MissionAndEducationCards";
import ProjectCard from "./components/ProjectCard";
import OurTeam from "./components/OurTeam";
import rooster_codes from "./assets/rooster_codes.webp";
import denizli_coders_logo from "./assets/denizlicoders1-removebg.png";
import instagram_icon from "./assets/instagram_icon.webp";
import linkedin_icon from "./assets/linkedin_icon.webp";
import telegram_icon from "./assets/telegram_icon.webp";
import datingevent from "./assets/datingevent.jpg";
import docker101 from "./assets/docker101.jpg";
import meet from "./assets/meet.jpg";

const App: React.FC = () => {
  const telegram_link = "https://t.me/denizlicoders";
  const instagram_link = "https://www.instagram.com/denizlicoders/";

  return (
    <div className="container space-y-16 py-16 bg-background flex flex-col items-center">
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
      <MissionAndEducationCards />
      <ProjectCard />
      <OurTeam />
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
    </div>
  );
};

export default App;

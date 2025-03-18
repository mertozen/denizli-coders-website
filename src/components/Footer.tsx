import { Link } from "react-scroll";

interface FooterProps {
  logo: any;
  about_tag: string;
  team_tag: string;
  join_button: string;
  linkedin_icon: any;
  linkedin_url:string;
  instagram_url:string;
  instagram_icon: any;
  telegram_icon: any;
  telegram_url: string;
  tg_url: string;
}
const Footer: React.FC<FooterProps> = ({logo, about_tag, team_tag, join_button, linkedin_url, linkedin_icon, instagram_url, instagram_icon, telegram_url, telegram_icon, tg_url}) => {
  return (
  <footer className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1316px] mx-auto px-6 py-5 mt-20 bg-white">
  <div className="flex flex-col md:flex-row items-center gap-6 text-lg font-bold text-blue-700">
    <Link to="home" smooth={true} duration={500}>
      <img src={logo} alt="Logo" className="w-[60px] object-contain" />
    </Link>
    <div className="flex flex-col md:flex-row items-center gap-6">
      <Link to="about" smooth={true} duration={500} className="hover:text-blue-500 transition">
        {about_tag}
      </Link>
      <Link to="about" smooth={true} duration={500} className="hover:text-blue-500 transition">
        {team_tag}
      </Link>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
    <div className="flex gap-4">
      <a href={linkedin_url}>
        <img src={linkedin_icon} alt="LinkedIn" className="w-5" />
      </a>
      <a href={instagram_url}>
        <img src={instagram_icon} alt="Instagram" className="w-5" />
      </a>
      <a href={telegram_url}>
        <img src={telegram_icon} alt="Telegram" className="w-5" />
      </a>
    </div>
    <a href={tg_url}>
      <button className="px-6 py-2 text-lg font-medium text-white bg-blue-700 rounded-3xl hover:bg-blue-800 transition">
        {join_button}
      </button>
    </a>
  </div>
  </footer>


  );
  
};

export default Footer;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavbarProps {
    logo: any;
    about_tag: string;
    events_tag: string;
    team_tag: string;
    join_button: string;
    tg_url: string;

  }
  const Navbar: React.FC<NavbarProps> = ({logo, about_tag,events_tag, team_tag, join_button, tg_url}) => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (e: { target: { value: any; }; }) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
    };
    return(
      

      <nav className="relative flex flex-col w-full bg-white">
      <div className="flex items-center justify-between px-5 py-3 md:px+5">
     
      <div className="flex items-center">
      <a href=""><img src={logo} alt="Logo" className="object-contain w-[350px] sm:w-[200px] aspect-square" /> </a>

      <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-3 md:gap-y-0 text-lg font-bold text-blue-700">
        <a className="hover:text-blue-500 transition">{about_tag}</a>
        <a className="hover:text-blue-500 transition">{events_tag}</a>
        <a className="hover:text-blue-500 transition">{team_tag}</a>
      </div>
      </div>
      <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="tr">TR</option>
      <option value="en">EN</option>
      </select>
      <div className="flex sm:justify-end justify-center w-full sm:w-auto mt-2 sm:mt-0 mr-3 sm:mr-30">
      <a href={tg_url}><button className="px-6 py-2 text-lg font-medium leading-7 text-white bg-blue-700 rounded-3xl hover:bg-blue-800 transition">{join_button}</button> </a>
      </div>
      </div>
      </nav>
    )
}

export default Navbar;
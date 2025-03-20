import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

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
    }

    return(
    <nav className="bg-white fixed w-full z-20 top-0 shadow-md">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center">
      <Link to="navbar" smooth={true} duration={500}>
        <img src={logo} alt="Logo" className="w-[100px] sm:w-[150px] object-contain" />
      </Link>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-6 text-lg font-bold text-blue-700 md:ml-6 md:mr-auto">
      <Link to="about" smooth={true} duration={500} className="hover:text-blue-500 transition">
        {about_tag}
      </Link>
      <Link to="events" smooth={true} duration={500} className="hover:text-blue-500 transition">
        {events_tag}
      </Link>
      <Link to="about" smooth={true} duration={500} className="hover:text-blue-500 transition">
        {team_tag}
      </Link>
    </div>

    <div className="flex items-center gap-4">
      <select value={i18n.language} onChange={handleLanguageChange} className="border border-gray-300 rounded px-2 py-1">
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
      <a href={tg_url}>
        <button className="px-6 py-2 text-lg font-medium text-white bg-blue-700 rounded-3xl hover:bg-blue-800 transition">
          {join_button}
        </button>
      </a>
    </div>

    </div>
    </nav>

    )
}

export default Navbar;
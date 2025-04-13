import { useState } from "react";
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

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
    <header className="flex fixed w-full z-20 top-0 justify-between items-center text-blue-700 py-6 px-8 md:px-32 bg-white drop-shadow-md">
    <div className="flex items-center gap-8">
    <Link to="navbar" smooth={true} duration={500} offset={-128}>
      <img src={logo} alt="Logo" className="w-[80px] sm:w-[120px] hover:scale-105 transition-all" />
    </Link>
    <ul className="hidden xl:flex gap-8 font-bold text-lg text-blue-700">
    <Link to="about" smooth={true} duration={500} offset={-210}>
      <li className="p-3 hover:text-blue-500 rounded-md transition-all cursor-pointer">{about_tag}</li>
    </Link>
    <Link to="events" smooth={true} duration={500} offset={-128}>
      <li className="p-3 hover:text-blue-500 rounded-md transition-all cursor-pointer">{events_tag}</li>
    </Link>
    <Link to="team" smooth={true} duration={500} offset={-210}>
      <li className="p-3 hover:text-blue-500 rounded-md transition-all cursor-pointer">{team_tag}</li>    
    </Link>
    </ul>
    </div>

    <div className="flex items-center gap-4">
      <select value={i18n.language} onChange={handleLanguageChange} className="border border-gray-300 rounded px-2 py-1 text-blue-700 cursor-pointer">
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
      <a href={tg_url}>
        <button className="px-6 py-1 text-lg font-medium text-white bg-blue-700 rounded-3xl hover:bg-blue-800 transition cursor-pointer">
          {join_button}
        </button>
      </a>
    </div>
    
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="size-6 xl:hidden block cursor-pointer" 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
    {isMenuOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      )}
    </svg>


    <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
      <Link to="about" smooth={true} duration={500} offset={-210}>
      <li className="list-none w-full text-center p-4 hover:text-blue-500 transition-all cursor-pointer">{about_tag}</li>
      </Link>
      <Link to="events" smooth={true} duration={500} offset={-128}>
      <li className="list-none w-full text-center p-4 hover:text-blue-500 transition-all cursor-pointer">{events_tag}</li>
      </Link>
      <Link to="team" smooth={true} duration={500} offset={-210}>
      <li className="list-none w-full text-center p-4 hover:text-blue-500 transition-all cursor-pointer">{team_tag}</li>
      </Link>
      </div>
</header>

    )
}

export default Navbar;
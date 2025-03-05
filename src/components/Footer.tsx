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
    <footer className="flex overflow-hidden flex-wrap gap-5 justify-between self-end pr-14 pl-5 mt-20 max-w-full bg-white w-[1394px] max-md:pr-5 max-md:mt-10 max-md:mr-2.5">
      <div className="flex gap-10 items-center text-lg font-bold leading-none text-center text-blue-700">
        <a href="">
        <img
          src={logo}
          alt="Logo"
          className="object-contain shrink-0 self-stretch aspect-square w-[60px]"
        />
        </a>
        <a href="#about" className="self-stretch my-auto">
          {about_tag}
        </a>
        <a href="#team" className="self-stretch my-auto">
          {team_tag}
        </a>
      </div>
      <div className="flex gap-10 my-auto">
        <div className="flex gap-8 items-start self-start mt-4">
          <a href={linkedin_url}>
          <img
            src={linkedin_icon}
            alt="Social media 1"
            className="object-contain shrink-0 w-4 aspect-[0.96]"/>
          </a>
          <a href={instagram_url}>
          <img
            src={instagram_icon}
            alt="Social media 2"
            className="object-contain shrink-0 w-4 aspect-[0.96]"/>
          </a>
          <a href={telegram_url}>
          <img
            src={telegram_icon}
            className="object-contain shrink-0 aspect-square w-[17px]"/>
          </a>
        </div>
        <a href={tg_url}><button className="px-6 py-2 text-lg font-medium leading-7 text-white bg-blue-700 rounded-3xl hover:bg-blue-800 transition">{join_button}</button></a>
      </div>
    </footer>


  );
  
};

export default Footer;

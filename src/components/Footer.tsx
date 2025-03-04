interface FooterProps {
  logo: any;
  title1: string;
  title2: string;
  button: string;
  url1: string;
  icon1: any;
  url2:string;
  icon2: any;
  url3: string;
  icon3: any;
  url: string;
}
const Footer: React.FC<FooterProps> = ({logo, title1, title2, button,url1, icon1, url2, icon2, url3, icon3, url}) => {
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
          {title1}
        </a>
        <a href="#team" className="self-stretch my-auto">
          {title2}
        </a>
      </div>
      <div className="flex gap-10 my-auto">
        <div className="flex gap-8 items-start self-start mt-4">
          <a href={url1}>
          <img
            src={icon1}
            alt="Social media 1"
            className="object-contain shrink-0 w-4 aspect-[0.96]"/>
          </a>
          <a href={url2}>
          <img
            src={icon2}
            alt="Social media 2"
            className="object-contain shrink-0 w-4 aspect-[0.96]"/>
          </a>
          <a href={url3}>
          <img
            src={icon3}
            className="object-contain shrink-0 aspect-square w-[17px]"/>
          </a>
        </div>
        <a href={url}><button className="px-6 py-2 text-lg font-medium leading-7 text-white bg-blue-700 rounded-3xl hover:bg-blue-800 transition">{button}</button></a>
      </div>
    </footer>
  );
  
};

export default Footer;

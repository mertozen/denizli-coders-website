interface NavbarProps {
    logo: any;
    title1: string;
    title2: string;
    title3: string;
    button: string;

  }
  const Navbar: React.FC<NavbarProps> = ({logo, title1,title2, title3, button}) => {
   
    return(//navbar
  
      <nav className="relative flex flex-col w-full bg-white">
      <div className="flex items-center justify-between px-1 py-3">

      <img src={logo} alt="Logo" className="object-contain w-[100px] aspect-square" />

      <div className="hidden md:flex gap-20 text-lg font-bold text-blue-700">
        <a href="#about" className="hover:text-blue-500 transition">{title1}</a>
        <a href="#events" className="hover:text-blue-500 transition">{title2}</a>
        <a href="#team" className="hover:text-blue-500 transition">{title3}</a>
      </div>
  
      <button className="px-6 py-2 text-lg font-medium leading-7 text-white bg-blue-700 rounded-3xl hover:bg-blue-800 transition">{button}</button>
      </div>
      </nav>
    )
}

export default Navbar;
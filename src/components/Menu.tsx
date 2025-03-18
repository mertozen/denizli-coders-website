interface MenuProps {
  rooster_coding_image : any;
  main_header: string;
  sub_header: string;
  learn_more_button: string;
}
const Menu: React.FC<MenuProps> = ({rooster_coding_image , main_header, sub_header, learn_more_button}) => {
  return (

<section className="flex flex-col items-center justify-center w-full max-w-[1316px] mx-auto mt-24 max-md:mt-10 px-5">
  <div className="flex items-center justify-center gap-10 w-full max-md:flex-col">
  
    <article className="w-1/2 max-md:w-full text-center md:text-left">
      <div className="tracking-wider">
        <div className="flex flex-col font-medium">
          <h1 className="text-5xl leading-tight text-slate-900 max-md:text-4xl">
            {main_header}
          </h1>
          <h2 className="text-2xl leading-tight mt-2">
            {sub_header}
          </h2>
        </div>

        <a href="#more">
          <button className="px-10 py-3 mt-8 text-xl font-bold bg-blue-700 rounded-3xl text-white">
            {learn_more_button}
          </button>
        </a>
      </div>
    </article>
    
    <div className="w-1/2 max-md:w-full flex justify-center">
      <img
        src={rooster_coding_image}
        alt="Hero illustration"
        className="object-contain w-full max-w-md"
      />
    </div>

  </div>
</section>


  )
};

export default Menu;

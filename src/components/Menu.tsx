interface MenuProps {
  rooster_coding_image : any;
  main_header: string;
  sub_header: string;
  learn_more_button: string;
}
const Menu: React.FC<MenuProps> = ({rooster_coding_image , main_header, sub_header, learn_more_button}) => {
  return (
    

<section className="flex flex-col items-center justify-center w-full max-w-[1316px] mx-auto mt-24 max-md:mt-10 px-5 pt-30">
  <div className="flex items-center justify-center gap-10 w-full max-md:flex-col max-md:gap-6">
    
    <article className="w-1/3 max-md:w-full text-center md:text-left">
      <div className="tracking-normal">
        <div className="flex flex-col font-medium">
          <h1 className="text-6xl leading-tight text-slate-900 max-md:text-4xl max-md:leading-snug">
            {main_header}
          </h1>
          <h2 className="text-2xl leading-[66px] max-md:text-xl max-md:leading-[42px]">
            {sub_header}
          </h2>
        </div>

        <a href="">
          <button className="px-6 py-2 mt-8 text-xl font-bold bg-blue-700 rounded-3xl text-white hover:bg-blue-800 transition max-md:text-lg max-md:px-4 max-md:py-2">
            {learn_more_button}
          </button>
        </a>
      </div>
    </article>
    
    <div className="w-1/3 max-md:w-full flex justify-center">
      <img
        src={rooster_coding_image}
        className="object-contain w-full aspect-square max-md:w-3/4 max-md:max-w-[300px] max-md:mt-6"
      />
    </div>
  </div>
</section>

  )
};

export default Menu;

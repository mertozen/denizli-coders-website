interface MenuProps {
  rooster_coding_image : any;
  main_header: string;
  sub_header: string;
  learn_more_button: string;
}
const Menu: React.FC<MenuProps> = ({rooster_coding_image , main_header, sub_header, learn_more_button}) => {
  return (

<section className="self-end mt-24 w-full max-w-[1316px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full ml-5">
  <div className="flex justify-center gap-5 max-md:flex-col">
    <article className="w-[39%] max-md:ml-0 max-md:w-full">
      <div className="self-stretch my-auto tracking-wider max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col pl-4 font-medium max-md:max-w-full">
          <h1 className="text-5xl leading-[66px] text-slate-900 max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
            {main_header}
          </h1>
          <h2 className="text-2xl leading-[66px]">
            {sub_header}
          </h2>
        </div>

        <a href="#more">
          <button className="overflow-hidden px-14 mt-14 max-w-full text-xl font-bold bg-blue-700 rounded-3xl h-[59px] leading-[30px] text-zinc-100 w-[241px] max-md:px-5 max-md:mt-10">
            {learn_more_button}
          </button>
        </a>
      </div>
    </article>
    
    <div className="ml-5 w-[40%] max-md:ml-0 max-md:w-full">
      <img
        src={rooster_coding_image}
        alt="Hero illustration"
        className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full"
      />
    </div>
  </div>
</section>


  )
};

export default Menu;

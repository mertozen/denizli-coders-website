//import rooster_codes from './assests/rooster_codes.webp'
interface MenuProps {
  image: any;
  description1: string;
  description2: string;
  button1: string;
}
const Menu: React.FC<MenuProps> = ({image, description1, description2, button1}) => {
  return (

<section className="self-end mt-24 w-full max-w-[1316px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex items-center gap-5 max-md:flex-col">
            <article className="w-[69%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto tracking-wider max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col pl-4 font-medium max-md:max-w-full">
                  <h1 className="text-5xl leading-[66px] text-slate-900 max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
                    {description1}
                  </h1>
                  <h2 className="ext-5xl leading-[66px] text-slate-900 max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
                    {description2}
                  </h2>
                </div>

                <a href="#more">
                <button className="overflow-hidden px-14 mt-14 max-w-full text-xl font-bold bg-blue-700 rounded-3xl h-[59px] leading-[30px] text-zinc-100 w-[241px] max-md:px-5 max-md:mt-10">
                   {button1}
                </button>
                </a>
              </div>
            </article>
            
            <div className="mr-5 w-[60%] max-md:mt-0 max-md:w-full">
              <img
                src={image}
                alt="Hero illustration"
                className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </section>

  )
};

export default Menu;

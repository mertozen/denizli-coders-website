interface MenuProps {
  title: string;
}
const Menu: React.FC<MenuProps> = ({ title }) => {
  return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
};

export default Menu;

interface MenuProps {
  title: string;
}
const Menu: React.FC<MenuProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Menu;

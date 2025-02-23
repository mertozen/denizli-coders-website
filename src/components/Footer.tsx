interface FooterProps {
  title: string;
}
const Footer: React.FC<FooterProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Footer;

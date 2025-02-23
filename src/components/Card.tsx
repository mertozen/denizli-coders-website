interface CardProps {
  title: string;
}
const Card: React.FC<CardProps> = ({ title }) => {
  return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
};

export default Card;

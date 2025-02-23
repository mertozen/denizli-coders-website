interface CardProps {
  title: string;
}
const Card: React.FC<CardProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Card;

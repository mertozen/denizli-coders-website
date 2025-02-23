interface EventsProps {
  title: string;
}
const Events: React.FC<EventsProps> = ({ title }) => {
  return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
};

export default Events;

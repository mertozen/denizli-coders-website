interface EventsProps {
  title: string;
}
const Events: React.FC<EventsProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Events;

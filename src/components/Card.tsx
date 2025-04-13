interface CardProps {
  title: string;
  paragraphs: { heading?: string; content: string }[];
  image: string;
  id: string;

}

const Card: React.FC<CardProps> = ({ id, title, paragraphs, image }) => {
  return (
    <section id={id} className="flex flex-row flex-wrap items-center gap-10 w-full max-w-[1161px] mx-auto max-md:flex-col">
      <img
        src={image}
        alt={title}
        className="flex-1 w-full max-w-[500px] max-h-[500px] aspect-square object-cover rounded-[84px] max-md:max-w-full"
      />
      <div className="flex flex-col flex-1 text-slate-900 max-md:max-w-full">
        <h2 className="text-4xl font-bold mb-12">{title}</h2>
        {paragraphs.map((p, i) => (
          <div key={i} className="mb-6 text-base font-medium leading-7">
            {p.heading && (
              <h3 className="text-xl font-bold mb-2">{p.heading}</h3>
            )}
            <p>{p.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;

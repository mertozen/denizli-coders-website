import React from "react";

type CardProps = {
  title: string;
  paragraphs: { heading?: string; content: string }[];
  image: string;
};

const Card: React.FC<CardProps> = ({ title, paragraphs, image }) => {
  return (
    <section className="flex flex-row flex-wrap items-center gap-10 w-full max-w-[1161px] mx-auto max-md:flex-col">
      <img
        src={image}
        alt={title}
        className="flex-1 w-full aspect-square object-cover rounded-[84px] max-md:max-w-full"
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

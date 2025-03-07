import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  image: string;
  imagePosition?: "left" | "right";
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  image,
  imagePosition = "right",
}) => {
  return (
    <div className={`card ${imagePosition === "left" ? "reverse" : ""}`}>
      {/* Metin İçeriği */}
      <div className="card-content">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900 font-['Roboto']">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-2xl font-semibold mb-2 text-gray-700 font-['Roboto']">
            {subtitle}
          </h3>
        )}
        <p className="text-gray-600 text-lg leading-relaxed font-['Roboto']">
          {description}
        </p>
      </div>

      {/* Resim */}
      <div className="card-image">
        <img
          src={image}
          alt={title}
          className="rounded-xl shadow-lg object-cover w-full max-w-[360px]"
        />
      </div>
    </div>
  );
};

export default Card;

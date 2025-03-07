import React from "react";
import projectImage from "../assets/projephoto.webp";

const ProjectCard: React.FC = () => {
  return (
    <div className="project-card p-8 rounded-3xl shadow-lg border border-gray-200 bg-white flex items-center space-x-8">
      <div className="text w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 font-['Roboto'] leading-10">
          Projeler
        </h2>
        <p className="text-black text-base font-medium font-['Roboto'] leading-relaxed mt-4">
          Üyelerimizi projelere dahil ederek teknik destek ve gerçek iş deneyimi
          sunuyoruz.
        </p>
      </div>

      <div className="flex justify-end w-1/2">
        <img
          src={projectImage}
          alt="Projeler"
          className="rounded-3xl shadow-lg object-cover w-full max-w-[320px]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

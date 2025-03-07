import React from "react";
import "./Card.css";
import denizlicodersImage from "../assets/denizlicoders1.png";
import educationImage from "../assets/egitimphoto.webp";
import projectImage from "../assets/projephoto.webp";

const Card: React.FC = () => {
  return (
    <div className="space-y-16 py-12 flex flex-col items-center">
      {/* Vizyon ve Misyon */}
      <div className="card">
        <div className="card-content">
          <h2 className="text-5xl font-medium text-gray-900 font-['Roboto Slab'] leading-[3rem] text-center">
            Vizyon ve Misyonumuz
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4 text-center">
            Denizli’yi yazılım ve teknoloji alanında öncü bir merkeze
            dönüştürmek.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4 text-center">
            Yazılım tutkunlarını bir araya getirerek bilgi paylaşımını artırmak,
            etkinlikler ve eğitimlerle yerel yetenekleri geliştirmek.
          </p>
        </div>
        <div className="card-image">
          <img src={denizlicodersImage} alt="Vizyon ve Misyonumuz" />
        </div>
      </div>

      {/* Eğitimler */}
      <div className="card reverse">
        <div className="card-content">
          <h2 className="text-4xl font-bold text-gray-900 font-['Roboto'] leading-10 text-center">
            Eğitimler
          </h2>
          <p className="text-black text-base font-medium font-['Roboto'] leading-relaxed mt-4 text-center">
            Alanında uzman eğitmenler ve konuklarla, yazılım dünyasında öne
            çıkan mimari ve teknolojileri öğrenin!
          </p>
        </div>
        <div className="card-image">
          <img src={educationImage} alt="Eğitimler" />
        </div>
      </div>

      {/* Projeler */}
      <div className="card">
        <div className="card-content">
          <h2 className="text-4xl font-bold text-gray-900 font-['Roboto'] leading-10 text-center">
            Projeler
          </h2>
          <p className="text-black text-base font-medium font-['Roboto'] leading-relaxed mt-4 text-center">
            Üyelerimizi projelere dahil ederek teknik destek ve gerçek iş
            deneyimi sunuyoruz.
          </p>
        </div>
        <div className="card-image">
          <img src={projectImage} alt="Projeler" />
        </div>
      </div>

      {/* Our Team */}
      <div className="our-team-card">
        <h2 className="our-team-text">Our Team</h2>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./Card";
import denizlicodersImage from "../assets/denizlicoders1.png";
import educationImage from "../assets/egitimphoto.webp";

const MissionAndEducationCards: React.FC = () => {
  return (
    <div className="space-y-16 py-12 flex flex-col items-center">
      <Card
        title="Vizyon ve Misyonumuz"
        subtitle=""
        description={
          <>
            <h3 className="text-5xl font-medium text-gray-900 text-center font-['Roboto Slab'] leading-[3rem]">
              Vizyon ve
              <br />
              Misyonumuz
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mt-4">
              Denizli’yi yazılım ve teknoloji alanında öncü bir merkeze
              dönüştürmek.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mt-4">
              Yazılım tutkunlarını bir araya getirerek bilgi paylaşımını
              artırmak, etkinlikler ve eğitimlerle yerel yetenekleri
              geliştirmek.
            </p>
          </>
        }
        image={denizlicodersImage}
        imagePosition="right"
      />
      <Card
        title="Eğitimler"
        subtitle="Denizli Coders Eğitimleri"
        description="Alanında uzman eğitmenler ve konuklarla..."
        image={educationImage}
        imagePosition="left"
      />
    </div>
  );
};

export default MissionAndEducationCards;

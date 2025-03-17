import React from "react";
import Card from "./components/Card";

import denizlicodersImage from "./assets/denizlicoders1.png";
import educationImage from "./assets/egitimphoto.webp";
import projectImage from "./assets/projephoto.webp";

const cardData = [
  {
    title: "Vizyon ve Misyonumuz",
    paragraphs: [
      {
        heading: "Vizyonumuz",
        content:
          "Denizli’yi yazılım ve teknoloji alanında öncü bir merkeze dönüştürmek.",
      },
      {
        heading: "Misyonumuz",
        content:
          "Yazılım tutkunlarını bir araya getirerek bilgi paylaşımını artırmak, etkinlikler ve eğitimlerle yerel yetenekleri geliştirmek.",
      },
    ],
    image: denizlicodersImage,
  },
  {
    title: "Eğitimler",
    paragraphs: [
      {
        heading: "Denizli Coders Eğitimleri",
        content:
          "Alanında uzman eğitmenler ve konuklarla, yazılım dünyasında öne çıkan mimari ve teknolojileri öğrenin! Teorik bilgiyi pratik uygulamalarla birleştirerek kariyerinizi ileri taşıyın.",
      },
    ],
    image: educationImage,
  },
  {
    title: "Projeler",
    paragraphs: [
      {
        content:
          "Üyelerimizi projelere dahil ederek teknik destek ve gerçek iş deneyimi sunuyoruz.",
      },
    ],
    image: projectImage,
  },
  {
    title: "Our Team",
    paragraphs: [
      {
        heading: "dasdadadsdasadssada",
        content: "sdffggsdgfweadadsdaa",
      },
    ],
    image: "", // Görsel eklemek istersen burada ayarlarsın
  },
];

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center space-y-32 py-32 px-4">
      {cardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          paragraphs={item.paragraphs}
          image={item.image}
        />
      ))}
    </main>
  );
};

export default App;

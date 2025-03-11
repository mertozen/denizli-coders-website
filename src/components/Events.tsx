import { useState } from "react";

interface EventsProps {
  event_title: string;
  images: string[];
}

const Events: React.FC<EventsProps> = ({ event_title, images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (image: string) => {
    const index = images.indexOf(image);
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length]
    );
  };

  return (
    <section className="text-center p-4 sm:p-6">
      <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-left sm:text-center">
        {event_title}
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className="w-32 sm:w-60 h-32 sm:h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center backdrop-blur-md p-4">
          <div className="bg-white p-4 sm:p-10 rounded-lg shadow-lg relative w-[90vw] sm:w-[70vw] max-w-[320px] sm:max-w-[700px] flex flex-col items-center">
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 text-xl sm:text-4xl"
              onClick={handlePrevious}
              aria-label="Previous Image"
            >
              &#8592;
            </button>
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-[250px] sm:w-[550px] h-[250px] sm:h-[550px] object-cover rounded-lg"
            />
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 text-xl sm:text-4xl"
              onClick={handleNext}
              aria-label="Next Image"
            >
              &#8594;
            </button>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl sm:text-3xl"
              onClick={() => {
                setSelectedImage(null);
                setCurrentIndex(0);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;

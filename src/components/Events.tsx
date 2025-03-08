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
    <section className="text-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{event_title}</h2>
      <div className="flex justify-center gap-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className="w-60 h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-opacity-80 flex justify-center items-center backdrop-blur-md">
          <div className="bg-white p-10 rounded-lg shadow-lg relative  w-[70vw] max-w-[700px] flex justify-center">
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 text-4xl transition-transform duration-300 transform hover:scale-110"
              onClick={handlePrevious}
              aria-label="Previous Image "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Selected Images"
              className="w-[550px] h-[550px] object-cover rounded-lg transition-transform duration-300 transform scale-110"
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 text-4xl transition-transform duration-300 transform hover:scale-110"
              onClick={handleNext}
              aria-label="Next Image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              className="absolute top-1 right-2 text-gray-600 hover:text-gray-900 text-3xl"
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

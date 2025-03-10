import React from "react";
import Card from "./components/Card"; // Kart bileşenini tutmaya devam ediyoruz

const App: React.FC = () => {
  return (
    <>
      {/* CSS stillerini style etiketi ile gömdük */}
      <style>
        {`
          #root {
            max-width: 1500px;
            margin: 0 auto;
            text-align: center;
          }

          body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
            max-width: 100%;
          }

          .card-content {
            flex: 1;
            padding: 10px;
          }

          .card-content h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .card-content p {
            font-size: 16px;
            color: #555;
          }

          .card-image {
            flex-shrink: 0;
            width: 40%;
            display: flex;
            justify-content: center;
          }

          .card-image img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
          }

          .project-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
            max-width: 100%;
          }

          .project-card .text {
            width: 50%;
            padding-right: 20px;
          }

          .project-card img {
            width: 50%;
            max-width: 300px;
            height: auto;
            border-radius: 10px;
          }

          @media (max-width: 768px) {
            .card,
            .project-card {
              flex-direction: column;
              text-align: center;
            }

            .card-image,
            .project-card img {
              width: 100%;
            }

            .project-card .text {
              width: 100%;
              padding: 0;
            }
          }
        `}
      </style>

      <div className="container space-y-16 py-16 bg-background flex flex-col items-center">
        <Card />
      </div>
    </>
  );
};

export default App;

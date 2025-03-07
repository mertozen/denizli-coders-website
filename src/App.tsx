import React from "react";
import Card from "./components/Card";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container space-y-16 py-16 bg-background flex flex-col items-center">
      <Card />
    </div>
  );
};

export default App;

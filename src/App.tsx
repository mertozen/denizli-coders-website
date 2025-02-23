import "./App.css";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Menu title={"Menu"} />
      <Card title={"Card"} />
      <Events title={"Events"} />
      <Footer title={"Footer"} />
    </>
  );
}

export default App;

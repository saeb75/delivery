import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import DeleveryWay from "./components/DeleveryWay/DeleveryWay";
import "./App.css";
import Offers from "./components/Offers/Offers";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DeleveryWay />
      <Offers />
    </>
  );
}

export default App;

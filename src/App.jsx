import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import Steps from "./Components/Steps/Steps";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import Summary from "./Components/Summary/Summary";
import Cart from "./Components/Tools/Cart";
import Tools from "./Components/Tools/Tools";
import { ToastContainer } from "react-toastify";

const loadData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const dataPromise = loadData();

function App() {
  const [selectedCard, setSelectedCart] = useState([]);
  const [cartTabActive, setCartTabActive] = useState(false);

  const onCartClick = () => {
    setCartTabActive(true);
    document
      .getElementById("tools-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar selectedCard={selectedCard} onCartClick={onCartClick}></Navbar>
      <Banner></Banner>
      <Summary></Summary>
      <Tools
        dataPromise={dataPromise}
        selectedCard={selectedCard}
        setSelectedCart={setSelectedCart}
        cartTabActive={cartTabActive}
        setCartTabActive={setCartTabActive}
      ></Tools>
      <Steps></Steps>
      <Subscriptions></Subscriptions>
      <CTA></CTA>
      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}

export default App;

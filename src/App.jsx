import "./App.css";
import Banner from "./Components/Banner/Banner";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import Steps from "./Components/Steps/Steps";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import Summary from "./Components/Summary/Summary";
import Tools from "./Components/Tools/Tools";

const loadData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const dataPromise = loadData();

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Summary></Summary>

      <Tools dataPromise={dataPromise}></Tools>

      <Steps></Steps>

      <Subscriptions></Subscriptions>

      <CTA></CTA>

      <Footer></Footer>
    </>
  );
}

export default App;

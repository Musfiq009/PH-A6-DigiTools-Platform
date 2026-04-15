import "./App.css";
import Banner from "./Components/Banner/Banner";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import Steps from "./Components/Steps/Steps";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import Summary from "./Components/Summary/Summary";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Summary></Summary>

      <Tools></Tools>

      <Steps></Steps>

      <Subscriptions></Subscriptions>

      <CTA></CTA>

      <Footer></Footer>
    </>
  );
}

export default App;

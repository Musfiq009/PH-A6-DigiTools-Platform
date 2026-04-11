import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Nav/Navbar";
import Steps from "./Components/Steps/Steps";
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
  </>
  );
}

export default App;

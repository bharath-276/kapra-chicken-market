import Header from "./components/Header";
import TodayRates from "./components/TodayRates";
import OrderNow from "./components/OrderNow";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <TodayRates />
      <OrderNow />
      <Gallery />
      <Contact />
      <Reviews />
    </>
  );
}

export default App;

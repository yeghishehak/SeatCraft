import HeroSection from "../components/Herosection/herosection.jsx";
import About from "./About/About.jsx";
import Store from "./Store/Store.jsx";

function Home() {
  return (
    <div className="homeDiv">
      <HeroSection />
      <About />
      <Store /> 
    </div>
  );
}

export default Home;
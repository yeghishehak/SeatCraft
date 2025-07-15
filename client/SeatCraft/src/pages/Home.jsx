import HeroSection from "../components/Herosection/herosection.jsx";
import About from "./About/About.jsx";
import Store from "./Store/Store.jsx";
import Contact from "./Contact/Contact.jsx";

function Home() {
  return (
    <div className="homeDiv">
      <HeroSection />
      <About />
      <Store /> 
      <Contact />
    </div>
  );
}

export default Home;
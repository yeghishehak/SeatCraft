import HeroSection from "../components/Herosection/herosection.jsx";
import About from "./About/About.jsx";
import Store from "./Store/Store.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <div className="homeDiv">
      <HeroSection />
      <About />
      <Store /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
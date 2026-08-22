import HeroSection from "./components/HeroSection";
import InterestingEventsPartOne from "./components/InterestingEventsPartOne";
import CollegeDropoutSection from "./components/CollegeDropoutSection";
import Ventures from "./components/Ventures";
import InterestingEventsPartTwo from "./components/InterestingEventsPartTwo";
import FunStuffs from "./components/FunStuffs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App site-portfolio">
      <Navbar />
      <HeroSection />
      <InterestingEventsPartOne />
      <CollegeDropoutSection />
      <Ventures />
      <InterestingEventsPartTwo />
      <FunStuffs />
      <Footer />
    </div>
  );
};

export default App;

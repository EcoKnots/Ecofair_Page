import WelcomeOverlay from "./components/WelcomeOverlay";
import EcoFairCarousel from "./components/EcoFairCarousel";
import StallCategories from "./components/StallCategories";
import StickyActions from "./components/StickyActions";
import SingerSection from "./components/SingerSection";
import Footer from "./components/Footer";
import SaveTheDate from "./components/SaveTheDate";

function App() {
  return (
    <div className="min-h-screen bg-[#f6efe6]">
      <SaveTheDate />
      <WelcomeOverlay />
      <EcoFairCarousel />
      <StallCategories />
      <StickyActions />
      <SingerSection />
      <Footer />
    </div>
  );
}

export default App;

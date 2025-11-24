import WelcomeOverlay from "./components/WelcomeOverlay";
import EcoFairCarousel from "./components/EcoFairCarousel";
import StallCategories from "./components/StallCategories";
import StickyActions from "./components/StickyActions";

function App() {
  return (
    <div className="min-h-screen bg-[#f6efe6]">
      <WelcomeOverlay />
      <EcoFairCarousel />
      <StallCategories />
      <StickyActions />
    </div>
  );
}

export default App;

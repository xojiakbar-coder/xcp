import HomeContent from "./HomeContent";
import GlobeAnimation from "./globeAnimation";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-[100vh] min-h-[100vh] relative">
      <div>
        <HomeContent />
        <GlobeAnimation />
      </div>
    </div>
  );
};

export default HomePage;

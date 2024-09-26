import HomeContent from "./HomeContent";
import GlobeAnimation from "./globeAnimation";

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-[100vh] min-h-[100vh] relative">
      <div className="flex justify-center w-full">
        <div className="lg:w-[88%] md:w-[90%] sm:w-[95%] w-[97%]">
          <HomeContent />
        </div>
        <GlobeAnimation />
      </div>
    </div>
  );
};

export default HomePage;

import NavBar from "./components/navBar";
import AdsCarousel from "./components/adsCarousel";
import PopularBuilds from "./components/popularBuilds";
import PreviousBuilds from "./components/previousBuilds";
import PriceAndCategorySelector from "./components/priceAndCetegorySelector";
import SuggestionSection from "./components/suggestionSection"
import Footer from "./components/footer";
import GoogleAds from "./components/googleAds";
function App() {
  return (
    <>
      <div class="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        <NavBar />
        <main class="flex-grow">
          <div class="max-w-7xl mx-auto py-3 px-1 sm:px-6 lg:px-8">
            <AdsCarousel />
            <PopularBuilds />
            <PreviousBuilds />
            <PriceAndCategorySelector />
            <SuggestionSection/>
            <Footer />
            <GoogleAds />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

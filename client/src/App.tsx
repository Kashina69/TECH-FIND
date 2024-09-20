import NavBar from "./components/Nav/navBar";
import AdsCarousel from "./components/adsCarousel";
import PopularBuilds from "./components/Builds/popularBuilds";
import PreviousBuilds from "./components/Builds/previousBuilds";
import PriceAndCategorySelector from "./components/Suggestion/priceAndCetegorySelector";
import SuggestionSection from "./components/Suggestion/suggestionSection"
import Footer from "./components/Bottom/footer";
import GoogleAds from "./components/Bottom/googleAds";
function App() {
  return (
    <>
      <div class="flex flex-col min-h-screen bg-white text-gray-900">
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

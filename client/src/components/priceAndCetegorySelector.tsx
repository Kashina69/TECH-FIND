import BuildButton from "./buildButton"
import CategoryOptions from "./categoryOptions";
import PriceRange from "./priceRange"

export default function PriceCategorySelector() {
  return (
    <div id="buildPc">
      <h2 class="text-2xl font-bold mb-6">Find Your PC </h2>
      <div class="flex justify-center items-center flex-col max-w-full mx-auto mb-12">
        <PriceRange />
        <CategoryOptions />
        <BuildButton />
      </div>
    </div>
  );
}

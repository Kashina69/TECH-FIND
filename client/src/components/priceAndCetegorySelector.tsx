import BuildButton from "./buildButton"
import CategoryOptions from "./categoryOptions";
import PriceRange from "./priceRange"

export default function PriceCategorySelector() {
  return (
    <div id="buildPc" class="flex justify-center items-center flex-col max-w-full mx-auto">
      <PriceRange/>
      <CategoryOptions/>
      <BuildButton/>
    </div>
  );
}

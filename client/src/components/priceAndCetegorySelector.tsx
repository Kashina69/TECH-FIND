import { createSignal } from "solid-js";
import BuildButton from "./buildButton"
import CategoryOptions from "./categoryOptions";


export default function PriceCategorySelector() {
  const [minPrice, setMinPrice] = createSignal(150);
  const [maxPrice, setMaxPrice] = createSignal(1500);
  const handleMinPriceChange = (value: number) => {
    setMinPrice(Math.min(value, maxPrice() - 100));
  };
  const handleMaxPriceChange = (value: number) => {
    setMaxPrice(Math.max(value, minPrice() + 100));
  };
  return (
    <div id="buildPc" class="flex justify-center items-center flex-col max-w-full mx-auto">
      {/* MIN MAX PRICE START */}
      <div class="mb-8">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Minimum Price
          </label>
          <input
            type="range"
            min={150}
            max={1500}
            step={10}
            value={minPrice()}
            onChange={(e) => handleMinPriceChange(Number(e.target.value))}
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Maximum Price
          </label>
          <input
            type="range"
            min={150}
            max={1500}
            step={10}
            value={maxPrice()}
            onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
          />
        </div>
        <div class="flex justify-between">
          <input
            type="text"
            value={`$${minPrice()}`}
            onInput={(e: InputEvent) =>
              handleMinPriceChange(
                parseInt((e.target as HTMLInputElement).value.replace("$", ""))
              )
            }
            class="w-24"
          />
          <input
            type="text"
            value={`$${maxPrice()}`}
            onInput={(e: InputEvent) =>
              handleMaxPriceChange(
                parseInt((e.target as HTMLInputElement).value.replace("$", ""))
              )
            }
            class="w-24"
          />
        </div>
      </div>
      {/* MIN MAX PRICE END */}
      <CategoryOptions/>
      <BuildButton/>
    </div>
  );
}

import { createSignal } from "solid-js";

export default function PriceRangeSlider() {
  const [minPrice, setMinPrice] = createSignal(150);
  const [maxPrice, setMaxPrice] = createSignal(300);
  let rangeRef: HTMLDivElement | undefined;

  const handleMinChange = (e: Event) => {
    const value = Math.min(
      Number((e.target as HTMLInputElement).value),
      maxPrice() - 1
    );
    setMinPrice(value);
  };

  const handleMaxChange = (e: Event) => {
    const value = Math.max(
      Number((e.target as HTMLInputElement).value),
      minPrice() + 1
    );
    setMaxPrice(value);
  };

  const handleStart = (e: MouseEvent | TouchEvent, isMin: boolean) => {
    e.preventDefault();
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (rangeRef) {
        const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const rect = rangeRef.getBoundingClientRect();
        const percent = Math.min(
          Math.max((currentX - rect.left) / rect.width, 0),
          1
        );
        const value = Math.round(percent * 1000);

        if (isMin) {
          setMinPrice(Math.min(value, maxPrice() - 1));
        } else {
          setMaxPrice(Math.max(value, minPrice() + 1));
        }
      }
    };

    const handleEnd = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchend", handleEnd);
  };
  return (
    <div class="w-full max-w-md mx-auto p-4 mb-7 px-6">
      <div class="mb-6 ">
        <div ref={rangeRef} class="relative h-0.5 bg-gray-500 rounded-full">
          <div
            class="absolute h-full bg-black rounded-full"
            style={{
              left: `${(minPrice() / 1000) * 100}%`,
              right: `${100 - (maxPrice() / 1000) * 100}%`,
            }}
          ></div>
          <div
            class="absolute w-3 h-3 border-gray-600 border-[.1px] bg-white rounded-full shadow -mt-1.5 -ml-1.5 cursor-pointer"
            style={{ left: `${(minPrice() / 1000) * 100}%` }}
            onMouseDown={(e) => handleStart(e, true)}
            onTouchStart={(e) => handleStart(e, true)}
          ></div>
          <div
            class="absolute w-3 h-3 border-gray-600 border-[.1px] bg-white rounded-full shadow -mt-1.5 -ml-1.5 cursor-pointer"
            style={{ left: `${(maxPrice() / 1000) * 100}%` }}
            onMouseDown={(e) => handleStart(e, false)}
            onTouchStart={(e) => handleStart(e, false)}
          ></div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="relative">
          <label
            for="min-price"
            class="block text-sm font-medium text-gray-900 mb-1"
          >
            Min Price
          </label>
          <span class="absolute inset-y-0 left-0 pl-3 pt-[1px] flex items-center pointer-events-none text-gray-700 mt-6">
  $
</span>
          <input
            type="number"
            id="min-price"
            value={minPrice()}
            onInput={handleMinChange}
            class="w-24 px-6 py-1 text-sm text-gray-500 rounded-full border border-gray-600 focus:outline-none focus:border-white bg-transparent"
          />
        </div>
        <div class="relative">
          <label
            for="max-price"
            class="block text-sm font-medium text-gray-900 mb-1"
          >
            Max Price
          </label>
          <span class="absolute inset-y-0 left-0 pl-3 pt-[1px] flex items-center pointer-events-none text-gray-700 mt-6">
  $
</span>
          <input
            type="number"
            id="max-price"
            value={maxPrice()}
            onInput={handleMaxChange}
            class="w-24 px-6 py-1 text-sm text-gray-500 rounded-full border border-gray-600 focus:outline-none focus:border-white bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}

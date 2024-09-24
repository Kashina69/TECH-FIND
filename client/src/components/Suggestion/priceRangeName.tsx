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
    <div class="mx-auto w-full">
      <input
        type="text"
        id="buildName"
        placeholder="Build Name"
        class="border-[1px] border-gray-300 focus:border-white dark:border-gray-700 bg-transparent shadow-md mb-6 px-2 py-2 rounded-md w-full text-base text-gray-500 dark:text-white focus:outline-none"
      />
      <div class="border-[1px] border-gray-300 dark:border-gray-700 bg-white dark:bg-[#121212] shadow-md mx-auto mb-6 px-6 p-4 rounded-md w-full">
        <div class="my-6">
          <div
            ref={rangeRef}
            class="relative bg-gray-500 dark:bg-gray-300 rounded-full h-1"
          >
            <div
              class="absolute bg-black dark:bg-white rounded-full h-full"
              style={{
                left: `${(minPrice() / 1000) * 100}%`,
                right: `${100 - (maxPrice() / 1000) * 100}%`,
              }}
            ></div>
            <div
              class="absolute w-10 h-10 cursor-pointer"
              style={{ left: `${(minPrice() / 1000) * 100}%` }}
              onMouseDown={(e) => handleStart(e, true)}
              onTouchStart={(e) => handleStart(e, true)}
            >
              <div class="border-[.1px] border-gray-600 bg-white shadow -mt-[6px] -ml-1.5 rounded-full w-4 h-4"></div>
            </div>

            <div
              class="absolute w-10 h-10 cursor-pointer"
              style={{ left: `${(maxPrice() / 1000) * 100}%` }}
              onMouseDown={(e) => handleStart(e, false)}
              onTouchStart={(e) => handleStart(e, false)}
            >
              <div class="border-[.1px] border-gray-600 bg-white shadow -mt-[6px] -ml-1.5 rounded-full w-4 h-4"></div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="relative">
            <label
              for="min-price"
              class="block mb-1 font-medium text-gray-900 text-lg dark:text-gray-200"
            >
              Min Price
            </label>
            <span class="left-0 absolute inset-y-0 flex items-center mt-[1.9rem] pt-[1px] pl-3 text-gray-700 dark:text-gray-200 pointer-events-none">
              $
            </span>
            <input
              type="number"
              id="min-price"
              value={minPrice()}
              onInput={handleMinChange}
              class="border-gray-600 focus:border-white bg-transparent px-6 py-1 border rounded-md w-24 text-base text-gray-500 dark:text-gray-200 focus:outline-none"
            />
          </div>
          <div class="relative">
            <label
              for="max-price"
              class="block mb-1 font-medium text-gray-900 text-lg dark:text-gray-200"
            >
              Max Price
            </label>
            <span class="left-0 absolute inset-y-0 flex items-center mt-[1.9rem] pt-[1px] pl-3 text-gray-700 dark:text-gray-200 pointer-events-none">
              $
            </span>
            <input
              type="number"
              id="max-price"
              value={maxPrice()}
              onInput={handleMaxChange}
              class="border-gray-600 focus:border-white bg-transparent px-6 py-1 border rounded-md w-24 text-base text-gray-500 dark:text-gray-200 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

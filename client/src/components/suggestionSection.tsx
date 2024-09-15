import { For } from "solid-js";
import amazon from "../assets/amazon.svg";
import flipkart from "../assets/flipkart.svg";
import shop from "../assets/shop.svg";
const components = [
  {
    name: "AMD Ryzen 5 5600X",
    image:
      "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-5-5600x.jpg",
    price: 299,
    rating: 4.8,
    type: "CPU",
  },
  {
    name: "ASUS ROG STRIX GeForce RTX 4070 Ti OC",
    image:
      "https://assets.nvidia.partners/images/png/asus_rog4070Ti_oc_16gb.png",
    price: 799,
    rating: 4.9,
    type: "GPU",
  },
  {
    name: "Corsair Vengeance LPX 32GB",
    image:
      "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/CMK32GX4M2E3200C16/Gallery/VENG_LPX_BLK_02.webp?width=1080&quality=85&auto=webp&format=pjpg",
    price: 159,
    rating: 4.7,
    type: "RAM",
  },
  {
    name: "ASUS ROG STRIX B550-F GAMING",
    image:
      "https://dlcdnwebimgs.asus.com/gain/5bc8ad71-902a-4879-9ab4-9e93f784ef45/w1080/fwebp",
    price: 189,
    rating: 4.6,
    type: "Motherboard",
  },
];

export default function SuggestionSection() {
  return (
    <div class="grid md:grid-cols-2 px-2 gap-3 md:gap-6 mb-10 text-gray-700">
      <For each={components}>
        {(component) => (
          <div class="rounded-lg shadow-md overflow-hidden flex items-center border border-gray-200">
            <div class="h-full w-2/5 rounded-sm border-r-2 border-gray-300">
              <img
                src={component.image}
                alt={component.name}
                class="h-full w-full object-contain rounded-lg transition duration-500 transform hover:scale-105"
              />
            </div>
            <div class="w-3/5 h-full p-4 flex flex-col justify-evenly">
              <div>
                <h3 class="text-lg font-semibold mb-2 truncate whitespace-nowrap overflow-hidden">
                  {component.name}
                </h3>
                <div class="flex justify-between">
                  <p class="text-xl font-bold mb-4">
                    Price: ${component.price}
                  </p>
                  <div class="flex items-center text-base mb-4 mr-2">
                    <svg
                      class="w-7 h-7 text-yellow-400 mr-1 animate-pulse infinite"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{component.rating}</span>
                  </div>
                </div>
              </div>
              <div class="flex space-x-2">
                <button class="flex-1 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <img src={amazon} alt="" srcset="" />
                </button>
                <button class="flex-1 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <img src={flipkart} alt="" srcset="" />
                </button>
                <button class="border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition-colors">
                  <img src={shop} alt="" />
                </button>
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}

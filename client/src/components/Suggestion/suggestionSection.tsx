import { For } from "solid-js";
import amazon from "../../assets/amazon.svg";
import flipkart from "../../assets/flipkart.svg";
import shop from "../../assets/shop.svg";
import externalLink from "../../assets/externalLink.svg";
import phoneCall from "../../assets/phoneCall.svg";
interface Component {
  name: string;
  image: string;
  amazonRating: number;
  flipkartRating: number;
  amazonPrice?: number;
  flipkartPrice?: number;
}

const components: Component[] = [
  {
    name: "AMD Ryzen 5 5600X",
    image:
      "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-5-5600x.jpg",
    amazonRating: 4.8,
    flipkartRating: 4.8,
    amazonPrice: 305,
    flipkartPrice: 299,
  },
  {
    name: "ASUS ROG STRIX GeForce RTX 4070 Ti OC",
    image:
      "https://m.media-amazon.com/images/I/51rUIkqQy3L._SY300_SX300_QL70_FMwebp_.jpg",
    amazonRating: 4.9,
    flipkartRating: 4.9,
    amazonPrice: 799,
    flipkartPrice: 810,
  },
  {
    name: "Corsair Vengeance LPX 32GB",
    image:
      "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/CMK32GX4M2E3200C16/Gallery/VENG_LPX_BLK_02.webp?width=1080&quality=85&auto=webp&format=pjpg",
    amazonRating: 4.7,
    flipkartRating: 4.7,
    amazonPrice: 159,
    flipkartPrice: 155,
  },
  {
    name: "ASUS ROG STRIX B550-F GAMING",
    image:
      "https://dlcdnwebimgs.asus.com/gain/5bc8ad71-902a-4879-9ab4-9e93f784ef45/w1080/fwebp",
    amazonRating: 4.6,
    flipkartRating: 4.6,
    amazonPrice: 189,
    flipkartPrice: 192,
  },
];

export default function SuggestionSection() {
  return (
    <div>
      <h2 class="mb-6 font-bold text-2xl">Our Suggestion</h2>
      <div class="gap-6 grid lg:grid-cols-2 mb-6 px-1 text-gray-700 dark:text-gray-300">
        <For each={components}>
          {(component) => (
            <div class="flex items-center border-gray-200 dark:border-gray-700 shadow-md border rounded-lg overflow-hidden">
              <div class="p-3 w-2/6 h-full">
                <img
                  src={component.image}
                  alt={component.name}
                  class="bg-white rounded-lg w-full h-full transform transition duration-500 object-contain hover:scale-105"
                />
              </div>
              <div class="flex flex-col justify-evenly p-4 w-4/6 h-full">
                <div>
                  <h3 class="mb-2 font-semibold text-base truncate whitespace-nowrap overflow-hidden">
                    {component.name}
                  </h3>
                </div>
                <div class="space-y-2">
                  <a
                    href={`https://amazon.com/s?k=${encodeURIComponent(
                      component.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex justify-between items-center bg-green-100 hover:bg-green-200 p-1 rounded-md transition-colors"
                  >
                    <div class="flex items-center">
                      <img src={amazon} class="mr-2 w-4 h-4" alt="Amazon" />
                      <span class="font-medium text-sm dark:text-gray-700">Amazon</span>
                      <div class="flex items-center ml-2">
                        <span class="text-sm dark:text-gray-700">{component.amazonRating}</span>
                        <svg
                          class="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <span class="flex font-bold text-green-700 text-sm">
                      ${component.amazonPrice}
                      <img src={externalLink} class="ml-2 w-4 h-4" alt="" />
                    </span>
                  </a>
                  <a
                    href={`https://www.flipkart.com/search?q=${encodeURIComponent(
                      component.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex justify-between items-center bg-zinc-100 hover:bg-zinc-200 p-1 rounded-md transition-colors"
                  >
                    <div class="flex items-center">
                      <img src={flipkart} class="mr-2 w-4 h-4" alt="Flipkart" />
                      <span class="font-medium text-sm dark:text-gray-700">Flipkart</span>
                      <div class="flex items-center ml-[.67rem]">
                        <span class="text-sm dark:text-gray-700">{component.flipkartRating}</span>
                        <svg
                          class="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <span class="flex font-bold text-sm dark:text-gray-700">
                      ${component.flipkartPrice}
                      <img src={externalLink} class="ml-2 w-4 h-4" alt="" />
                    </span>
                  </a>
                  <button
                    onClick={() => alert(`Call for local shop pricing`)}
                    class="flex justify-between items-center bg-blue-100 hover:bg-blue-200 p-1 rounded-md w-full transition-colors"
                  >
                    <div class="flex items-center">
                      <img
                        src={shop}
                        class="mr-2 ml-[.12rem] w-4 h-4"
                        alt="Local Shop"
                      />
                      <span class="font-medium text-sm dark:text-gray-700 truncate whitespace-nowrap overflow-hidden">
                        Local Shop
                      </span>
                    </div>
                    <div class="flex items-center">
                      {/* {productData.localShopNumber} */}
                      <span class="text-gray-600 text-sm truncate whitespace-nowrap overflow-hidden">+1234567890</span>
                      <img
                        src={phoneCall}
                        class="ml-2 w-4 h-4"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
      <div class="flex flex-col justify-center items-center gap-3 md:grid grid-cols-3 mx-auto mb-12">
        <a
          href={`https://amazon.com/s?k=${encodeURIComponent("Add to cart")}`}
          target="_blank"
          rel="noopener noreferrer"
          class="flex justify-between items-center bg-green-100 hover:bg-green-200 p-4 rounded-md w-full transition-colors"
        >
          <div class="flex items-center">
            <img src={amazon} class="mr-2 w-4 h-4" alt="Amazon" />
            <span class="font-medium text-sm dark:text-gray-700">Amazon</span>
            <div class="flex items-center ml-2">
              <span class="text-sm dark:text-gray-700">{4.3}</span>
              <svg
                class="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <span class="flex font-bold text-green-700 text-sm">
            ${"978"}
            <img src={externalLink} class="ml-2 w-4 h-4" alt="" />
          </span>
        </a>
        <a
          href={`https://www.flipkart.com/search?q=${encodeURIComponent(
            "Flipkart"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          class="flex justify-between items-center bg-zinc-100 hover:bg-zinc-200 p-4 rounded-md w-full transition-colors"
        >
          <div class="flex items-center">
            <img src={flipkart} class="mr-2 w-4 h-4" alt="Flipkart" />
            <span class="font-medium text-sm dark:text-gray-700">Flipkart</span>
            <div class="flex items-center ml-[.67rem]">
              <span class="text-sm dark:text-gray-700">{4.7}</span>
              <svg
                class="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <span class="flex font-bold text-sm dark:text-gray-700">
            ${"1000"}
            <img src={externalLink} class="ml-2 w-4 h-4" alt="" />
          </span>
        </a>
        <button
          onClick={() => alert(`Call for local shop pricing`)}
          class="flex justify-between items-center bg-blue-100 hover:bg-blue-200 p-4 rounded-md w-full transition-colors"
        >
          <div class="flex items-center">
            <img src={shop} class="mr-2 ml-[.12rem] w-4 h-4" alt="Local Shop" />
            <span class="ml-[.1rem] font-medium text-sm dark:text-gray-700 truncate whitespace-nowrap overflow-hidden">
              Local Shop
            </span>
          </div>
          <div class="flex items-center">
            {/* {productData.localShopNumber} */}
            <span class="text-gray-600 text-sm">+1234567890</span>
            <img src={phoneCall} class="ml-2 w-4 h-4" alt="" srcset="" />
          </div>
        </button>
      </div>
    </div>
  );
}

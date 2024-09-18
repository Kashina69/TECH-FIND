import { For } from "solid-js";
import amazon from "../assets/amazon.svg";
import flipkart from "../assets/flipkart.svg";
import shop from "../assets/shop.svg";
import externalLink from "../assets/externalLink.svg";
import phoneCall from "../assets/phoneCall.svg";
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
      <h2 class="text-2xl font-bold mb-6">Our Suggestion</h2>
      <div class="grid lg:grid-cols-2 px-1 gap-6 text-gray-700 mb-6">
        <For each={components}>
          {(component) => (
            <div class="rounded-lg shadow-md overflow-hidden flex items-center border border-gray-200 ">
              <div class="h-full w-2/6 p-3">
                <img
                  src={component.image}
                  alt={component.name}
                  class="h-full w-full object-contain rounded-lg transition duration-500 transform hover:scale-105"
                />
              </div>
              <div class="w-4/6 h-full p-4 flex flex-col justify-evenly">
                <div>
                  <h3 class="text-base font-semibold mb-2 truncate whitespace-nowrap overflow-hidden">
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
                    class="flex items-center justify-between p-1 rounded-md bg-green-100 hover:bg-green-200 transition-colors"
                  >
                    <div class="flex items-center ">
                      <img src={amazon} class="h-4 w-4 mr-2" alt="Amazon" />
                      <span class="text-sm font-medium">Amazon</span>
                      <div class="flex items-center ml-2">
                        <span class="text-sm">{component.amazonRating}</span>
                        <svg
                          class="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <span class="flex text-sm font-bold text-green-700">
                      ${component.amazonPrice}
                      <img src={externalLink} class="h-4 w-4 ml-2" alt="" />
                    </span>
                  </a>
                  <a
                    href={`https://www.flipkart.com/search?q=${encodeURIComponent(
                      component.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-between p-1 rounded-md bg-zinc-100 hover:bg-zinc-200 transition-colors"
                  >
                    <div class="flex items-center">
                      <img src={flipkart} class="h-4 w-4 mr-2" alt="Flipkart" />
                      <span class="text-sm font-medium">Flipkart</span>
                      <div class="flex items-center ml-[.67rem]">
                        <span class="text-sm">{component.flipkartRating}</span>
                        <svg
                          class="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <span class="flex text-sm font-bold">
                      ${component.flipkartPrice}
                      <img src={externalLink} class="h-4 w-4 ml-2" alt="" />
                    </span>
                  </a>
                  <button
                    onClick={() => alert(`Call for local shop pricing`)}
                    class="w-full flex items-center justify-between p-1 rounded-md bg-blue-100 hover:bg-blue-200 transition-colors "
                  >
                    <div class="flex items-center">
                      <img
                        src={shop}
                        class="h-4 w-4 mr-2 ml-[.12rem]"
                        alt="Local Shop"
                      />
                      <span class="text-sm font-medium truncate whitespace-nowrap overflow-hidden ">
                        Local Shop
                      </span>
                    </div>
                    <div class="flex items-center">
                      {/* {productData.localShopNumber} */}
                      <span class="text-sm text-gray-600">+1234567890</span>
                      <img
                        src={phoneCall}
                        class="w-4 h-4 ml-2"
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
      <div class="md:grid flex flex-col grid-cols-3 justify-center items-center mx-auto gap-3 mb-12">
        <a
          href={`https://amazon.com/s?k=${encodeURIComponent("Add to cart")}`}
          target="_blank"
          rel="noopener noreferrer"
          class="w-full flex items-center justify-between p-4 rounded-md bg-green-100 hover:bg-green-200 transition-colors"
        >
          <div class="flex items-center ">
            <img src={amazon} class="h-4 w-4 mr-2" alt="Amazon" />
            <span class="text-sm font-medium">Amazon</span>
            <div class="flex items-center ml-2">
              <span class="text-sm">{4.3}</span>
              <svg
                class="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <span class="flex text-sm font-bold text-green-700">
            ${"978"}
            <img src={externalLink} class="h-4 w-4 ml-2" alt="" />
          </span>
        </a>
        <a
          href={`https://www.flipkart.com/search?q=${encodeURIComponent(
            "Flipkart"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          class="w-full flex items-center justify-between p-4 rounded-md bg-zinc-100 hover:bg-zinc-200 transition-colors"
        >
          <div class="flex items-center">
            <img src={flipkart} class="h-4 w-4 mr-2" alt="Flipkart" />
            <span class="text-sm font-medium">Flipkart</span>
            <div class="flex items-center ml-[.67rem]">
              <span class="text-sm">{4.7}</span>
              <svg
                class="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <span class="flex text-sm font-bold">
            ${"1000"}
            <img src={externalLink} class="h-4 w-4 ml-2" alt="" />
          </span>
        </a>
        <button
          onClick={() => alert(`Call for local shop pricing`)}
          class="w-full flex items-center justify-between p-4 rounded-md bg-blue-100 hover:bg-blue-200 transition-colors "
        >
          <div class="flex items-center">
            <img src={shop} class="h-4 w-4 mr-2 ml-[.12rem]" alt="Local Shop" />
            <span class="text-sm font-medium ml-[.1rem] truncate whitespace-nowrap overflow-hidden ">
              Local Shop
            </span>
          </div>
          <div class="flex items-center">
            {/* {productData.localShopNumber} */}
            <span class="text-sm text-gray-600">+1234567890</span>
            <img src={phoneCall} class="w-4 h-4 ml-2" alt="" srcset="" />
          </div>
        </button>
      </div>
    </div>
  );
}

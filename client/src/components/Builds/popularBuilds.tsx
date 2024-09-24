import { For } from "solid-js";

const popularBuildsList = [
  {
    name: "Pro Gaming Rig",
    price: 1500,
    cpu: "R7 5800X",
    gpu: "RTX 3080",
    ram: "32GB DDR4",
    image:
      "https://elitehubs.com/cdn/shop/files/1_result_a7d8f868-4962-45aa-9af9-bb7b90f8f1c3.png?v=1723635401",
  },
  {
    name: "Streamer's Choice",
    price: 1200,
    cpu: "i7-11700K",
    gpu: "RTX 3070",
    ram: "32GB DDR4",
    image:
      "https://elitehubs.com/cdn/shop/files/O11black_result_b439d60c-d4d3-44b8-a570-ff0237f09023.png?v=1722420308",
  },
  {
    name: "Budget Beast",
    price: 800,
    cpu: "R5 5600G",
    gpu: "RX 6600",
    ram: "16GB DDR4",
    image:
      "https://elitehubs.com/cdn/shop/files/24_5dad8579-b3c2-4d7e-b318-9922ea56128c.png?v=1722417461",
  },
  {
    name: "Office Powerhouse",
    price: 600,
    cpu: "i5-11400",
    gpu: "GTX 1650",
    ram: "16GB DDR4",
    image:
      "https://elitehubs.com/cdn/shop/files/37_8427ae1c-359e-4b5b-a576-ea9c2d07f7f0.png?v=1721900877",
  },
];
const popularBuilds = () => {
  return (
    <>
      {/* Popular Builds Section */}
      <section class="mb-12">
        <h2 class="mb-6 font-bold text-2xl">Popular Builds</h2>
        <div class="flex space-x-6 pb-4 overflow-x-auto scroll-container">
          <For each={popularBuildsList}>
            {(build) => (
              <div class="flex-none bg-white dark:bg-[#1E1E1E] shadow-md rounded-lg w-72 overflow-hidden">
                <div class="h-56 overflow-hidden">
                <img
                  src={build.image}
                  alt={build.name}
                  class="w-full h-56 duration-500 object-cover hover:scale-105"
                /></div>
                <div class="p-4">
                  <h3 class="mb-2 font-semibold text-lg">{build.name}</h3>
                  <p class="mb-4 font-bold text-2xl">${build.price}</p>
                  <ul class="space-y-2 mb-4">
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide-chevron-right mr-1 text-gray-500 lucide"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span>CPU: {build.cpu}</span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide-chevron-right mr-1 text-gray-500 lucide"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span>GPU: {build.gpu}</span>
                    </li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide-chevron-right mr-1 text-gray-500 lucide"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span>RAM: {build.ram}</span>
                    </li>
                  </ul>
                  <button class="bg-gray-900 dark:hover:bg-gray-300 hover:bg-gray-800 dark:bg-gray-200 px-4 py-2 rounded-md w-full font-semibold text-white dark:hover:text-gray-800 dark:text-gray-900 transition duration-300">
                    View Build
                  </button>
                </div>
              </div>
            )}
          </For>
        </div>
      </section>
    </>
  );
};
export default popularBuilds;

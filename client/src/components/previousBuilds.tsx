import { For } from "solid-js";

const previousBuildsList = [
  {
    name: "My Gaming PC",
    price: 1300,
    cpu: "R5 5600X",
    gpu: "RTX 3060 Ti",
    ram: "16GB DDR4",
    image:
      "https://elitehubs.com/cdn/shop/files/24_5dad8579-b3c2-4d7e-b318-9922ea56128c.png?v=1722417461&width=360",
  },
  {
    name: "Work Station",
    price: 900,
    cpu: "i5-10400",
    gpu: "GTX 1660 Super",
    ram: "32GB DDR4",
    image:
      "https://elitehubs.com/cdn/shop/files/37_8427ae1c-359e-4b5b-a576-ea9c2d07f7f0.png?v=1721900877&width=360",
  },
  {
    name: "HTPC",
    price: 500,
    cpu: "R3 3200G",
    gpu: "Integrated",
    ram: "8GB DDR4",
    image:
      "https://elitehubs.com/cdn/shop/files/1_result_a7d8f868-4962-45aa-9af9-bb7b90f8f1c3.png?v=1723635401&width=360",
  },
];

const previousBuilds = () => {
  return (
    <>
      {/* Your Previous Builds Section */}
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Your Previous Builds</h2>
        <div class="flex overflow-x-auto space-x-6 pb-4 scroll-container">
          <For each={previousBuildsList}>
            {(build) => (
              <div class="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div class="h-56 overflow-hidden">
                <img
                  src={build.image}
                  alt={build.name}
                  class="w-full h-56 object-cover duration-500 hover:scale-105"
                /></div>
                <div class="p-4">
                  <h3 class="text-lg font-semibold mb-2">{build.name}</h3>
                  <p class="text-2xl font-bold mb-4">${build.price}</p>
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
                        class="lucide lucide-chevron-right text-gray-500 mr-1"
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
                        class="lucide lucide-chevron-right text-gray-500 mr-1"
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
                        class="lucide lucide-chevron-right text-gray-500 mr-1"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <span>RAM: {build.ram}</span>
                    </li>
                  </ul>
                  <button class="w-full bg-gray-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
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
export default previousBuilds;

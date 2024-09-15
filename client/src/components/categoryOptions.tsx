import { createSignal, For } from "solid-js";
const categories = [
  {
    name: "Gaming",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Coding",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Office",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
];


export default function CategoryOptions() {
    const [selectedCategories, setSelectedCategories] = createSignal<string[]>(
        []
      );
      const toggleCategory = (category: string) => {
        setSelectedCategories((prev) => {
          if (prev.includes(category)) {
            return prev.filter((c) => c !== category);
          } else if (prev.length < 2) {
            return [...prev, category];
          }
          return prev;
        });
      };
  return (
    <>
      <div class="grid md:grid-cols-3 grid-cols-2 gap-2 mb-4">
        <For each={categories}>
          {(category) => (
            <div
              class={`relative overflow-hidden rounded-lg group cursor-pointer ${
                selectedCategories().includes(category.name)
                  ? "bg-blue-300"
                  : ""
              }`}
              onClick={() => toggleCategory(category.name)}
            >
              <div class="aspect-w-16 aspect-h-10">
                <img
                  src={category.image}
                  alt={category.name}
                  class="w-full h-full object-cover transition-all duration-300 filter brightness-50 blur-sm group-hover:brightness-80 group-hover:blur-0 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white text-lg font-bold z-10 select-none">
                  {category.name}
                </span>
              </div>
              {selectedCategories().includes(category.name) && (
                <div class="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check w-4 h-4"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              )}
            </div>
          )}
        </For>
      </div>
    </>
  );
}

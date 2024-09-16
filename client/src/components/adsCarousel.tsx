import { createSignal, For, createEffect, onCleanup, onMount } from "solid-js";

type HeroSlide = {
  type: "hero";
};

type SponsorSlide = {
  type: "sponsor";
  src: string;
  link: string;
};
type Slide = HeroSlide | SponsorSlide;

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = createSignal(0);
  const [touchStart, setTouchStart] = createSignal(0);
  const [touchEnd, setTouchEnd] = createSignal(0);
  let carouselRef: HTMLDivElement | undefined;

  const sponsorSlides: SponsorSlide[] = [
    {
      type: "sponsor",
      src: "https://storage-asset.msi.com/global/picture/banner/banner_17044515658e515364138934e96d5438363e70708a.jpeg",
      link: "https://storage-asset.msi.com/global/picture/banner/banner_17044515658e515364138934e96d5438363e70708a.jpeg",
    },
    {
      type: "sponsor",
      src: "https://storage-asset.msi.com/global/picture/banner/banner_1724634900dd8adc07354f26bff524257dfaf59783.jpeg",
      link: "https://storage-asset.msi.com/global/picture/banner/banner_1724634900dd8adc07354f26bff524257dfaf59783.jpeg",
    },
    {
      type: "sponsor",
      src: "https://storage-asset.msi.com/global/picture/banner/banner_17207712589aa01c95f32d52e1de4b477d9d37bbdc.jpeg",
      link: "https://storage-asset.msi.com/global/picture/banner/banner_17207712589aa01c95f32d52e1de4b477d9d37bbdc.jpeg",
    },
  ];

  const allSlides: Slide[] = [{ type: "hero" }, ...sponsorSlides];

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart() - touchEnd() > 75) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    }

    if (touchStart() - touchEnd() < -75) {
      // Swipe right
      setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);
    }
  };

  onMount(() => {
    if (carouselRef) {
      carouselRef.addEventListener('touchstart', handleTouchStart, false);
      carouselRef.addEventListener('touchmove', handleTouchMove, false);
      carouselRef.addEventListener('touchend', handleTouchEnd, false);
    }
  });

  onCleanup(() => {
    if (carouselRef) {
      carouselRef.removeEventListener('touchstart', handleTouchStart);
      carouselRef.removeEventListener('touchmove', handleTouchMove);
      carouselRef.removeEventListener('touchend', handleTouchEnd);
    }
  });

  createEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    }, 5000);

    onCleanup(() => clearInterval(timer));
  });

  return (
    <div class="relative rounded-lg overflow-hidden mb-8">
      <div
        ref={carouselRef}
        class="flex transition-transform duration-300 ease-in-out"
        style={`transform: translateX(-${currentSlide() * 100}%)`}
      >
        <For each={allSlides}>
          {(slide, index) => (
            <div class="flex-shrink-0 w-full">
              {slide.type === "hero" ? (
                <a href="#buildPc">
                  <div class="relative md:h-[400px] h-56">
                    <img
                      src="https://in-media.apjonlinecdn.com/magefan_blog/Your_Guide_to_Building_Your_Perfect_Gaming_Setup_at_Home.png"
                      alt="High-performance gaming PC"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div class="text-center px-4">
                        <h1 class="text-4xl font-bold text-white mb-3 select-none">
                          Build Your Dream PC
                        </h1>
                        <p class="text-l text-white mb-6 select-none">
                          Customize, Compare, and Create the Perfect Setup
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <a href={slide.link} target="__blank">
                  <img
                    src={slide.src}
                    alt={`Sponsor Ad ${index()}`}
                    class="w-full h-56 md:h-[400px] object-cover"
                  />
                </a>
              )}
            </div>
          )}
        </For>
      </div>
      <div class="absolute inset-x-0 bottom-0 flex justify-center p-4">
        <div class="flex space-x-2">
          <For each={allSlides}>
            {(_, index) => (
              <button
                class={`w-2 h-2 rounded-full ${
                  index() === currentSlide()
                    ? "bg-white"
                    : "bg-white opacity-50"
                }`}
                onClick={() => setCurrentSlide(index())}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
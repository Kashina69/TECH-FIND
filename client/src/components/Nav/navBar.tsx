import { createSignal, Show } from "solid-js";
import AiChat from "./aiChat";
const NavBar = () => {
  const [isChatOpen, setIsChatOpen] = createSignal(false);
  const toggleChat = () => setIsChatOpen(!isChatOpen());
  return (
    <>
      <header class="sticky top-0 dark:bg-[#121212] bg-white shadow-sm z-50">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-1">
            <div class="flex justify-center items-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                class="dark:hidden h-7 w-7"
                viewBox="0 0 50 50"
              >
                <path
                  d="M0 0 C29.04 0 58.08 0 88 0 C88 29.04 88 58.08 88 88 C58.96 88 29.92 88 0 88 C0 58.96 0 29.92 0 0 Z"
                  fill="none"
                />
                <path
                  d="M0 0 C16.5 0 33 0 50 0 C48 4 48 4 46 7 C44.12060547 7.34057617 44.12060547 7.34057617 41.8671875 7.29296875 C41.06152344 7.28330078 40.25585938 7.27363281 39.42578125 7.26367188 C38.58402344 7.23853516 37.74226563 7.21339844 36.875 7.1875 C36.02550781 7.17396484 35.17601562 7.16042969 34.30078125 7.14648438 C32.20025163 7.11108219 30.10004707 7.05727401 28 7 C28 9.31 28 11.62 28 14 C32.29 14 36.58 14 41 14 C40.34 15.32 39.68 16.64 39 18 C35.37 18 31.74 18 28 18 C28.05800781 19.00417969 28.11601563 20.00835937 28.17578125 21.04296875 C28.56306543 30.89935116 27.32294047 37.9835813 23 47 C22.67 47 22.34 47 22 47 C22 33.8 22 20.6 22 7 C16.06 7 10.12 7 4 7 C0 2 0 2 0 0 Z"
                  fill="#000"
                />
              </svg>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                class="h-7 w-7"
                viewBox="0 0 50 50"
              >
                <path
                  d="M0 0 C29.04 0 58.08 0 88 0 C88 29.04 88 58.08 88 88 C58.96 88 29.92 88 0 88 C0 58.96 0 29.92 0 0 Z"
                  fill="none"
                />
                <path
                  d="M0 0 C16.5 0 33 0 50 0 C48 4 48 4 46 7 C44.12060547 7.34057617 44.12060547 7.34057617 41.8671875 7.29296875 C41.06152344 7.28330078 40.25585938 7.27363281 39.42578125 7.26367188 C38.58402344 7.23853516 37.74226563 7.21339844 36.875 7.1875 C36.02550781 7.17396484 35.17601562 7.16042969 34.30078125 7.14648438 C32.20025163 7.11108219 30.10004707 7.05727401 28 7 C28 9.31 28 11.62 28 14 C32.29 14 36.58 14 41 14 C40.34 15.32 39.68 16.64 39 18 C35.37 18 31.74 18 28 18 C28.05800781 19.00417969 28.11601563 20.00835937 28.17578125 21.04296875 C28.56306543 30.89935116 27.32294047 37.9835813 23 47 C22.67 47 22.34 47 22 47 C22 33.8 22 20.6 22 7 C16.06 7 10.12 7 4 7 C0 2 0 2 0 0 Z"
                  fill="#fff"
                />
              </svg>
              </div>
            <nav class="hidden md:flex space-x-8">
              <a href="#" class="text-sm font-medium hover:text-gray-600">
                Builds
              </a>
              <a href="#" class="text-sm font-medium hover:text-gray-600">
                Components
              </a>
              <a href="#" class="text-sm font-medium hover:text-gray-600">
                About
              </a>
            </nav>
            <button
              class="p-2 rounded-full dark:bg-[#121212] dark:text-white bg-gray-100 text-gray-600"
              onClick={toggleChat}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-bot-message-square"
              >
                <path d="M12 6V2H8" />
                <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
                <path d="M2 12h2" />
                <path d="M9 11v2" />
                <path d="M15 11v2" />
                <path d="M20 12h2" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <Show when={isChatOpen()}>
        <div
          class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
          onClick={toggleChat}
        ></div>
        <div
          class={`fixed inset-y-0 right-0 max-w-screen flex transition-transform duration-300 ease-in-out transform z-30 ${
            isChatOpen() ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div class="md:max-w-md w-screen">
            <div class="flex flex-col dark:bg-[#121212] bg-white shadow-xl">
              <div class="flex-1 overflow-y-auto">
                <AiChat />
              </div>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

export default NavBar;

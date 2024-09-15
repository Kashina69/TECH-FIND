import logo from "../../techfind_logo.svg";
const NavBar = () => {
  return (
    <>
      <header class="sticky top-0 bg-white shadow-sm z-10">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-1">
            <div class="flex items-center">
              <img src={logo} alt="Company Logo" class="h-7 w-h-7" />
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
            <button class="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
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
    </>
  );
};

export default NavBar;

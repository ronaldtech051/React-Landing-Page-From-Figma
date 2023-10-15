import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4">
      <nav
        className=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between space-x-10">
          <a className="flex-none" href="/">
            <img src={Logo} />
          </a>
          <a className="flex  " href="/">
            <h1 className="font-bold">Solutions</h1>
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
              className="text-[#0076CE]"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
          <a className="flex" href="/">
            <h1 className="font-bold">Features</h1>
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
              className="text-[#0076CE]"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
          <a className="flex-none" href="/">
            <h1 className="font-bold">Blogs</h1>
          </a>
          <a className="flex" href="/">
            <h1 className="font-bold">About</h1>
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
              className="text-[#0076CE]"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-image-1"
              aria-controls="navbar-image-1"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-1"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <button className="px-4 p-2 rounded-lg  border-[#0076CE] text-[#0076CE] border-2 font-bold">
              Login
            </button>
            <button className="px-4 p-2 rounded-lg  border-[#0076CE] text-white bg-[#0076CE] border-2 font-bold">
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

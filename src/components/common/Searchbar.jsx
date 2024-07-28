import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };
  return (
    <div className="mx-auto w-full">
      <form className="relative">
        <div className="flex items-center">
          <div className="absolute left-3 flex items-center">
            <IoSearch className="h-6 w-6 fill-color-text" />
          </div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            id="default-search"
            className="block h-12 w-full appearance-none rounded-lg border border-color-sidebar/50 bg-color-tasks-bg pl-12 pr-4 font-todo text-lg text-color-text shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-color-primary lg:h-14"
            placeholder="Search..."
            required
          />
          {searchText && (
            <button
              onClick={handleClear}
              className="absolute right-3 flex items-center"
            >
              <IoClose className="h-6 w-6 text-color-text" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Searchbar;

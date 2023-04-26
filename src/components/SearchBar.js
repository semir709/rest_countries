import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ dark }) => {
  const inputRef = useRef(null);
  return (
    <div
      className={`shadow-md w-full h-full py-3 px-5 rounded-md flex items-center ${
        dark ? "bg-custom-dark-blue" : "bg-custom-white"
      }`}
    >
      <div className="mr-5">
        <label
          onClick={() => (inputRef.current.value = "")}
          className="cursor-pointer"
          htmlFor="search"
        >
          <AiOutlineSearch
            className={`${dark ? "text-white" : "text-custom-dark-gray"}`}
          />
        </label>
      </div>
      <div className="w-full">
        <input
          ref={inputRef}
          autoComplete="off"
          id="search"
          className={`w-full outline-none ${
            dark
              ? "bg-custom-dark-blue text-white placeholder:text-white"
              : "bg-custom-white text-black "
          }`}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};

export default SearchBar;

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ dark }) => {
  return (
    <div className="shadow-md w-full h-full py-3 px-5 rounded-md flex items-center">
      <div className="mr-5">
        <label className="cursor-pointer" htmlFor="search">
          <AiOutlineSearch className="text-custom-dark-gray" />
        </label>
      </div>
      <div className="w-full">
        <input
          autoComplete="off"
          id="search"
          className="w-full outline-none"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};

export default SearchBar;

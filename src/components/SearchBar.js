import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ dark, searchValue, setSearchValue }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const searchFunc = () => {
    console.log("jey");
    if (inputRef.current.value === "") navigate("/");
    else {
      setSearchValue(inputRef.current.value);
      navigate("/search");
    }
  };
  return (
    <div
      className={`drop-shadow-[0px_0px_5px_rgba(0,0,0,0.25)] w-full h-full py-3 px-5 rounded-md flex items-center ${
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
          onInput={searchFunc}
        />
      </div>
    </div>
  );
};

export default SearchBar;

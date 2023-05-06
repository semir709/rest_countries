import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const FilterNav = ({ dark, setSearchValue, searchValue }) => {
  return (
    <div className="my-5 sm:flex flex-wrap justify-between items-center   w-full sm:px-[100px] px-[50px] ">
      <div className="lg:w-1/3 sm:w-1/2 min-[350px]:w-10/12 sm:mb-0 mb-5">
        <SearchBar
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          dark={dark}
        />
      </div>

      <div className="w-[200px] ">
        <Filter dark={dark} />
      </div>
    </div>
  );
};

export default FilterNav;

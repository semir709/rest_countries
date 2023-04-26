import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const FilterNav = () => {
  return (
    <div className="my-5 flex flex-wrap justify-between  w-full sm:px-[100px] px-4">
      <div className="w-1/3">
        <SearchBar />
      </div>

      <div className="w-[200px]">
        <Filter />
      </div>
    </div>
  );
};

export default FilterNav;

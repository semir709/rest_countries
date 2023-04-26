import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const FilterNav = ({ dark }) => {
  return (
    <div className="my-5 flex flex-wrap justify-between  w-full sm:px-[100px] px-4">
      <div className="w-1/3">
        <SearchBar dark={dark} />
      </div>

      <div className="w-[200px]">
        <Filter dark={dark} />
      </div>
    </div>
  );
};

export default FilterNav;

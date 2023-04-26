import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const FilterNav = ({ dark }) => {
  return (
    <div className="my-5 min-[550px]:flex flex-wrap justify-between items-center   w-full sm:px-[100px] px-4">
      <div className="lg:w-1/3 sm:w-1/2 ">
        <SearchBar dark={dark} />
      </div>

      <div className="w-[200px] min-[550px]:my-0 my-[50px]">
        <Filter dark={dark} />
      </div>
    </div>
  );
};

export default FilterNav;

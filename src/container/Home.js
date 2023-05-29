import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";

import "react-loading-skeleton/dist/skeleton.css";
import FilterNav from "../components/FilterNav";
import Search from "./Search";
import { Route, Routes } from "react-router-dom";
import Cards from "./Cards";
import FilterPage from "./FilterPage";

const Home = ({ dark, setDark }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState(null);

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <FilterNav
        dark={dark}
        searchValue={searchValue}
        setFilterData={setFilterData}
        setSearchValue={setSearchValue}
      />

      <Routes>
        <Route
          path="/search"
          element={
            <Search dark={dark} setDark={setDark} searchValue={searchValue} />
          }
        ></Route>
        <Route
          path="/filter"
          element={
            <FilterPage dark={dark} setDark={setDark} filterData={filterData} />
          }
        ></Route>
        <Route
          path="/*"
          element={<Cards dark={dark} setDark={setDark} />}
        ></Route>
      </Routes>
    </>
  );
};

export default Home;

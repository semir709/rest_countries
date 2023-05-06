import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";

import "react-loading-skeleton/dist/skeleton.css";
import FilterNav from "../components/FilterNav";
import Search from "./Search";
import { Route, Routes } from "react-router-dom";
import Cards from "./Cards";

const Home = ({ dark, setDark }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <FilterNav
        dark={dark}
        searchValue={searchValue}
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
          path="/*"
          element={<Cards dark={dark} setDark={setDark} />}
        ></Route>
      </Routes>
    </>
  );
};

export default Home;

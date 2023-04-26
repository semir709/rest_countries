import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import FilterNav from "../components/FilterNav";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Home = ({ dark, setDark }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <FilterNav />

      <div className="flex flex-wrap min-[776px]:justify-between justify-around w-full sm:px-[100px] ">
        {loading
          ? data.map(() => (
              <div className="min-[300px]:w-[280px] w-full h-[300px] my-2 mx-1 shadow-md rounded-md overflow-hidden cursor-pointer">
                {dark ? (
                  <Skeleton
                    height={"100%"}
                    baseColor="hsl(209, 23%, 22%)"
                    highlightColor={"hsl(207, 26%, 17%)"}
                  />
                ) : (
                  <Skeleton height={"100%"} />
                )}
              </div>
            ))
          : data.map(() => <Card dark={dark} />)}
      </div>
    </>
  );
};

export default Home;

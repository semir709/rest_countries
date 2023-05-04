import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import FilterNav from "../components/FilterNav";
import axios from "axios";

const baseUrl =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags";

const Home = ({ dark, setDark }) => {
  const [loading, setLoading] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [data, setData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  const [page, setPage] = useState(1);
  const firstCardIndex = 0;
  const maxCardIndex = useRef(20);

  //skeleton loading
  useEffect(() => {
    setSkeletonLoading(true);
    axios.get(baseUrl).then((obj) => {
      setStoreData(obj.data);
      setSkeletonLoading(false);
    });
  }, []);

  useEffect(() => {
    if (page > 1) {
      // setLoading(true);
      maxCardIndex.current += 20;
      setData(storeData.slice(firstCardIndex, maxCardIndex.current));
      // setLoading(false);
    } else {
      setData(storeData.slice(firstCardIndex, maxCardIndex.current));
    }
  }, [storeData, page]);

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <FilterNav dark={dark} />

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 col-span-full gap-8 w-full sm:px-[100px] px-[50px] my-5">
        {skeletonLoading
          ? Array(12)
              .fill()
              .map(() => (
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
          : data.map((data, index) => (
              <Card key={index} data={data} dark={dark} />
            ))}

        <button onClick={() => setPage((prev) => prev + 1)}>Click</button>
      </div>

      {loading && <p>Loading...</p>}
    </>
  );
};

export default Home;

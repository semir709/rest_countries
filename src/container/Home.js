import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import FilterNav from "../components/FilterNav";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Oval } from "react-loader-spinner";

const baseUrl =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags";

const Home = ({ dark, setDark }) => {
  // const [loading, setLoading] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [data, setData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  // const [page, setPage] = useState(1);
  const firstCardIndex = 0;
  const maxCardIndex = useRef(20);
  const [hasMore, setHasMore] = useState(true);

  //skeleton loading
  useEffect(() => {
    setSkeletonLoading(true);
    axios.get(baseUrl).then((obj) => {
      setStoreData(obj.data);
      setSkeletonLoading(false);
    });
  }, []);

  useEffect(() => {
    setData(storeData.slice(firstCardIndex, maxCardIndex.current));
  }, [storeData]);

  const nextData = () => {
    maxCardIndex.current += 20;
    setData(storeData.slice(firstCardIndex, maxCardIndex.current));

    if (data.length >= storeData.length) setHasMore(false);
  };

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <FilterNav dark={dark} />

      <div>
        {skeletonLoading ? (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 col-span-full gap-8 w-full sm:px-[100px] px-[50px] my-5">
            {Array(12)
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
              ))}
          </div>
        ) : (
          <InfiniteScroll
            // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
            // inverse={true}
            dataLength={data.length} //This is important field to render the next data
            next={nextData}
            hasMore={hasMore}
            loader={
              <div className="w-full flex justify-center my-5">
                <Oval
                  height={40}
                  width={40}
                  color="hsl(200, 15%, 8%)"
                  secondaryColor="hsl(207, 26%, 17%)"
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              </div>
            }
            endMessage={
              <p className="text-center my-5">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 col-span-full gap-8 w-full sm:px-[100px] px-[50px] my-5">
              {data.map((data, index) => (
                <Card key={index} data={data} dark={dark} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Home;

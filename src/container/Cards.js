import { useEffect, useState, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Oval } from "react-loader-spinner";
import Card from "../components/Card";
import Skeleton from "react-loading-skeleton";
import data from "../data.json";

const Cards = ({ dark, setDark }) => {
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const firstCardIndex = 0;
  const [maxCardIndex, setMaxCardIndex] = useState(20);
  const [reduceData, setReduceData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  //filter data
  useEffect(() => {
    setSkeletonLoading(true);
    const filter = data.map(({ name, capital, population, region, flags }) => {
      return { name, capital, population, region, flags };
    });
    setFilterData(filter);
  }, []);

  //reduce data
  useEffect(() => {
    setReduceData(filterData.slice(firstCardIndex, maxCardIndex));

    if (reduceData.length === data.length) setHasMore(false);

    setSkeletonLoading(false);
  }, [filterData, maxCardIndex]);

  const nextData = () => {
    setMaxCardIndex((prev) => prev + 20);
  };
  return (
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
          dataLength={reduceData.length} //This is important field to render the next data
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
            {reduceData.map((data, index) => (
              <Card key={index} data={data} dark={dark} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Cards;

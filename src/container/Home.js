import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Home = ({ dark, setDark }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Header dark={dark} setDark={setDark} />

      <div className="flex flex-wrap min-[776px]:justify-between justify-around w-full sm:px-[100px] ">
        {loading ? "Loading..." : data.map(() => <Card dark={dark} />)}
      </div>
    </>
  );
};

export default Home;

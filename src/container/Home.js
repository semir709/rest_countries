import React from "react";
import Header from "../components/Header";

const Home = ({ dark, setDark }) => {
  return (
    <>
      <Header dark={dark} setDark={setDark} />
    </>
  );
};

export default Home;

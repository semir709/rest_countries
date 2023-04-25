import React from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ dark, setDark }) => {
  return (
    <div
      className={`drop-shadow-md ${
        dark ? "bg-custom-dark-blue" : "bg-custom-white"
      } w-full h-[70px] flex justify-between items-center sm:px-[100px] px-2 `}
    >
      <Link to={"/"}>
        <h1
          className={`font-extrabold sm:text-xl text-lg cursor-pointer ${
            dark === true ? "text-custom-white" : "text-black"
          }`}
        >
          Where in the world?
        </h1>
      </Link>

      <div
        className="flex items-center cursor-pointer"
        onClick={() => setDark((prev) => !prev)}
      >
        <div className="mx-2">
          {dark ? <BsMoonFill color="white" /> : <BsMoon />}
        </div>
        <p
          className={`text-md ${
            dark === true ? "text-custom-light-gray" : "text-black"
          }`}
        >
          Dark mode
        </p>
      </div>
    </div>
  );
};

export default Header;

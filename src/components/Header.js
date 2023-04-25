import React from "react";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="drop-shadow-md bg-white w-full h-[60px] flex justify-between items-center px-[100px] ">
      <Link to={"/"}>
        <h1 className="font-extrabold text-xl cursor-pointer">
          Where in the world?
        </h1>
      </Link>

      <div className="flex items-center cursor-pointer">
        <div className="mx-2">
          <BsMoon />
        </div>
        <span>Dark mode</span>
      </div>
    </div>
  );
};

export default Header;

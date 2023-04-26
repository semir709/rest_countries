import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const list = [
  {
    name: "Africa",
    slug: "africa",
  },
  {
    name: "Asia",
    slug: "asia",
  },
  {
    name: "Europe",
    slug: "europe",
  },
];

const Filter = ({ dark }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setToggle(!toggle)}
        className={`drop-shadow-md w-full h-ful py-3 px-5 rounded-md flex justify-between items-center cursor-pointer ${
          dark ? "bg-custom-dark-blue" : "bg-custom-white"
        }`}
      >
        <p
          className={`text-sm ${
            dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
          }`}
        >
          Filter by Region
        </p>
        <div className={`transition ${toggle && "rotate-180"} `}>
          <IoIosArrowDown
            className={`${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          />
        </div>
      </div>

      {toggle && (
        <div
          className={`absolute top-full w-full shadow-md py-3 px-2 mt-2 rounded-md ${
            dark ? "bg-custom-dark-blue" : "bg-custom-white"
          }`}
        >
          {list.map(({ name, slug }) => (
            <p
              onClick={() => setToggle(false)}
              className={`my-2 mx-2 cursor-pointer rounded-md py-1 px-4 ${
                dark
                  ? "text-custom-white hover:bg-custom--very-dark-blue-bg"
                  : "text-custom-very-dark-blue-text hover:bg-gray-100"
              }`}
              key={slug}
            >
              {name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;

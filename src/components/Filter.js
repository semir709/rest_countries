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

const Filter = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setToggle(!toggle)}
        className="shadow-md w-full h-full bg-custom-white py-3 px-5 rounded-md flex justify-between items-center cursor-pointer"
      >
        <p className="text-sm">Filter by Region</p>
        <div className={`transition ${toggle && "rotate-180"} `}>
          <IoIosArrowDown />
        </div>
      </div>

      {toggle && (
        <div className="absolute top-full w-full shadow-md py-3 px-2 bg-custom-white mt-2 rounded-md">
          {list.map(({ name, slug }) => (
            <p
              onClick={() => setToggle(false)}
              className="my-2 mx-2 cursor-pointer hover:bg-gray-100 rounded-md py-1 px-4"
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

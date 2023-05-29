import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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
  {
    name: "Default",
    slug: "default",
  },
];

const Filter = ({ dark, setFilterData }) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const onFilter = (e) => {
    setToggle(false);
    const filterValue = e.target.innerHTML.toLowerCase();

    if (filterValue === "default") navigate("/");
    else {
      setFilterData(filterValue);
      navigate("/filter");
    }
  };
  return (
    <div className="relative">
      <div
        onClick={() => setToggle(!toggle)}
        className={`drop-shadow-[0px_0px_5px_rgba(0,0,0,0.25)] w-full h-ful py-3 px-5 rounded-md flex justify-between items-center cursor-pointer ${
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
              onClick={onFilter}
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

import React from "react";
import { Link } from "react-router-dom";
const Card = ({ dark, data: { name, capital, population, region, flags } }) => {
  return (
    <Link to={`/country/${name.toLowerCase()}`} className=" w-full ">
      <div className=" h-[390px] my-2 shadow-md rounded-md overflow-hidden cursor-pointer]">
        <div className="w-full h-1/2  ">
          <img className="w-full h-full object-cover " src={flags.svg} alt="" />
        </div>
        <div
          className={`h-full w-full p-5  ${
            dark ? "bg-custom-dark-blue" : "bg-custom-white"
          }`}
        >
          <h3
            className={`font-extrabold text-xl mb-3 ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            {name}
          </h3>
          <p
            className={`text-custom-detail font-semibold ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            Population: <span className="font-normal">{population}</span>
          </p>
          <p
            className={`text-custom-detail font-semibold ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            Region: <span className="font-normal">{region}</span>
          </p>
          <p
            className={`text-custom-detail font-semibold ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            Capital: <span className="font-normal">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

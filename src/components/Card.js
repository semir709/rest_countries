import React from "react";
import { Link } from "react-router-dom";
const Card = ({ dark }) => {
  return (
    <Link to={"/country/albanija"}>
      <div className=" min-[300px]:w-[280px] w-full h-[300px] my-2 mx-1 shadow-md rounded-md overflow-hidden cursor-pointer">
        <div className="w-full h-1/2  ">
          <img
            className="w-full h-full object-cover "
            src="https://flagcdn.com/al.svg"
            alt=""
          />
        </div>
        <div
          className={`h-full w-full p-5 ${
            dark ? "bg-custom-dark-blue" : "bg-custom-white"
          }`}
        >
          <h3
            className={`font-extrabold text-xl mb-3 ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            Albanija
          </h3>
          <p
            className={`text-custom-detail font-extrabold ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            Population: <span className="font-normal">10000</span>
          </p>
          <p
            className={`text-custom-detail font-extrabold ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            Region: <span className="font-normal">10000</span>
          </p>
          <p
            className={`text-custom-detail font-extrabold ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            Capital: <span className="font-normal">10000</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

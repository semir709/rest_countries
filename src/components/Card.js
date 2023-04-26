import React from "react";

const Card = () => {
  return (
    <div className=" min-[300px]:w-[280px] w-full h-[300px] my-2 mx-1 shadow-md rounded-md overflow-hidden">
      <div className="w-full h-1/2  ">
        <img
          className="w-full h-full object-cover "
          src="https://flagcdn.com/al.svg"
          alt=""
        />
      </div>
      <div className="h-full w-full p-5">
        <h3 className="font-extrabold text-xl mb-3">Albanija</h3>
        <p className="text-custom-detail font-extrabold">
          Population: <span className="font-normal">10000</span>
        </p>
        <p className="text-custom-detail font-extrabold">
          Region: <span className="font-normal">10000</span>
        </p>
        <p className="text-custom-detail font-extrabold">
          Capital: <span className="font-normal">10000</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const list = [
  {
    name: "France",
    slug: "france",
  },
  {
    name: "Germany",
    slug: "germany",
  },
  {
    name: "Italy",
    slug: "italy",
  },
];

const Country = ({ dark, setDark }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header dark={dark} setDark={setDark} />

      <div className="my-[40px] sm:px-[100px]">
        <button
          onClick={() => navigate(-1)}
          className=" mb-[50px] drop-shadow-md bg-white w-fit px-5 py-1 rounded-md flex items-center justify-between"
        >
          <div className="me-2">
            <BsArrowLeft />
          </div>
          <p>Back</p>
        </button>

        <div className="flex w-full items-center">
          <div className="w-1/2 h-96">
            <img
              className="w-full h-full object-cover"
              src="https://flagcdn.com/al.svg"
              alt=""
            />
          </div>

          <div className="w-1/2 px-[100px] ">
            <h1 className="font-extrabold text-4xl mb-5">Albanija</h1>

            <div className="flex w-full justify-between text-custom-detail">
              <div>
                <p className="mb-1 font-extrabold">
                  Native names: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-extrabold">
                  Population: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-extrabold">
                  Region: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-extrabold">
                  Sub Region: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-extrabold">
                  Capital: <span className="font-normal">1000</span>
                </p>
              </div>

              <div>
                <p className="mb-1 font-extrabold">
                  Top Level Domain: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-extrabold">
                  Currencies: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-extrabold">
                  Languages: <span className="font-normal">1000</span>
                </p>
              </div>
            </div>

            <div className="flex items-center mt-[80px]">
              <p className="me-2">Border Countries: </p>
              {list.map(({ name, slug }) => (
                <Link to={"/country/slug"}>
                  <div
                    key={slug}
                    className="bg-white drop-shadow-lg text-custom-dark-gray rounded-md px-4 py-1 mx-1"
                  >
                    {name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;

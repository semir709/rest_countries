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

      <div className="my-[40px] sm:px-[100px] px-5 text-custom-detail">
        <button
          onClick={() => navigate("/")}
          className={`mb-[50px] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] w-fit px-5 py-1 rounded-md flex items-center justify-between ${
            dark ? "bg-custom-dark-blue text-custom-light-gray" : "bg-white"
          }`}
        >
          <div className="me-2">
            <BsArrowLeft />
          </div>
          <p>Back</p>
        </button>

        <div className="sm:flex  w-full items-center">
          <div className="sm:w-1/2 sm:h-96 h-fit w-full">
            <img
              className="w-full h-full object-cover"
              src="https://flagcdn.com/al.svg"
              alt=""
            />
          </div>

          <div
            className={`sm:w-1/2 w-full sm:ps-[70px] sm:mt-0 mt-[70px]  ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            <h1 className="font-extrabold sm:text-4xl text-3xl mb-5">
              Albanija
            </h1>

            <div className="flex w-full lg:flex-row flex-col justify-between text-custom-detail">
              <div className="">
                <p className="mb-1 font-semibold text-custom-detail">
                  Native names: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold text-custom-detail">
                  Population: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold text-custom-detail">
                  Region: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold text-custom-detail">
                  Sub Region: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold text-custom-detail">
                  Capital: <span className="font-normal">1000</span>
                </p>
              </div>

              <div>
                <p className="mb-1 font-semibold text-custom-detail lg:mt-0 mt-5">
                  Top Level Domain: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold text-custom-detail">
                  Currencies: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold text-custom-detail">
                  Languages: <span className="font-normal">1000</span>
                </p>
              </div>
            </div>

            <div className="sm:flex items-center mt-[80px] lg:flex-row sm:flex-wrap w-full">
              <p className="me-2 font-semibold text-custom-detail">
                Border Countries:{" "}
              </p>

              <div className="flex flex-wrap">
                {list.map(({ name, slug }) => (
                  <Link to={`/country/${slug}`}>
                    <div
                      key={slug}
                      className={`${
                        dark
                          ? "bg-custom-dark-blue text-custom-light-gray"
                          : "bg-white text-custom-dark-gray"
                      } drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)]  rounded-md px-4 py-1 sm:mx-1 font-normal me-1 my-2 w-[130px] text-center `}
                    >
                      {name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;

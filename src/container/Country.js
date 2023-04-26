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

      <div className="my-[40px] sm:px-[100px] text-custom-detail">
        <button
          onClick={() => navigate("/")}
          className={`mb-[50px] drop-shadow-md w-fit px-5 py-1 rounded-md flex items-center justify-between ${
            dark ? "bg-custom-dark-blue text-custom-light-gray" : "bg-white"
          }`}
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

          <div
            className={`w-1/2 px-[100px] ${
              dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
            }`}
          >
            <h1 className="font-extrabold text-4xl mb-5">Albanija</h1>

            <div className="flex w-full justify-between text-custom-detail">
              <div>
                <p className="mb-1 font-semibold">
                  Native names: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold">
                  Population: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold">
                  Region: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold">
                  Sub Region: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold">
                  Capital: <span className="font-normal">1000</span>
                </p>
              </div>

              <div>
                <p className="mb-1 font-semibold">
                  Top Level Domain: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold">
                  Currencies: <span className="font-normal">1000</span>
                </p>
                <p className="mb-1 font-semibold">
                  Languages: <span className="font-normal">1000</span>
                </p>
              </div>
            </div>

            <div className="flex items-center mt-[80px]">
              <p className="me-2 font-semibold">Border Countries: </p>
              {list.map(({ name, slug }) => (
                <Link to={`/country/${slug}`}>
                  <div
                    key={slug}
                    className={`${
                      dark
                        ? "bg-custom-dark-blue text-custom-light-gray"
                        : "bg-white text-custom-dark-gray"
                    } drop-shadow-lg  rounded-md px-4 py-1 mx-1 font-normal`}
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

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const Country = ({ dark, setDark }) => {
  const navigate = useNavigate();
  const param = useParams();
  const baseUrl = `https://restcountries.com/v3.1/name/${param.countryId}?fields=name,capital,population,region,flags,nativeName,subregion,tld,currencies,languages,borders`;
  const [data, setData] = useState(null);
  const [bordersCoun, setBordersCoun] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((obj) => {
      setData(obj.data[0]);
    });
  }, [baseUrl]);

  useEffect(() => {
    if (data) {
      const url = `https://restcountries.com/v3.1/alpha?codes=${data.borders.map(
        (el) => el
      )}&fields=name`;
      axios.get(url).then((bordersCountry) => {
        setBordersCoun(bordersCountry.data);
      });
    }
  }, [data]);
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

        {data ? (
          <div className="sm:flex  w-full items-center">
            <div className="sm:w-1/2 sm:h-96 h-fit w-full">
              <img
                className="w-full h-full object-cover"
                src={data.flags.svg}
                alt={data.flags.alt}
              />
            </div>

            <div
              className={`sm:w-1/2 w-full sm:ps-[70px] sm:mt-0 mt-[70px]  ${
                dark ? "text-custom-white" : "text-custom-very-dark-blue-text"
              }`}
            >
              <h1 className="font-extrabold sm:text-4xl text-3xl mb-5">
                {data.name.official}
              </h1>

              <div className="flex w-full lg:flex-row flex-col justify-between text-custom-detail">
                <div className="">
                  <p className="mb-1 font-semibold text-custom-detail">
                    Native names:{" "}
                    <span className="font-normal">
                      {Object.values(data.name.nativeName)[0].official}
                    </span>
                  </p>
                  <p className="mb-1 font-semibold text-custom-detail">
                    Population:{" "}
                    <span className="font-normal">{data.population}</span>
                  </p>
                  <p className="mb-1 font-semibold text-custom-detail">
                    Region: <span className="font-normal">{data.region}</span>
                  </p>
                  <p className="mb-1 font-semibold text-custom-detail">
                    Sub Region:{" "}
                    <span className="font-normal">{data.subregion}</span>
                  </p>
                  <p className="mb-1 font-semibold text-custom-detail">
                    Capital: <span className="font-normal">{data.capital}</span>
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-custom-detail lg:mt-0 mt-5">
                    Top Level Domain:{" "}
                    <span className="font-normal">{data.tld}</span>
                  </p>
                  <p className="mb-1 font-semibold text-custom-detail">
                    Currencies:{" "}
                    <span className="font-normal">
                      {Object.values(data.currencies)[0].name}
                    </span>
                  </p>
                  <p className="mb-1 font-semibold text-custom-detail">
                    Languages:{" "}
                    {Object.values(data.languages).map((el) => (
                      <span className="font-normal me-1">{el}</span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="sm:flex items-center mt-[80px] lg:flex-row sm:flex-wrap w-full">
                <p className="me-2 font-semibold text-custom-detail">
                  Border Countries:{" "}
                </p>

                <div className="flex flex-wrap">
                  {bordersCoun.map((el, index) => (
                    <Link to={`/country/${el.name.common}`}>
                      <div
                        key={index}
                        className={`${
                          dark
                            ? "bg-custom-dark-blue text-custom-light-gray"
                            : "bg-white text-custom-dark-gray"
                        } drop-shadow-[0px_0px_2px_rgba(0,0,0,0.25)]  rounded-md px-4 py-1 sm:mx-1 font-normal me-1 my-2 w-[130px] text-center `}
                      >
                        {el.name.common}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="sm:flex  w-full items-center">
            {" "}
            <div className="sm:w-1/2 sm:h-96 h-fit w-full">
              {dark ? (
                <Skeleton
                  className="my-2"
                  height={500}
                  baseColor="hsl(209, 23%, 22%)"
                  highlightColor={"hsl(207, 26%, 17%)"}
                />
              ) : (
                <Skeleton height={500} />
              )}
            </div>
            <div className="sm:w-1/2 w-full sm:ps-[70px] sm:mt-0 mt-[70px]">
              {dark ? (
                <Skeleton
                  className="my-2"
                  height={30}
                  count={6}
                  baseColor="hsl(209, 23%, 22%)"
                  highlightColor={"hsl(207, 26%, 17%)"}
                />
              ) : (
                <Skeleton count={8} height={30} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Country;

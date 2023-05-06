import axios, { all } from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Search = ({ searchValue, dark }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [capital, setCapital] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const urlByName = `https://restcountries.com/v3.1/name/${searchValue}?fields=name,capital,population,region,flags`;
    const urlByCapital = `https://restcountries.com/v3.1/capital/${searchValue}?fields=name,capital,population,region,flags`;

    setLoading(true);

    axios
      .get(urlByName)
      .then((obj) => {
        setName(obj.data.length > 0 ? obj.data : []);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // console.error(error);
          setName([]);
        }
      });

    axios
      .get(urlByCapital)
      .then((obj) => {
        setCapital(obj.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setCapital([]);
        }
      });
  }, [searchValue]);

  useEffect(() => {
    setData([...name, ...capital]);
    setLoading(false);
  }, [name, capital]);

  useEffect(() => {
    console.log(data, "data");
  }, [data]);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 col-span-full gap-8 w-full sm:px-[100px] px-[50px] my-5">
      {loading && <p>Loading...</p>}
      {data.length > 0 ? (
        data.map((data, index) => <Card key={index} data={data} dark={dark} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default Search;

import { useEffect, useState } from "react";
import Card from "../components/Card";
import dataAll from "../data.json";

const Search = ({ searchValue, dark }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(() => {
      return dataAll.filter((el) => {
        return (
          el.name?.toLowerCase().startsWith(searchValue.toLowerCase()) ||
          el.capital?.toLowerCase().startsWith(searchValue.toLowerCase())
        );
      });
    });

    setLoading(false);
  }, [searchValue]);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 col-span-full gap-8 w-full sm:px-[100px] px-[50px] my-5">
      {loading && <p>Loading...</p>}
      {data.length > 0 ? (
        data
          .splice(0, 15)
          .map((data, index) => <Card key={index} data={data} dark={dark} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default Search;

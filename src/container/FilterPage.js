import { useEffect, useState } from "react";
import Card from "../components/Card";
import dataAll from "../data.json";

const FilterPage = ({ filterData, dark }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setData(() => {
      return dataAll.filter((el) => {
        return el.region?.toLowerCase().startsWith(filterData);
      });
    });

    setLoading(false);
  }, [filterData]);

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

export default FilterPage;

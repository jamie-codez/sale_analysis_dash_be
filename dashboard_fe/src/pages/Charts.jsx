import React, { useEffect } from "react";
import ChartGrid from "../components/ChartGrid";
import { useState } from "react";

const Charts = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const params = {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type":"application/json"
      },
    };
    const response = await fetch("http://localhost:8000/api/list", params);
    if (response.status === 200) {
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData.data);
    } else {
      console.log("No data")
      setData(null);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="h-screen mx-10">
      <ChartGrid data={data} />
    </div>
  );
};

export default Charts;

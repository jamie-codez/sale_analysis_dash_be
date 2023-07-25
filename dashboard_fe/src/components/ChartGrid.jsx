import React from "react";
import GrossIncome from "./charts/GrossIncome";

const ChartGrid = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-3">
      <GrossIncome data={data.total_sales_per_branch} />
    </div>
  );
};

export default ChartGrid;

import React from "react";
import { Line } from "react-chartjs-2";

const GrossIncome = ({ data }) => {
  return (
    <div className="w-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h2>{data.label}</h2>
      <Line
        datasetIdKey="id"
        data={{
          labels: data.labels,
          datasets: [
            {
              label: data.label,
              data:data.data,
              backgroundColor:[
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2)'
              ],
              borderColor:[
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)'
              ],
              borderWidth:1
            },
          ],
        }}
      />
    </div>
  );
};

export default GrossIncome;

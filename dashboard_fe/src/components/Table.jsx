import React, { useEffect, useState } from "react";

const Table = () => {
  const [dataList, setDataList] = useState({});
  const getDataList = async () => {
    const params = {
        method:"GET",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        }
    }
    const response = await fetch("http://localhost:8000/api/list",params)
    if(response.status===200){
        const jsonData = await response.json();
        setDataList(jsonData);
    }else{
        setDataList({});
    }
  };

  useEffect(()=>{
    getDataList()
  })
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Invoice ID
              </th>
              <th scope="col" class="px-6 py-3">
                Branch
              </th>
              <th scope="col" class="px-6 py-3">
                City
              </th>
              <th scope="col" class="px-6 py-3">
                Customer Type
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Product line
              </th>
              <th scope="col" class="px-6 py-3">
                Unit Price
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Tax 5%
              </th>
              <th scope="col" class="px-6 py-3">
                Total
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(dataList).map((item, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item}
                  </th>
                  <td className="px-2 py-4">Silver</td>
                  <td className="px-2 py-4">Laptop</td>
                  <td className="px-2 py-4">$2999</td>
                  <td className="px-2 py-4">$2999</td>
                  <td className="px-2 py-4">$2999</td>
                  <td className="px-2 py-4">$2999</td>
                  <td className="px-2 py-4">$2999</td>
                  <td className="px-2 py-4">$2999</td>
                  <td className="px-2 py-4">$2999</td>
                  <td className="px-2 py-4">$2999</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

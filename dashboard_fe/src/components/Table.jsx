import React from "react";
const data = {
  "Invoice ID": {
    0: "750-67-8428",
    1: "226-31-3081",
    2: "631-41-3108",
    3: "123-19-1176",
    4: "373-73-7910",
    5: "699-14-3026",
    6: "355-53-5943",
    7: "315-22-5665",
    8: "665-32-9167",
    9: "692-92-5582",
    10: "351-62-0822",
    11: "529-56-3974",
    12: "365-64-0515",
    13: "252-56-2699",
    14: "829-34-3910",
    15: "299-46-1805",
    16: "656-95-9349",
    17: "765-26-6951",
    18: "329-62-1586",
    19: "319-50-3348",
  },
  Branch: {
    0: "A",
    1: "C",
    2: "A",
    3: "A",
    4: "A",
    5: "C",
    6: "A",
    7: "C",
    8: "A",
    9: "B",
    10: "B",
    11: "B",
    12: "A",
    13: "A",
    14: "A",
    15: "B",
    16: "A",
    17: "A",
    18: "A",
    19: "B",
  },
  City: {
    0: "Yangon",
    1: "Naypyitaw",
    2: "Yangon",
    3: "Yangon",
    4: "Yangon",
    5: "Naypyitaw",
    6: "Yangon",
    7: "Naypyitaw",
    8: "Yangon",
    9: "Mandalay",
    10: "Mandalay",
    11: "Mandalay",
    12: "Yangon",
    13: "Yangon",
    14: "Yangon",
    15: "Mandalay",
    16: "Yangon",
    17: "Yangon",
    18: "Yangon",
    19: "Mandalay",
  },
  "Customer type": {
    0: "Member",
    1: "Normal",
    2: "Normal",
    3: "Member",
    4: "Normal",
    5: "Normal",
    6: "Member",
    7: "Normal",
    8: "Member",
    9: "Member",
    10: "Member",
    11: "Member",
    12: "Normal",
    13: "Normal",
    14: "Normal",
    15: "Member",
    16: "Member",
    17: "Normal",
    18: "Normal",
    19: "Normal",
  },
  Gender: {
    0: "Female",
    1: "Female",
    2: "Male",
    3: "Male",
    4: "Male",
    5: "Male",
    6: "Female",
    7: "Female",
    8: "Female",
    9: "Female",
    10: "Female",
    11: "Male",
    12: "Female",
    13: "Male",
    14: "Female",
    15: "Female",
    16: "Female",
    17: "Male",
    18: "Male",
    19: "Female",
  },
  "Product line": {
    0: "Health and beauty",
    1: "Electronic accessories",
    2: "Home and lifestyle",
    3: "Health and beauty",
    4: "Sports and travel",
    5: "Electronic accessories",
    6: "Electronic accessories",
    7: "Home and lifestyle",
    8: "Health and beauty",
    9: "Food and beverages",
    10: "Fashion accessories",
    11: "Electronic accessories",
    12: "Electronic accessories",
    13: "Food and beverages",
    14: "Health and beauty",
    15: "Sports and travel",
    16: "Health and beauty",
    17: "Sports and travel",
    18: "Food and beverages",
    19: "Home and lifestyle",
  },
  "Unit price": {
    0: 74.69,
    1: 15.28,
    2: 46.33,
    3: 58.22,
    4: 86.31,
    5: 85.39,
    6: 68.84,
    7: 73.56,
    8: 36.26,
    9: 54.84,
    10: 14.48,
    11: 25.51,
    12: 46.95,
    13: 43.19,
    14: 71.38,
    15: 93.72,
    16: 68.93,
    17: 72.61,
    18: 54.67,
    19: 40.3,
  },
  Quantity: {
    0: 7,
    1: 5,
    2: 7,
    3: 8,
    4: 7,
    5: 7,
    6: 6,
    7: 10,
    8: 2,
    9: 3,
    10: 4,
    11: 4,
    12: 5,
    13: 10,
    14: 10,
    15: 6,
    16: 7,
    17: 6,
    18: 3,
    19: 2,
  },
  "Tax 5%": {
    0: 26.1415,
    1: 3.82,
    2: 16.2155,
    3: 23.288,
    4: 30.2085,
    5: 29.8865,
    6: 20.652,
    7: 36.78,
    8: 3.626,
    9: 8.226,
    10: 2.896,
    11: 5.102,
    12: 11.7375,
    13: 21.595,
    14: 35.69,
    15: 28.116,
    16: 24.1255,
    17: 21.783,
    18: 8.2005,
    19: 4.03,
  },
  Total: {
    0: 548.9715,
    1: 80.22,
    2: 340.5255,
    3: 489.048,
    4: 634.3785,
    5: 627.6165,
    6: 433.692,
    7: 772.38,
    8: 76.146,
    9: 172.746,
    10: 60.816,
    11: 107.142,
    12: 246.4875,
    13: 453.495,
    14: 749.49,
    15: 590.436,
    16: 506.6355,
    17: 457.443,
    18: 172.2105,
    19: 84.63,
  },
  Date: {
    0: "2019-01-05T00:00:00",
    1: "2019-03-08T00:00:00",
    2: "2019-03-03T00:00:00",
    3: "2019-01-27T00:00:00",
    4: "2019-02-08T00:00:00",
    5: "2019-03-25T00:00:00",
    6: "2019-02-25T00:00:00",
    7: "2019-02-24T00:00:00",
    8: "2019-01-10T00:00:00",
    9: "2019-02-20T00:00:00",
    10: "2019-02-06T00:00:00",
    11: "2019-03-09T00:00:00",
    12: "2019-02-12T00:00:00",
    13: "2019-02-07T00:00:00",
    14: "2019-03-29T00:00:00",
    15: "2019-01-15T00:00:00",
    16: "2019-03-11T00:00:00",
    17: "2019-01-01T00:00:00",
    18: "2019-01-21T00:00:00",
    19: "2019-03-11T00:00:00",
  },
};

const Table = () => {
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
            {Object.keys(data).map((item, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >{item}
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

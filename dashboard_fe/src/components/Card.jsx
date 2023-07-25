import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, icon }) => {
  return (
    <div>
      <div className="w-50 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {icon}
        <Link href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;

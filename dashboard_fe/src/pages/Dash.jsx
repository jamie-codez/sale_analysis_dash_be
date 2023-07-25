import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Dash = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const params = {
      method: "GET",
      headers: {
        accepts: "application/json",
      },
    };
    const response = await fetch(
      "http://localhost:8000/api/product-lines",
      params
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log(data.product_lines);
      setCategories(data.product_lines);
    } else {
      setCategories([]);
    }
  };
  useEffect(() => {
    getCategories();
  });
  return (
    <div className="h-screen mx-10 flex flex-row space-x-4 mt-4">
      {categories.map((category,index)=>{return <Card data={category}/>})}
    </div>
  );
};

export default Dash;

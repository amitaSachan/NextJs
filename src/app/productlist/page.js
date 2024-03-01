"use client";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [productlist, setProductList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductList(data.products);
      console.log("product list", data.products);
    };
    getProductList();
  }, []);
  return (
    <>
      <h1>List of the product</h1>
      <h2>Product Name is:</h2>
      {productlist.map((item) => {
        return<p>{item.id} {item.title}</p>}
       
      )}
    </>
  );
};
export default ProductList;

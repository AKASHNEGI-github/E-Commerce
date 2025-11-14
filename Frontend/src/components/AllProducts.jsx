import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const { products } = useContext(ShopContext);

  return (
    <>
      <div className="my-10">
        <div className="text-center text-3xl py-8">
          <Title text1={"ALL "} text2={" PRODUCTS"} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;

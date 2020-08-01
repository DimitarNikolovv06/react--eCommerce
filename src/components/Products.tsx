import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsFromApi } from "../actions/product-actions";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(fetchAllProductsFromApi());
  }, [dispatch]);

  return (
    <>
      <div className="products">
        {products.map((p: any, i: number) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </>
  );
};

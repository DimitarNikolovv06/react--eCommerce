import React, { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsFromApi } from "../actions/product-actions";
import { AppState } from "../store/store";
import { Product } from "./AddProduct";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector<AppState, AppState["products"]["products"]>(
    (state) => state["products"]["products"]
  );

  useEffect(() => {
    dispatch(fetchAllProductsFromApi());
  }, [dispatch]);

  return (
    <>
      <div className="products">
        {products.map((p: Product, i: number) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </>
  );
};

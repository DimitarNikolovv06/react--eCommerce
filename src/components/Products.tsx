import React, { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsFromApi } from "../actions/product-actions";
import { AppState } from "../store/store";
import { Product } from "./AddProduct";
import { addNewItem } from "../actions/orders-actions";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: AppState) => state["products"]["products"]
  );

  useEffect(() => {
    dispatch(fetchAllProductsFromApi());
  }, [dispatch]);

  const add = (product: Product) => {
    dispatch(addNewItem(product));
  };

  return (
    <>
      <div className="products">
        {products.map((p: Product, i: number) => (
          <ProductCard key={i} product={p} add={add} />
        ))}
      </div>
    </>
  );
};

import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addNewItem } from "../actions/orders-actions";

export interface ProductProps {
  product: {
    name: string;
    price: number;
    image: string;
  };
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-card">
      <div className="p-image">
        <img width={`100%`} height={`100%`} src={product.image} alt="product" />
      </div>
      <div className="p-info">
        <div className="p-name">
          <p>{product.name}</p>
        </div>
        <div className="buy">
          <button
            style={{ background: "none", border: "none" }}
            onClick={() => dispatch(addNewItem(product))}
          >
            <GiShoppingCart className="buy-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

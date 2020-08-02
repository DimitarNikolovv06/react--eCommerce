import React from "react";
import { GiShoppingCart } from "react-icons/gi";

export interface ProductProps {
  product: {
    name: string;
    price: number;
    image: string;
  };
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
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
          <GiShoppingCart className="buy-icon" />
        </div>
      </div>
    </div>
  );
};

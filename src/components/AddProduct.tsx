import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { addProduct } from "../api/products.api";

interface Product {
  name: string;
  price: number;
  image: string;
}

export const AddProduct: React.FC = () => {
  const [newProduct, setProduct] = useState<Product>({
    name: "",
    price: 0,
    image: "",
  });

  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    const { name, value } = e.target;

    setProduct({
      ...newProduct,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const onSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    addProduct(newProduct)
      .then(() => setSubmitted(!isSubmitted))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isSubmitted && <Redirect to="/products" />}
      <div className="add">
        <div className="new-p">
          <h3>New Product</h3>
        </div>
        <form style={{ width: "100%" }} onSubmit={onSubmit}>
          <div style={{ width: "100%", display: "flex", gap: "15px" }}>
            <input
              required
              style={{ width: "70%" }}
              onChange={onChange}
              name="name"
              placeholder="Product name"
              type="text"
            />

            <input
              required
              style={{ width: "30%" }}
              onChange={onChange}
              name="price"
              placeholder="Price"
              type="text"
            />
          </div>

          <input
            required
            style={{ width: "100%" }}
            onChange={onChange}
            name="image"
            placeholder="Image URL"
            type="text"
          />
          <button className="save-btn" style={{ background: "red" }}>
            Save
          </button>
        </form>
      </div>
      {console.log(newProduct)}
    </>
  );
};

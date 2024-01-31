import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import axios from "axios";

const API_URL = "https://tsec-backend.onrender.com/api/v1/amazon/products";

export const Shop = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${API_URL}?product=${name}`);
      const data = await response.json();
      console.log(data);
      setProducts(data.data.products);
    }
    const timer = setTimeout(() => {
      if (name === "") return;
      fetchProducts();
    }, 1500);

    return () => clearTimeout(timer);
  }, [name]);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop from Amazon</h1>
      </div>

      <input
        type="search"
        placeholder="Search..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="products">
        {products.map((product) => (
          <Product
            id={product.asin}
            name={product.product_title}
            price={product.product_price}
            photo={product.product_photo}
            url={product.product_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;

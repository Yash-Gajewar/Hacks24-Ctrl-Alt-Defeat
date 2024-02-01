import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

const API_URL = "https://"

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
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

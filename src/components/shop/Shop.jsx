import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import UserSidebar from "../UserSidebar";

export const Shop = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = React.useState([]);

  const API_URL = "https://fakestoreapi.com/products";

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
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen">
        <UserSidebar />
      </div>
      <div className="ml-64 p-8"> {/* Adjust the margin left based on your sidebar width */}
        <div className="shopTitle">
          <h1>PedroTech Shop</h1>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

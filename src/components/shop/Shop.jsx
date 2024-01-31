import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import UserSidebar from "../UserSidebar";

export const Shop = () => {
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

import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  // const { addToCart, cartItems } = useContext(ShopContext);

  // const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src="https://images.pexels.com/photos/18696928/pexels-photo-18696928/free-photo-of-river-and-waterfall-with-green-hill-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn">
        Visit Amazon.com
      </button>
    </div>
  );
};

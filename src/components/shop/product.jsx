import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
  const { name, url, price, photo } = props;
  // const { addToCart, cartItems } = useContext(ShopContext);

  // const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={photo} alt="" />
      <div className="description">
        <p>
          <b>{name.split("|")[0]}</b>
        </p>
        <p> ${price}</p>
      </div>
      <a className="addToCartBttn" href={url}>
        Visit Amazon
      </a>
    </div>
  );
};

import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tex = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tex;
  return (
    <div className="cart">
      <h2>Order Sumari</h2>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tex: ${tex}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      {props.children}
    </div>
  );
};

export default Cart;
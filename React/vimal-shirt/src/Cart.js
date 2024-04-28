import React, { useContext } from "react";
import { CartDetails } from "./App";

function Cart() {
  const { cartDetail, setCartDetail } = useContext(CartDetails);
  return (
    <>
      <div>
        <h1>Cart</h1>
      </div>
      {cartDetail.map((product, index) => (
        <div key={index}>
          {`${product.name} - ${product.size} - Rs. ${product.price}`}
        </div>
      ))}
    </>
  );
}
export default Cart;

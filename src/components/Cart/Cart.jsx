import React from "react";
import StyledCart from "./StyledCart";
import Modal from "../UI/Modal";
const Cart = ({ onHideCart }) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal onHideCart={onHideCart}>
      <StyledCart>
        <ul className="cart-items">{cartItems}</ul>
        <div className="total">
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={onHideCart}>
            Close
          </button>
          <button className="button">Order</button>
        </div>
      </StyledCart>
    </Modal>
  );
};

export default Cart;

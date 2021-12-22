import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartCtx from "../../store/CartContext";
const HeaderCart = ({ onShowCart }) => {
  const cartContext = useContext(CartCtx);
  const numberOfCartItems = cartContext.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCart;

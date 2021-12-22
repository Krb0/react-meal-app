import React, { useContext } from "react";
import StyledMealItem from "./StyledMealItem";
import MealItemForm from "./MealItemForm";
import CartCtx from "../../../store/CartContext";
const MealItem = ({ name, description, price, id }) => {
  const formattedPrice = `$${price.toFixed(2)} `;
  const CartContext = useContext(CartCtx);
  const addToCartHandler = (amount) => {
    CartContext.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };
  return (
    <StyledMealItem>
      <div>
        <h3>{name}</h3>
        <div className="description">{description} </div>
        <div className="price">{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm
          id={id}
          name={name}
          price={price}
          onAddToCart={addToCartHandler}
        />
      </div>
    </StyledMealItem>
  );
};

export default MealItem;

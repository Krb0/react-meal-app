import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import { store } from "react-notifications-component";
import StyledMealItemForm from "./StyledMealItemForm";

const notificationHandler = (productName, amount, price) => {
  const fixedPrice = (price * amount).toFixed(2);
  store.addNotification({
    title: "Order Added",
    message: `An order of ${amount} ${productName} added for $${fixedPrice} `,
    type: "default",
    insert: "bottom",
    container: "bottom-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1000,
      onScreen: true,
    },
  });
};

const MealItemForm = ({ name, id, price, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      console.log("hey");
      return;
    }
    onAddToCart(enteredAmountNumber);
  };
  const inputRef = useRef(null);
  return (
    <StyledMealItemForm onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={inputRef}
      />
      <button
        onClick={() => notificationHandler(name, inputRef.current.value, price)}
      >
        + Add
      </button>
      {amountIsValid ? "" : <h2 style={{ color: "red" }}>Error</h2>}
    </StyledMealItemForm>
  );
};

export default MealItemForm;

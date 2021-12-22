import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import ReactNotification from "react-notifications-component";
import CartProvider from "./store/CartProvider";
import "react-notifications-component/dist/theme.css";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <ReactNotification />
      <CartProvider>
        {cartIsShown ? <Cart onHideCart={hideCartHandler} /> : ""}

        <Header onShowCart={showCartHandler} />
      </CartProvider>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

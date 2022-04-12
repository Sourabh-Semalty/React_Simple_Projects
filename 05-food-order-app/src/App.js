import {  useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./components/context/CartProvider";

const App = () => {
  const [isCardShown, setIsCardShown] = useState(false);

  const showCartHandler = () => setIsCardShown(true);
  const hideCardHandler = () => setIsCardShown(false);

  return (
    <CardProvider>
      {isCardShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
};

export default App;

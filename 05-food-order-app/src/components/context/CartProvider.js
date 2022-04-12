import CartContext from "./cart-context";

const CardProvider = (props) => {
  const addItemToCartHandler = () => {};
  const removeItemToCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CardProvider;

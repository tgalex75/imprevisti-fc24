import { createContext, useState, useEffect } from "react";
import { db } from "../Data/db";
import { useLiveQuery } from "dexie-react-hooks";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const prepartita = useLiveQuery(async () => db.prepartita.toArray());
  const settimana = useLiveQuery(async () => db.settimana.toArray());
  const serienegativa = useLiveQuery(async () => db.serienegativa.toArray());
  const speciali = useLiveQuery(async () => db.speciali.toArray());

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // eslint-disable-next-line
  }, []);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.titolo === item.titolo,
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.titolo === item.titolo
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...item }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.titolo === item.titolo,
    );

    if (isItemInCart.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.titolo !== item.titolo),
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.titolo === item.titolo
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        prepartita,
        settimana,
        serienegativa,
        speciali,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

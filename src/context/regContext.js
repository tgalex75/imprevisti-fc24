import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const registroIniziale = [
    {
      prepartita: [],
      settimana: [],
      serienegativa: [],
      speciali: [],
    },
  ];

  const [registro] = useState(() => {
    const saved = localStorage.getItem("vociRegistro");
    return saved ? JSON.parse(saved) : registroIniziale;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // eslint-disable-next-line 
  },[])

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
        registro,
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

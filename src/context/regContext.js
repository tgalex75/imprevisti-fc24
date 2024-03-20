import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [regPrepartita] = useState(() => {
    const saved = localStorage.getItem("regPrepartita");
    return saved ? JSON.parse(saved) : [];
  });
  const [regSettimana] = useState(() => {
    const saved = localStorage.getItem("regSettimana");
    return saved ? JSON.parse(saved) : [];
  });
  const [regSerieNegativa] = useState(() => {
    const saved = localStorage.getItem("regSerieNegativa");
    return saved ? JSON.parse(saved) : [];
  });
  const [regSpeciali] = useState(() => {
    const saved = localStorage.getItem("regSpeciali");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("regPrepartita", JSON.stringify(regPrepartita));
    localStorage.setItem("regSettimana", JSON.stringify(regSettimana));
    localStorage.setItem("regSerieNegativa", JSON.stringify(regSerieNegativa));
    localStorage.setItem("regSpeciali", JSON.stringify(regSpeciali));
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
        regPrepartita,
        regSerieNegativa,
        regSettimana,
        regSpeciali,
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

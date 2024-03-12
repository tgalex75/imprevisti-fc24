import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchDataDB = async () => {
    let { data: registroimprevisti, error } = await supabase
      .from("registroimprevisti")
      .select("*");
      error && console.log("error: ", error);
      setCartItems(registroimprevisti ? registroimprevisti : [])
  };

  useEffect(() => {
    fetchDataDB()
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
      updateValueDBAdd(item, isItemInCart);
    } else {
      setCartItems([...cartItems, { ...item }]);
      insertItem(item);
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
      removeItem(item);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.titolo === item.titolo
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      );
      updateValueDBDel(item, isItemInCart);
    }
  };

  const insertItem = async (impr) => {
    const { data, error } = await supabase
      .from("registroimprevisti")
      .insert([{ titolo: impr.titolo, quantity: impr.quantity }])
      .select();
    data ? console.log("data: ", data) : console.log("error: ", error);
  };

  const removeItem = async (element) => {
    const { error } = await supabase
      .from("registroimprevisti")
      .delete()
      .eq("titolo", element.titolo);
    error && console.log(error);
  };

  const deleteListDB = async () => {
    const { error } = await supabase
      .from("registroimprevisti")
      .delete("id")
      .lt("id", 1000);
    error && console.log(error);
  };

  const updateValueDBAdd = async (item, itemQuantity) => {
    const { data, error } = await supabase
      .from("registroimprevisti")
      .update({
        quantity: itemQuantity.quantity === 3 ? 3 : itemQuantity.quantity + 1,
      })
      .eq("titolo", item.titolo)
      .select();
    data ? console.log("data: ", data) : console.log("error: ", error);
  };

  const updateValueDBDel = async (item, itemQuantity) => {
    const { data, error } = await supabase
      .from("registroimprevisti")
      .update({ quantity: itemQuantity.quantity - 1 })
      .eq("titolo", item.titolo)
      .select();
    data ? console.log("data: ", data) : console.log("error: ", error);
  };

  const clearCart = () => {
    setCartItems([]);
    deleteListDB();
  };

  return (
    <CartContext.Provider
      value={{
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

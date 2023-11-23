import React, { useContext } from "react";
import { CartContext } from "../context/regContext";
import uuid from "react-uuid";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const RegistroSerieNegativa = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  return (
    <>
      {/* Pulsante chiusura Modale */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="absolute bottom-1 left-1 top-1 hidden h-[98%] w-[18vw] items-center gap-2 overflow-hidden rounded-lg bg-black/50 text-gray-300 md:flex md:flex-col"
        >
        <h6 className="uppercase text-yellow-600">Registro degli Imprevisti</h6>{" "}
        {/* Registro */}
        <ul
          className="flex h-full w-full flex-col gap-1 overflow-y-auto px-2 pb-2"
          //style={cartItems.length > 6 ? {} : { justifyContent: "flex-end" }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {cartItems.map((item) => (
              <motion.li
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
                style={
                  item.quantity > 2
                    ? { backgroundColor: "orange", color: "black" }
                    : {}
                }
                className="flex items-center justify-between bg-gray-700/20 ps-1 text-left text-[0.6rem] uppercase"
                key={uuid()}
              >
                <small className="text-sm font-semibold uppercase md:text-lg">
                  {item.title}
                </small>
                <div className="flex items-center gap-1 pr-2 md:gap-4">
                  <MdAddCircleOutline
                    size={18}
                    style={item.quantity > 2 ? { visibility: "hidden" } : {}}
                    className="rounded-full hover:scale-110"
                    onClick={() => {
                      addToCart(item);
                    }}
                  />
                  <small className="mx-2 text-lg font-bold uppercase">
                    {item.quantity >= 3 ? 3 : item.quantity}
                  </small>
                  <MdRemoveCircleOutline
                    onClick={() => {
                      removeFromCart(item);
                    }}
                    size={18}
                    className="rounded-full hover:scale-110"
                  />
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {cartItems.length > 0 ? (
          <div className="flex flex-col items-center justify-between">
            <button
              className="rounded bg-sky-700 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-sky-600 focus:bg-sky-600 focus:outline-none"
              onClick={() => {
                clearCart();
              }}
            >
              Pulisci lista
            </button>
          </div>
        ) : (
          <h1
            style={{ fontFamily: "'Handlee', cursive" }}
            className="text-lg font-bold"
          >
            La lista è vuota
          </h1>
        )}
      </motion.div>
    </>
  );
};

export default RegistroSerieNegativa;

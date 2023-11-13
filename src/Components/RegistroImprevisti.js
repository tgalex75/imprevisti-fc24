import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/regContext";
import uuid from "react-uuid";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import logoSfondo from "../assets/imgs/falco_nocornice.png";

const RegistroImprevisti = ({ showModal, toggle }) => {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  return (
    showModal && (
      <section
        style={{
          backgroundPositionX: "-30%",
          backgroundPositionY: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${logoSfondo})`,
        }}
        className="fixed left-1/2 top-1/2 z-[1200] -mt-2 flex h-[95vh] w-[95vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between gap-4 rounded-xl border-2 border-[--clr-ter] bg-gray-800 p-1 uppercase md:w-screen md:border-4 md:p-8"
      >
        {/* Pulsante chiusura Modale */}
        <motion.div
          className="cursor-pointer self-end"
          whileHover={{
            scale: 1.2,
            rotate: 90,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {" "}
          <MdClose
            size={48}
            onClick={toggle}
            className="fill-gray-300 hover:fill-[--clr-sec]"
          />
        </motion.div>
        <h3
          style={{
            fontFamily: "'Boogaloo', sans-serif",
            filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
          }}
          className="text-2xl text-[--clr-ter] md:text-5xl"
        >
          Registro degli Imprevisti{" "}
        </h3>{" "}
        {/* Registro */}
        <div
          className="flex min-h-[65vh] w-full flex-col-reverse gap-1 overflow-y-auto border-2 border-gray-300/20 p-2 md:min-h-[40vh] md:w-4/5"
          style={cartItems.length > 6 ? {} : { justifyContent: "flex-end" }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {cartItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0,}}
                animate={{ opacity: 1,}}
                exit={{ opacity: 0,}}
                transition={{ duration: 0.7, type: "spring" }}
                style={
                  item.quantity > 2
                    ? { backgroundColor: "orange", color: "black" }
                    : {}
                }
                className="flex items-center justify-between rounded-sm bg-teal-800 px-1 py-1 odd:bg-teal-600 md:px-2"
                key={uuid()}
              >
                <h2 className="text-sm font-semibold uppercase md:text-lg">
                  {item.title}
                </h2>
                <div className="flex items-center gap-1 pr-2 md:gap-4">
                  <MdAddCircleOutline
                    size={"1.8rem"}
                    style={item.quantity > 2 ? { visibility: "hidden" } : {}}
                    className="rounded-full hover:scale-110"
                    onClick={() => {
                      addToCart(item);
                    }}
                  />
                  <h2 className="mx-2 text-lg font-bold uppercase">
                    {item.quantity >= 3 ? 3 : item.quantity}
                  </h2>
                  <MdRemoveCircleOutline
                    onClick={() => {
                      removeFromCart(item);
                    }}
                    size={"1.8rem"}
                    className="rounded-full hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
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
      </section>
    )
  );
};

RegistroImprevisti.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};

export default RegistroImprevisti;

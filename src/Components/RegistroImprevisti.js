import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/cart";
import uuid from "react-uuid";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import {motion} from "framer-motion"
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
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1200] flex p-1 md:p-8 -mt-2 h-[95vh] w-[95vw] md:w-screen flex-col items-center justify-between gap-4 rounded-xl border-2 md:border-4 border-[--clr-ter] bg-gray-800 uppercase"
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
            fontFamily: "'Gochi Hand', cursive",
            filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
          }}
          className="text-2xl md:text-5xl text-[--clr-prim]"
        >
          Registro degli Imprevisti{" "}
        </h3>{" "}
        {/* Registro */}
        <div
          className="flex min-h-[65vh] md:min-h-[40vh] w-full md:w-4/5 flex-col-reverse gap-1 overflow-y-auto border-2 p-2 border-gray-300/20"
          style={cartItems.length > 6 ? {} : { justifyContent: "flex-end" }}
        >
          {cartItems.map((item) => (
            <div
              style={
                item.quantity > 2
                  ? { backgroundColor: "orange", color: "black" }
                  : {}
              }
              className="flex items-center justify-between bg-teal-800 py-1 odd:bg-teal-600 rounded-sm px-1 md:px-2" 
              key={uuid()}
            >
                <h2 className="text-sm md:text-lg font-semibold uppercase">
                  {item.title}
                </h2>
              <div className="flex items-center gap-1 md:gap-4 pr-2">
                <BiPlusCircle
                  size={"1.8rem"}
                  style={item.quantity > 2 ? { visibility: "hidden" } : {}}
                  className="rounded-full hover:scale-110"
                  onClick={() => {
                    addToCart(item);
                  }}
                />
                <h2 className="mx-2 text-lg font-bold uppercase">
                  {item.quantity}
                </h2>
                <BiMinusCircle
                  onClick={() => {
                    removeFromCart(item);
                  }}
                  size={"1.8rem"}
                  className="rounded-full hover:scale-110"
                />
              </div>
            </div>
          ))}
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

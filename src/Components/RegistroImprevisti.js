import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/cart";
import uuid from "react-uuid";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
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
        className="absolute left-1/2 top-1/2 z-[900] flex h-[75vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between gap-2 rounded-xl border-8 border-[--clr-sec] bg-gray-800 p-12 uppercase shadow-xl ring ring-inset ring-white/75"
      >
        <h3
          style={{
            fontFamily: "'Gochi Hand', cursive",
            filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
          }}
          className="text-5xl text-[--clr-prim]"
        >
          Registro degli Imprevisti{" "}
        </h3>{" "}
        {/* Pulsante chiusura Modale */}
        <div className="absolute right-16 top-10">
          <button
            className="rounded bg-orange-700 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-orange-600 focus:bg-orange-600 focus:outline-none"
            onClick={toggle}
          >
            chiudi
          </button>
        </div>
        {/* Registro */}
        <div
          className="flex min-h-[30vh] w-3/4 flex-col-reverse gap-1 overflow-y-auto border-2 border-gray-300/20 p-4"
          style={cartItems.length > 6 ? {} : { justifyContent: "flex-end" }}
        >
          {cartItems.map((item) => (
            <div
              style={
                item.quantity > 2
                  ? { backgroundColor: "orange", color: "black" }
                  : {}
              }
              className="flex items-center justify-between bg-teal-800 py-1 odd:bg-teal-600 "
              key={uuid()}
            >
              <div className="flex gap-4">
                <h2 className="mx-2 text-lg font-bold uppercase">
                  {item.title}
                </h2>
              </div>
              <div className="flex items-center gap-4 pr-2">
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

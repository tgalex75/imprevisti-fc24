import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/cart";
import uuid from "react-uuid";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import logoSfondo from "../assets/imgs/falco_nocornice.png";
import { MdClose } from "react-icons/md";

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
        className="absolute left-1/2 top-1/2 z-[900] flex h-[75vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-xl bg-blue-950 p-3 text-center uppercase shadow-xl ring ring-inset ring-white/75 md:h-[75vh] md:w-[85vw]"
      >
        <div
          className="cursor-pointer self-end"
          whileHover={{
            scale: 1.2,
            rotate: 90,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MdClose
            size={"3rem"}
            onClick={toggle}
            className=" fill-gray-300 hover:fill-[--clr-sec]"
          />
        </div>
        <h3
          style={{
            filter: "drop-shadow(.05rem .05rem 0.1rem #000)",
          }}
          className="text-3xl text-[--clr-ter] md:text-5xl"
        >
          Registro degli Imprevisti{" "}
        </h3>{" "}
        {/* Pulsante chiusura Modale */}
        {/* Registro */}
        <div className="flex min-h-[70%] w-full flex-col-reverse justify-end gap-1 overflow-y-auto border-2 border-gray-300/20 p-2 md:min-h-[45vh] md:w-3/4">
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
          <div className="flex flex-col items-center justify-between pb-6">
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
            
            className="text-lg font-bold pb-4"
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

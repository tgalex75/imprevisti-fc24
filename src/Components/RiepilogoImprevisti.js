import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/cart";
import uuid from "react-uuid";

const RiepilogoImprevisti = ({ showModal, toggle }) => {
    const { cartItems, addToCart, removeFromCart, clearCart } =
        useContext(CartContext);

    return (
        showModal && (
            <div className="flex-col flex items-center bg-slate-300 gap-8 p-10 text-black text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] rounded-lg overflow-hidden">
                <h1 className="text-2xl font-bold">Riepilogo Imprevisti</h1>
                {/* Pulsante chiusura Modale */}
                <div className="absolute right-16 top-10">
                    <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={toggle}
                    >
                        chiudi
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <div
                            style={
                                item.quantity > 2
                                    ? { backgroundColor: "orange" }
                                    : {}
                            }
                            className="flex justify-between items-center"
                            key={uuid()}
                        >
                            <div className="flex gap-4">
                                <h2 className="text-lg font-bold mx-2 uppercase text-slate-700">
                                    {item.tipoImprevisto}
                                </h2>
                                <h2 className="text-lg font-bold mx-2 uppercase">
                                    {item.title}
                                </h2>
                            </div>
                            <div className="flex gap-4">
                                <button
                                style={item.quantity > 2 ? {visibility: "hidden"} : {}}
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        addToCart(item);
                                    }}
                                >
                                    +
                                </button>
                                <h2 className="text-lg font-bold mx-2 uppercase text-slate-700">
                                    {item.quantity}
                                </h2>
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        removeFromCart(item);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length > 0 ? (
                    <div className="flex flex-col justify-between items-center">
                        <button
                            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                clearCart();
                            }}
                        >
                            Pulisci lista
                        </button>
                    </div>
                ) : (
                    <h1 className="text-lg font-bold">La lista è vuota</h1>
                )}
            </div>
        )
    );
};

RiepilogoImprevisti.propTypes = {
    showModal: PropTypes.bool,
    toggle: PropTypes.func,
};

export default RiepilogoImprevisti;

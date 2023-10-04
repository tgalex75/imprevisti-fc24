import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/cart";

const RiepilogoImprevisti = ({ showModal, toggle }) => {
    const { cartItems, addToCart, removeFromCart, clearCart } =
        useContext(CartContext);

    return (
        showModal && (
            <div className="flex-col flex items-center bg-slate-300 gap-8 p-10 text-black text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] rounded-lg overflow-hidden">
                <h1 className="text-2xl font-bold">Riepilogo Imprevisti</h1>

                <div className="absolute right-16 top-10">
                    <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={toggle}
                    >
                        Close
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <div
                            className="flex justify-between items-center"
                            key={item.id}
                        >
                            <div className="flex gap-4">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="rounded-md h-24"
                                />
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-bold">
                                        {item.title}
                                    </h1>
                                    <p className="text-gray-600">
                                        {item.price}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    onClick={() => {
                                        addToCart(item);
                                    }}
                                >
                                    +
                                </button>
                                <p>{item.quantity}</p>
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
                        <h1 className="text-lg font-bold">Total: $</h1>
                        <button
                            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                clearCart();
                            }}
                        >
                            Clear cart
                        </button>
                    </div>
                ) : (
                    <h1 className="text-lg font-bold">La lista è vuota</h1>
                )}
                <div className="p-12 overflow-y-scroll overflow-x-hidden w-3/4 h-[20vh]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum veritatis quia commodi cumque optio. Praesentium
                    consequuntur expedita eligendi corporis assumenda beatae,
                    delectus sunt neque itaque tempora ex inventore iusto.
                    Inventore, esse iusto! Ipsa mollitia, aspernatur commodi
                    reiciendis eum alias facere voluptatibus ullam pariatur
                    architecto iure, aliquam similique tenetur iusto blanditiis
                    omnis. Itaque illum cumque ea cupiditate. Harum accusantium
                    asperiores, id voluptatem eum quia similique cupiditate ex
                    numquam labore delectus sed sint minus porro facere minima
                    nisi deserunt accusamus provident recusandae alias. Eveniet
                    repellat placeat obcaecati atque ipsa iusto perspiciatis
                    nesciunt quam eaque nulla at fugiat commodi, aperiam
                    deserunt adipisci. Distinctio earum minus eum adipisci
                    consequatur dolorum totam soluta atque temporibus suscipit
                    facilis recusandae, quaerat necessitatibus voluptatum
                    dolorem deleniti natus nobis nisi, nulla at voluptatibus
                    sunt? Fugiat illum quia debitis optio dolores dolorum saepe
                    explicabo sapiente, dicta, ab pariatur cupiditate nostrum ut
                    dolor, vero soluta. Maxime, dicta facere! Obcaecati fuga quo
                    eaque recusandae maiores aut, est ex ratione sunt quisquam
                    quibusdam. Officia, rerum necessitatibus culpa, fugiat
                    officiis nobis quisquam, consequatur harum voluptates
                    impedit sed saepe cumque repellendus atque dignissimos
                    maxime voluptas provident tempora corporis ullam. Doloremque
                    facere odio consequuntur rem atque eligendi distinctio porro
                    saepe in aut aliquid ea dolores sint voluptas magnam nostrum
                    omnis quam nisi iure consequatur, ipsam soluta error
                    praesentium! Hic corporis quasi nulla quo aut vero sunt
                    iusto corrupti iure temporibus odit incidunt neque natus
                    dolores, ullam illum dolorum reiciendis ex recusandae
                    placeat inventore cupiditate fugiat. Eaque aliquid magni
                    nemo distinctio exercitationem. Error perspiciatis vitae
                    sint sapiente, delectus quia, beatae commodi praesentium
                    placeat nisi ipsam ab. Exercitationem, maxime nisi
                    cupiditate saepe eius repellendus architecto quasi et
                    accusamus explicabo at, reiciendis deleniti labore, vero
                    quam quae hic molestias sed error. Numquam itaque suscipit
                    quidem culpa, laudantium perspiciatis expedita error iure
                    iusto rem totam dolores debitis quam quibusdam laborum fuga?
                    Minus dignissimos porro tempora iure at nesciunt commodi eum
                    possimus eos nobis voluptas eaque, architecto tenetur sunt,
                    ea eveniet amet nam voluptates, ullam ab atque reiciendis ad
                    alias? Natus ut perferendis assumenda. Expedita maxime
                    accusantium cumque, ullam repellat sed? Eligendi, quos?
                    Recusandae doloremque sed, pariatur quis, ab incidunt
                    accusantium sit, totam blanditiis molestias in error nulla
                    commodi dolorum saepe. Quibusdam asperiores aut pariatur qui
                    perferendis alias molestias fuga. Sunt quis est repellendus
                    ipsam consequatur suscipit quibusdam assumenda voluptas!
                    Iste tempore doloremque, omnis voluptatum, nobis officia
                    impedit cumque vel sunt delectus tempora eos dolore!
                    Doloremque quis sint necessitatibus temporibus! Nobis
                    voluptas aliquam, eos magni commodi perspiciatis laudantium
                    consequatur exercitationem, velit neque ipsum esse corrupti
                    non a id maiores! Libero optio dolorem, ex adipisci impedit
                    neque unde, ratione amet alias perspiciatis numquam? Facilis
                    laudantium fugit officiis tempore laborum a architecto
                    pariatur fugiat ducimus accusamus voluptas reiciendis
                    quisquam soluta dolores, assumenda blanditiis eos error
                    itaque ea beatae maiores repudiandae. Quod ipsa,
                    reprehenderit inventore aperiam magni quasi quae ea
                    molestiae pariatur voluptate, id, vero numquam mollitia!
                    Beatae nobis non quae. At eveniet quia dolorem vitae
                    praesentium, nulla dicta, repellendus assumenda, aliquam
                    officia libero aperiam possimus veritatis quibusdam labore
                    esse maiores numquam modi tenetur! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Dolor eligendi quod
                    blanditiis corporis cupiditate illum expedita non eos ab
                    quis repudiandae minus eveniet aliquid, sint voluptatibus
                    accusantium illo explicabo iusto nostrum nobis eaque. Culpa
                    veniam doloribus excepturi asperiores? Fugiat molestias
                    nesciunt est pariatur. Consequatur deleniti et minus.
                </div>
            </div>
        )
    );
};

RiepilogoImprevisti.propTypes = {
    showModal: PropTypes.bool,
    toggle: PropTypes.func,
};

export default RiepilogoImprevisti;

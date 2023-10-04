import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import App from "./App";
import { CartProvider } from "./context/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <CartProvider>
            <App />
        </CartProvider>
    </>
);

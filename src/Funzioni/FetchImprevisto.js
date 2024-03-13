import { useState, useEffect } from "react";

export default function FetchData() {
  const [imprevisto, setImprevisto] = useState(() => {
    const saved = localStorage.getItem("imprevisto");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("imprevisti", JSON.stringify(cartItems));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      delElemento();
    }, 2000);
  });

  const delElemento = (item) => {
    setImprevisto(
        imprevisto.filter((impr) => impr.id !== item.id),
      );
  };

  return (
    <section id="FetchImprevisto" className="flex md:h-full flex-col gap-8">
      <h4 className="text-2xl uppercase md:text-5xl font-extrabold">{imprevisto.titolo}</h4>
      <p
        style={{ fontFamily: "'Handlee', cursive" }}
        className={`h-fit flex-1 overflow-y-auto px-4 ${
          imprevisto.descrizione && imprevisto.descrizione.length > 200
            ? "text-sm md:text-xl"
            : "text-xl md:text-3xl"
        }`}
      >
        {imprevisto.descrizione}
      </p>
    </section>
  );
}

import { useState } from "react";

export default function FetchData() {
  const [imprevisti] = useState(() => {
    const saved = localStorage.getItem("regSpeciali");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  /* useEffect(() => {
    localStorage.setItem("imprevisti", JSON.stringify(imprevisti));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      delElemento();
    }, 2000);
  });

  const delElemento = (item) => {
    setImprevisti(
        imprevisti.filter((impr) => impr.id !== item.id),
      );
  }; */

  return (
    <section id="FetchImprevisto" className="flex md:h-full flex-col gap-8">
      <h4 className="text-2xl uppercase md:text-5xl font-extrabold">{imprevisti.titolo}</h4>
      <p
        style={{ fontFamily: "'Handlee', cursive" }}
        className={`h-fit flex-1 overflow-y-auto px-4 ${
          imprevisti.descrizione && imprevisti.descrizione.length > 200
            ? "text-sm md:text-xl"
            : "text-xl md:text-3xl"
        }`}
      >
        {imprevisti.descrizione}
      </p>
    </section>
  );
}

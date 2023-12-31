import React, { useState, useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import ModuloTattica from "../Components/ModuloTattica";
import {
  tattiche,
  mySelect,
  arrayRange,
  data,
  listaTattiche,
} from "../Funzioni/schemi";

const giocatoreNum = isMobile ? "G n. " : "Giocatore n. ";
const overallPlaceholder = isMobile ? "OV" : "Overall";

const MediaOverall = () => {
  const selectRef = useRef(null);
  const [schema, setSchema] = useState("4-2-1-3");

  const filteredTactics = listaTattiche.filter((item) => item.nome === schema);

  useEffect(() => {
    setValues(null);
  }, [schema]);

  const getSchema = () => {
    setSchema(selectRef.current.value);
  };

  let valoriOverall = arrayRange(58, 99, 1);

  const [values, setValues] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  let sum = 0;

  const calcolaMedia = () => {
    for (let i in values) {
      sum += parseFloat(values[i]);
    }
    return (sum / 11).toFixed();
  };

  const result = calcolaMedia();

  const tactics = (arr, func, val) => {
    return (
      <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
        {filteredTactics[0].formazione.map((el, i, array) => (
          <ModuloTattica
            key={i}
            arr={arr}
            start={el === 1 ? 0 : array[i - 1]}
            end={el}
            giocatoreNum={giocatoreNum}
            func={func}
            placeholder={overallPlaceholder}
            val={val}
          />
        ))}
      </section>
    );
  };

  return (
    <main
      id="media--overall"
      className="flex h-full w-full flex-col items-center justify-around gap-2 bg-black/30 "
    >
      <h1>Media Overall</h1>
      <div className="md:self-end md:pe-6">
        {mySelect("Scegli la tattica", selectRef, getSchema, tattiche)}
      </div>
      {schema && tactics(data, handleChange, valoriOverall)}
      <div
        style={result < 1 ? { visibility: "hidden" } : {}}
        className="mb-4 rounded-xl border-2 border-[--clr-prim] px-8 py-2 text-center font-bold ring ring-inset ring-white/75 md:me-8 md:self-end md:border-8 md:px-20"
      >
        <span className="text-md md:text-xl">Media:</span>
        <h4 className="text-6xl md:text-9xl">{result}</h4>
        <p className="md:text-md text-sm">
          Limite massimo: {parseInt(result) + 3}
        </p>
      </div>
    </main>
  );
};

export default MediaOverall;

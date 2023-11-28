import React, { useState, useRef } from "react";
import {
  s343,
  s352,
  s532,
  s5212,
  s3412,
  s3421,
  s4312,
  s4321,
  s433,
  s442,
  tattiche,
  mySelect,
  arrayRange,
  data,
  testTacticts,
} from "../Funzioni/schemi";

const MediaOverall = () => {
  const selectRef = useRef(null);
  const [schema, setSchema] = useState("4-3-1-2");

  const getSchema = () => {
    setSchema(selectRef.current.value);
  };

  let valori = arrayRange(58, 99, 1);

  const [values, setValues] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setValues(null)
    calcolaMedia()
  };

  let sum = 0;

  const calcolaMedia = () => {
    for (let i in values) {
      sum += parseFloat(values[i]);
    }
    return (sum / 11).toFixed();
  };

  const result = calcolaMedia();

  return (
    <main
      id="media--overall"
      className="flex h-full w-full flex-col items-center justify-around gap-2 bg-black/30 "
    >
      <h1>Media Overall</h1>
      {mySelect("Scegli la tattica", selectRef, getSchema, tattiche)}
      {schema === "4-3-1-2" && testTacticts(data, handleChange, valori)}
      {schema === "4-4-2" && s442(data, handleChange, valori)}
      {schema === "4-3-2-1" && s4321(data, handleChange, valori)}
      {schema === "4-3-3" && s433(data, handleChange, valori)}
      {schema === "3-5-2" && s352(data, handleChange, valori)}
      {schema === "3-4-1-2" && s3412(data, handleChange, valori)}
      {schema === "3-4-2-1" && s3421(data, handleChange, valori)}
      {schema === "3-4-3" && s343(data, handleChange, valori)}
      {schema === "5-3-2" && s532(data, handleChange, valori)}
      {schema === "5-2-1-2" && s5212(data, handleChange, valori)}
      <div
        style={result < 1 ? { visibility: "hidden" } : {}}
        className="rounded-xl mb-4 border-2 border-[--clr-prim] px-8 py-2 text-center font-bold ring ring-inset ring-white/75 md:me-8 md:self-end md:border-8 md:px-20"
      >
        <span className="text-md md:text-xl">Media:</span>
        <h4 className="text-6xl md:text-9xl">{result}</h4>
        <p className="text-sm md:text-md">Limite massimo: {parseInt(result) +3}</p>
      </div>
    </main>
  );
};

export default MediaOverall;

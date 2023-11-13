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
  mySelect,
  data,
} from "../Funzioni/schemi";

const MediaOverall = () => {
  const selectRef = useRef(null);
  const [schema, setSchema] = useState("442");

  const getSchema = () => {
    setSchema(selectRef.current.value);
  };

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step,
    );

  let valori = arrayRange(55, 99, 1);

  const [values, setValues] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    /* e.preventDefault(); */
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

  return (
    <main
      id="media--overall"
      className="flex h-full w-full flex-col items-center justify-around gap-2 bg-black/30 "
    >
      <h1>Media Overall</h1>
      {mySelect(selectRef, getSchema)}
      {schema === "442" && s442(data, handleChange, valori)}
      {schema === "433" && s433(data, handleChange, valori)}
      {schema === "4312" && s4312(data, handleChange, valori)}
      {schema === "4321" && s4321(data, handleChange, valori)}
      {schema === "352" && s352(data, handleChange, valori)}
      {schema === "3412" && s3412(data, handleChange, valori)}
      {schema === "3421" && s3421(data, handleChange, valori)}
      {schema === "343" && s343(data, handleChange, valori)}
      {schema === "532" && s532(data, handleChange, valori)}
      {schema === "5212" && s5212(data, handleChange, valori)}
      <div
        style={result < 1 ? { visibility: "hidden" } : {}}
        className="rounded-xl mb-4 border-2 border-[--clr-prim] px-8 py-2 text-center font-bold ring ring-inset ring-white/75 md:me-8 md:self-end md:border-8 md:px-20"
      >
        <span className="text-md md:text-xl">Media:</span>
        <h4 className="text-6xl md:text-9xl">{result}</h4>
      </div>
    </main>
  );
};

export default MediaOverall;

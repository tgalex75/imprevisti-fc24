import { useState, useEffect, useRef } from "react";
import { mySelect, tattiche, listaTattiche, data } from "../Funzioni/schemi";
import { v4 as uuidv4 } from "uuid";

const IndicatoreGiocatoriImpr = (props) => {
  const { extractedPlayer } = props;

  const [schema, setSchema] = useState(() => {
    const saved = localStorage.getItem("schema");
    const initialValue = JSON.parse(saved);
    return initialValue || "4-2-1-3";
  });

  useEffect(() => {
    localStorage.setItem("schema", JSON.stringify(schema));
  }, [schema]);

  const selectRef = useRef(null);

  const getSchema = () => {
    setSchema(selectRef.current.value);
  };

  const extractedPlayerStyle = {
    backgroundColor: "orange",
    borderColor: "transparent",
    color: "black",
    fontWeight: 800,
  };

  const filteredTactics = listaTattiche.filter((item) => item.nome === schema);

  const tactics = (arr, start, end) => {
    return (
      <section id="tattiche" className="flex items-center justify-center">
        <div className="flex items-center gap-6">
          {arr.slice(start, end).map((el) => (
            <div
              key={uuidv4()}
              className="my-2 flex w-2 items-center justify-center rounded-lg border px-4 py-1 text-xs font-semibold text-gray-200"
              style={
                extractedPlayer.find((item) => item === el.nome) &&
                extractedPlayerStyle
              }
            >
              {el.nome}
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="flex h-full w-1/4 flex-col items-center justify-between py-2">
      <h5>{schema}</h5>
      <div className="flex w-full flex-col-reverse justify-center">
        {filteredTactics[0].formazione.map((el, i, array) =>
          tactics(data, el === 1 ? 0 : array[i - 1], el),
        )}
      </div>
      {/* PANCHINA */}

      <div className="border- flex w-4/5 flex-wrap items-center justify-around p-1">
        {data.slice(11, data.length).map((el) => (
          <div
            key={uuidv4()}
            className="my-2 flex w-1 items-center justify-center rounded-lg border bg-gray-900/80 px-3 py-1 text-[.6rem] font-semibold text-gray-200"
            style={
              extractedPlayer.find((item) => item === el.nome) &&
              extractedPlayerStyle
            }
          >
            {el.nome}
          </div>
        ))}
      </div>

      <div className="">
        {mySelect("Schema", selectRef, getSchema, tattiche)}
      </div>
    </div>
  );
};

export default IndicatoreGiocatoriImpr;

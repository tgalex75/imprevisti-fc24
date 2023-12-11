import { useState, useRef } from "react";
import { mySelect, tattiche, listaTattiche, data } from "../Funzioni/schemi";
//import { isMobile } from "react-device-detect";

const IndicatoreGiocatoriImpr = (props) => {
  const { extractedPlayer } = props;
  const [schema, setSchema] = useState("4-2-3-1");
  const selectRef = useRef(null);
  const getSchema = () => {
    setSchema(selectRef.current.value);
  };

  const filteredTactics = listaTattiche.filter((item) => item.nome === schema);

  const tactics = (arr, start, end) => {
    return (
      <section
        id="schemi"
        className="flex items-center justify-center"
      >
        <div className={`items-center} flex gap-6`}>
          {arr.slice(start, end).map((el) => (
            <div
              key={el.id}
              className="my-2 flex w-2 items-center justify-center rounded-lg border px-4 py-1 text-xs font-semibold text-gray-200"
              style={
                extractedPlayer.find((item) => item == el.nome) && {
                  backgroundColor: "orange",
                }
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
    <div className="flex h-full w-full p-1">
      <div className="h-full w-3/4 flex flex-col-reverse">
        {schema &&
          filteredTactics[0].formazione.map((el, i, array) =>
            tactics(data, el === 1 ? 0 : array[i - 1], el),
          )}
      </div>
      <div className="h-full w-1/4 p-1">
        {mySelect("Schema", selectRef, getSchema, tattiche)}
      </div>
    </div>
  );
};

export default IndicatoreGiocatoriImpr;

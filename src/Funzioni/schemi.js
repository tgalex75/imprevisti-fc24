import uuid from "react-uuid";
import ModuloTattica from "../Components/ModuloTattica";
import { isMobile } from "react-device-detect";

const giocatoreNum = isMobile ? "G n. " : "Giocatore n. ";
const overallPlaceholder = isMobile ? "OV " : "Overall";

const listaTattiche = [
  { nome: "s442", formazione: [1, 5, 9, 11] },
  { nome: "s4312", formazione: [1, 5, 8, 9, 11] },
];

export const testTacticts = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {listaTattiche[1].formazione.map((el, i, array) => (
      <ModuloTattica
        key={uuid()}
        arr={arr}
        start={el === 1 ? 0 : array[i-1]}
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

export const s442 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={5}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={5}
        end={9}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={9}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};
export const s352 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={4}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={4}
        end={9}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={9}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};

export const s532 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={6}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={6}
        end={9}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={9}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};

export const s433 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={5}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={5}
        end={8}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={8}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};

export const s4312 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={5}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={5}
        end={8}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* COC */}
      <ModuloTattica
        arr={arr}
        start={8}
        end={9}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={9}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};

export const s3412 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={4}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={4}
        end={8}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* COC */}
      <ModuloTattica
        arr={arr}
        start={8}
        end={9}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={9}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};
export const s343 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={4}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={4}
        end={8}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={8}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};
export const s3421 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={4}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={4}
        end={8}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* COC */}
      <ModuloTattica
        arr={arr}
        start={8}
        end={10}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={10}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};
export const s4321 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={5}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={5}
        end={8}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* COC */}
      <ModuloTattica
        arr={arr}
        start={8}
        end={10}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={10}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};

export const s5212 = (arr, func, val) => {
  return (
    <section id="schemi" className="flex h-[40vh] w-3/4 flex-col">
      {/* PT */}
      <ModuloTattica
        arr={arr}
        start={0}
        end={1}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* DIF */}
      <ModuloTattica
        arr={arr}
        start={1}
        end={6}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* CEN */}
      <ModuloTattica
        arr={arr}
        start={5}
        end={7}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* COC */}
      <ModuloTattica
        arr={arr}
        start={8}
        end={9}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
      {/* ATT */}
      <ModuloTattica
        arr={arr}
        start={9}
        end={11}
        giocatoreNum={giocatoreNum}
        func={func}
        placeholder={overallPlaceholder}
        val={val}
      />
    </section>
  );
};

export const tattiche = [
  "4-3-1-2",
  "4-4-2",
  "4-3-2-1",
  "4-3-3",
  "3-5-2",
  "3-4-1-2",
  "3-4-2-1",
  "3-4-3",
  "5-3-2",
  "5-2-1-2",
];

export const mySelect = (labelText, ref, func, arr) => {
  return (
    <div className="flex w-4/5 flex-col items-center md:items-end ">
      <label
        htmlFor="tattica"
        className="block text-xs font-medium text-gray-300"
      >
        {labelText}
      </label>
      <select
        className="focus:ring-primary-500 focus:border-primary-500 block w-48 rounded-md border border-gray-300 bg-black/50 px-3 py-2 text-gray-200 shadow-sm focus:outline-none"
        name="tattica"
        ref={ref}
        onChange={func}
      >
        {arr.map((el, i) => {
          return (
            <option key={i} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step,
  );

let arrDataPlayers = arrayRange(1, 11, 1);

export const data = arrDataPlayers.map((el) => {
  return { id: el, nome: el };
});

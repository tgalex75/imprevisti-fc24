import React, { useState } from "react";

const MediaOverall = () => {
    let players = Array.from({ length: 11 }, (value, index) => index + 1);

    const arrayRange = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );

    let valori = arrayRange(40, 99, 1);

    const defaultValues = {
      p1: 60,
      p2: 60,
      p3: 60,
      p4: 60,
      p5: 60,
      p6: 60,
      p7: 60,
      p8: 60,
      p9: 60,
      p10: 60,
      p11: 60,
  };

    const [values, setValues] = useState(defaultValues);

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

    console.log(values);
    console.log(typeof(values.p9))

    const renderedInputs = players.map((el) => (
        <div key={el} className="relative flex gap-2">
            <label htmlFor={`p${el}`} className="text-gray-200">
                G n. {el}
            </label>
            <select
                type="number"
                id={`p${el}`}
                name={`p${el}`}
                onChange={handleChange}
                className="rounded-md min-w-[5rem] bg-zinc-900 "
            >
                {valori.map((num) => (
                    <option value={num}>{num}</option>
                ))}
            </select>
        </div>
    ));
    return (
        <div className="pt-24 w-[70vw] flex items-center gap-4 flex-col">
            {renderedInputs}

            <h2 className="text-4xl">Media: {result}</h2>
        </div>
    );
};

export default MediaOverall;

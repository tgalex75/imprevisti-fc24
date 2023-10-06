import React, { useState, useRef } from "react";
import {
    s343,
    s532,
    s5212,
    s3412,
    s3421,
    s4312,
    s433,
    s442,
    mySelect,
    data,
} from "../Funzioni/schemi";

const MediaOverall = () => {
    const selectRef = useRef(null);
    const [schema, setSchema] = useState("532");

    const getSchema = () => {
        setSchema(selectRef.current.value);
    };

    const arrayRange = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
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
        <main className="w-full h-screen flex flex-col items-center justify-around overflow-hidden p-2">
            <div className="w-full h-full justify-center gap-4 flex items-center flex-col">
                <h1>Media Overall</h1>
                {mySelect(selectRef, getSchema)}
                {schema === "532" && s532(data, handleChange, valori)}
                {schema === "5212" && s5212(data, handleChange, valori)}
                {schema === "442" && s442(data, handleChange, valori)}
                {schema === "433" && s433(data, handleChange, valori)}
                {schema === "4312" && s4312(data, handleChange, valori)}
                {schema === "3412" && s3412(data, handleChange, valori)}
                {schema === "3421" && s3421(data, handleChange, valori)}
                {schema === "343" && s343(data, handleChange, valori)}
                {values || schema ? (
                    <div className="py-6 px-20 border-8 border-[--clr-prim] ring-4 ring-inset ring-white/75 rounded-lg font-bold">
                        <span className="text-xl">Media:</span>
                        <h4 className="text-9xl">{result}</h4>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </main>
    );
};

export default MediaOverall;

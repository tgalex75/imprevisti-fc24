import React, { useState, useRef } from "react";
import {
    s343,
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
    const [schema, setSchema] = useState("4312");

    const getSchema = () => {
        setSchema(selectRef.current.value);
    };

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
        <main className="w-full h-full flex flex-col items-center justify-around overflow-hidden p-12">
            <div className="w-full h-full mx-auto flex items-center gap-4 flex-col">
                <h1 className="text-4xl font-bold">Media Overall</h1>
                {mySelect(selectRef, getSchema)}
                {schema === "442" && s442(data, handleChange, valori)}
                {schema === "433" && s433(data, handleChange, valori)}
                {schema === "4312" && s4312(data, handleChange, valori)}
                {schema === "3412" && s3412(data, handleChange, valori)}
                {schema === "3421" && s3421(data, handleChange, valori)}
                {schema === "343" && s343(data, handleChange, valori)}
                {values && (
                    <div className="py-6 px-20 border-8 border-[--clr-prim] rounded-lg font-bold">
                        <span className="text-xl">Media:</span>
                        <h4 className="text-9xl">{result}</h4>
                         
                    </div>
                )}
            </div>
        </main>
    );
};

export default MediaOverall;

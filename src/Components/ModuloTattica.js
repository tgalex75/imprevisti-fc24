import React from 'react'
import uuid from 'react-uuid';

const ModuloTattica = (props) => {

    const {arr, start, end, giocatoreNum, func, placeholder, val} = props

    return (
    <div className="flex items-center justify-center gap-2">
        {arr.slice(start, end).map((el) => {
          return (
            <div key={uuid()} className="flex flex-col items-center">
              <label
                htmlFor={`p${el.id}`}
                className="md:text-md block text-xs font-semibold text-gray-300"
              >
                {giocatoreNum} {el.nome}
              </label>
              <select
                id={`p${el.id}`}
                name={`p${el.nome}`}
                onChange={func}
                className=" my-2 w-12 rounded-lg border-2 border-transparent bg-[--clr-prim] p-2 text-sm font-semibold text-gray-200 hover:border-gray-300 md:my-4 md:min-w-[10rem] md:text-xs"
              >
                <option value="">{placeholder}</option>
                {val.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
  )
}

export default ModuloTattica
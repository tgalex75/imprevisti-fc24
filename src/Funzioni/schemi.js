export const s442 = (arr, func, val) => {
    return (
        <section className="p-8 w-3/4 h-auto flex flex-col">
            {/* PT */}
            <div className="flex items-center justify-center gap-2">
                {arr.slice(0, 1).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* DIF */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(1, 5).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* CEN */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(5, 9).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* ATT */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(9, 11).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export const s532 = (arr, func, val) => {
    return (
        <section className="p-8 w-3/4 h-auto flex flex-col">
            {/* PT */}
            <div className="flex items-center justify-center gap-2">
                {arr.slice(0, 1).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* DIF */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(1, 6).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* CEN */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(6, 9).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* ATT */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(9, 11).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export const s433 = (arr, func, val) => {
    return (
        <section className="p-8 w-3/4 h-auto flex flex-col">
            {/* PT */}
            <div className="flex items-center justify-center gap-2">
                {arr.slice(0, 1).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* DIF */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(1, 5).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* CEN */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(5, 8).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* ATT */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(8, 11).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export const s4312 = (arr, func, val) => {
    return (
        <section className="p-8 w-3/4 h-auto flex flex-col">
            {/* PT */}
            <div className="flex items-center justify-center gap-2">
                {arr.slice(0, 1).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* DIF */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(1, 5).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* CEN */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(5, 8).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* TREQ */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(8, 9).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* ATT */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(9, 11).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export const s3412 = (arr, func, val) => {
    return (
        <section className="p-8 w-3/4 h-auto flex flex-col">
            {/* PT */}
            <div className="flex items-center justify-center gap-2">
                {arr.slice(0, 1).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* DIF */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(1, 4).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* CEN */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(4, 8).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* TREQ */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(8, 9).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* ATT */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(9, 11).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export const s343 = (arr, func, val) => {
    return (
        <section className="p-8 w-3/4 h-auto flex flex-col">
            {/* PT */}
            <div className="flex items-center justify-center gap-2">
                {arr.slice(0, 1).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* DIF */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(1, 4).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* CEN */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(4, 8).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* ATT */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(8, 11).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export const s3421 = (arr, func, val) => {
    return (
        <section className="p-8 w-3/4 h-auto flex flex-col">
            {/* PT */}
            <div className="flex items-center justify-center gap-2">
                {arr.slice(0, 1).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* DIF */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(1, 5).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* CEN */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(5, 8).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* TREQ */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(8, 10).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* ATT */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(10, 11).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export const s5212 = (arr, func, val) => {
    return (
        <section className="p-8 w-3/4 h-auto flex flex-col">
            {/* PT */}
            <div className="flex items-center justify-center gap-2">
                {arr.slice(0, 1).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* DIF */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(1, 6).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* CEN */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(6, 8).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* TREQ */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(8, 9).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
            {/* ATT */}
            <div className="flex items-center justify-center gap-8">
                {arr.slice(9, 11).map((el) => {
                    return (
                        <div key={el.id} className="flex flex-col items-center">
                            <label
                                htmlFor={`p${el.id}`}
                                className="block text-md font-semibold text-gray-300"
                            >
                                Giocatore n. {el.nome}
                            </label>
                            <select
                                id={`p${el.id}`}
                                name={`p${el.nome}`}
                                onChange={func}
                                className="mt-1.5 font-bold min-w-[10rem] p-2 m-4 rounded-lg bg-[--clr-sec] border-2 border-transparent hover:border-[--clr-prim] text-gray-200 sm:text-sm"
                            >
                                <option value="">Overall</option>
                                {val.map((num) => (
                                    <option value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export const mySelect = (ref, func) => {
    return (
        <div className="flex flex-col w-4/5 items-end ">
            <label
                htmlFor="tattica"
                className="block text-sm font-medium text-gray-300"
            >
                Seleziona la tattica
            </label>
            <select
                className="block px-3 py-2 text-gray-200 bg-gray-900 border border-gray-300 rounded-md shadow-sm w-48 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                name="tattica"
                ref={ref}
                onChange={func}
            >
                <option value="532">5-3-2</option>
                <option value="5212">5-2-1-2</option>
                <option value="442">4-4-2</option>
                <option value="433">4-3-3</option>
                <option value="4312">4-3-1-2</option>
                <option value="3412">3-4-1-2</option>
                <option value="3421">3-4-2-1</option>
                <option value="343">3-4-3</option>
            </select>
        </div>
    );
};

export const data = [
    { id: 1, nome: "1" },
    { id: 2, nome: "2" },
    { id: 3, nome: "3" },
    { id: 4, nome: "4" },
    { id: 5, nome: "5" },
    { id: 6, nome: "6" },
    { id: 7, nome: "7" },
    { id: 8, nome: "8" },
    { id: 9, nome: "9" },
    { id: 10, nome: "10" },
    { id: 11, nome: "11" },
];

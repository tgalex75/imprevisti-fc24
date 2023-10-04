const selectSN = (
    <label class="text-gray-700" for="animals">
        Tipo Imprevisto
        <select
            class="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="tipo-imprevisto"
        >
            <option value="">Seleziona tipo</option>
            <option value="nottebrava">Notte Brava</option>
            <option value="gelosia">Gelosia</option>
            <option value="rivalita">Rivalità</option>
        </select>
    </label>
);

const inputSN = (
    <div class=" relative ">
        <label for="name-with-label" class="text-gray-700">
            Nome del Giocatore
        </label>
        <input
            type="text"
            id="nome-giocatore"
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="nomeGiocatore"
            placeholder="Fuori il nome..."
        />
    </div>
);

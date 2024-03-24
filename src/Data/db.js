import Dexie from "dexie";

export const  db = new Dexie("db");
db.version(1).stores({
    prepartita: "++id, titolo, descrizione, isImprev, ultEstrazione, extractedPl",
    settimana: "++id, titolo, descrizione, isImprev, extractedPl",
    serienegativa: "++id, titolo, descrizione, isImprev, ultEstrazione, extractedPl",
    speciali: "++id, titolo, descrizione, isImprev, extractedPl",
})
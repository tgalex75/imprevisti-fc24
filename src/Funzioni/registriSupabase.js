import { useEffect } from "react";
import { supabase } from "../supabaseClient";

export const fetchEffect = (dbName, vociRegistro) => {
  useEffect(() => {
    fetchRegistryList(dbName);
  }, [vociRegistro]);
};
export const fetchRegistryList = async (dbName, setVociRegistro) => {
  const { data } = await supabase.from(dbName).select("*");
  setVociRegistro(data ? data : []);
};

export const uploadListDB = async (dbName, list) => {
  const { data, error } = await supabase
    .from(dbName)
    .insert([{ id: list.id, name: list.name }])
    .select();
  data ? console.log("data: ", data) : console.log("error: ", error);
};

export const deleteListDB = async (dbName) => {
  const { error } = await supabase.from(dbName).delete("id").lt("id", 1000);
  error ? console.log(error) : console.log("");
};

export const addVociRegistro = (setVociRegistro, vociRegistro, dbName, element) => {
  setVociRegistro([...vociRegistro, { ...element }]);
  uploadListDB(dbName, element);
};

export const removeVociRegistro = async (dbName, element) => {
  const { error } = await supabase.from(dbName).delete().eq("id", element);
  error ? console.log(error) : console.log("");
};

export const azzeraVociRegistro = (setVociRegistro) => {
  setVociRegistro([]);
  deleteListDB();
};

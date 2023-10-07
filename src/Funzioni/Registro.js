import React from "react";
import { supabase } from ".././supabaseClient";

const Registro = () => {
  const updateRegistro = async (data) => {
    const { data, error } = await supabase
      .from("registro")
      .insert([{ title: data.title, quantity: data.quantity }])
      .select();
  };

  return <div>Registro</div>;
};

export default Registro;

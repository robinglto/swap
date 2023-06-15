import React from "react";
import useSelect from "../hooks/useSelect";
import { Opcion } from "../hooks/useSelect";

export default function Formulario() {
  const opciones: Opcion[] = [
    { id: "USD", nombre: "Dolar de EEUU" },
    { id: "MXN", nombre: "Peso Mexicano" },
    { id: "EUR", nombre: "Euro" },
  ];

  const [state, SelectMoneda] = useSelect({
    label: "Elige tu moneda",
    opciones,
  });

  return (
    <form>
      <SelectMoneda />
      {state.toString()}
      <input type="submit" value={"send"} />
    </form>
  );
}

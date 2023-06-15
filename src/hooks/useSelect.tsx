import React, { useState } from "react";

export interface Opcion {
  id: string;
  nombre: string;
}

interface SelectProps {
  label: string;
  opciones: Opcion[];
}

export default function useSelect({ label, opciones }: SelectProps) {
  const [state, setState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    console.log(selectedValue); // Mostrar valor por consola
    setState(selectedValue);
  };

  const SelectMoneda = () => (
    <>
      <label className="text-3xl text-indigo-500">{label}</label>
      <select value={state} onChange={handleChange}>
        <option value={""}>Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
      <p className="text-4xl">Gola sadsahdsa dwqiuhdwiq</p>
    </>
  );

  return [state, SelectMoneda];
}

import React, { type JSX } from 'react'
import { Element } from "react-scroll";
import Productos from '../components/ProductosComponent/Productos';
import Clientes from '../components/ClientesComponent/Clientes';

//Lista componentes
const Elements=()=> {
    const secciones: Record<string, JSX.Element> = {
    productos: <Productos />,
    clientes: <Clientes/>
};
  const listaOpciones = ["Productos", "Clientes", "Contactos"];

  return (
    <div>
        {listaOpciones.map((opcion, index) => (
            <Element key={index} name={opcion.toLowerCase()} className="flex items-center justify-center text-4xl font-bold">
              {secciones[opcion.toLowerCase()]}
        </Element>
        ))}
    </div>
  )
}
export default Elements;
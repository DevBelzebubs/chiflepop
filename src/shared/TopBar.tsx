import type { JSX } from "react";
import TopBarUI from "../ui/TopBarUI"
import { Element } from "react-scroll";
import Productos from "../components/Productos";
const TopBar = () => {
  const secciones: Record<string, JSX.Element> = {
  productos: <Productos />,
};
  const listaOpciones = ["Productos", "Clientes", "Contactos"];
  return (
    <div className="min-h-screen">
      <TopBarUI listaOpciones={listaOpciones} />
      {listaOpciones.map((opcion, index) => (
        <Element key={index} name={opcion.toLowerCase()} className="h-screen flex items-center justify-center text-4xl font-bold">
          {secciones[opcion.toLowerCase()]}
        </Element>
      ))}
    </div>
  )
}

export default TopBar
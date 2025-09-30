import type { JSX } from "react";
import TopBarUI from "../ui/TopBarUI"
import { Element } from "react-scroll";
import Productos from "../components/Productos";
import { useState } from "react";
const TopBar = () => {
  const secciones: Record<string, JSX.Element> = {
  productos: <Productos />,
};
  const listaOpciones = ["Productos", "Clientes", "Contactos"];
  const [hamburguerMenu, setHamburguerMenu] = useState(false);
  return (
    <div className="min-h-screen">
      <TopBarUI listaOpciones={listaOpciones} hamburguerMenu={hamburguerMenu} toggleMenu={()=> setHamburguerMenu}/>
      {listaOpciones.map((opcion, index) => (
        <Element key={index} name={opcion.toLowerCase()} className="h-screen flex items-center justify-center text-4xl font-bold">
          {secciones[opcion.toLowerCase()]}
        </Element>
      ))}
    </div>
  )
}

export default TopBar
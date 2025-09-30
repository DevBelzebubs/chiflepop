import TopBarUI from "../ui/TopBarUI"
import { useState } from "react";
const TopBar = () => {
  const listaOpciones = ["Productos", "Clientes", "Contactos"];
  const [hamburguerMenu, setHamburguerMenu] = useState(false);
  return (
    <div className="min-h-[4rem]">
      <TopBarUI listaOpciones={listaOpciones} hamburguerMenu={hamburguerMenu} toggleMenu={()=> setHamburguerMenu}/>
    </div>
  )
}

export default TopBar
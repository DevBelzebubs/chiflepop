import TopBarUI from "../ui/TopBarUI"
import { useState } from "react";
const TopBar = () => {
  const listaOpciones = ["Productos", "Clientes", "Contactos"];
  const [hamburguerMenu, setHamburguerMenu] = useState(false);
  const toggleMenu = () => setHamburguerMenu(prev => !prev);
  return (
    <div className="relative left-0 w-full z-50">
      <TopBarUI listaOpciones={listaOpciones} hamburguerMenu={hamburguerMenu} toggleMenu={toggleMenu} />
    </div>
  )
}

export default TopBar
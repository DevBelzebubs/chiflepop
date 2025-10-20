import type {TopBarProps} from "../../../interfaces/TopBarProps"
import { Link } from "react-scroll";
import HamburguerMenu from "../hamburguerMenu/HamburguerMenu";
import { useState } from "react";
import "./TopBarStyles.css"
const TopBarUI = ({ listaOpciones,toggleMenu }: TopBarProps) => {
  const [hamburguerMenu, setHamburguerMenu] = useState(false);
  const handleHamburguerClick = () => {
    setHamburguerMenu(prev => !prev);
    if (toggleMenu) toggleMenu();
  }
 return (
    <div className="relative w-full bg-no-repeat bg-cover bg-center z-50" style={{ backgroundImage: "url('/img/TopBarBackground.svg')" }}>
      <nav className="flex items-center justify-center h-20 sm:h-24 md:h-28 space-x-8 gap-3 ">
        {listaOpciones.map((opcion, index) => (
          <ul key={index} className="hidden md:flex gap-6 topBarElement">
            <li>
              <Link
                to={opcion.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer font-bold text-yellow-300 transition duration-300 text-base sm:text-lg md:text-xl" style={{ fontSize: "22px" }}
              >
                {opcion}
              </Link>
            </li>
          </ul>
        ))}
      </nav>
      <button
        className="absolute top-4 right-6 block md:hidden text-yellow-300 text-3xl focus:outline-none"
        onClick={handleHamburguerClick}>
        ☰
      </button>
      {hamburguerMenu && (
        <HamburguerMenu hamburguerMenu={hamburguerMenu} listaOpciones={listaOpciones}/>)}
    </div>
  );
}

export default TopBarUI

import type {TopBarProps} from "../interfaces/TopBarProps"
import { Link } from "react-scroll";
const TopBarUI = ({ listaOpciones }: TopBarProps) => {
 return (
    <div className="relative">
      <img src="/img/TopBarBackground.svg" alt="Top Bar Background" className="w-full"/>
      <nav className="absolute top-0 left-0 flex h-16 items-center px-6 justify-center w-full space-x-4 mt-3">
        {listaOpciones.map((opcion, index) => (
          <ul key={index}>
            <li style={{ color: "#FFDF2C" }}>
              <Link
                to={opcion.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer text-lg font-bold m-4 p-2 rounded transition duration-300" style={{ fontSize: "24px" }}
              >
                {opcion}
              </Link>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
}

export default TopBarUI

import { Link } from 'react-scroll';
import type { TopBarProps } from '../../interfaces/TopBarProps';
type Props = {
  hamburguerMenu: boolean;
} & TopBarProps;

const HamburguerMenu=({ hamburguerMenu, listaOpciones }: Props)=> {
  return (
    <div className="absolute top-1 left-0 w-full flex flex-col items-center justify-between md:hidden z-40 relative">
        {hamburguerMenu && (
            <div className="flex flex-col items-center space-y-2 z-10 relative">
                {listaOpciones.map((opcion, index) => (
                    <Link key={index} to={opcion.toLowerCase()} smooth={true} duration={500} offset={-64} className="cursor-pointer font-bold text-yellow-300 hover:text-black transition duration-300 text-lg sm:text-xl">
                    {opcion}
                    </Link>
                ))}
            </div>
        )}
        <img src='/img/HamburguerTopBar.svg' alt="Decoración menú" className="absolute bottom-25 w-full z-0"/>
    </div>
  )
}
export default HamburguerMenu
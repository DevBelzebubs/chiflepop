interface TopBarUIProps {
  listaOpciones: string[];
}
const TopBarUI = ({ listaOpciones }: TopBarUIProps) => {
  return (
    <div>
        <img src="/img/TopBarBackground.svg" alt="Top Bar Background" className="w-full h-full object-contain sm:object-cover"/>
        <div className="flex justify-start items-center">
            {listaOpciones.map((opcion, index) => (
                <ul key={index}>
                    <li style={{ color: "#FFDF2C" }}>
                        <button className="text-lg font-bold m-4 p-2 rounded hover:bg-yellow-300 hover:text-black transition duration-300">
                            {opcion}
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default TopBarUI

import TopBarUI from "../ui/TopBarUI"

const TopBar = () => {
  return (
    <div className="min-h-screen">
      <TopBarUI listaOpciones={["Productos  ", "Clientes", "Contactos"]} />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Contenido debajo del Topbar</h1>
      </div>
    </div>
  )
}

export default TopBar


export default function Productos() {

  return (
    <div className='flex flex-col items-center gap-8 my-11'>
      <h1 className='flex justify-center' style={{color: "#50AE36"}}>Nuestros Productos</h1>
      <div className='flex border-2 border-solid rounded-2xl text-sm' style={{borderColor: "#50AE36"}}>
          <button className='border-r p-2 hover:bg-green-700 rounded-l-xl' style={{borderColor: "#50AE36"}}>Todos los productos</button>
          <button className='border-r pr-4 pl-4 hover:bg-green-700' style={{borderColor: "#50AE36"}}>Chifles</button>
          <button className='border-r pr-4 pl-4 hover:bg-green-700' style={{borderColor: "#50AE36"}}>Alfajores</button>
          <button className='pr-4 pl-4 hover:bg-green-700 rounded-r-xl'>Cocada</button>
      </div>
    </div>
  )
}

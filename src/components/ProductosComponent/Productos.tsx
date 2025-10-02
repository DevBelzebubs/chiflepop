import { useState } from 'react';
import productosData from '../../data.json';
import './ProductosStyles.css';
import ProductosList from './ProductosList';

export default function Productos() {
  const[productos, setProductos] = useState(productosData);
  const[activeButton, setActiveButton] = useState("Todos");
  const handleProductosClick = (name:string) => {
    const productosFiltrados = productosData.filter(productos => productos.name === name);
    setProductos(productosFiltrados);
    setActiveButton(name);
  }
  const handleAllProductsClick = () => {
    setProductos(productosData);
    setActiveButton("Todos");
  }
  return (
    <div className='flex flex-col items-center gap-8 my-11'>
      <h1 className='flex justify-center' style={{color: "#50AE36"}}>Nuestros Productos</h1>
      <div className='flex border-2 border-solid rounded-2xl text-sm' style={{borderColor: "#50AE36"}}>
          <button className={`border-r p-2 rounded-l-xl buttonHover ${activeButton === "Todos" ? "buttonActive" : ""}`} style={{borderColor: "#50AE36"}} onClick={handleAllProductsClick}>Todos los productos</button>
          <button className={`border-r pr-4 pl-4 buttonHover ${activeButton === "Chifles" ? "buttonActive" : ""}`} style={{borderColor: "#50AE36"}} onClick={() => handleProductosClick("Chifles")}>Chifles</button>
          <button className={`border-r pr-4 pl-4 buttonHover ${activeButton === "Alfajores" ? "buttonActive" : ""}`} style={{borderColor: "#50AE36"}} onClick={() => handleProductosClick("Alfajores")}>Alfajores</button>
          <button className={`pr-4 pl-4 buttonHover rounded-r-xl ${activeButton === "Cocada" ? "buttonActive" : ""}`} style={{borderColor: "#50AE36"}} onClick={()=> handleProductosClick("Cocada")}>Cocada</button>
      </div>
      <ProductosList productos={productos}/>
    </div>
  )
}
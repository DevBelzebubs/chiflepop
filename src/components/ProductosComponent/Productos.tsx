import { useState } from 'react';
import productosData from '../../data.json';
import './ProductosStyles.css';
import ProductosList from './ProductosList';

export default function Productos() {
  const[productos, setProductos] = useState(productosData);
  const handleChiflesClick = () => {
    const chifles = productosData.filter(productos => productos.name === 'Chifles');
    setProductos(chifles);
  };
  return (
    <div className='flex flex-col items-center gap-8 my-11'>
      <h1 className='flex justify-center' style={{color: "#50AE36"}}>Nuestros Productos</h1>
      <div className='flex border-2 border-solid rounded-2xl text-sm' style={{borderColor: "#50AE36"}}>
          <button className='border-r p-2 rounded-l-xl buttonHover' style={{borderColor: "#50AE36"}}>Todos los productos</button>
          <button className='border-r pr-4 pl-4 buttonHover' style={{borderColor: "#50AE36"}} onClick={handleChiflesClick}>Chifles</button>
          <button className='border-r pr-4 pl-4 buttonHover' style={{borderColor: "#50AE36"}}>Alfajores</button>
          <button className='pr-4 pl-4 buttonHover rounded-r-xl' style={{borderColor: "#50AE36"}}>Cocada</button>
      </div>
      <ProductosList/>
    </div>
  )
}
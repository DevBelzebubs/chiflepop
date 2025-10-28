import React from 'react'

const Modal = () => {
  return (
    <div className='w-7xl mb-5 z-2 text-xl'>
      <div className='flex flex-row justify-center pb-5'>
        <div className='w-[25vw] pl-5 pr-5 rounded-l-xl text-white' style={{ backgroundColor: '#7BBB50' }}>
          <div className='flex flex-col items-center mt-5 gap-2'>
            <h1 className='font-bold'>Libro de reclamaciones</h1>
            <p>Valoramos tu feedback, si tienes cualquier alguna
              queja o sugerencia, porfavor llene nuestro formulario
              y te responderemos en la brevedad posible.</p>
            <div className=' flex flex-col mt-5 gap-5'>
              <div className="flex items-center gap-5">
                <img src='/img/Shield.svg' />
                <p>Tu opinión es importante para nosotros</p>
              </div>
              <div className="flex items-center gap-5">
                <img src='/img/Reloj.svg'/>
                <p>Respuesta en menos de 48 horas hábiles</p>
              </div>
              <div className="flex items-center gap-5">
                <img src='/img/Comprobado.svg' />
                <p>Toda queja y opinión se toman de manera seria</p>
              </div>
            </div>
          </div>
        </div>
        <form style={{ backgroundColor: 'white' }}>
          <div className='w-80'>
            <div className='flex flex-col gap-10 items-center'>
              <div>
                <h2>Nombre:</h2>
                <input className='border border-[#626262] rounded-lg w-60 h-10' placeholder='Tu nombre...' type='text' />
              </div>
              <div>
                <h2>Email:</h2>
                <input className='border border-[#626262] rounded-lg w-60 h-10' placeholder='Tu email...' type='email' />
              </div>
              <div>
                <h2>Tipo de queja:</h2>
                <select className='border border-[#626262] rounded-lg w-60 h-10'>
                  <option value="Calidad de producto">Calidad de producto</option>
                  <option value="Servicio de delivery">Servicio de delivery</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>
              <div>
                <h2>Detalles:</h2>
                <textarea className='border border-[#626262] rounded-lg w-60 h-32' placeholder='Detalles...'></textarea>
              </div>
              <button className='mb-5 p-3 rounded-xl' style={{backgroundColor:'#3B9B03'}}>Completar formulario</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Modal;
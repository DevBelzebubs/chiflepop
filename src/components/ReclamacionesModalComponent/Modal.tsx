import React from 'react'

const Modal = () => {
  return (
    <div>
        <div>
            <form className='flex flex-row'>
                  <div className='flex flex-row items-center'>
                    <h1>Libro de reclamaciones</h1>
                    <p>Valoramos tu feedback, si tienes cualquier alguna
                       queja o sugerencia, porfavor llene nuestro formulario
                       y te responderemos en la brevedad posible.</p>
                       <div>
                        <div className="flex items-center gap-5">
                          <img src=''/>
                          <p>Tu opinión es importante para nosotros</p>
                        </div>
                        <div className="flex items-center gap-5">
                          <img src=''/>
                          <p>Respuesta en menos de 48 horas hábiles</p>
                        </div>
                        <div className="flex items-center gap-5">
                          <img src=''/>
                          <p>Toda queja y opinión se toman de manera seria</p>
                        </div>
                       </div>
                    </div>
                  <div>
                    <div>
                      <div>
                        <h2>Nombre:</h2>
                        <input placeholder='Tu nombre...' type='text'/>
                      </div>
                      <div>
                        <h2>Email:</h2>
                        <input placeholder='Tu email...' type='email'/>
                      </div>
                      <div>
                        <h2>Tipo de queja:</h2>
                        <select>
                          <option value="Calidad de producto">Calidad de producto</option>
                          <option value="Servicio de delivery">Servicio de delivery</option>
                          <option value="Otros">Otros</option>
                        </select>
                      </div>
                      <div>
                        <h2>Detalles:</h2>
                        <textarea placeholder='Detalles...'></textarea>
                      </div>
                      <button>Completar formulario</button>
                    </div>
                  </div>
            </form>  
        </div>  
    </div>
  )
}
export default Modal;
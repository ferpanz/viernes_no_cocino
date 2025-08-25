import React, { useState } from 'react'
import menuData from '../data/menu.json'
import imagenLomo from '../assets/Lomo.png'
import BtnCantidad from '../components/BtnCantidad'
import Formulario from '../components/Formulario'
import BtnConfirmar from '../components/BtnConfirmar'

const plato = menuData[0]

const Pedido = () => {
  const [cantidad, setCantidad] = useState(1)
  const [nombre, setNombre] = useState('')
  const precioTotal = plato.precio * cantidad

  return (
    <>  
      <div className="card m-2 mt-4">
        <div className="row g-0">
          <div className="col-4 my-auto">
            <img src={imagenLomo} className="img-fluid rounded-start" alt={plato.nombre} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{plato.nombre}</h5>
              <p className="card-text">{plato.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center gap-4 mt-3">
        <p className="card-text mb-0">
          PRECIO: <strong>${precioTotal}</strong>
        </p>
        <BtnCantidad cantidad={cantidad} setCantidad={setCantidad} />
      </div>
      <Formulario nombre={nombre} setNombre={setNombre} />
      <BtnConfirmar
        cantidad={cantidad}
        precioTotal={precioTotal}
        nombre={nombre}
        plato={plato}
       
      />
    </>
  )
}

export default Pedido
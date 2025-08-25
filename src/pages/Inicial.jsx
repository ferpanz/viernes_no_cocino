import React from 'react'
import { Link } from 'react-router-dom'
import menuData from '../data/menu.json'
import imagenLomo from '../assets/Lomo.png'
import '../style.css'

const plato = menuData[0]

const Inicial = () => {
  return (
    <div className="card mx-auto mt-2" style={{ width: '18rem' }}>
      <img src={imagenLomo} className="card-img-top" alt={plato.nombre} />
      <div className="card-body">
        <h5 className="card-title">{plato.nombre}</h5>
        <p className="card-text">{plato.descripcion}</p>
        <div className="text-end">
          <Link to="/pedido" className="btn btn-success">Pedir</Link>
        </div>
      </div>
    </div>
  )
}

export default Inicial
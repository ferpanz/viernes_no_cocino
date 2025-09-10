import React from 'react'
import { Link } from 'react-router-dom'
import menuData from '../data/menu.json'
import imagenMenu from '../assets/menu.png'
import '../style.css'

const plato = menuData[0]

const Inicial = () => {
  return (
    <>
    <div className="container">
      <h1 className="text-center my-4">{plato.viernes}</h1>
    </div>
    <div className="card mx-auto mt-2 text-bg-secondary" style={{ width: '18rem' }}>
      <img src={imagenMenu} className="card-img-top" alt={plato.nombre} />
      <div className="card-body">
        <h5 className="card-title">{plato.nombre}</h5>
        <p className="card-text">{plato.descripcion}</p>
        <div className="text-end">
          <Link to="/pedido" className="btn btn-success">¡Quiero!</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Inicial
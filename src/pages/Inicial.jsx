import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/Lomo.png'
import '../style.css'

const Inicial = () => {
  return (
    <div className="card mx-auto mt-2" style={{ width: '18rem' }}>
      <img src={menu} className="card-img-top" alt="Lomo" />
      <div className="card-body">
        <h5 className="card-title">Lomo Strogonoff c/papas chips</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <div className="text-end">
          <Link to="/pedido" className="btn btn-primary">Pedir</Link>
        </div>
      </div>
    </div>
  )
}

export default Inicial
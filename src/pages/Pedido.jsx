import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/Lomo.png'

const Pedido = () => {
  return (
    <div className="card m-2" >
  <div className="row g-0">
    <div className="col-4">
      <img src={menu} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-8">
      <div className="card-body">
        <h5 className="card-title">Lomo Strogonoff c/papas chips</h5>
        <p className="card-text">This is a wider card with supporting text below</p>
        
      </div>
    </div>
  </div>
</div>
  )
}

export default Pedido

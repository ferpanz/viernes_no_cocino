import React from 'react'

const BtnConfirmar = ({ cantidad, precioTotal, nombre, plato }) => {
  const handleClick = () => {
    const mensaje = `Hola! Quiero pedir ${cantidad} ${plato.nombre} (${plato.descripcion}) por $${precioTotal}. Mi nombre es ${nombre}.`
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <div className="d-grid gap-2 col-6 mx-auto mt-5">
      <button className="btn btn-success" type="button" onClick={handleClick}>
        Realizar pedido
      </button>
    </div>
  )
}

export default BtnConfirmar
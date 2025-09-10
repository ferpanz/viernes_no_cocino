import React from 'react'

const BtnConfirmar = ({ cantidad, precioTotal, nombre, plato }) => {
  const handleClick = () => {
    const mensaje = `Hola! Mi nombre es *${nombre}*.
    
Quiero pedir *${cantidad} ${plato.nombre}* (${plato.descripcion}) por *$${precioTotal}*.

*Podés retirar tu pedido el ${plato.viernes} en Presidente Perón 440, de 21 a 22:30hs.*

¡¡GRACIAS!!`
    const url = `https://wa.me/5493571549039?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <div className="d-grid gap-2 col-6 mx-auto mt-5">
      <button
        className="btn btn-success"
        type="button"
        onClick={handleClick}
        disabled={!nombre.trim()} // Se desactiva si el nombre está vacío
      >
        Realizar pedido
      </button>
    </div>
  )
}

export default BtnConfirmar
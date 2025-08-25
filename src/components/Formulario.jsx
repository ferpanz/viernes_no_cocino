import React from 'react'

const Formulario = ({ nombre, setNombre }) => {
  return (
    <form className='m-3'>
      <div className="container">
        <label className="form-label">Dejanos tu nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Escribí tu nombre acá"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Formulario

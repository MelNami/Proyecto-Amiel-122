import React from 'react'
import './estiloform.css'
export const Form = () => {
  return (
    <div className="connn">
        
      <h1>Formulario de registro</h1>
      <form>
        <div className="form-group mb-3" id="formName">
          <label className="form-label" htmlFor="name">Nombre</label>
          <input className="form-control" type="text" id="name" placeholder="Ingresa tu nombre" />
        </div>
        <div className="form-group mb-3" id="formEmail">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-control" type="email" id="email" placeholder="Ingresa tu email" />
        </div>
        <div className="form-group mb-3" id="formPassword">
          <label className="form-label" htmlFor="password">Contraseña</label>
          <input className="form-control" type="password" id="password" placeholder="Ingresa tu contraseña" />
        </div>
        <div className="form-group mb-3" id="formConfirmPassword">
          <label className="form-label" htmlFor="confirmPassword">Confirmar contraseña</label>
          <input className="form-control" type="password" id="confirmPassword" placeholder="Repite tu contraseña" />
        </div>
        <div className="form-group mb-3" id="formTerms">
          <input className="form-check-input" type="checkbox" id="terms" />
          <label className="form-check-label" htmlFor="terms">Acepto los términos y condiciones</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  )
}

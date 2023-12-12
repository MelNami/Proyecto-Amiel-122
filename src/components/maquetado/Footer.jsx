import React from 'react'
import { Link } from 'react-router-dom'
import logito from '../images/logoCompu.png'
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logito} alt="logito" className='logitofooter' />
      </div>
      <div className="footer-info">
        <p className="footer-name">DONDE ESTAMOS</p>
        <p className="footer-address">Av. Villazón Nro 1995 Monoblock Central - <br/>Segundo Patio Edif. Carrera de Informatica</p>
        <p className="footer-phone"> informatica@informatica.edu.bo</p>
      </div>
      <div className="footer-autor">
        <p className="footer-autor">AUTOR</p>
        <p className="footer-autor">Mendez Vargas Amiel Natanaeli</p>
        <p className="footer-autor">mendezvargasamiel@gmail.com</p>
      </div>
    </div>

  )
}

import React from 'react'
import { Footer } from '../maquetado/Footer'
import Foto from '../images/foto.jpg'
import CreditosStyle from '../pages/CreditosStyle.css'
export const Creditos = () => {
  return (
    <div className='bodys'>
      <header><h1>Creditos</h1></header>
      <div className='creds'>
      <div className='aside1'>
      <img src={Foto} alt="Foto" className='fotito'/>
      </div>
      <div className="aside2"> 
      <p><h3>  Mendez Vargas Amiel Natanaeli</h3></p>
      <p><h3>mendezvargasamiel@gmail.com</h3></p>
      <p><h3>CI. 14417459</h3></p>
      <p><h3>cel. 71274781</h3></p>
      </div>
      </div>
    <Footer/>
    </div>
  )
}


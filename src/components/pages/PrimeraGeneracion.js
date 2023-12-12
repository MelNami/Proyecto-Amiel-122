import React from 'react'
import { Footer } from '../maquetado/Footer'

import PrimGen from '../images/PrimGen.jpeg'
export const PrimeraGeneracion = () => {
  return (
    <div className='mother'>
        <h2>Esta es la primera generacion</h2>
        <div className='container'>
          <div class="left-column">
              <header>
                  <h2>(1940-1956)</h2>
              </header>
              <img src={PrimGen} className='computadores'  alt="PrimGen"/>
              

              
          </div>

          <div class="right-column">
          <section>
                  <h3>Características Principales</h3>
                  <ul>
                      <li><strong>Tubos al Vacío:</strong> Dispositivos electrónicos utilizados como interruptores y amplificadores.</li>
                      <li><strong>ENIAC:</strong> Una de las primeras computadoras electrónicas de propósito general.</li>
                      <li><strong>Tamaño y Costo:</strong> Grandes y costosas, ocupaban salas enteras.</li>
                      <li><strong>Limitaciones:</strong> Fragilidad de los tubos al vacío, generando calor y propensas a fallos.</li>
                  </ul>
              </section>
          <section>
                  <h3>Impacto Histórico</h3>
                  <ul>
                      <li><strong>Avance Tecnológico:</strong> Salto significativo en comparación con métodos anteriores.</li>
                      <li><strong>Aplicaciones Iniciales:</strong> Uso en cálculos científicos y militares.</li>
                      <li><strong>Influencia en Desarrollos Futuros:</strong> Estableció bases para generaciones posteriores.</li>
                  </ul>
              </section>
              <section>
                  <h3>Legado y Transición</h3>
                  <ul>
                      <li><strong>Transición a la Segunda Generación:</strong> Introducción de transistores.</li>
                      <li><strong>Herencia Tecnológica:</strong> Contribución al rápido avance de la tecnología informática.</li>
                  </ul>
              </section>

              
          </div>
      </div>

        <Footer/>
    </div>
  )
}

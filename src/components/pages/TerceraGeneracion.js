import React from 'react'
import { Footer } from '../maquetado/Footer'
import TercGen from '../images/TercGen.jpg'
export const TerceraGeneracion = () => {
  return (
    <div>
      <h2>Esta es la tercera generación</h2>
      <div className='container'>
        <div className="left-column">
          <header>
            <h2>(1964-1971)</h2>
          </header>
          <img src={TercGen} className='computadores' alt="TercGen" />
        </div>

        <div className="right-column">
          <section>
            <h3>Características Principales</h3>
            <ul>
              <li><strong>Circuitos Integrados:</strong> Uso de chips que contenían múltiples componentes en un solo paquete.</li>
              <li><strong>Miniaturización:</strong> Reducción significativa del tamaño de las computadoras gracias a la integración de componentes.</li>
              <li><strong>Mayor Velocidad y Eficiencia:</strong> Mejora en el rendimiento y eficiencia gracias a la miniaturización y mayor integración.</li>
              <li><strong>Sistemas Más Confiables:</strong> Menos propensos a fallos en comparación con las generaciones anteriores.</li>
            </ul>
          </section>
          <section>
            <h3>Impacto Histórico</h3>
            <ul>
              <li><strong>Expansión de la Informática:</strong> Mayor accesibilidad y adopción de computadoras en diversas industrias y sectores.</li>
              <li><strong>Desarrollo de Redes:</strong> Inicio de la interconexión de computadoras y el surgimiento de las primeras redes.</li>
              <li><strong>Surge la Computadora Personal:</strong> Inicio del desarrollo de computadoras personales.</li>
            </ul>
          </section>
          <section>
            <h3>Legado y Transición</h3>
            <ul>
              <li><strong>Transición a la Cuarta Generación:</strong> Introducción de microprocesadores.</li>
              <li><strong>Continuidad en Innovación:</strong> Contribución al avance constante de la tecnología informática.</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

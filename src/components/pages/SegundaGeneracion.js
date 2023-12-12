import React from 'react'
import { Footer } from '../maquetado/Footer'
import SegunGen from '../images/SegunGen.jpeg'
export const SegundaGeneracion = () => {
  return (
    <div>
      <h2>Esta es la segunda generación</h2>
      <div className='container'>
        <div className="left-column">
          <header>
            <h2>(1956-1963)</h2>
          </header>
          <img src={SegunGen} className='computadores' alt="SegunGen" />
        </div>

        <div className="right-column">
          <section>
            <h3>Características Principales</h3>
            <ul>
              <li><strong>Transistores:</strong> Dispositivos semiconductores más eficientes y fiables que los tubos al vacío.</li>
              <li><strong>Reducción de Tamaño:</strong> Las computadoras eran más pequeñas y eficientes en comparación con la primera generación.</li>
              <li><strong>Mayor Velocidad y Menor Consumo:</strong> Los transistores permitieron mejoras en el rendimiento y la eficiencia energética.</li>
              <li><strong>Lenguajes de Programación:</strong> Mayor desarrollo de lenguajes de alto nivel para programación.</li>
            </ul>
          </section>
          <section>
            <h3>Impacto Histórico</h3>
            <ul>
              <li><strong>Avance Tecnológico Continuo:</strong> Continuación del progreso tecnológico con mejoras significativas.</li>
              <li><strong>Expansión de Aplicaciones:</strong> Uso extendido en ámbitos científicos, empresariales y gubernamentales.</li>
              <li><strong>Inicio de Sistemas Operativos:</strong> Desarrollo de sistemas operativos para gestionar recursos de manera más eficiente.</li>
            </ul>
          </section>
          <section>
            <h3>Legado y Transición</h3>
            <ul>
              <li><strong>Transición a la Tercera Generación:</strong> Introducción de circuitos integrados.</li>
              <li><strong>Continuidad en Desarrollo Tecnológico:</strong> Contribución al avance continuo de la informática.</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

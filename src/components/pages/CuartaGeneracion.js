import React from 'react'
import { Footer } from '../maquetado/Footer'
import CuartaGen from '../images/CuartaGen.jpg'
export const CuartaGeneracion = () => {
  return (
    <div>
      <h2>Esta es la cuarta generación</h2>
      <div className='container'>
        <div className="left-column">
          <header>
            <h2>(1971-1988)</h2>
          </header>
          <img src={CuartaGen} className='computadores' alt="CuartaGen" />
        </div>

        <div className="right-column">
          <section>
            <h3>Características Principales</h3>
            <ul>
              <li><strong>Microprocesadores:</strong> Integración de la CPU en un solo chip, facilitando la fabricación de computadoras más potentes y compactas.</li>
              <li><strong>Computadoras Personales:</strong> Auge de las computadoras personales gracias a la disponibilidad de microprocesadores.</li>
              <li><strong>Mayor Velocidad y Capacidad:</strong> Significativo aumento en el rendimiento y la capacidad de procesamiento.</li>
              <li><strong>Inicio de la Revolución Digital:</strong> Cambios radicales en la forma en que la sociedad interactúa con la tecnología.</li>
            </ul>
          </section>
          <section>
            <h3>Impacto Histórico</h3>
            <ul>
              <li><strong>Expansión de la Informática Personal:</strong> Mayor accesibilidad de las computadoras en hogares y pequeñas empresas.</li>
              <li><strong>Desarrollo de Software:</strong> Surgimiento de una amplia variedad de software para diferentes aplicaciones.</li>
              <li><strong>Inicio de la Era de la Información:</strong> Transformación de la sociedad hacia una era digital.</li>
            </ul>
          </section>
          <section>
            <h3>Legado y Transición</h3>
            <ul>
              <li><strong>Transición a la Quinta Generación:</strong> Enfoque en el desarrollo de la inteligencia artificial y tecnologías emergentes.</li>
              <li><strong>Continuidad en Innovación:</strong> Contribución al continuo avance tecnológico.</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

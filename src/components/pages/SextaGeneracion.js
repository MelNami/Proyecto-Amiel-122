import React from 'react'
import { Footer } from '../maquetado/Footer'
import SextaGen from '../images/SextaGen.jpg'
export const SextaGeneracion = () => {
  return (
    <div>
      <h2>Esta es la sexta generación</h2>
      <div className='container'>
        <div className="left-column">
          <header>
            <h2>(Fecha por determinar)</h2>
          </header>
          <img src={SextaGen} className='computadores' alt="SextaGen" />
        </div>

        <div className="right-column">
          <section>
            <h3>Tendencias y Enfoques Esperados</h3>
            <ul>
              <li><strong>Computación Cuántica:</strong> Integración de principios de la mecánica cuántica para realizar cálculos avanzados.</li>
              <li><strong>Inteligencia Artificial Avanzada:</strong> Desarrollo de sistemas aún más sofisticados en el aprendizaje automático y toma de decisiones.</li>
              <li><strong>Conectividad Ubicua:</strong> Mayor integración de dispositivos en entornos interconectados y ubicuos.</li>
              <li><strong>Computación Sostenible:</strong> Enfoque en tecnologías que minimizan el impacto ambiental.</li>
            </ul>
          </section>
          <section>
            <h3>Posibles Desarrollos Futuros</h3>
            <ul>
              <li><strong>Avances en Interfaces Cerebro-Computadora:</strong> Exploración de tecnologías que permiten una comunicación directa entre el cerebro y las computadoras.</li>
              <li><strong>Mayor Automatización:</strong> Integración de sistemas automatizados en diversos aspectos de la vida cotidiana y la industria.</li>
              <li><strong>Énfasis en Seguridad:</strong> Desarrollo de tecnologías avanzadas para garantizar la seguridad de la información.</li>
            </ul>
          </section>
          <section>
            <h3>Expectativas y Desafíos</h3>
            <ul>
              <li><strong>Transformación Societal:</strong> Impacto significativo en la forma en que vivimos y trabajamos.</li>
              <li><strong>Ética en la Tecnología:</strong> Mayor atención a consideraciones éticas en el desarrollo y uso de la tecnología.</li>
              <li><strong>Colaboración Global:</strong> Necesidad de colaboración global para abordar desafíos tecnológicos y sociales.</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import React from 'react'
import { Footer } from '../maquetado/Footer'
import QuintaGen from '../images/QuintaGe.jpg'
export const QuintaGeneracion = () => {
  return (
    <div>
      <h2>Esta es la quinta generación</h2>
      <div className='container'>
        <div className="left-column">
          <header>
            <h2>(1988 en adelante)</h2>
          </header>
          <img src={QuintaGen} className='computadores' alt="QuintaGen" />
        </div>

        <div className="right-column">
          <section>
            <h3>Características Principales</h3>
            <ul>
              <li><strong>Enfoque en Inteligencia Artificial:</strong> Desarrollo de sistemas que pueden realizar tareas que requieren inteligencia humana.</li>
              <li><strong>Procesadores Paralelos:</strong> Uso de tecnologías que permiten realizar múltiples tareas simultáneamente.</li>
              <li><strong>Avances en Robótica:</strong> Integración de tecnologías robóticas más sofisticadas.</li>
              <li><strong>Interconexión Global:</strong> Auge de la conectividad global a través de Internet.</li>
            </ul>
          </section>
          <section>
            <h3>Impacto Histórico</h3>
            <ul>
              <li><strong>Desarrollo de la Inteligencia Artificial:</strong> Avances significativos en la capacidad de las máquinas para aprender y realizar tareas complejas.</li>
              <li><strong>Transformación de la Sociedad:</strong> Cambios en la forma en que vivimos y trabajamos debido a la tecnología.</li>
              <li><strong>Globalización Tecnológica:</strong> Conexión global a través de redes de información.</li>
            </ul>
          </section>
          <section>
            <h3>Legado y Perspectivas Futuras</h3>
            <ul>
              <li><strong>Continuidad en Desarrollo Tecnológico:</strong> Contribución a la evolución continua de la tecnología informática.</li>
              <li><strong>Exploración de Nuevas Fronteras:</strong> Investigación y desarrollo en áreas emergentes como la computación cuántica.</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

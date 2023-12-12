import React from 'react'
import { Carousel } from '../Carrusel/Carousel'
import { Footer } from '../maquetado/Footer'
import InicioStyle from '../pages/InicioStyle.css'
import evolucionCompu from '../images/evolucionCompu.png'
export const Inicio = () => {
  return (
    <div >
      <h1>Generaciones de Computadoras</h1>
        <Carousel />
        <div className='container'>
          <div className="leftc">
            <img src={evolucionCompu} alt="evolucionCompu" className='evolucionCompu'/>
            <p>Las generaciones de computadoras representan hitos cruciales en la evolución tecnológica que ha llevado a la forma actual de las máquinas que conocemos. Cada generación ha sido marcada por avances significativos en hardware, software y capacidades de procesamiento. En la <strong>primera generación (1940-1956)</strong>, las computadoras eran colosales y empleaban válvulas de vacío para realizar cálculos. La <strong>segunda generación (1957-1963)</strong> introdujo transistores, reduciendo el tamaño y mejorando la eficiencia.</p>
            <p>Con la <strong>tercera generación (1964-1971)</strong>, surgieron los circuitos integrados, permitiendo computadoras más compactas y potentes. La <strong>cuarta generación (1972-2010)</strong> presenció el advenimiento de los microprocesadores y el surgimiento de computadoras personales, acompañadas de sistemas operativos como UNIX y MS-DOS. La <strong>quinta generación (desde 2010 en adelante)</strong> nos ha sumergido en la era de la computación cuántica y la inteligencia artificial, explorando nuevos paradigmas de procesamiento de información.</p>
            <p>En constante evolución, se anticipa una <strong>sexta generación</strong> que promete avances aún más notables, impulsada por tecnologías emergentes como inteligencia artificial avanzada, computación cuántica a gran escala y posiblemente innovaciones que aún están por descubrirse. Esta introducción busca proporcionar una visión panorámica de las generaciones de computadoras, marcando los hitos que han dado forma a la revolución tecnológica que continúa transformando nuestro mundo.</p>
          </div>

          <div className="rightc">
            <p><strong>Primera Generación :</strong> Durante esta etapa, las computadoras eran enormes y utilizaban válvulas de vacío para procesar datos. Ejemplos notables incluyen la ENIAC y la UNIVAC.</p>
            <p><strong>Segunda Generación :</strong> Se introdujeron los transistores en lugar de válvulas de vacío, lo que redujo el tamaño de las computadoras y mejoró su eficiencia. Asimismo, se desarrollaron los lenguajes de programación de alto nivel, como COBOL y FORTRAN.</p>
            <p><strong>Tercera Generación :</strong> Surgieron los circuitos integrados (chips) y las computadoras se volvieron más compactas y potentes. COBOL, FORTRAN y ALGOL fueron ampliamente utilizados durante esta época.</p>
            <p><strong>Cuarta Generación :</strong> Se dio paso a los microprocesadores, lo que permitió el desarrollo de computadoras personales. Surgieron los sistemas operativos como UNIX y MS-DOS. Además, se popularizaron los lenguajes de programación como C y C++.</p>
            <p><strong>Quinta Generación :</strong> Actualmente, estamos en la era de las computadoras cuánticas y de la inteligencia artificial. Se exploran nuevas formas de procesamiento de información.</p>
            <p><strong>Sexta Generación:</strong> Se espera que esta fase se caracterice por avances en inteligencia artificial, computación cuántica y tecnologías emergentes. </p>

          </div>
      </div> 
      <Footer/>
    </div>
  )
}

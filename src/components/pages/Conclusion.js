import React from 'react'
import { Link } from 'react-router-dom';
import { Footer } from '../maquetado/Footer'
import ConclusionStyle from '../pages/ConclusionStyle.css'
export const Conclusion = () => {
  return (
    <div>
        <h1>CONCLUSION</h1>

            <div className='contenedor'>
          <div className='texti'>
          <p>
            A lo largo de las décadas, las generaciones de computadoras han delineado la asombrosa evolución tecnológica que ha definido la era de la informática. Desde la Primera Generación, caracterizada por el uso de tubos al vacío y computadoras monumentales destinadas a cálculos científicos y militares, hasta la Segunda Generación, donde los transistores introdujeron una era de mayor eficiencia y confiabilidad, cada fase ha dejado una marca indeleble en la historia de la tecnología. La Tercera Generación trajo consigo la miniaturización y la incorporación de circuitos integrados, permitiendo computadoras más pequeñas y veloces, con una expansión significativa en su aplicación en diversos sectores. 
          </p>
          <p>
          La llegada de los microprocesadores marcó la Cuarta Generación, inaugurando la era de las computadoras personales y dando inicio a la revolución digital que transformó la sociedad y la forma en que interactuamos con la tecnología. La Quinta Generación, a partir de 1988, se ha centrado en la inteligencia artificial y la conectividad global. Procesadores paralelos y avances en robótica han llevado a transformaciones significativas, alterando la forma en que vivimos y trabajamos. No obstante, a medida que ingresamos a la Sexta Generación (aunque sin una fecha precisa), se anticipan nuevos horizontes con un enfoque en la computación cuántica, inteligencia artificial avanzada y una mayor integración de dispositivos en entornos ubicuos. 
          </p>
          <p>Estas transiciones generacionales no solo han impulsado mejoras tecnológicas, sino que también han moldeado la sociedad y han influido en la manera en que abordamos los desafíos de la vida moderna. Desde las enormes máquinas de la década de 1940 hasta los dispositivos altamente sofisticados y conectados de hoy en día, las generaciones de computadoras han representado una increíble narrativa de progreso, innovación y cambio. Este viaje tecnológico continúa, prometiendo un futuro donde la informática seguirá siendo una fuerza impulsora fundamental en la evolución de la sociedad y la civilización.</p>
          <h2>Botones</h2>
          </div>
          <div className='botoncitos'>
            
            <Link to='/PrimeraGeneracion.js'>
              <button className='boton'>1ra Gen.</button>
            </Link>
            <Link to='/SegundaGeneracion.js'>
              <button className='boton'>2da Gen.</button>
            </Link>
            <Link to='/TerceraGeneracion.js'>
              <button className='boton'>3ra Gen.</button>
            </Link>
            <Link to='/CuartaGeneracion.js'>
              <button className='boton'>4ta Gen.</button>
            </Link>
            <Link to='/QuintaGeneracion.js'>
              <button className='boton'>5ta Gen.</button>
            </Link>
            <Link to='/SextaGeneracion.js'>
              <button className='boton'>6ta Gen.</button>
            </Link>
          </div>

        </div>
        <Footer/>
    </div>
  )
}

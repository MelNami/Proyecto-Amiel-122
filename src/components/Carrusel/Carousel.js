import React from 'react'
import CarouselStyle from '../Carrusel/CarouselStyle.css'
import PrimGen from '../images/PrimGen.jpeg';
import SegunGen from '../images/SegunGen.jpeg';
import TercGen from '../images/TercGen.jpg';
import CuartaGen from '../images/CuartaGen.jpg';
import QuintaGen from '../images/QuintaGe.jpg';
import SextaGen from  '../images/SextaGen.jpg';
export const Carousel = () => {
  return (
    <div className='container'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            

          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={PrimGen} alt="PrimGen" className='imgcarousel' />
              <div className="carousel-caption d-none d-md-block">
                <h5>Primera Generacion de computadoras</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={SegunGen} alt="SegunGen" className='imgcarousel'/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Segunda Generacion de computadoras</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={TercGen} alt="TercGen" className='imgcarousel'/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Tercera Generacion de computadoras</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={CuartaGen} alt="CuartaGen" className='imgcarousel'/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Cuarta Generacion de computadoras</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={QuintaGen} alt="QuintaGen" className='imgcarousel'/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Quinta Generacion de computadoras</h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={SextaGen} alt="SextaGen" className='imgcarousel'/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Sexta Generacion de computadoras</h5>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

    </div>
  )
}

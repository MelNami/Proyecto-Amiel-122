import React from 'react'
import { Link } from 'react-router-dom'
import logito from '../images/logoCompu.png';
import NavbarStyle from '../navigation/NavbarStyle.css'

export const Navbar = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                    <Link to='/src/components/pages/Inicio.js'>
                        <img src={logito} className='App-logo '   alt="PrimGen"/>
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link " to="/src/components/pages/Inicio.js">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/PrimeraGeneracion.js">PrimeraGeneracion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/SegundaGeneracion.js">SegundaGeneracion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/TerceraGeneracion.js">TerceraGeneracion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/CuartaGeneracion.js">CuartaGeneracion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/QuintaGeneracion.js">QuintaGeneracion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/SextaGeneracion.js">SextaGeneracion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/Formulario.js">Formulario</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/Conclusion.js">Conclusion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/Creditos.js">Creditos</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

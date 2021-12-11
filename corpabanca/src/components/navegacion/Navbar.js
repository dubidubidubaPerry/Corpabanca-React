import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/'>
                    <img src='./CorpBanca-en-Cali.jpg' width='60' height='' ></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link " to='/' >Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Servicios'>Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Herramientas'>Herramientas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Contacto'>Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/Sesion'>Iniciar Sesión</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/CrearCuenta'>Crear Cuenta</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            
        </div>
    )
}

export default Navbar

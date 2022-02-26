import React from 'react'
import {Link} from 'react-router-dom'

function navbar() {
  return (
      
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img src="/abuela.png" alt="" width="70" height="74" class="d-inline-block align-text-top"></img>
    <Link className="navbar-brand" to="/">La Nona Dora
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Productos">Productos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
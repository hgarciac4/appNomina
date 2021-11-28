import React, { Component }  from "react";
import { Link } from "react-router-dom";

import Header from "../component/header";
import Footer from "../component/footer";

class Login extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <Link to="/home" class="navbar-brand" href="#page-top">SISTEMA DE NOMINA</Link>
                        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">INICIO</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <img class="usuario"src="assets/img/portfolio/usuario.jpg" />
                        <div class="login">  
                            <br></br>  
                            <h1 class="masthead-heading text-uppercase mb-0">INGRESAR</h1>
                            <br></br><br></br>
                            <form>
                                <label for = "Nombre de usuario">Nombre de usuario</label>
                                <input type="text" placeholder= "Ingresar usuario" />
                                <label for = "Contraseña">Contraseña</label>
                                <input type="password" placeholder= "Ingresar contraseña" />
                                
                                <input type="submit" value="Enviar" />
                                <br></br><br></br>
                                <a href="#">Recuperar contraseña</a>
                                <br></br>
                                <Link to="/home">Inicio</Link>
                            </form> 
                        </div>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        
                    </div>
                </header>
            </div>
        )
    }
}

export default Login;
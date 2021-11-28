import React, { Component }  from "react";
import { Link } from "react-router-dom";

class Employee extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand" href="#page-top">SISTEMA DE NOMINA</a>
                        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Datos generales</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Datos laborales</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Vacaciones</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <img class="masthead-avatar mb-5" class="empleado" src="assets/img/portfolio/empleado.jpg" alt="..."/>
                        <h1 class="masthead-heading text-uppercase mb-0">BIENVENIDO</h1>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </header>
                
                <section class="page-section portfolio" id="portfolio">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                                <div class= "empleado">
                                    <form>
                                        <p>
                                            <label for = "Nombre de usuario">Nombres</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "Apellidos">Apellidos</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "T_documento">T.documento</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "N_documento">Nº documento</label>
                                            <input type="text"/>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                                <div class= "empleado">
                                    <form>
                                        <p>
                                            <label for = "telefono">Nº Telefono</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "celular">Nº Celular</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "direccion">Direccion</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "email">Email</label>
                                            <input type="text"/>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
                                <div class= "empleado">
                                    <form>
                                        <p>
                                            <label for = "nacido">Fecha de nacimiento</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "l_nacido">Lugar de nacimiento</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "Estado">Estado civil</label>
                                            <input type="text"/>
                                        </p>
                                        <p>
                                            <label for = "profesion">Profesion</label>
                                            <input type="text"/>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </section>
                
                <section class="page-section portfolio bg-primary text-white" id="about">
                    <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>  
                            <div class= "empleado">
                                <form>
                                    <label for = "vinculacion">Fecha de vinculacion</label>
                                    <input type="text"/>
                                    <br/>
                                    <label for = "cargo">Cargo</label>
                                    <input type="text"/>
                                    <br/>
                                    <label for = "sueldo">Sueldo</label>
                                    <input type="text"/>
                                    <label for = "area">Area</label>
                                    <input type="text"/>
                                    <label for = "tipo">Nº Tipo de contrato</label>
                                    <input type="text"/>
                                    <label for = "celular">Nº Celular</label>
                                    <input type="text"/>
                                    <label for = "direccion">Direccion</label>
                                    <input type="text"/>
                                </form>
                            </div>
                        </div>   
                    </div>
                </section>
                
                <section class="page-section" id="contact">
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">VACACIONES</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-xl-7">
                                <form id="contactForm">
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">NOMBRE Y APELLIDOS</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email</label>
                                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label for="phone">FECHA DE INGRESO</label>
                                        <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." ></textarea>
                                        <label for="message">MENSAJE</label>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <div class="d-none" id="submitSuccessMessage">
                                        <div class="text-center mb-3">
                                            <div class="fw-bolder">Form submission successful!</div>
                                        </div>
                                    </div>
                                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                    <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Employee;
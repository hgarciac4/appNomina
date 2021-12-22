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
                    </div>
                </header>
                
                <section class="page-section portfolio" id="gestion">
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Gestión de Nómina</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Actualizar Datos</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/crear.jpg" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                    <Link to="/crudPermisos" class="enlace">
                                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div class="portfolio-item-caption-content text-center text-white">Solicitudes de Permisos</div>
                                        </div>
                                        <img class="img-fluid" src="assets/img/portfolio/permisos.jpg" alt="..." />
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                                    <Link to="/crudVacaciones" class="enlace">
                                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div class="portfolio-item-caption-content text-center text-white">Solicitudes de Vacaciones</div>
                                        </div>
                                        <img class="img-fluid" src="assets/img/portfolio/vacaciones.jpg" alt="..." />
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" >
                                    <Link to="/reportepago" class="enlace">
                                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div class="portfolio-item-caption-content text-center text-white">Reporte Pago</div>
                                        </div>
                                        <img class="img-fluid" src="assets/img/portfolio/salario.png" alt="..." />
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Solicitar Certificado Laboral</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/contador.png" alt="..." />
                                </div>
                            </div>        
                        </div>
                    </div>
                </section>

                <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Pagina en construcción</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/construccion.png" alt="..." />
                                            <p class="mb-4">En construccion</p>
                                            <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employee;
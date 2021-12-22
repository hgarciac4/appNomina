import React, { Component }  from "react";
import { Link } from "react-router-dom";

import CrearEmpleado from "../component/crearEmpleado";
import CrudPermisos from "../component/crudPermisos";
import DatosSalEmpleado from "../component/reportePago";

class Nomina extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand" href="#page-top">Bienvenido</a>
                        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#gestion">Gestión de Nómina</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#reportes">Reportes</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Cerrar sesion</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

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
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Crear Empleado</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/crear.jpg" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" >
                                    <Link to="/reportepago" class="enlace">
                                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div class="portfolio-item-caption-content text-center text-white">Ingresar Información Salarial</div>
                                        </div>
                                        <img class="img-fluid" src="assets/img/portfolio/salario.png" alt="..." />
                                    </Link>
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
                        </div>
                    </div>
                </section>
                
                <section class="page-section bg-primary text-white mb-0" id="reportes">
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-white">Reportes</h2>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 ms-auto">
                                <p class="lead">Empleados que devengan más de:</p>
                                <input class="form-control" id="salarymax" data-type="currency" placeholder="Ingrese Valor" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">Valor requerido</div>
                                <div class="text-center mt-4" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                    <a class="btn btn-xl btn-outline-light" >
                                        <i class="fas fa-download me-2"></i>
                                        Generar Reporte
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div class="row">
                            <div class="col-lg-4 me-auto">
                                <p class="lead">Empleados que devengan menos de:</p>
                                <input class="form-control" id="salarymax" type="text" placeholder="Ingrese Valor" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">Valor requerido</div>
                                <div class="text-center mt-4" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                    <a class="btn btn-xl btn-outline-light" >
                                        <i class="fas fa-download me-2"></i>
                                        Generar Reporte
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div class="copyright py-4 text-center text-white">
                    <div class="container"><small>Copyright &copy; MisiónTIC Grupo 13 Equipo 9</small></div>
                </div>

                <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8 col-xl-7">
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Crear Empleado</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>

                                            <CrearEmpleado />
                                            
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

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

export default Nomina;
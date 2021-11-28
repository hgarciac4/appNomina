import React, { Component }  from "react";
import { Link } from "react-router-dom";

import Header from "../component/header";
import Footer from "../component/footer";

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
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Cerrar sesion</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <h1 class="masthead-heading text-uppercase mb-0">Usuario Contador</h1>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon">
                                <img class="masthead-avatar mb-5" src="assets/img/portfolio/logo.png" alt="..." />
                            </div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <p class="masthead-subheading font-weight-light mb-0">Sistema de nómina de Google</p>
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
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Crear Empleado</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/crear.jpg" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Ingresar Información Salarial</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/salario.png" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Solicitudes de Permisos</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/permisos.jpg" alt="..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white">Solicitudes de Vacaciones</div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/vacaciones.jpg" alt="..." />
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
                            <div class="col-lg-4 ms-auto"><p class="lead">Empleados que devengan más de:</p>
                                <input class="form-control" id="salarymax" data-type="currency" placeholder="Ingrese Valor" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">Valor requerido</div>
                                <div class="text-center mt-4">
                                    <a class="btn btn-xl btn-outline-light" href="">
                                        <i class="fas fa-download me-2"></i>
                                        Generar Reporte
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-4 me-auto"><p class="lead">Empleados que devengan menos de:</p>
                            <input class="form-control" id="salarymax" type="text" placeholder="Ingrese Valor" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">Valor requerido</div>
                                <div class="text-center mt-4">
                                    <a class="btn btn-xl btn-outline-light" href="">
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
                                            <div class="row justify-content-center">
                                                <div class="col-lg-8 col-xl-7">
                                                    <form id="contactForm">
                                                        <div class="form-floating mb-3">    
                                                            <input class="form-control" id="nombre" type="text" placeholder="Nombre" data-sb-validations="required" />
                                                            <label for="nombre">Nombre</label>
                                                            <div class="invalid-feedback" data-sb-feedback="nombre:required">Nombre is required.</div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="apellidos" type="text" placeholder="Apellidos" data-sb-validations="required" />
                                                            <label for="apellidos">Apellidos</label>
                                                            <div class="invalid-feedback" data-sb-feedback="apellidos:required">Apellidos is required.</div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="cedula" type="text" placeholder="cedula" data-sb-validations="required" />
                                                            <label class="form-label" for="cedula">Cédula</label>
                                                            <div class="invalid-feedback" data-sb-feedback="cedula:required">Cédula is required.</div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="telefono" type="text" placeholder="Teléfono" data-sb-validations="required" />
                                                            <label class="form-label" for="telefono">Teléfono</label>
                                                            <div class="invalid-feedback" data-sb-feedback="telefono:required">Teléfono is required.</div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="correoElectronico" type="email" placeholder="Correo electrónico" data-sb-validations="required,email" />
                                                            <label class="form-label" for="correoElectronico">Correo electrónico</label>
                                                            <div class="invalid-feedback" data-sb-feedback="correoElectronico:required">Correo electrónico is required.</div>
                                                            <div class="invalid-feedback" data-sb-feedback="correoElectronico:email">Correo electrónico Email is not valid.</div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="fechaDeIngreso" type="date" placeholder="Fecha de ingreso" data-sb-validations="required" />
                                                            <label class="form-label" for="fechaDeIngreso">Fecha de ingreso</label>
                                                            <div class="invalid-feedback" data-sb-feedback="fechaDeIngreso:required">Fecha de ingreso is required.</div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="fechaDeFinalizacionDeContrato" type="date" placeholder="Fecha de finalización de contrato" data-sb-validations="required" />
                                                            <label class="form-label" for="fechaDeFinalizacionDeContrato">Fecha de finalización de contrato</label>
                                                            <div class="invalid-feedback" data-sb-feedback="fechaDeFinalizacionDeContrato:required">Fecha de finalización de contrato is required.</div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="clave" type="password" placeholder="Clave" data-sb-validations="required" />
                                                            <label class="form-label" for="clave">Clave</label>
                                                            <div class="invalid-feedback" data-sb-feedback="clave:required">Clave is required.</div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="validarClave" type="password" placeholder="Validar clave" data-sb-validations="required" />
                                                            <label class="form-label" for="validarClave">Validar clave</label>
                                                            <div class="invalid-feedback" data-sb-feedback="validarClave:required">Validar clave is required.</div>
                                                        </div>
                                                        <div class="d-none" id="submitSuccessMessage">
                                                            <div class="text-center mb-3">
                                                                <div class="fw-bolder">Form submission successful!</div>
                                                            </div>
                                                        </div>
                                                        <div class="d-none" id="submitErrorMessage">
                                                            <div class="text-center text-danger mb-3">Error sending message!</div>
                                                        </div>
                                                        <div class="d-grid">
                                                            <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Crear</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            
                                            <button class="btn btn-primary" href="#gestion" data-bs-dismiss="modal">
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
                
                <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Nómina</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                        
                                            <form id="contactForm">
                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" id="findcc" type="text"  data-sb-validations="required" />
                                                        <label for="findcc" >Ingrese número de cédula</label>
                                                        <div class="invalid-feedback" data-sb-feedback="findcc:required">Ingrese número de cédula</div>
                                                    </div>
                                                    <div class="d-none" id="submitSuccessMessage">
                                                        <div class="text-center mb-3">
                                                            <div class="fw-bolder">Form submission successful!</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-none" id="submitErrorMessage">
                                                        <div class="text-center text-danger mb-3">Error sending message!</div>
                                                    </div>
                                                    <div class="d-grid">
                                                        <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Buscar</button>
                                                    </div>
                                            </form>

                                            <form id="contactForm" >
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="name" type="text" readonly data-sb-validations="required" />
                                                    <label for="name">Nombre</label>
                                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="apellido" type="text" readonly data-sb-validations="required,email" />
                                                    <label for="email">Apellidos</label>
                                                    <div class="invalid-feedback" data-sb-feedback="apellido:required">Sin apellido.</div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="resultel" type="tel" readonly data-sb-validations="required" />
                                                    <label for="phone">Número de teléfono</label>
                                                    <div class="invalid-feedback" data-sb-feedback="resultel:required">Número de teléfono requerido</div>
                                                </div>
                                            </form>

                                            <div class="container px-5 my-5">
                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" id="salario" type="number"  data-sb-validations="required" /><label for="findcc" >Ingrese salario devengado</label>
                                                        <div class="invalid-feedback" data-sb-feedback="findcc:required">Ingrese salario devengado</div>
                                                    </div>
                                                    <div class="d-none" id="submitSuccessMessage">
                                                        <div class="text-center mb-3">
                                                            <div class="fw-bolder">Form submission successful!</div>
                                                        </div>
                                                    </div>
                                                    <div class="d-none" id="submitErrorMessage">
                                                        <div class="text-center text-danger mb-3">Error sending message!</div>
                                                    </div>
                                                    <div class="d-grid">
                                                        <button class="btn btn-primary btn-lg disabled" id="registro" type="button">Registrar</button>
                                                    </div>
                                            </div>
                                            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

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
                
                <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Permisos</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/construccion.png" alt="..." />
                                            <p class="mb-4">En construcción</p>
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
                
                <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Vacaciones</h2>
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

export default Nomina;
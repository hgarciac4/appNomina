import React, { Component }  from "react";
import { Link } from "react-router-dom";

class Users extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand" href="#page-top"><span class="nav-item mx-0 mx-lg-1"></span></a>
                        <span class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                            <img src="assets/img/portfolio/google.png" width="50" height="50" alt=""/></a>
                        </span>
                        <a class="navbar-brand" href="#page-top">administrador</a>
                        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/dashboard">INICIO</Link></li>
                                <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">SALIDA</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section class="page-section portfolio" id="portfolio">
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">&nbsp;</h2>

                        <div class="row justify-content-center">
                            <p><center>
                                <p>
                                    <label for="select">Tipo de Usuario:</label>
                                    <select name="select" id="select">
                                        <option value="Selecciona una opcion">Selecciona una opcion</option>
                                        <option value="Empleado">Empleado</option>
                                        <option value="nomina">Nomina</option>
                                    </select>
                                </p>
                                <p>
                                    <label for="email3">Nombre(s):</label>
                                    <input type="email" name="email3" id="email3" />
                                    <label for="email4">Apellidos:</label>
                                    <input type="email" name="email4" id="email4" />
                                </p>
                                <p>
                                    <label for="number">Cedula:</label>
                                    <input type="number" name="number" id="number" />
                                    <label for="number2"> Celular:</label>
                                    <input type="number" name="number2" id="number2" />
                                </p>
                                <p>
                                    <label for="email">Email:</label>
                                    <input type="email" name="email" id="email" />
                                    <label for="email2">Email:</label>
                                    <input type="email" name="email2" id="email2" />
                                </p>
                                <p>
                                    <label for="password">Contraseña:</label>
                                    <input type="password" name="password" id="password" />
                                    <label for="password2">Confirmar Contraseña:</label>
                                    <input type="password" name="password2" id="password2" />
                                </p>
                                <p>
                                    <label for="date">Fecha Inicio:</label>
                                    <input type="date" name="date" id="date" />
                                    <label for="date2">Fecha Final:</label>
                                    <input type="date" name="date2" id="date2" />
                                </p>
                            </center></p>
                            <p><center>
                                <Link to="/dashboard" >CREAR</Link>
                            </center></p>
                        </div>
                    </div>
                </section>
                <div class="copyright py-4 text-center text-white">
                    <div class="container"><small><img src="assets/img/portfolio/wgoogle.png" width="64" height="19" alt=""/>Copyright &copy; Sistema de Nomina de Google</small></div>
                </div>
                   
                <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">USUARIOS</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-address-card"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <label for="identificacion">Identificacion:</label>
                                            <input type="identificacion" name="identificacion" id="identificacion" />
                                            <p class="mb-4">Favor ingresar el numero de documento del usuario a consultar.</p>
                                            <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                                <i class="fas fa-paper-plane"></i>
                                                Enviar
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
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">NOMINA</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-calculator"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <img src="assets/img/portfolio/nomina.png" alt="..." width="350" class="img-fluid rounded mb-5" />
                                            <p class="mb-4">Ingresara con los permisos del usuario NOMINA ¿Desea continuar?</p>
                                            <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                                <i class="fas fa-angle-double-right"></i>
                                                Ingresar
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
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">EMPLEADO</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-briefcase"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <img src="assets/img/portfolio/empleados.png" alt="..." width="350" class="img-fluid rounded mb-5" />
                                            <p class="mb-4">Ingresara con los permisos del usuario EMPLEADO ¿Desea continuar?</p>
                                            <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                                <i class="fas fa-angle-double-right"></i>
                                                Ingresar
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
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
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
                
                <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="..." />
                                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
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
                
                <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="..." />
                                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
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

export default Users;
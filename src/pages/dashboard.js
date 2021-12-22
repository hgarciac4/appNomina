import React, { Component }  from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    render() {
        return (
            <div id="page-top">
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand" href="#page-top"><span class="nav-item mx-0 mx-lg-1"></span></a>
                        <span class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                            <img src="assets/img/portfolio/google.png" width="50" height="50" alt=""/></a>
                        </span><a class="navbar-brand" href="#page-top">administrador</a>
                        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="admin.html">INICIO</a></li>
                                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">SALIDA</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section class="page-section portfolio" id="portfolio">
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">&nbsp;</h2>

                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                    <Link to="/users">
                                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-address-card fa-3x"></i></div>
                                        </div>
                                        <p><img class="img-fluid" src="assets/img/portfolio/users.png" alt="..." /><strong><center> USUARIOS </center></strong></p>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                    <Link to="/nomina">
                                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-calculator fa-3x"></i></div>
                                        </div>
                                        <p><img class="img-fluid" src="assets/img/portfolio/nomina.png" alt="..." /><strong><center>NOMINA</center></strong></p>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                    <Link to="/empleado">
                                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-briefcase fa-3x"></i></div>
                                        </div>
                                        <p><img src="assets/img/portfolio/empleados.png" alt="..." height="285" class="img-fluid" /><strong><center>EMPLEADOS</center></strong></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="copyright py-4 text-center text-white">
                    <div class="container"><small><img src="assets/img/portfolio/wgoogle.png" width="64" height="19" alt=""/>Copyright &copy; Sistema de Nomina de Google</small></div>
                </div>
            </div>
        )
    }
}
export default Dashboard;
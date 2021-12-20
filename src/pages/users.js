import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";

import Table from "../component/Table";
import Header from "../component/header";
import Footer from "../component/footer";

import { get, post, httpDelete } from "../api/http"

const Users = () => {
    
    const [users, setUsers] = useState([]);
    const [doRequest, setDoRequest] = useState(true);

    useEffect(() => {
        if (doRequest) {
            setTimeout(() => {
                console.log("leyendo users");
                get("users").then((data) => {
                    setUsers(data.usuarios);
                    setDoRequest(false)
                });
            },
            20
        )}
    }, [doRequest]);

    const handleDelete = (id) => {
        if (window.confirm("¿Seguro que desea eliminar este Usuario?")) {
            console.log("Delete usuario with id:", id)
            httpDelete(`user/${id}`);
            setDoRequest(true);
        }
    }

    const rows = users.map((user) => {
        return (
            <tr key={user._id}>
                <td>{user.idUsuario}</td>
                <td>{user.nombre}</td>
                <td>{user.cedula}</td>
                <td>{user.telefono}</td>
                <td>{user.tipoUsuario}</td>
                <td>{user.activo}</td>
                <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(user._id)} >Eliminar</button></td>
            </tr>
        );
    });

    const columns = ["Usuario", "Nombre Usuario", "Cedula", "Telefono", "Tipo Usuario", "Activo"];
    const columnsTable = columns.map((column) => <th scope="col" key={column}>{column}</th>);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const user = {
            idUsuario: data.get("idUsuario"),
            nombre: data.get("nombre"),
            cedula: data.get("cedula"),
            telefono: data.get("telefono"),
            tipoUsuario: data.get("tipoUsuario"),
            activo: data.get("activo")
        }
        
        post("users", user);
        setDoRequest(true);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top"><span className="nav-item mx-0 mx-lg-1"></span></a>
                    <span className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                        <img src="assets/img/portfolio/google.png" width="50" height="50" alt=""/></a>
                    </span>
                    <a className="navbar-brand" href="#page-top">administrador</a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="admin.html">INICIO</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">SALIDA</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">&nbsp;</h2>

                    <div className="row justify-content-center">
                        <form name="fromUser" className="m-5" onSubmit={handleSubmit}>
                            <h2>Crear libro</h2>
                            <div className="mb-1" >
                                <label htmlFor="nombre" className="from-label">Nombre Completo:</label>
                                <input type="text" className="form-control" name="nombre" id="nombre" />
                            
                                <label htmlFor="cedula" className="from-label">Cedula:</label>
                                <input type="number" className="form-control" name="cedula" id="cedula" />
                            
                                <label htmlFor="telefono" className="from-label">Celular:</label>
                                <input type="number" className="form-control" name="telefono" id="telefono" />
                            
                                <label htmlFor="email" className="from-label">Email:</label>
                                <input type="email" className="form-control" name="email" id="email" />
                            
                                <label htmlFor="tipoUsuario" className="from-label">Tipo de Usuario:</label>
                                <select className="form-select" name="tipoUsuario" id="tipoUsuario">
                                    <option value="Selecciona una opcion">Selecciona una opcion</option>
                                    <option value="Empleado">Empleado</option>
                                    <option value="Nomina">Nomina</option>
                                </select>
                            
                                <label htmlFor="password">Contraseña:</label>
                                <input className="form-control" type="password" name="password" id="password" />

                                <label >Confirmar Contraseña:</label>
                                <input className="form-control" type="password" name="password2" id="password2" />
                            
                                <label htmlFor="fechaInicio">Fecha Inicio:</label>
                                <input className="form-control" type="date" name="fechaInicio" id="fechaInicio" />

                                <label htmlFor="Fecha Final">Fecha Final:</label>
                                <input className="form-control" type="date" name="fechaFin" id="FechaFin" />
                            </div>
                            <br />

                            <button type="submit" className="btn btn-primary" name="submit" id="submit">Crear</button>
                        </form>

                        <div name="users-table" className="m-5">
                            <h2>Lista de Usuarios</h2>
                            <Table rows={rows} columns={columnsTable} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small><img src="assets/img/portfolio/wgoogle.png" width="64" height="19" alt=""/>Copyright &copy; Sistema de Nomina de Google</small></div>
            </div>
                
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">USUARIOS</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-address-card"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <label htmlFor="identificacion">Identificacion:</label>
                                        <input type="identificacion" name="identificacion" id="identificacion" />
                                        <p className="mb-4">Favor ingresar el numero de documento del usuario a consultar.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-paper-plane"></i>
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">NOMINA</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-calculator"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img src="assets/img/portfolio/nomina.png" alt="..." width="350" className="img-fluid rounded mb-5" />
                                        <p className="mb-4">Ingresara con los permisos del usuario NOMINA ¿Desea continuar?</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-angle-double-right"></i>
                                            Ingresar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">EMPLEADO</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-briefcase"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img src="assets/img/portfolio/empleados.png" alt="..." width="350" className="img-fluid rounded mb-5" />
                                        <p className="mb-4">Ingresara con los permisos del usuario EMPLEADO ¿Desea continuar?</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-angle-double-right"></i>
                                            Ingresar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="..." />
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="..." />
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
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

export default Users;
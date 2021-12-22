import React, { useState, useEffect }  from "react";

import Table from "../component/Table";
import CrearEmpleado from "../component/crearEmpleado";

import { get, httpDelete, put } from "../api/http"

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
        if (window.confirm("¿Seguro que desea eliminar este Usuario?", id)) {
            console.log("Delete usuario with id:", id)
            httpDelete(`users/${id}`);
            setDoRequest(true);
        }
    }

    const handleEdit = (id) => {
        ocultarControles(true);
        document.getElementsById("idUsuario").value="4";
        
    }

    const ocultarControles = (estado) => {
        if(!estado) {
            document.getElementById("idUsuario").style.display = 'none';
        } else {
            document.getElementById("idUsuario").style.display = 'block';
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
                {/* <td>{user.activo}</td> */}
                {/* <td><button type="button" className="btn btn-warning" onClick={() => handleEdit(user._id)} >Editar</button></td> */}
                <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(user._id)} >Eliminar</button></td>
            </tr>
        );
    });

    const columns = ["Usuario", "Nombre Usuario", "Cedula", "Telefono", "Tipo Usuario"];
    const columnsTable = columns.map((column) => <th scope="col" key={column}>{column}</th>);

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
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">INICIO</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">SALIDA</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">&nbsp;</h2>

                    <div className="row justify-content-center">
                        <h2>Crear Usuario</h2>
                        
                        <CrearEmpleado />

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
        </div>
    )
}

export default Users;
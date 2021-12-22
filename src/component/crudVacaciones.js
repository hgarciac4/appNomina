import React, { useState, useEffect }  from "react";
import { get, post, httpDelete } from "../api/http"
import Table from "../component/Table";

import { Link } from "react-router-dom";

const CrudVacaciones = () => {

    const [vacaciones, setVacaciones] = useState([]);
    const [usuarios, setUsers] = useState([]);
    const [doRequest, setDoRequest] = useState(true);

    useEffect(() => {
        console.log("leyendo users");
        get("users").then((data) => {
          setUsers(data.usuarios);
        })
    }, []);

    useEffect(() => {
        if (doRequest) {
            setTimeout(() => {
                console.log("leyendo vacaciones");
                get("vacaciones").then((data) => {
                    setVacaciones(data.vacaciones);
                    setDoRequest(false)
                });
            },
            20
        )}
    }, [doRequest]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        const vacacion = {
            usuario: data.get("usuario"),
            fechaInicio: data.get("fechaInicio"),
            fechaFin: data.get("fechaFin"),
            aprobado: data.get("aprobado"),
            activo: data.get("activo")
        }
        
        post("vacaciones", vacacion);
        setDoRequest(true);
    }

    const handleDelete = (id) => {
        if (window.confirm("¿Seguro que desea eliminar estas Vacaciones?", id)) {
            console.log("Delete vacaciones with id:", id)
            httpDelete(`vacaciones/${id}`);
            setDoRequest(true);
        }
    }

    const rows = vacaciones.map((vacacion) => {
        return (
            <tr key={vacacion._id}>
                <td>{vacacion.usuario.nombre}</td>
                <td>{vacacion.fechaInicio}</td>
                <td>{vacacion.fechaFin}</td>
                <td>{vacacion.aprobado}</td>
                <td>{vacacion.activo}</td>
                <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(vacacion._id)} >Eliminar</button></td>
            </tr>
        );
    });

    const columns = ["Nombre Empleado", "Fecha Inicio", "Fecha Fin", "Aprobado", "Activo"];
    const columnsTable = columns.map((column) => <th scope="col" key={column}>{column}</th>);

    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top">Bienvenido</a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#gestion">Gestión de Nómina</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#reportes">Reportes</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Cerrar sesion</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Vacaciones</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <form name="permisoForm" className="m-5" onSubmit={handleSubmit} >
                    <div className="mb-1">
                        <label className="form-label" htmlFor="usuario">Selecciona el empleado</label>
                        <select className="form-select" id="usuario" name="usuario">
                            {usuarios.map((user) => <option key={user._id} value={user._id}>{user.nombre}</option>)}
                        </select>
                    </div>
                    <br />

                    <div className="mb-1">
                        <label className="form-label" htmlFor="fechaInicio">Fecha de salida</label>
                        <input className="form-control" id="fechaInicio" name="fechaInicio" type="date" placeholder="Fecha de ingreso" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="fechaInicio:required">Fecha de salida is required.</div>
                    </div>
                    <br />

                    <div className="mb-1">
                        <label className="form-label" htmlFor="fechaFin">Fecha de regreso de permiso</label>
                        <input className="form-control" id="fechaFin" name="fechaFin" type="date" placeholder="Fecha de regreo de vacaciones" data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="fechaFin:required">Fecha de finalización de vacaciones is required.</div>
                    </div>
                    <br />

                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Registrar</button>
                    </div>
                </form>

                <div name="permisos-table" className="m-5">
                    <h2>Lista de Vacaciones</h2>
                    <Table rows={rows} columns={columnsTable} />
                </div>
            </div>
        </div>
    )
}

export default CrudVacaciones;
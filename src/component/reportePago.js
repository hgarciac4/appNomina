import React, { useState, useEffect }  from "react";
import { get, post, httpDelete } from "../api/http";
import Table from "../component/Table";

import { Link } from "react-router-dom";

const ReportePago = () => {

    const [reportePago, setReportePago] = useState([]);
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
                console.log("leyendo reporte pago");
                get("reportepago").then((data) => {
                    setReportePago(data.reportePago);
                    setDoRequest(false)
                });
            },
            20
        )}
    }, [doRequest]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        const user = {
            idUsuario: data.get("idUsuario"),
            contraseña: data.get("contraseña"),
            nombre: data.get("nombre"),
            cedula: data.get("cedula"),
            telefono: data.get("telefono"),
            tipoUsuario: data.get("tipoUsuario"), 
            fechaIng: data.get("fechaIng"),
            activo: data.get("activo")
        }
        
        post("users", user);
        setDoRequest(true);
    }
    
    const handleDelete = (id) => {
        if (window.confirm("¿Seguro que desea eliminar elconcepto de pago?", id)) {
            console.log("Delete concepto with id:", id)
            httpDelete(`reportepago/${id}`);
            setDoRequest(true);
        }
    }

    const rows = reportePago.map((reporte) => {
        return (
            <tr key={reporte._id}>
                <td>{reporte.año}</td>
                <td>{reporte.mes}</td>
                <td>{reporte.usuario.nombre}</td>
                <td>{reporte.concepto}</td>
                <td>{reporte.valor}</td>
                <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(reporte._id)} >Eliminar</button></td>
            </tr>
        );
    });

    const columns = ["Año", "Mes", "Nombre Empleado", "Concepto", "Valor"];
    const columnsTable = columns.map((column) => <th scope="col" key={column}>{column}</th>);

    return (
        <div className="col-lg-8">
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

            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Nómina</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        
            <form name="reportePagoForm" className="m-5" onSubmit={handleSubmit}>
                <label htmlFor="año" className="form-label" >Ingrese año</label>
                <select className="form-select" name="año" id="año" >
                    <option selected="selected" value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
                <br />

                <label htmlFor="mes" className="form-label" >Ingrese mes</label>
                <select className="form-select" name="mes" id="mes" >
                    <option selected="selected" value="1">Enero</option>
                    <option value="2">Febrero</option>
                    <option value="3">Marzo</option>
                    <option value="4">Abril</option>
                    <option value="5">Mayo</option>
                    <option value="6">Junio</option>
                    <option value="7">Julio</option>
                    <option value="8">Agosto</option>
                    <option value="9">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                </select>
                <br />
                
                <label className="form-label" htmlFor="usuario">Selecciona el empleado</label>
                <select className="form-select" id="usuario" name="usuario">
                    {usuarios.map((user) => <option key={user._id} value={user._id}>{user.nombre}</option>)}
                </select>
                <br />

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="concepto" name="concepto" data-sb-validations="required" />
                    <label htmlFor="concepto" className="form-label">Concepto</label>
                    <div className="invalid-feedback" data-sb-feedback="concepto:required">A concepto is required.</div>
                </div>
        
                <div >
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="valor" name="valor" data-sb-validations="required" />
                        <label htmlFor="valor" className="form-label">Ingrese valor del concepto</label>
                        <div className="invalid-feedback" data-sb-feedback="valor:required">Ingrese valor del concepto</div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" id="registro" type="submit" >Registrar</button>
                    </div>
                </div>
            </form>
            
            <div name="reportepago-table" className="m-5">
                <h2>Reporte Pago</h2>
                <Table rows={rows} columns={columnsTable} />
            </div>

            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; MisiónTIC Grupo 13 Equipo 9</small></div>
            </div>
        </div>
    )
}

export default ReportePago;
import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { get, post } from "../api/http"

const CrearEmpleado = () => {

    // const [users, setUsers] = useState([]);
    const [doRequest, setDoRequest] = useState(true);

    useEffect(() => {
        if (doRequest) {
            setTimeout(() => {
                console.log("leyendo users");
                get("users").then((data) => {
                    // setUsers(data.usuarios);
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
        window.location.reload(true); 
    }

    return (
        <div>
            <div class="row justify-content-center"></div>
            <form name="fromUser" className="m-5" onSubmit={handleSubmit}>
                <div className="mb-1" >
                    <label htmlFor="idUsuario" className="from-label">Id Usuario:</label>
                    <input type="text" className="form-control" name="idUsuario" id="idUsuario" />
                    <br />
                
                    <label htmlFor="nombre" className="from-label">Nombre Completo:</label>
                    <input type="text" className="form-control" name="nombre" id="nombre" />
                    <br />

                    <label htmlFor="cedula" className="from-label">Cedula:</label>
                    <input type="number" className="form-control" name="cedula" id="cedula" />
                    <br />
                
                    <label htmlFor="telefono" className="from-label">Celular:</label>
                    <input type="number" className="form-control" name="telefono" id="telefono" />
                    <br />
                
                    <label htmlFor="email" className="from-label">Email:</label>
                    <input type="email" className="form-control" name="email" id="email" />
                    <br />
                
                    <label htmlFor="tipoUsuario" className="from-label">Tipo de Usuario:</label>
                    <select className="form-select" name="tipoUsuario" id="tipoUsuario">
                        <option value="Selecciona una opcion">Selecciona una opcion</option>
                        <option value="Empleado">Empleado</option>
                        <option value="Nomina">Nomina</option>
                    </select>
                    <br />
                
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input className="form-control" type="password" name="contraseña" id="password" />
                    <br />

                    <label >Confirmar Contraseña:</label>
                    <input className="form-control" type="password" name="contraseña2" id="contraseña2" />
                    <br />
                
                    <label htmlFor="fechaIng">Fecha Ingreso:</label>
                    <input className="form-control" type="date" name="fechaIng" id="fechaIng" />
                </div>
                <br />

                <button type="submit" className="btn btn-primary" name="submit" id="submit">Crear</button>
            </form>
        </div>
    )
}

export default CrearEmpleado;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/home";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Users from "../pages/users";
import Employee from "../pages/employees";
import Nomina from "../pages/nomina";
import ReportePago from "./reportePago";

import CrudPermisos from "./crudPermisos";
import CrudVacaciones from "./crudVacaciones";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/empleado" element={<Employee />} />
                <Route exact path="/nomina" element={<Nomina />} />
                <Route exact path="/reportePago" element={<ReportePago />} />
                
                <Route exact path="/crudPermisos" element={<CrudPermisos />} />
                <Route exact path="/crudVacaciones" element={<CrudVacaciones />} />
            </Routes> 
        </BrowserRouter>
    )
}

export default App
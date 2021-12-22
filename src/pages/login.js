import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { esContraseña, esCorreo, esNombre } from "./validaciones";

class Inputtext extends Component {
  constructor(props) {
    super(props);
    this.actualizarteState = this.actualizarteState.bind(this);
    this.state = {
      value: "",
      error: false,
      mensajeError: ""
    };
  }
  actualizarteState(e) {
    const { name, value } = e.target;
    console.log(this.props.validacion(value));

    if(this.props.validacion(value)){
        this.setState({
            value,
            error: false,
            mensajeError:""
        });
        this.props.actualizarteState({
            name, value, error:false
        });
    }else{
        this.setState({
            value,
            error: true,
            mensajeError:this.props.mensajeError
    });
    this.props.actualizarteState({
        name, value, error: true
    });
   }
  }


  

  render() {
    return (
      <div>
        <label htmlFor={"id" + this.props.name}>{this.props.label}</label>
        <input
          id={"id" + this.props.name}
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.actualizarteState}/>
          { this.state.error ? (<p>{this.state.mensajeError}</p>) : ("") }
      </div>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.actualizarteState = this.actualizarteState.bind(this);
    this.state = {
        nombre:{
            value:"",
            error:true
        },
        correo:{
            value:"",
            error:true
        },
        contraseña:{
            value:"",
            error:true
        },
        
    }
  }

  actualizarteState(input){
      console.log(input);
      this.setState({
          ...this.state,
          [input.name]:{
              value:input.value,
              error:input.error
          }
      }, ()=>{console.log(this.state);});
  }

  submit(e) {}

  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
          id="mainNav"
        >
          <div class="container">
            <Link to="/home" class="navbar-brand" href="#page-top">
              SISTEMA DE NOMINA
            </Link>
            <button
              class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-0 mx-lg-1">
                  <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                    INICIO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header class="masthead bg-primary text-white text-center">
          <div class="container d-flex align-items-center flex-column">
            <img class="usuario" src="assets/img/portfolio/usuario.jpg" />
            <div class="login">
              <br></br>
              <h1 class="masthead-heading text-uppercase mb-0">INGRESAR</h1>
              <br></br>
              <br></br>
              <form name="loginForm" className="m-5" onSubmit={this.submit}>
                <div className="mb-1">
                  <Inputtext
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre"
                    validacion={esNombre}
                    mensajeError="Nombre invalido"
                    actualizarteState={this.actualizarteState}
                  />
                  <br/>
                 <Inputtext
                    label="Correo"
                    name="correo"
                    placeholder="Correo"
                    validacion={esCorreo}
                    mensajeError="Correo no valido"
                    actualizarteState={this.actualizarteState}
                  />            

                  <br/>

                  <Inputtext
                    label="Contraseña"
                    name="contraseña"
                    placeholder="Contraseña"
                    validacion={esContraseña}
                    mensajeError="Contraseña no valida"
                    actualizarteState={this.actualizarteState}
                  />            

                  <br/>
                  <Link to="/dashboard" class="enlace">
                  <button 
                    disabled={this.state.nombre.error || 
                    this.state.correo.error || this.state.contraseña.error}
                    type="submit">Enviar
                    </button>
                  </Link>
                  
                </div>
                
              </form>
            </div>
            <div class="divider-custom divider-light">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-star"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Login;

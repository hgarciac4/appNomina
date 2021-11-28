import React, { Component }  from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    <img class="masthead-avatar mb-5" src="assets/img/portfolio/logo.png" alt="..." />
                    <h1 class="masthead-heading text-uppercase mb-0">Sistema de nómina de Google</h1>
                </div>
            </header>
        )
    }
}
export default Header;
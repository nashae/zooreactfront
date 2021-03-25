import React from "react";
import logo from "../../../assets/images/logo.png";
import { NavLink} from "react-router-dom";

const Navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="logo myzoo" width="50px" className="rounder"></img>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/animaux" exact className="nav-link">Nos animaux</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
);

export default Navbar;

import React from "react";
import './HeaderPrimary.css'
import Logo from '../../assets/images/logo125.png'

const HeaderPrimary = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid mx-5">
                <a href="/" className="navbar-brand">
                    <img src={Logo} alt="JHF Logo" style={{ height: '65px' }} />
                </a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                        <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/" className="nav-link nav-jhf" aria-current='page'>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a href="/progenitor" className="nav-link nav-jhf" aria-current='page'>PROGENITOR</a>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderPrimary;
import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo125.png';
import './HomeNavbar.css';

const HomeNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar fixed-top navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
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
                                <a href="/" className="nav-link nav-link-custom" aria-current='page'>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a href="progenitor/" className="nav-link nav-link-custom" aria-current='page'>PROGENITOR</a>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HomeNavbar;

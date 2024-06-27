import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Ertechlogo.png';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-black ">
            <div className="container-fluid">
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src={logo} style={{ width: "12em" }} className='my-3' alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNavDropdown"
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav my-2">
                        <li className="nav-item px-5">
                            <Link to="/" className='text-white text-decoration-none fs-2' onClick={closeNavbar}>Home</Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to="/about" className='text-white text-decoration-none fs-2' onClick={closeNavbar}>About</Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to="/services" className='text-white text-decoration-none fs-2' onClick={closeNavbar}>Our services</Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to="/contact" className='text-white text-decoration-none fs-2' onClick={closeNavbar}>Contact us</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" onClick={toggleNavbar}>
                                Dropdown link
                            </a>
                            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                                <li><a className="dropdown-item text-black" href="#" onClick={closeNavbar}>Action</a></li>
                                <li><a className="dropdown-item text-black" href="#" onClick={closeNavbar}>Another action</a></li>
                                <li><a className="dropdown-item text-black" href="#" onClick={closeNavbar}>Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
        <hr />
    </>
    );
};

export default Navbar;

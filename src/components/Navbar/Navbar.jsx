
import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import btnArrow from '../../assets/menuarrow.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-top'>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
                <div className="container nav-bar-bg">
                    <div className='mobile_view_section'>
                        <a className="navbar-brand" href="#">
                            <img alt="Logo" className="logo" src={Logo} />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={handleToggle}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div
                        className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav nav_bar-left">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section1">Documentation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section2">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section3">LYNC Portal</a>
                            </li>
                            <li className="nav-item">
                                <a href="#section4" className="nav-link">Request a demo</a>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleToggle} className='close-btn'> close</button>
                            </li>
                        </ul>

                       
                    </div>
                    <ul className="navbar-nav right-side-menu-list">
                            <li>
                                <a href="#" ><p>Get started</p> <img src={btnArrow} alt="Arrow" /></a>
                            </li>
                        </ul>
                </div>
            </nav>
        </header>
    </div>
  );
};

export default Navbar;

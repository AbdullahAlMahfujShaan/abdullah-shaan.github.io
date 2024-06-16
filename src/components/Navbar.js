import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#activities">Extra Curricular Activities</a>
                <a href="#resume">Resume</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Get In Touch</a>
            </div>
            <div className="navbar-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import './Header.css';
import profilePic from '../assets/profile-pic.jpg'; // Replace with your image

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Abdullah Shaan</h1>
                <p>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Let's get started</button>
            </div>
            <div className="header-image">
                <img src={profilePic} alt="Profile" />
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Worked with</p>
            <div className="footer-logos">
                <img src="clickup-logo.png" alt="ClickUp" />
                <img src="dropbox-logo.png" alt="Dropbox" />
                <img src="paychex-logo.png" alt="Paychex" />
                <img src="elastic-logo.png" alt="Elastic" />
                <img src="stripe-logo.png" alt="Stripe" />
            </div>
        </footer>
    );
};

export default Footer;

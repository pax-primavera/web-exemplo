import React from 'react';
import logo from '../../assets/logo-pax-verde.svg';
import './logo.css';

export default function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo Pax Verde" className="logo-image" />
        </div>
    );
}

import React from 'react';
import '../assets/style/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><p className="inline">Home</p></Link>
            <Link to="/Portafolio"><p className="inline">Portafolio</p></Link>
            <Link to="/Contact"><p className="inline">Contact</p></Link>           
        </div>
    );
}

export default Header;
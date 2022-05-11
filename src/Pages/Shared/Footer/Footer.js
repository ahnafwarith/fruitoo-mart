import React from 'react';
import logo from '../../../Images/fruito_logo.png'
import './Footer.css'

const Footer = () => {
    const thisDay = new Date();
    const year = thisDay.getFullYear();
    return (
        <footer className='text-center back'>
            <img className='mx-1' height={20} src={logo} alt="" /><p className='text-light'>Copyright @ {year}</p>
        </footer>
    );
};

export default Footer;
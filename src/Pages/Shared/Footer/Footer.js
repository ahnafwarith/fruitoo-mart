import React from 'react';

const Footer = () => {
    const thisDay = new Date();
    const year = thisDay.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;
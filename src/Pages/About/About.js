import React from 'react';
import backG from '../../Images/custom.jpg'

const About = () => {
    return (
        <div className='mt-5'>
            <div>
                <h3 className='text-center'>Ab<span className='text-warning'>o</span>ut Fruitoo Mart</h3>
            </div>
            <img className='w-100' src={backG} alt="" />
        </div>
    );
};

export default About;
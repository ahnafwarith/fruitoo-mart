import React from 'react';
import { Carousel } from 'react-bootstrap';
import fruit1 from '../../../Images/banner/fruit-1.jpg'
import fruit2 from '../../../Images/banner/fruit-2.jpg'
import fruit3 from '../../../Images/banner/fruit-3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fruit1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark'>Welcome</h3>
                        <p className='text-dark'>Back!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fruit2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>The Best <span className='text-light'>Fruits</span></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fruit3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-light'>24/7</h3>
                        <p className='text-light'>FRUITS</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
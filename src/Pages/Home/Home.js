import React from 'react';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center text-primary my-3'>Inventory</h1>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;
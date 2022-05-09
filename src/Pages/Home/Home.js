import React from 'react';
import Banner from './Banner/Banner';
import GetProducts from '../../CustomHooks/GetProducts';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products] = GetProducts()
    return (
        <div>
            <Banner></Banner>
            <div id='inventory'>
                <h1 className='my-4 text-primary text-center'>Products</h1>
                <div className='cssCard'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
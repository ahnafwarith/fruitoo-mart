import React from 'react';
import Banner from '../Banner/Banner';
import GetProducts from '../../../CustomHooks/GetProducts';
import Product from '../../Product/Product';
import './Home.css'
import TeamInfo from '../../TeamInfo/TeamInfo';
import About from '../../About/About'

const Home = () => {
    const [products] = GetProducts()
    return (
        <div>
            <Banner></Banner>
            <div id='inventory'>
                <h1 className='my-4 text-warning text-center'>Products</h1>
                <div className='cssCard'>
                    {
                        products.slice(0, 6).map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
            <TeamInfo></TeamInfo>
            <About></About>
        </div>
    );
};

export default Home;
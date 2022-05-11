import React from 'react';
import GetProducts from '../../CustomHooks/GetProducts';
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {
    const [products] = GetProducts();
    return (
        <div>
            <h1 className='my-4 text-warning text-center'>Inventory</h1>
            <div className='cssCard'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;
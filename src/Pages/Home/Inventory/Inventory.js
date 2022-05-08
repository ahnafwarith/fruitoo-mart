import React, { useEffect, useState } from 'react';
import GetProducts from '../../../CustomHooks/GetProducts';
import Product from '../Product/Product';

const Inventory = () => {
    const [products] = GetProducts();
    return (
        <div id='services'>
            <h1 className='my-4 text-primary text-center'>Products</h1>
            <div className='cssCards'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;
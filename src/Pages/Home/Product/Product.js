import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, price, description } = product;
    return (
        <div className='cssCard mb-3'>
            <div>
                <img className='w-100' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-center'>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <button className='btn btn-dark mx-auto d-block w-50 my-2'><Link to='/manageproducts' className='btn btn-dark'>Update</Link></button>
            </div>
        </div>
    );
};

export default Product;
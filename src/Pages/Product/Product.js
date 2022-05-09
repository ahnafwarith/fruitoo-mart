import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, price, description } = product;
    const navigate = useNavigate();
    const redirectToProduct = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='cssCard mb-3'>
            <div>
                <img className='w-100' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-center'>{name}</h2>
                <p>{description}</p>
                <p>Price: {price} taka</p>
                <button onClick={() => redirectToProduct(_id)} className='btn btn-dark mx-auto d-block w-50 my-2'>Update</button>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, price, description, supplier_name, quantity } = product;
    const navigate = useNavigate();
    const redirectToProduct = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='cssCard mb-3'>
            <div>
                <img className='w-100 h-100' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-center'>{name}</h2>
                <p className='text-center'>{description}</p>
                <p className='text-center'>Price: {price} taka</p>
                <p className='text-center'>{supplier_name}</p>
                <h5 className='text-center'>In stock: {quantity === 0 ? <span className='text-danger fw-bold'>Sold Out</span> : quantity}</h5>
                <button onClick={() => redirectToProduct(_id)} className='btn btn-warning mx-auto d-block w-50 my-2'>Update</button>
            </div>
        </div >
    );
};

export default Product;
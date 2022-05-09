import React from 'react';

const SingleProduct = ({ product }) => {
    const { _id, name, img, price, description } = product;
    return (
        <div className='cssCard mb-3'>
            <div>
                <img className='w-100' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-center'>{name}</h2>
                <h4>ID:{_id}</h4>
                <p>{description}</p>
                <p>Price: {price} taka</p>
                <button className='btn btn-dark mx-auto d-block w-50 my-2'>Delivered</button>
            </div>
        </div>
    );
};

export default SingleProduct;
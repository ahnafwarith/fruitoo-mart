import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getSingleProduct from '../../CustomHooks/GetSingleProduct';

const InventoryItem = () => {
    const { id } = useParams();
    const [product] = getSingleProduct(id);
    const { name, quantity, img, description } = product
    const handlePlus = data => {
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    const handleMinus = () => {

    }
    return (
        <div className='d-flex m-4'>
            <img width={150} src={img} alt="" />
            <div>
                <h4 className='mx-3'>Item ID: {id}</h4>
                <h4 className='mx-3'>Name: {name}</h4>
                <h4 className='mx-3'>{description}</h4>
            </div>
            <div>
                <h4 className='mx-3'>Quantity: {quantity}</h4>
                <button onClick={handlePlus} className='mx-3 my-3 btn btn-success'>Add</button>
                <button onClick={handleMinus} className='mx-3 my-3 btn btn-danger'>Delivered</button>
            </div>
        </div>
    );
};

export default InventoryItem;
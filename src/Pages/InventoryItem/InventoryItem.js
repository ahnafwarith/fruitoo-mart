import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState(true);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://warm-island-53330.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, update]);
    const { name, quantity, img, description, price } = product
    const handlePlus = e => {
        e.preventDefault()
        const newQuantity = parseInt(e.target.quantity.value);
        if (newQuantity <= 0) {
            toast.error('You cannot add negative value');
            return newQuantity;
        }
        const updateQuantity = parseInt(quantity) + newQuantity
        const url = `https://warm-island-53330.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updateQuantity })
        })
            .then(res => res.json())
            .then(result => {
                setUpdate(!update)
                e.target.reset()
                toast.success('Quantity added successfully')
            })
    };
    const handleMinus = () => {
        const updateQuantity = parseInt(quantity) - 1
        if (updateQuantity < 0) {
            toast.error('Item is not in stock');
            return updateQuantity;
        }
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updateQuantity })
        })
            .then(res => res.json())
            .then(result => {
                setUpdate(!update)
                toast.success('Delivered successfully')
            })
    }
    return (
        <div className='d-flex m-4'>
            <img width={150} src={img} alt="" />
            <div>
                <h4 className='mx-3'>Item ID: {id}</h4>
                <h4 className='mx-3'>Name: {name}</h4>
                <h4 className='mx-3'>{description}</h4>
                <h4 className='mx-3'>Price: {price}</h4>
            </div>
            <div>
                <h4 className='mx-3'>Quantity: {quantity === 0 ? <span className='text-danger fw-bold'>Sold Out</span> : quantity}</h4>
                <form onSubmit={handlePlus}>
                    <input type="number" name="quantity" />
                    <input className='btn btn-success ms-2' type="submit" value="Submit" />
                </form>
                <button onClick={handleMinus} className='mx-3 mb-3 btn btn-danger'>Delivered</button>
            </div>
            <Toaster />
        </div>
    );
};

export default InventoryItem;
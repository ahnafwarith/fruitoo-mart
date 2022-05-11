import React from 'react';
import GetProducts from '../../CustomHooks/GetProducts';

const ManageProducts = () => {
    const [Products, setProducts] = GetProducts();
    const handleDelete = (id) => {
        const continuing = window.confirm("Are you sure you want to delete?")
        if (continuing) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = Products.filter(product => product._id !== id);
                    setProducts(remaining)
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Delete some Products</h3>
            {
                Products.map(
                    product => <div key={product._id}>
                        <h5>{product.name}<button onClick={() => handleDelete(product._id)}>Delete</button></h5></div>
                )
            }
        </div>
    );
};

export default ManageProducts;
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import GetProducts from '../../CustomHooks/GetProducts';
import './Delete.css'

const ManageProducts = () => {
    const [Products, setProducts] = GetProducts();
    const handleDelete = (id) => {
        const continuing = window.confirm("Are you sure you want to delete?")
        if (continuing) {
            const url = `https://warm-island-53330.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = Products.filter(product => product._id !== id);
                    setProducts(remaining)
                })
        }
        toast.success(`Item with ID ${id} deleted successfully`)
    }
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/add')
    }
    return (
        <div>
            <div className='text-end m-4'>
                <button className='btn btn-dark text-warning' onClick={handleNavigation}>Add New Item</button>
            </div>
            <div className='text-center mb-5'>
                <h3>Delete some <span className='text-warning'>Products</span></h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products.map(product =>
                                <tr>
                                    <th scope='row'>{product._id}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><button className='btn btn-danger m-1' onClick={() => handleDelete(product._id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Toaster />
        </div>
    );
};

export default ManageProducts;
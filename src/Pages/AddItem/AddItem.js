import React from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://warm-island-53330.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        toast.success('Item added successfully')
    };

    return (
        <div className='mx-auto w-50 mb-5'>
            <h2 className='text-center'>Want to add an <span className='text-warning'>Item</span>?</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name")} />
                <input className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='price' type='number' {...register("price")} />
                <input className='mb-2' placeholder='photo url' type='text' {...register("img")} />
                <input className='mb-2' placeholder='supplier name' {...register("supplier_name")} />
                <input className='mb-2' placeholder='quantity' type='number' {...register("quantity")} />
                <input className='btn-warning' type="submit" value="Add Item" />
            </form>
            <Toaster />
        </div>
    );
};

export default AddItem;
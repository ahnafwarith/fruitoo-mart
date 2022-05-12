import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false);
    const makingUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
        navigate('/home')
    }
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='register-form mb-5'>
            <h2 className='text-dark mt-3 text-center'>Register</h2>
            <form onSubmit={makingUser}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Your email address' required />
                <input type="password" name="password" id="" placeholder='Your password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-3 ${agree ? 'text-warning' : 'text-danger'}`} htmlFor="terms">I accept terms and conditions</label>
                <input
                    disabled={!agree}
                    className='w-75 mx-auto btn btn-dark mt-2 text-warning'
                    type="submit"
                    value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-warning text-decoration-none pe-auto'>Login</Link></p>
            {/* </Form> */}
        </div>
    );
};

export default Register;
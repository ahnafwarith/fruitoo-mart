import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    const emailRef = useRef('');
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    let errorMsg;
    if (error) {
        errorMsg = <p className='text-danger text-center'>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='login-form mb-5'>
            <h2 className='mt-3 text-center'>L<span className='text-warning '>o</span>gin</h2>
            {errorMsg}
            <form onSubmit={handleLogin} className='mt-4 w-50 mx-auto'>
                <input type="email" ref={emailRef} name="email" id="" placeholder='Your email address' required />
                <input type="password" name="password" id="" placeholder='Your password' required />
                <input className='w-75 mx-auto btn btn-dark text-warning mt-2' type="submit" value="Login" />
                <p className='text-center mt-1'>New? <Link to='/register' className='text-success text-decoration-none pe-auto ms-2'>Register</Link></p>
                <p className='text-center mt-2'>Did you forget your password? <button className='btn btn-link text-success text-decoration-none mb-1' onClick={resetPassword}>Reset Password</button></p>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;
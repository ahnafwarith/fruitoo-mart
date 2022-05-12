import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../Images/Google-logo-design-clipart-PNG.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;
    if (user) {
        navigate('/home');
    }
    if (error) {
        errorMessage = <p className='text-danger text-center'>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-50 mx-auto'>
            {errorMessage}
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-warning w-50'></div>
                <p className='mt-2 px-2'>Or,</p>
                <div style={{ height: '2px' }} className='bg-warning w-50'></div>
            </div >
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-light w-25 mt-4 buttons d-block mx-auto'><img style={{ width: '30px' }} src={google} alt="" /> Google Sign In</button>
        </div>
    );
};

export default SocialLogin;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
function Login() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            <h1>Loading</h1>;
        }
        if (user) navigate('/home');
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__container">
                <button className="login__button" onClick={signInWithGoogle}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}
export default Login;

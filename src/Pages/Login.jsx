import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const {signIn} = use(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        console.log({email, password});

        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
        
    }

    return (
        <div className='flex justify-center min-h-[calc(100vh-116px)] items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className='font-semibold text-2xl text-center mb-3'>Login Your Account</h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center mt-2'>Dont’t Have An Account ? {" "}
                            <Link className='text-secondary' to='/auth/register'>Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
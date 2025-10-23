import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Register = () => {

    const {createUser, setUser, updateUser} = use(AuthContext)
    const [nameError, setNameError] = useState('')

    const navigate = useNavigate()

    const handleRegister = (e) => {

        e.preventDefault()
        // console.log(e.target);
        const name = e.target.name.value
        if(name.length < 5){
            setNameError('Name should be more than 5 characters')
            return
        } 
        else{
            setNameError('')
        }
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log({name, photo, email, password})

        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                updateUser(name, photo)
                    .then(() => {

                        setUser(result.user)
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error);
                    })
                
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className='flex justify-center min-h-[calc(100vh-116px)] items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className='font-semibold text-2xl text-center mb-3'>Register Your Account</h2>
                        <fieldset className="fieldset">
                            <label className="label">Your Name</label>
                            <input type="text" name='name' className="input" placeholder="Enter your name" required />
                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Enter your photo url" required />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" className="checkbox" />
                                <p className='text-accent'>Accept <span className='font-semibold'>Term & Conditions</span></p>
                            </div>
                            {
                                nameError && <p className='text-red-400 font-semibold'>{nameError}</p>
                            }
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='font-semibold text-center mt-2'>Already Have An Account ? {" "}
                                <Link className='text-secondary' to='/auth/login'>Login</Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
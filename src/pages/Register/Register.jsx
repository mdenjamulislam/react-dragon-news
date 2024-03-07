import { FaUserLarge, FaEnvelope, FaCameraRotate } from 'react-icons/fa6';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [userCreateSuccessMessage, setUserCreateSuccessMessage] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photo-url');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoUrl, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUserCreateSuccessMessage('User created successfully!');
            })
            .catch(error => {
                console.error(error.message);
                setUserCreateSuccessMessage(error.message);
            });
        
        toast(userCreateSuccessMessage);
    };

    return (
        <div className="h-auto md:h-screen">
            <Navbar />
            <div className="mx-auto my-10 w-full bg-white p-6 md:max-w-lg md:p-10 lg:p-14">
                <div className="mb-6 border-b border-gray-300 pb-6 text-center">
                    <h2 className="heading--two">Register your account</h2>
                </div>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="form-control ">
                        <label className="label label-text">Your Name</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <FaUserLarge className="text-lg text-textColor" />
                            <input type="text" name="name" required className="w-full grow" placeholder="Enter your name" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label label-text">Photo URL</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <FaCameraRotate className="text-lg text-textColor" />
                            <input type="url" name="photo-url" className="w-full grow" placeholder="Enter your photo url" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label label-text">Email Address</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <FaEnvelope className="text-lg text-textColor" />
                            <input type="email" name="email" required className="w-full grow" placeholder="Enter your email address" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label label-text">Password</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <RiLockPasswordFill className="text-lg text-textColor" />
                            <input type="password" name="password" required className="w-full grow" placeholder="Enter your password" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer justify-normal gap-3">
                            <input type="checkbox" className="checkbox-success checkbox" />
                            <span className="label-text">
                                Accept
                                <Link to="/" className="font-semibold text-primary">
                                    Term & Conditions
                                </Link>
                            </span>
                        </label>
                    </div>
                    <button type="submit" className="btn--secondary w-full rounded">
                        Register
                    </button>
                    <p className="text-center">
                        Already Have An Account.
                        <NavLink to="/login" className="text-accentDanger">
                            Login
                        </NavLink>
                    </p>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Register;

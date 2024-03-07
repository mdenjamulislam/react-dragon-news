import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { FaEnvelope } from 'react-icons/fa6';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [userLoginSuccessMessage, setUserLoginSuccessMessage] = useState('');

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const nevigateTo = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserLoginSuccessMessage('User logged in successfully!');
                // nevigate after login
                nevigateTo(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error.message);
                setUserLoginSuccessMessage(error.message);
            });

        toast(userLoginSuccessMessage);

        // when user logged in successfully, redirect to home page
        <Navigate to="/home" />;
    };
    return (
        <div className="h-auto md:h-screen">
            <Navbar />
            <div className="mx-auto my-10 w-full bg-white p-6 md:max-w-lg md:p-10 lg:p-14">
                <div className="mb-6 border-b border-gray-300 pb-6 text-center">
                    <h2 className="heading--two">Login your account</h2>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
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
                    <button type="submit" className="btn--secondary w-full rounded">
                        Login
                    </button>
                    <p className="text-center">
                        Don't Have An Account?{' '}
                        <NavLink to="/register" className="text-accentDanger">
                            Register
                        </NavLink>
                    </p>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Login;

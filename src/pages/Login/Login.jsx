import { NavLink } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { FaEnvelope } from 'react-icons/fa6';

const Login = () => {
    return (
        <div className='h-auto md:h-screen'>
            <Navbar />
            <div className="mx-auto w-full bg-white p-6 md:max-w-lg md:p-10 lg:p-14 my-10">
                <div className="border-b border-gray-300 pb-6 mb-6 text-center">
                    <h2 className="heading--two">Login your account</h2>
                </div>
                <form className="space-y-4">
                    <div className="form-control ">
                        <label className="label label-text">Email Address</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <FaEnvelope className="text-textColor text-lg" />
                            <input type="text" className="w-full grow" placeholder="Enter your email address" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label label-text">Password</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <FaEnvelope className="text-textColor text-lg" />
                            <input type="password" name="password" className="w-full grow" placeholder="Enter your password" />
                        </label>
                    </div>
                    <button type="submit" className="btn--secondary w-full rounded">
                        Login
                    </button>
                    <p className='text-center'>Don't Have An Account? <NavLink to="/register" className="text-accentDanger">Register</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Login;

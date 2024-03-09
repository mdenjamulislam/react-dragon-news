import { NavLink } from 'react-router-dom';
import User from '../../assets/images/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout();
        console.log('User logged out successfully!');
    }

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );
    return (
        <nav className="navbar py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ? (
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
                            <div className="w-10 rounded-full">
                                <img src={User} alt="User" className="h-auto w-10" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                            <li>
                                <a className="justify-between">Profile</a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <button onClick={handleLogOut} >Logout</button>
                            </li>
                        </ul>
                    </div>
                    ) : (
                        <NavLink to="/login" className="bg-accentDark px-4 py-2 text-white hover:bg-gray-800 md:px-7">
                        Login
                    </NavLink>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;

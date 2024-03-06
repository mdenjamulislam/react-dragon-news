import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import qZone1 from '../../assets/images/qZone1.png';
import qZone2 from '../../assets/images/qZone2.png';
import qZone3 from '../../assets/images/qZone3.png';
import RigthSidePoster from '../shared/RigthSidePoster';

const RightSideNav = () => {
    return (
        <div className='space-y-7'>
            <div className="space-y-5 border border-gray-400 p-4">
                <h2 className="heading--two">Login With</h2>
                <div className="space-y-3">
                    <button className="btn btn-block border-sky-600 bg-transparent text-sky-600">
                        <FaGoogle className="text-xl" />
                        Login With Google
                    </button>
                    <button className="btn btn-block border-primary bg-transparent text-primary">
                        <FaGithub className="text-xl" />
                        Login With Github
                    </button>
                </div>
            </div>

            <div className="space-y-5">
                <h2 className="heading--two">Find Us On</h2>
                <div className="">
                    <button className="flex w-full items-center gap-2 border border-gray-200 bg-transparent px-5 py-3 text-primary hover:bg-gray-200">
                        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-200'>
                            <FaFacebookF className="text-xl" />
                        </div>
                        Facebook
                    </button>
                    <button className="flex w-full items-center gap-2 border border-gray-200 bg-transparent px-5 py-3 text-primary hover:bg-gray-200">
                        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-200'>
                        <FaXTwitter className="text-xl" />
                        </div>
                        Twitter
                    </button>
                    <button className="flex w-full items-center gap-2 border border-gray-200 bg-transparent px-5 py-3 text-primary hover:bg-gray-200">
                        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-200'>
                        <FaInstagram className="text-xl" />
                        </div>
                        Instagram
                    </button>
                </div>
            </div>
            {/* q-jone */}
            <div className='p-3 bg-gray-100 space-y-5'> 
                <h2 className='heading--two'>Q-Zone</h2>
                <img src={qZone1} alt="q-Zone" />
                <img src={qZone2} alt="q-Zone" />
                <img src={qZone3} alt="q-Zone" />
            </div>

            <RigthSidePoster/>

        </div>
    );
};

export default RightSideNav;

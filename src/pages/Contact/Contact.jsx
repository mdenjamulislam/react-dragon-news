import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import { FaEnvelope, FaPhone, FaPen, FaLocationDot } from 'react-icons/fa6';
import GoogleMap from '../shared/GoogleMap';


const Contact = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 gap-5 py-10 md:gap-8 lg:grid-cols-2">
                <div className="space-y-5">
                    <div className="space-y-4">
                        <h1 className="heading--one">General Customer Care & Technical Support</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error soluta itaque doloribus consequatur ex a alias recusandae accusantium id unde delectus harum.</p>
                    </div>
                    <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="form-control ">
                            <label className="label label-text">Name</label>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaEnvelope className="text-lg text-textColor" />
                                <input type="text" name="name" required className="w-full grow" placeholder="Name" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label label-text">Email</label>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaEnvelope className="text-lg text-textColor" />
                                <input type="email" name="email" required className="w-full grow" placeholder="Email" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label label-text">Phone</label>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaPhone className="text-lg text-textColor" />
                                <input type="text" name="phone" required className="w-full grow" placeholder="Phone" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label label-text">Subject</label>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaPen className="text-lg text-textColor" />
                                <input type="text" name="subject" required className="w-full grow" placeholder="Subject" />
                            </label>
                        </div>
                        <div className="form-control col-span-full">
                            <label className="label label-text">Message</label>
                            <textarea name="message" className="textarea textarea-bordered" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" className="btn--secondary col-span-full w-full rounded">
                            Submit Now
                        </button>
                    </form>
                </div>
                <div className="space-y-7 bg-gray-200 p-4 md:p-5">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white md:h-16 md:w-16">
                            <FaLocationDot className="text-xl text-primary md:text-2xl" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="heading--two">Address</h2>
                            <p>124, 04 Rd, Rampura, Dhaka-1219</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white md:h-16 md:w-16">
                            <FaEnvelope className="text-xl text-primary md:text-2xl" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="heading--two">Email</h2>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white md:h-16 md:w-16">
                            <FaPhone className="text-xl text-primary md:text-2xl" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="heading--two">Phone</h2>
                            <p>+8801 945-456679</p>
                        </div>
                    </div>
                    {/* Map location */}
                    <div>
                        <GoogleMap/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

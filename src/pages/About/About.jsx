import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import backgroundImage from '../../assets/images/about_bg.jpg';

const About = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="bg-overlay space-y-5 p-8 md:p-10">
                    <div className="mx-auto w-full text-center text-white md:py-10 lg:max-w-xl">
                        <h2 className="heading--one text-white">About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, accusamus voluptates. Quo, voluptates. Quo, voluptates. Quo, voluptates. Quo, voluptates.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

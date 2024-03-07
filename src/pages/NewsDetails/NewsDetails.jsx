import { useParams } from "react-router-dom";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";


const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header />
            <Navbar/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="lg:col-span-3">
                    <h2 className="heading--two">Bragon News</h2>
                    <div className="p-4 border border-gray-300 rounded">

                    </div>
                </div>
                {/* Right Side */}
                <div className="lg:col-span-1">
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
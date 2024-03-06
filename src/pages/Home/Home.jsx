import LeftSidenav from "../LeftSideNav/LeftSidenav";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";


const Home = () => {
    return (
        <div>
            <Header />
            <Navbar/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSidenav/>
                </div>
                <div className="lg:col-span-2">
                    <h2>main content</h2>
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;
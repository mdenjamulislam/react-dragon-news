import { useLoaderData } from "react-router-dom";
import LeftSidenav from "../LeftSideNav/LeftSidenav";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header />
            <Navbar/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSidenav/>
                </div>
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="heading--two">Dragon News Home</h2>
                    {
                        news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                   }
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;
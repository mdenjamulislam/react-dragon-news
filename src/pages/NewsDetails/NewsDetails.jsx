import { Link, useLoaderData, useParams } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import { useEffect, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const NewsDetails = () => {
    const { id } = useParams();
    const news = useLoaderData();
    const [newsDetails, setNewsDetails] = useState({});

    const { _id, title, details, image_url, author, rating, total_view } = newsDetails;

    useEffect(() => {
        const newsDetail = news.find(news => news._id === id);
        setNewsDetails(newsDetail);
    }, [id, news]);


    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
                <div className="space-y-5 lg:col-span-3">
                    <h2 className="heading--two">Dragon News</h2>
                    <div className="space-y-4 rounded border border-gray-300 p-4">
                        <img src={image_url} alt={title} className="h-auto w-full object-cover" />
                        <h2 className="heading--two">{title}</h2>
                        <p className="text-textColor">{details}</p>
                        <button className="btn--primary">
                            <Link to="/" className="flex items-center gap-3">
                                <FaArrowLeftLong />
                                All news in this category
                            </Link>
                        </button>
                    </div>
                </div>
                {/* Right Side */}
                <div className="lg:col-span-1">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;

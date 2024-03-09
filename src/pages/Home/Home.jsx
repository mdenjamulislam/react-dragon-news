import { Link, useLoaderData } from 'react-router-dom';
import LeftSidenav from '../LeftSideNav/LeftSidenav';
import RightSideNav from '../RightSideNav/RightSideNav';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import NewsCard from './NewsCard';
import RigthSidePoster from '../shared/RigthSidePoster';
import { useState } from 'react';
import { FaCalendar } from 'react-icons/fa6';

const Home = () => {
    const news = useLoaderData();
    const [displayNews, setDisplayNews] = useState(4);

    const handleLoadMore = () => {
        setDisplayNews(displayNews + 3);
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className='space-y-5'>
                    <LeftSidenav />
                    {news.slice(10, 17).map(singleNews => (
                        <div key={singleNews._id} className='space-y-3'>
                            <img src={singleNews.image_url} alt={singleNews.title} className="h-auto w-full" />
                            <h2 className="text-base font-medium text-primary md:text-lg hover:text-accentDanger">
                                <Link to={`news/${singleNews._id}`}>{singleNews.title.slice(0, 40)}...</Link>
                            </h2>
                            <div className="flex items-center gap-4">
                                <h4 className='text-sm'>{singleNews.author.name}</h4>
                                <div className='flex items-center gap-3'>
                                    <FaCalendar className='text-sm text-textColor'/>
                                    <span className='text-xs'>{singleNews.author.published_date.slice(0, 10)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="space-y-4 lg:col-span-2">
                    <h2 className="heading--two">Dragon News Home</h2>
                    {news.slice(0, displayNews).map(singleNews => (
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                    ))}
                    <div className="text-center">
                        <button onClick={handleLoadMore} className="btn btn-primary">
                            Load More
                        </button>
                    </div>
                </div>
                <div className="space-y-4">
                    <RightSideNav />
                    <RigthSidePoster />
                </div>
            </div>
        </div>
    );
};

export default Home;

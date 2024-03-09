import { FaRegBookmark, FaShareNodes, FaEye,FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    const { _id, title, details, thumbnail_url, author, rating, total_view } = news;
    
    return (
        <div className="rounded border border-gray-300">
            <div className="flex items-center justify-between bg-gray-200 p-3">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={author.img} alt={author.name} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-primary">{author.name}</h3>
                        <p className="text-xs">{author.published_date.slice(0, 10)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaRegBookmark className="text-xl hover:text-accentDanger" />
                    <FaShareNodes className="text-xl hover:text-accentDanger" />
                </div>
            </div>
            <div className="space-y-4 p-4">
                <h2 className="heading--two">
                    <Link to={`news/${_id}`}>{title}</Link>
                </h2>
                <img src={thumbnail_url} alt={title} className="h-40 w-full rounded-lg object-cover md:h-64" />
                <p>{details.substring(0, 150)}... <Link to={`news/${_id}`} className='text-accentDanger'>Read more</Link></p>
                <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <div className="flex items-center gap-3">
                        <div>
                            {
                                Array(rating).fill().map((_, i) => (
                                    <FaStar key={i} className="text-accentDanger" />
                                ))
                            }
                        </div>
                        <p className="text-sm">{rating.number}</p>
                    </div>
                    <p className="flex items-center gap-2 text-xs text-textColor">
                        <FaEye className="text-base" /> {total_view}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

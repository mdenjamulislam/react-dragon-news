import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex items-center gap-3 p-4 bg-gray-200">
            <button className="px-6 py-2 text-white bg-accentDanger">Latest</button>
            <Marquee gradient={false} speed={80} pauseOnHover={true}>
                <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;
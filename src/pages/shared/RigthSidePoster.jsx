import { NavLink } from 'react-router-dom';

const RigthSidePoster = () => {
    return (
        <div className="space-y-5 bg-slate-800 p-5 text-center md:px-9 md:py-12">
            <h2 className="heading--one text-white">Create an Amazing Newspaper</h2>
            <p className="text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button>
                <NavLink className="btn--primary">Learn More</NavLink>
            </button>
        </div>
    );
};

export default RigthSidePoster;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSidenav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    return (
        <div>
            <h2 className="heading--two mb-5">All Category</h2> 
            {
                categories.map(category => <Link to={`/category/${category.id}`} key={category.id} className="block px-5 py-2 font-medium hover:bg-gray-200 hover:text-primary active:bg-gray-200">{ category.name}</Link>)
            }
        </div>
    );
};

export default LeftSidenav;
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import PrivateRoute from './PrivateRoute';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: (
                    <PrivateRoute>
                        <NewsDetails />
                    </PrivateRoute>
                ),
                loader: () => fetch('/news.json')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
]);

export default router;

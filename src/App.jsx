import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Posts from './pages/Posts.jsx';
import AboutAuthor from './pages/AboutAuthor.jsx';
import Contacts from './pages/Contacts.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Posts />,
            },
            {
                path: 'about',
                element: <AboutAuthor />,
            },
            {
                path: 'contacts',
                element: <Contacts />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login/Login";
import CategoryNews from "../components/CategoryNews/CategoryNews";
import NewsLayout from "../components/Layout/NewsLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'categories/:id',
                element: <CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>
    }
])

export default router;
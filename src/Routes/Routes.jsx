import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import LoadingSpinner from "../Components/LoadingSpinner";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// const navigatLoader = async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return null
// }

export const router = createBrowserRouter([
    {
        path : "/",
        Component : HomeLayout,
        hydrateFallbackElement : <LoadingSpinner></LoadingSpinner>,
        // loader : navigatLoader,
        children : [
            {
                index : true,
                Component : Home,
                // loader : navigatLoader
            },
            {
                path : '/category/:id',
                Component : CategoryNews,
                loader : () => fetch('/news.json'),
            }
        ]
    },
    {
        path : "/auth",
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path : '/auth/login',
                Component : Login
            },
            {
                path : '/auth/register',
                Component : Register
            },
        ]
    },
    {
        path : "/news-details/:id",
        hydrateFallbackElement : <LoadingSpinner></LoadingSpinner>,
        element : <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>
    },
    {
        path : "/*",
        element : <h2>Error-404</h2>
    },
])


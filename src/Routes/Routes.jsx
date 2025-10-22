import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import LoadingSpinner from "../Components/LoadingSpinner";

const navigatLoader = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return null
}

export const router = createBrowserRouter([
    {
        path : "/",
        Component : HomeLayout,
        hydrateFallbackElement : <LoadingSpinner></LoadingSpinner>,
        loader : navigatLoader,
        children : [
            {
                index : true,
                Component : Home,
                loader : navigatLoader
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
        element : <h2>Authentication Layout</h2>
    },
    {
        path : "/news",
        element : <h2>News Layout</h2>
    },
    {
        path : "/*",
        element : <h2>Error-404</h2>
    },
])


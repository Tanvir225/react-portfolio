import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/portfolio",
                element:<Portfolio></Portfolio>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/blog/:id",
                element:<BlogDetails></BlogDetails>,
                loader:()=> fetch("/blogs.json")
            },
        ]
    }
])
export default myCreatedRoute;
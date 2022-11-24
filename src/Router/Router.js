import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Category from '../Pages/Category';
import Blog from '../Pages/Blog';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path:'/',
               element: <Home></Home>
            },
            {
                path:'/categories/:id',
                element:<Category></Category>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
            
        ]
    },
    {
        path: '/dashboard',
        element:<DashBoard></DashBoard>,
        children: [
            {
                
            },
           

        ]
    }
])

export default router;
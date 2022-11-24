import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Category from '../Pages/Category';
import Blog from '../Pages/Blog';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import SellerRoute from "./SellerRoute";
import AddProduct from '../Dashboard/Seller/AddProduct';
import MyProducts from '../Dashboard/Seller/MyProducts';
import MyOrders from '../Dashboard/Buyer/MyOrders';
import BuyerRoute from "./BuyerRoute";

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
        element:<SellerRoute><DashBoard></DashBoard></SellerRoute>,
        children: [
            {
                path:'dashboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'dashboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'dashboard/myorders',
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
           

        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               
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
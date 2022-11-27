import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthConfig/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Footer from '../Shared/Footer';
import Menu from '../Shared/Menu';


const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Menu></Menu>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet>

                    </Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            user && <>
                             <p><Link to='/dashboard/myorders'>My Orders</Link></p>
                            </>
                        }
                        {
                            isSeller && <>

                                <p><Link to='/dashboard/addproduct'>Add a Product</Link></p>
                                <p><Link to='/dashboard/myproducts'>My Product</Link></p>
                            </>
                        }
                        {
                            isAdmin && <>
                                <p><Link to='/dashboard/addcategory'>Add Category</Link></p>
                                <p><Link to='/dashboard/allseller'>All Sellers</Link></p>
                                <p><Link to='/dashboard/allbuyer'>All Buyers</Link></p>
                                <p><Link to='/dashboard/reporteditems'>Reported Items</Link></p>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;
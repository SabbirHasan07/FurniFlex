import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Cart from "./Cart";

export function NavMenu() {
    const location = useLocation();
    const active = location.pathname;
    const {user, logOut} = useContext(AuthContext);
    return (
        <Navbar fluid rounded className="py-5">
            <>
                <Link className="flex items-center" to='/'><img src="../../icon.png" className="h-6 sm:h-9 mr-2" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-bold text-black">Furni<span className="text-[#1E99F5]">Flex</span></span></Link>
            </>
            <div className="flex md:order-2">
                {user?.email ? <div className="flex items-center gap-1">
                    <Cart />
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="../../user.jpeg" rounded className="w-10 h-10"/>
                    }
                >
                    <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
                </Dropdown>
                </div> : <div className="flex gap-4 items-center">
                    <Link to={"/login"} className="text-[#1E99F5] text-lg font-semibold cursor-pointer">Login</Link>
                    
                        <Link to={"/signup"} className="text-white bg-[#1E99F5] px-3 py-1 rounded cursor-pointer hover:opacity-70">Signup</Link>
                    </div>}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {
                    [{ path: '/', label: 'Home' }, { path: '/products', label: 'Products' }, { path: '/categories', label: 'Categories' }, { path: '/custom', label: 'Custom' }, { path: '/blog', label: 'Blog' }].map((item, index) => 
                        <Link key={index} to={item.path} className={`px-4 py-1 rounded-sm ${active === item.path && 'bg-[#F8F8F8]'}`}>{item.label}</Link>
                    
                    )
                }
            </Navbar.Collapse>
        </Navbar>
    );
}
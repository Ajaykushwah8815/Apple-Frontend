import React, { useState, useEffect } from "react";
import {
    Bars3Icon,
    XMarkIcon,
    RectangleStackIcon,
    UserCircleIcon,
    CommandLineIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";
import FooterSection from "./FooterSection";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
const BACK_URL = import.meta.env.VITE_API_URL;


const NavItem = ({ icon: Icon, text }) => (
    <li>
        <a
            href="#"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-100 font-medium transition-all"
        >
            <Icon className="h-5 w-5" />
            {text}
        </a>
    </li>
);

const Nav = () => {
    const navigate = useNavigate();
    const [login, setlogin] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [name, setname] = useState("Register Now")


    const isAuthenticate = async () => {
        try {
            const res = await fetch(`${BACK_URL}/api/is_Auth`, {
                method: "POST",
                credentials: 'include'
            });

            const data = await res.json();
            console.log(data);


            if (data.success === true) {
                setlogin(true)
                setname(Cookies.get("name"))
            } else {

            }
        } catch (err) {
            console.error("Login error:", err);
        }
    };

    const islogout = async () => {
        try {
            const res = await fetch(`${BACK_URL}/api/logout`, {
                method: "POST",
                  credentials: "include", // 🔥 allow cookies / CORS with credentials

            });

            const data = await res.json();
            console.log(data);
            if (data.success === true) {
                setlogin(false)
                setname("Register Now")
                toast.success(data.message);
            } else {

            }
        } catch (err) {
            console.error("Login error:", err);
        }
    };


    useEffect(() => {


        const resizeHandler = () => {
            if (window.innerWidth >= 960) setOpen(false);
        };
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    },);
    useEffect(() => {
        isAuthenticate()
    }, [])





    return (
        <>
            {/* Navbar */}
            <nav className="w-full bg-gradient-to-r from-green-600 via-teal-500 to-blue-600

    shadow-sm fixed top-0 left-0 z-50">
                <div className="container mx-auto flex items-center justify-between px-4 py-3">
                    <h1 className="text-lg font-bold text-gray-800">Apple 🍎</h1>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-6">
                        <NavItem icon={RectangleStackIcon} text="Pages" />
                        <NavItem icon={UserCircleIcon} text="Account" />
                        <NavItem icon={Squares2X2Icon} text="Blocks" />
                        <NavItem icon={CommandLineIcon} text="Docs" />
                    </ul>

                    {/* Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {login === false ? <button onClick={() => navigate("/login")} className="px-4 py-2 text-black hover:text-blue-100 font-medium">
                            Log in
                        </button> :

                            <button onClick={() => islogout()} className="px-4 py-2 text-black hover:text-blue-100 font-medium">
                                Log out
                            </button>}

                        {name === "Register Now" ? <button onClick={() => navigate("/register")} className="px-4 py-2 bg-gray-800 hover:bg-green-700 text-white rounded-lg">
                            {name}
                        </button> : <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                            Hi, {name}
                        </button>
                        }

                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={handleOpen}
                        className="lg:hidden text-gray-700 focus:outline-none"
                    >
                        {open ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {open && (
                    <div className=" bg-gradient-to-r from-green-500 via-teal-500 to-blue-00 border-t border-gray-200 lg:hidden">
                        <ul className="flex flex-col gap-4 px-6 py-4 ">
                            <NavItem icon={RectangleStackIcon} text="Pages" />
                            <NavItem icon={UserCircleIcon} text="Account" />
                            <NavItem icon={Squares2X2Icon} text="Blocks" />
                            <NavItem icon={CommandLineIcon} text="Docs" />
                        </ul>
                        <div className="px-6 py-4 border-t border-gray-200 flex flex-col gap-3">
                            {login === false ? <button onClick={() => navigate("/login")} className="px-4 py-2 text-black hover:text-blue-100 font-medium">
                                Log in
                            </button> :

                                <button onClick={() => islogout()} className="px-4 py-2 text-black hover:text-blue-100 font-medium">
                                    Log out
                                </button>}

                            {name === "Register Now" ? <button onClick={() => navigate("/register")} className="px-4 py-2 bg-gray-800 hover:bg-green-700 text-white rounded-lg">
                                {name}
                            </button> : <button className="px-4 py-2 bg-gray-800  text-white rounded-lg">
                                Hi, {name}
                            </button>
                            }
                        </div>
                    </div>
                )}
            </nav>



        </>
    );
};

export default Nav;

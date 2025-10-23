import React, { useState, useEffect } from "react";
import {
    Bars3Icon,
    XMarkIcon,
    RectangleStackIcon,
    UserCircleIcon,
    CommandLineIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Footer } from "flowbite-react";
import FooterSection from "./FooterSection";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Nav from "./Nav";


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

const Body = () => {
    const navigate = useNavigate();
    const [login, setlogin] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);



    useEffect(() => {

        const resizeHandler = () => {
            if (window.innerWidth >= 960) setOpen(false);
        };
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);


    const isAuthenticate = async () => {
        try {
            const res = await fetch("/api/is_Auth", {
                method: "POST",
                credentials: 'include'
            });

            const data = await res.json();
            console.log(data);
            if (data.success === true) {
                navigate("/myproject")
            } else {
                toast.error("Login to Access")
                navigate("/login")
            }
        } catch (err) {
            console.error("Login error:", err);
        }
    };


    return (
        <>
            {/* Navbar */}
            <Nav></Nav>

            {/* Hero Section */}
            <header className="h-full pt-11 pb-1 bg-gradient-to-r from-green-100 via-teal-200 to-blue-400
">
                <div className="relative grid min-h-[80vh] w-full place-items-center bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
                    <div className="text-center px-4 max-w-3xl">
                        <span className="inline-block text-xs rounded-lg border border-gray-200 bg-white py-1 px-3 font-medium text-green-600">
                            Exciting News! Introducing our latest innovation
                        </span>

                        <h1 className="mt-6 text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Get ready to experience a new level of{" "}
                            <span className="text-green-500">performance</span> and{" "}
                            <span className="text-green-500">functionality</span>.
                        </h1>

                        <p className="mt-4 text-gray-600 text-base md:text-lg">
                            The time is now for it to be okay to be great. For being a bright
                            color. For standing out.
                        </p>

                        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                            <button onClick={() => isAuthenticate()} className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                                Go My Projects
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <FooterSection></FooterSection>
        </>
    );
};

export default Body;

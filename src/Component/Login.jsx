import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import FooterSection from "./FooterSection";
import { useNavigate } from "react-router-dom";
import Body from "./Body";
import toast from "react-hot-toast";
const BACK_URL = import.meta.env.VITE_API_URL;

const Login = () => {
    const [logout, setlogout] = useState(false)
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordTyped, setPasswordTyped] = useState(false);
    const [form, setForm] = useState({ useremail: "", userpassword: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === "userpassword") {
            setPasswordTyped(e.target.value.length > 0);
        }
    };



    const handleLogin = async () => {
        try {
            const res = await fetch("https://apple-backend-8wfi.onrender.com/api/login
", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            console.log(data);
            if (data.success === true) {
                toast.success(data.message)
                navigate("/")
            } else {
                toast.error(data.message)
            }
        } catch (err) {
            console.error("Login error:", err);
        }
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", form);
        setForm({ useremail: "", userpassword: "" });

        handleLogin()
        setForm({ useremail: "", userpassword: "" });
    };

    if (!showModal) return null;

    return (
        <>
            <Body></Body>
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black/60 z-40"></div>

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
                <div className="bg-gradient-to-r from-blue-500 via-teal-600 to-green-600 rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                                Email
                            </label>
                            <input

                                type="email"
                                name="useremail"
                                id="email"
                                value={form.useremail}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full bg-transparent px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="block text-gray-800 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="userpassword"
                                id="password"
                                value={form.userpassword}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                className="w-full bg-transparent px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 top-7 flex items-center text-gray-800 hover:text-gray-900"
                            >
                                {passwordTyped && showPassword == false ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                            </button>

                            <div className="flex flex-row-reverse w-full  "><button onClick={() => { navigate("/resetpass") }} className="text-blue-700 hover:underline hover:text-black font-medium" >Forgot password</button></div>




                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-gray-800 text-sm mt-6">
                        Don’t have an account?{" "}
                        <button onClick={() => { navigate("/register") }} className="text-blue-700 hover:underline font-medium">
                            Sign up
                        </button>
                    </p>

                    <button
                        onClick={() => {
                            setShowModal(false);
                            navigate("/");
                        }}
                        className="absolute top-4 right-4 text-black text-xl font-extrabold hover:text-red-700"
                    >
                        ✕
                    </button>
                </div>
            </div>


        </>
    );
};

export default Login;

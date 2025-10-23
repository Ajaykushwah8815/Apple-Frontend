import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import FooterSection from "./FooterSection";
import { useNavigate } from "react-router-dom";
import Body from "./Body";
import toast, { Toaster } from 'react-hot-toast';



const Resetpassword = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordTyped, setPasswordTyped] = useState(false);
    const [form, setForm] = useState({ useremail: "", newuserpassword: "", otp: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === "userpassword") {
            setPasswordTyped(e.target.value.length > 0);
        }
    };



    const handleregister = async (e) => {

        try {
            const res = await fetch(`${BACK_URL}/api/varify_reset_password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success === true) {
                toast.success('Successfully created!');
            }

            console.log("Server Response:", data);
        } catch (err) {
            console.error("Registration error:", err);
            toast.error("Something went wrong. Please try again.");
        }
    };
    const handlereset = async (e) => {

        try {
            const res = await fetch(`${BACK_URL}/api/reset_password_otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success === true) {
                toast.success("OTP send successfully on your 💌email");
            }


            console.log("Server Response:", data);
        } catch (err) {
            console.error("Registration error:", err);
            toast.error("Something went wrong. Please try again.");
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", form);
        handleregister()
        setForm({ useremail: "", userpassword: "", otp: "" })
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
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Reset Password</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                                Email
                            </label>
                            <input

                                type="text"
                                name="useremail"
                                id="name"
                                value={form.useremail}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full bg-transparent px-4 py-2 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            /> <div className="flex flex-row-reverse w-full  "><button onClick={() => { handlereset() }} className="text-blue-700 hover:underline font-medium" >send OTP</button></div>

                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                                OTP
                            </label>
                            <input

                                type="text"
                                name="otp"
                                id="+"
                                value={form.otp}
                                onChange={handleChange}
                                placeholder="Enter your OTP"
                                required
                                className="w-full bg-transparent px-4 py-2 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="block text-gray-800 font-medium mb-2">
                                New  Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="newuserpassword"
                                id="password"
                                value={form.newuserpassword}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                className="w-full bg-transparent px-4 py-2 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 top-7 flex items-center text-gray-800 hover:text-gray-900"
                            >
                                {passwordTyped && showPassword == false ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 mt-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
                        >
                            Update
                        </button>
                    </form>

                    <p className="text-center text-gray-800 text-sm mt-6">
                        I know password ? {" "}
                        <button onClick={() => navigate("/login")} className="text-blue-700 hover:underline font-medium">

                            Login

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

export default Resetpassword;

import { Navbar } from 'flowbite-react'
import React from 'react'
import Nav from './Nav'
import FooterSection from './FooterSection'
import Login from './Login'
import Body from './Body'
import { useNavigate } from 'react-router-dom'

const Project = () => {
    const navigate = useNavigate()
    return (
        <>

            <Nav></Nav>
            <header className="h-full pt-11 pb-1 bg-gradient-to-r from-green-100 via-teal-200 to-blue-400
">
                <div className="relative grid min-h-[80vh] w-full place-items-center bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
                    <div className="text-center px-4 w-full">

                        <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10">
                            {/* Card 1 */}
                            <div className="max-w-sm w-full bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
                                <img
                                    src="data:image/png;base64,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"
                                    alt="Chatbot AI"
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 text-center sm:text-left">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">Chatbot AI</h2>
                                        <p className="text-sm text-slate-800 mb-1">Search everything</p>
                                        <p className="text-sm text-gray-700">Developed by Ajay Kushwah</p>
                                    </div>
                                    <a
                                        href="https://68c8435af2bfa808e11fa589--chatbotaicom.netlify.app/"
                                        target="_blank"
                                        className="bg-green-500 py-1 px-4 rounded-lg font-bold hover:text-white hover:bg-green-700 transition"
                                    >
                                        open
                                    </a>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="max-w-sm w-full bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
                                <img
                                    src="https://s3-alpha.figma.com/hub/file/5349658789/609ad65b-a1d8-4afa-9d37-2c2aacf65dba-cover.png"
                                    alt="To-Do App"
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 text-center sm:text-left">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">To-Do List App</h2>
                                        <p className="text-sm text-slate-800 mb-1">Add everything</p>
                                        <p className="text-sm text-gray-700">Developed by Ajay Kushwah</p>
                                    </div>
                                    <a
                                        href="https://to-do-app-1-teuz.onrender.com/"
                                        target="_blank"
                                        className="bg-green-500 py-1 px-4 rounded-lg font-bold hover:text-white hover:bg-green-700 transition"
                                    >
                                        open
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-sm w-full bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
                                <img
                                    src="https://s3-alpha.figma.com/hub/file/5349658789/609ad65b-a1d8-4afa-9d37-2c2aacf65dba-cover.png"
                                    alt="To-Do App"
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 text-center sm:text-left">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">To-Do List App</h2>
                                        <p className="text-sm text-slate-800 mb-1">Add everything</p>
                                        <p className="text-sm text-gray-700">Developed by Ajay Kushwah</p>
                                    </div>
                                    <a
                                        href="https://to-do-app-1-teuz.onrender.com/"
                                        target="_blank"
                                        className="bg-green-500 py-1 px-4 rounded-lg font-bold hover:text-white hover:bg-green-700 transition"
                                    >
                                        open
                                    </a>
                                </div>
                            </div>

                            {/* Add more cards the same way */}
                        </div>



                        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                            <button onClick={() => navigate("/")} className="px-6 py-3 bg-gray-500 hover:text-white rounded-lg hover:bg-gray-700">
                                Go Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <FooterSection></FooterSection>

        </>
    )
}

export default Project
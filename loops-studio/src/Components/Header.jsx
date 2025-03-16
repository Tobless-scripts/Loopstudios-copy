import "../index.css";
import heroImage from "../assets/desktop/image-hero.jpg";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hero Section */}
            <div
                style={{ backgroundImage: `url(${heroImage})` }}
                className="bg-cover bg-no-repeat bg-center w-full pb-16"
            >
                <div className="p-8 lg:px-36 lg:py-16">
                    <div className="flex justify-between items-center mb-28 w-full">
                        <h1 className="text-white text-[1.6875rem] font-normal leading-[1.9rem]">
                            Loops Studios
                        </h1>

                        {/* Regular Nav (Hidden on Mobile) */}
                        <ul className="gap-4 hidden md:flex">
                            {[
                                "About",
                                "Careers",
                                "Events",
                                "Products",
                                "Supports",
                            ].map((item) => (
                                <li key={item} className="p-2">
                                    <a
                                        href="#"
                                        className="text-white font-normal"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Menu Toggle Button (Mobile) */}
                        <div
                            className="flex flex-col gap-1 cursor-pointer p-2 md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span
                                className={`w-7 h-1 bg-white transition-transform duration-300 ${
                                    isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                            ></span>
                            <span
                                className={`w-7 h-1 bg-white transition-opacity duration-300 ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            ></span>
                            <span
                                className={`w-7 h-1 bg-white transition-transform duration-300 ${
                                    isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                            ></span>
                        </div>
                    </div>

                    {/* Mobile Sidebar Navigation */}
                    <div
                        className={`fixed top-0 left-0 h-full w-[92%] mb-36 z-50 bg-gray-900 text-white p-6 transform transition-transform duration-500 ease-in-out ${
                            isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="text-white text-[1.6875rem] font-normal leading-[1.9rem]">
                                Loops Studios
                            </h1>
                            <button
                                className="absolute top-4 right-4 text-white text-5xl"
                                onClick={() => setIsOpen(false)}
                            >
                                ✖
                            </button>
                        </div>
                        <ul className="mt-10 space-y-6 text-lg">
                            {[
                                "About",
                                "Careers",
                                "Events",
                                "Products",
                                "Supports",
                            ].map((item) => (
                                <li key={item} className="p-2">
                                    <a href="#" className="hover:text-gray-400">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Overlay (Click to Close) */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-transparent bg-opacity-50"
                            onClick={() => setIsOpen(false)}
                        ></div>
                    )}

                    {/* Hero Text */}
                    <div className="w-full md:w-[53%] border-2 border-white p-6 md:p-8">
                        <h1 className="font-bold text-xl sm:text-4xl md:font-normal lg:text-5xl leading-tight text-white">
                            IMMERSIVE EXPERIENCES THAT DELIVER
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

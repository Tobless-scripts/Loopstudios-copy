import "../index.css";
import Header from "./Header";
import interactiveImage from "../assets/desktop/image-interactive.jpg";
import earth from "../assets/desktop/image-deep-earth.jpg";
import arcade from "../assets/desktop/image-night-arcade.jpg";
import soccer from "../assets/desktop/image-soccer-team.jpg";
import grid from "../assets/desktop/image-grid.jpg";
import above from "../assets/desktop/image-from-above.jpg";
import pocket from "../assets/desktop/image-pocket-borealis.jpg";
import curiosity from "../assets/desktop/image-curiosity.jpg";
import fisheye from "../assets/desktop/image-fisheye.jpg";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <div>
                <Header />
                <HeroSection />
                <Creations />
                <Footer />
            </div>
        </>
    );
}

function HeroSection() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 p-8 lg:px-24 lg:py-16 relative">
                <div className="row-span-1">
                    <img
                        src={interactiveImage}
                        alt="her0-image"
                        className="bg-cover bg-no-repeat bg-center w-full h-full"
                    />
                </div>
                <div className="p-2 mt-8 lg:p-12 lg:absolute bg-white lg:bottom-0 lg:left-[45%] w-full lg:w-[50%]  ">
                    <h1 className="mb-4 font-[400] text-3xl text-center md:text-left md:text-5xl md:leading-[3.75rem] text-gray-900 ">
                        THE LEADER IN INTERACTIVE VR
                    </h1>
                    <p className="text-gray-900 text-center md:text-left text-lg md:text-md ">
                        Founded in 2011, Loopstudios has been producing
                        world-class virtual reality projects for some of the
                        best companies around the globe. Our award-winning
                        creations have transformed business through digital
                        experience that binds to their brand
                    </p>
                </div>
            </div>
        </>
    );
}

function Creations() {
    return (
        <>
            <div className="p-8 lg:px-24 lg:py-16">
                <div className="flex justify-center md:justify-between items-center">
                    <h1 className="mb-4 font-[200] text-3xl text-center md:text-left md:text-5xl md:leading-[3.75rem] text-black ">
                        OUR CREATIONS
                    </h1>
                    <button className="cursor-pointer border-2 border-black py-1 hidden md:block px-8 tracking-wide ">
                        SEE ALL
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 h-[2000px] md:h-[700px] mt-16 ">
                    <div
                        style={{ backgroundImage: `url(${earth})` }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full relative pl-9"
                    >
                        <h1 className="absolute bottom-0 text-white mb-4 font-[200] text-2xl lg:text-3xl">
                            DEEP EARTH
                        </h1>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${arcade})` }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full relative pl-9"
                    >
                        <h1 className="absolute bottom-0 text-white mb-4 font-[200] text-2xl lg:text-3xl">
                            NIGHT ARCADE
                        </h1>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${soccer})` }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full relative pl-9"
                    >
                        <h1 className="absolute bottom-0 text-white mb-4 font-[200] text-2xl lg:text-3xl">
                            SOCCER TEAM VR
                        </h1>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${grid})` }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full relative pl-9"
                    >
                        <h1 className="absolute bottom-0 text-white mb-4 font-[200] text-2xl lg:text-3xl">
                            THE GRID
                        </h1>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${above})` }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full relative pl-9"
                    >
                        <h1 className="absolute bottom-0 text-white mb-4 font-[200] text-2xl lg:text-3xl">
                            FROM UP ABOVE VR
                        </h1>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${pocket})` }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full relative pl-9"
                    >
                        <h1 className="absolute bottom-0 text-white mb-4 font-[200] text-2xl lg:text-3xl">
                            POCKET BOREALIS
                        </h1>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${curiosity})` }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full relative pl-9"
                    >
                        <h1 className="absolute bottom-0 text-white mb-4 font-[200] text-2xl lg:text-3xl">
                            THE CURIOSITY
                        </h1>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${fisheye})` }}
                        className="bg-cover bg-no-repeat bg-center w-full h-full relative pl-9"
                    >
                        <h1 className="absolute bottom-0 text-white mb-4 font-[200] text-2xl lg:text-3xl">
                            MAKE IT FISHEYE
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

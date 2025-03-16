import "../index.css";
import facebook from "../assets/desktop/icon-facebook.svg";
import twitter from "../assets/desktop/icon-twitter.svg";
import pinterest from "../assets/desktop/icon-pinterest.svg";
import instagram from "../assets/desktop/icon-instagram.svg";

function Footer() {
    return (
        <>
            <div className="bg-black flex flex-col lg:flex-row gap-16 justify-center lg:justify-between items-center lg:items-left px-8 py-16 lg:px-18 lg:py-8 mt-25 ">
                <div className="flex flex-col gap-4 lg:items-left justify-center">
                    <h1 className="text-white text-[1.6875rem] text-left font-normal leading-[1.9rem]">
                        Loopstudios
                    </h1>
                    <ul className="gap-4 flex-col text-center flex lg:flex-row">
                        {[
                            "About",
                            "Careers",
                            "Events",
                            "Products",
                            "Supports",
                        ].map((item) => (
                            <li key={item} className="p-2">
                                <a href="#" className="text-white font-normal">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="gap-4 flex ">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={instagram} alt="instagram" />
                    </div>
                    <div>
                        <p className="text-gray-300 text-center ">
                            &copy; 2021 Loopstudios. All right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;

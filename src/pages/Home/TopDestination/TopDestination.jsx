import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const TopDestination = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="mb-16 container mx-auto">
            <h1 className="text-center text-4xl font-bold my-20">
                Popular Destinations{" "}
                <span style={{ color: "teal", fontWeight: "bold" }}>
                    <Typewriter
                        className="text-teal-700"
                        words={["Visit Now", "Don't Delay"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="px-5 py-2 ">
                <div className="-m-1 flex flex-wrap md:-m-2 ">
                    <div className="flex w-1/2 flex-wrap ">
                        <div className="w-1/2 p-1 md:p-3 " data-aos="zoom-in">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="../../../../public/Destination/India-1.jpg"
                            />
                            <h3 className="text-3xl text-white font-semibold ml-4 -mt-10">India</h3>
                        </div>
                        <div className="w-1/2 p-1 md:p-3" data-aos="zoom-in">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="../../../../public/Destination/swizerland.jpg"
                            />
                            <h3 className="text-3xl text-white font-semibold ml-4 -mt-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">Swizerland</h3>
                        </div>
                        <div className="w-full p-1 md:p-4 4 " data-aos="fade-up">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="../../../../public/Destination/England-1.png"
                            />
                            <h3 className="text-3xl text-white font-semibold ml-4 -mt-14">England</h3>
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap" data-aos="fade-left">
                        <div className="w-full p-1 md:p-4 4 ">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="../../../../public/Destination/Newzealand-1.png"
                            />
                            <h3 className="text-3xl text-white font-semibold ml-4 -mt-14">New Zealand</h3>
                        </div>
                        <div className="w-1/2 p-1 md:p-3 " data-aos="fade-up">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="../../../../public/Destination/Italy.jpg"
                            />
                            <h3 className="text-3xl text-white font-semibold ml-4 -mt-12">Italy</h3>
                        </div>
                        <div className="w-1/2 p-1 md:p-3 " data-aos="fade-left">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105 "
                                src="../../../../public/Destination/Bali.jpg"
                            />
                            <h3 className="text-3xl text-white font-semibold ml-4 -mt-12">Bali</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDestination;
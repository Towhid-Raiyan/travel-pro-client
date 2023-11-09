import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import './UpComingTours.css'

const UpcomingTours = () => {

    const [upComingTours, setUpComingTours] = useState([]);

    useEffect(() => {
        axios
            .get("UpComingTours.json")
            .then((response) => {
                setUpComingTours(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching popular classes:", error);
            });
    }, []);

    return (
        <div className="upcomingTours-item bg-fixed bg-opacity-70">
            <h1 className="pl-10  text-4xl font-bold my-20 pt-7 bg-opacity-20">
                Upcoming Tours{" "}
                <span style={{ color: "white", fontWeight: "bold" }}>
                    <Typewriter
                        className="text-white"
                        words={["Budget Friendly", "Lucrative"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ms-3 me-3 md:me-0 md:ms-0 px-7 pb-12">
                {upComingTours.map((item) => (
                    <Fade key={item._id} delay={100}>
                        <div className="block rounded-lg shadow-sm shadow-indigo-100 bg-white">
                            <img
                                alt="Home"
                                src={item.image}
                                className="h-56 w-full rounded-md object-cover"
                            />

                            <div className=" py-5 px-7">
                                
                                <div>
                                    <p className="font-medium">{item.place}</p>
                                </div>

                                <div className="mt-2 flex items-center gap-1 text-xs">
                                    Guide:<span> {item.guide}</span>
                                </div>
                                <div className="text-sm">
                                    <span className="text-lg font-bold text-teal-700">${item.price}</span> per person
                                </div>
                                <div className="mt-1 flex justify-start gap-10 text-gray-500 ">
                                    <span className="flex items-center gap-1 text-xs">
                                        Durations:
                                        <p> {item.durations}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default UpcomingTours;
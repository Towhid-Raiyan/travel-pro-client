import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Destination = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);

    console.log(selectedDestination);

   
    useEffect(() => {
        // Fetch destination data from the JSON file
        axios
            .get("Destination.json")
            .then((response) => {
                const data = response.data; // Axios has already parsed the JSON
                // Retrieve the selected country name from local storage
                const formData = localStorage.getItem("formData");
                const formDataObj = JSON.parse(formData);
                const countryName = formDataObj.destination;
                // Filter the data to find the selected country
                const filteredDestinations = data.filter((destination) => destination.country === countryName);

                if (filteredDestinations.length > 0) {
                    setSelectedDestination(filteredDestinations[0]); // Use the first match
                } else {
                    // Handle the case when the selected country is not found
                    console.error("Country not found in the JSON data");
                }
            })
            .catch((error) => {
                console.error("Error fetching destination data:", error);
            });
    }, []);
    if (!selectedDestination) {
        return (
            <div>
                {/* You can render a loading indicator or an error message here */}
                Loading...
            </div>
        );
    }

    return (
        <div>
            <figure className="relative">
                <img
                    src={selectedDestination.picture}
                    alt=""
                    className="w-full h-[500px] mb-20"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="text-white  dark:text-slate-400">
                        <span className='text-2xl md:text-5xl font-bold'>{selectedDestination.country}</span> <br />
                    </h1>
                </div>
            </figure>
            <div className="md:grid grid-cols-2">

                <div>
                    <div className="ml-7 ">
                        <h1 className="text-2xl font-bold text-teal-600">About {selectedDestination.country}</h1>
                        <p className=" text-sm font-medium py-5 text-slate-600">{selectedDestination.description}</p>
                    </div>
                    <div className="ml-7 ">
                        <h1 className="text-2xl font-bold text-teal-600">Overview</h1>
                        <div>
                            <Fade >
                                <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                                    <div className="grid grid-cols-2">
                                        <div className="pl-5 font-semibold">
                                            <p className="py-3">Country</p>
                                            <p className="py-3">Language</p>
                                            <p className="py-3">Currency</p>
                                            <p className="py-3">Time Zone</p>
                                        </div>
                                        <div>
                                            <p className="py-3">{selectedDestination.country}</p>
                                            <p className="py-3">{selectedDestination.language}</p>
                                            <p className="py-3">{selectedDestination.currency}</p>
                                            <p className="py-3">{selectedDestination.time_zone}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div>
                        <h1 className="text-2xl font-bold text-teal-600 pb-7">Click Picture To Explore Virtually</h1>
                        {/* The button to open modal */}
                        <label htmlFor="my_modal_7"><img
                            src={selectedDestination.video_picture}
                            alt="Click me to open the modal"
                            height={400}
                            width={400}
                            className="rounded"
                        /></label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box m-0 p-0">
                                <iframe
                                    width="400"
                                    height="300"
                                    src={selectedDestination.video_link}
                                    title="YouTube Video"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Destination;
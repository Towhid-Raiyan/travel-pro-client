import { Typewriter } from "react-simple-typewriter";

const Reviews = () => {
    return (
        <div className="mb-20">
            <h1 className="text-center text-4xl font-bold my-20">
                Our Client's{" "}
                <span style={{ color: "teal", fontWeight: "bold" }}>
                    <Typewriter
                        className="text-teal-700"
                        words={["Feedback", "Suggestion"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="grid gap-10 text-center md:grid-cols-3">
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#0d9383]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Maria Smantha
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    I had an incredible experience with Travel Pro! They crafted a seamless itinerary for my dream vacation. Their attention to detail and outstanding customer service made the trip stress-free and unforgettable. I highly recommend Travel Pro for anyone seeking a top-notch travel agency.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!--Second Testimonial--> */}
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#0f939f]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Lisa Cudrow
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Travel Pro exceeded my expectations. From booking flights to finding the perfect accommodations, they made my journey a breeze. Their expert knowledge and personalized service ensured I had the best vacation ever. I'm grateful for their exceptional team and will definitely use them again!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!--Third Testimonial--> */}
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#117095]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    John Smith
                                </h4>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Travel Pro is a game-changer in the travel industry. Their dedication to customer satisfaction is unmatched. They tailored my trip to perfection, and I felt like a VIP throughout. Their expertise and professionalism shine. Thanks to Travel Pro, I had an extraordinary adventure. I can't wait to travel with them again!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Reviews;
import Members from "./Members";

const AboutUs = () => {
    return (
        <div>
            <figure className="relative">
                <img
                    src="https://i.ibb.co/3TbqBP0/aboutUs.webp"
                    alt=""
                    className="w-full h-[500px] mb-20"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="text-white  dark:text-slate-400">
                        <span className='text-2xl md:text-5xl font-bold'>Welcome to Travel Pro</span> <br /> 
                        <span className='text-2xl font-semibold pt-5'>A trusted agent for arranging your Dream Vacation</span>
                    </h1>
                </div>
            </figure>
            <div className=''>
                <div className='md:grid grid-cols-2 '>
                    <div className="ml-3">
                        <img src="https://i.ibb.co/26tnNmv/travel-Photo.png" className="" alt="" />
                    </div>
                    <div className='pl-16'>
                        <h1 className="text-5xl font-bold italic text-teal-600 py-5">About Us</h1>
                        <h3 className="text-3xl font-semibold pb-5 mr-20">Why Choose Us for Your Vacation?</h3>
                        <p className="pb-5 mr-24">
                            <p>Travel Pro is your ultimate destination for creating remarkable journeys. We specialize in crafting personalized itineraries that turn your travel aspirations into reality. Our team of seasoned experts is dedicated to delivering unique experiences tailored to your preferences, whether you crave relaxation, adventure, or cultural exploration. What sets us apart is our unwavering commitment to exceptional service. We're not just a travel agency; we're your personal travel concierge. From meticulously planned itineraries to top-notch accommodations, we ensure every aspect of your trip is seamless and stress-free. With Travel Pro as your trusted partner, you can explore the world with confidence, knowing that your next adventure will be an unforgettable one.</p>
                            <p className="pt-3">Travel Pro – Where Your Journey Begins, and Our Expertise Guides You.</p></p>
                    </div>

                </div>
            </div>
            <Members></Members>
        </div>
    );
};

export default AboutUs;
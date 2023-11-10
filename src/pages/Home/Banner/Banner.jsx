import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
// ../../../../public/Banner/home3-banner1-1.png

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={4000}
            className='h-[500px] mb-20'
        >
            <figure className="relative">
                <img
                    src="https://i.ibb.co/MM18Krf/home3-banner1-1.png"
                    alt=""
                    className="w-full z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="text-white  dark:text-slate-400">
                        <span className='text-xl md:text-3xl font-semibold'>Welcome to Travel Pro</span> <br /> <span className='text-2xl md:text-5xl font-bold'>Enjoy Your New Adventure</span>
                    </h1>
                </div>
            </figure>
            <figure className="relative">
                <img
                    src="https://i.ibb.co/TMrFvLC/home3-banner2.png"
                    alt=""
                    className="w-full z-0"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <h1 className="text-white  dark:text-slate-400">
                        <span className='text-xl md:text-3xl font-semibold'>Enjoy Your Holidays</span> <br /> <span className='text-2xl md:text-5xl font-bold'>Make Memories With Tour</span>
                    </h1>
                </div>
            </figure>
        </AutoplaySlider>

    );
};

export default Banner;
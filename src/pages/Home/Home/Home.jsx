import Banner from "../Banner/Banner";
import FindingDestination from "../FindingDestination/FindingDestination";
import Reviews from "../Reviews/Reviews";
import TopDestination from "../TopDestination/TopDestination";
import TourGuides from "../TourGuides/TourGuides";
import UpcomingTours from "../UpcomingTours/UpcomingTours";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div >
                <FindingDestination></FindingDestination>
            </div>
            <TopDestination></TopDestination>
            <UpcomingTours></UpcomingTours>
            <TourGuides></TourGuides>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
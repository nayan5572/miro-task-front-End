import Banner from "../Banner/Banner";
import Collaborate from "../Collaborate/Collaborate";
import TrustBy from "../TrustBy/TrustBy";
import WorkTogether from "../WorkTogether/WorkTogether";





const Home = () => {
    return (
        <div className="w-[1130px] mx-auto">
            <Banner></Banner>
            <TrustBy></TrustBy>
            <Collaborate></Collaborate>
            <WorkTogether></WorkTogether>
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import Collaborate from "../Collaborate/Collaborate";
import TrustBy from "../TrustBy/TrustBy";





const Home = () => {
    return (
        <div className="w-[1130px] mx-auto">
            <Banner></Banner>
            <TrustBy></TrustBy>
            <Collaborate></Collaborate>
        </div>
    );
};

export default Home;
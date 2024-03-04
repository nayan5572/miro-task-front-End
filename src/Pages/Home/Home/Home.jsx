import Banner from "../Banner/Banner";
import Brainstorming from "../Brainstorming/Brainstorming";
import Collaborate from "../Collaborate/Collaborate";
import ConnectTools from "../ConnectTools/ConnectTools";
import TrustBy from "../TrustBy/TrustBy";
import WeWorkBanner from "../WeWorkBanner/WeWorkBanner";
import WorkTogether from "../WorkTogether/WorkTogether";





const Home = () => {
    return (
        <div className="w-[1130px] mx-auto">
            <Banner></Banner>
            <TrustBy></TrustBy>
            <Collaborate></Collaborate>
            <WorkTogether></WorkTogether>
            <ConnectTools></ConnectTools>
            <WeWorkBanner></WeWorkBanner>
            <Brainstorming></Brainstorming>
        </div>
    );
};

export default Home;
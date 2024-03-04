import Banner from "../Banner/Banner";
import BestTeams from "../BestTeams/BestTeams";
import Brainstorming from "../Brainstorming/Brainstorming";
import Collaborate from "../Collaborate/Collaborate";
import ConnectTools from "../ConnectTools/ConnectTools";
import KindsOf from "../KindsOf/KindsOf";
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
            <KindsOf></KindsOf>
            <BestTeams></BestTeams>
        </div>
    );
};

export default Home;
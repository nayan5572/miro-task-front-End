import img1 from "../../../assets/Walmart_Index_Only.svg.png"
import img2 from "../../../assets/cisco.svg.png"
import img3 from "../../../assets/Volvo_Index_Only.svg.png"
import img4 from "../../../assets/deloitte.svg.png"
import img5 from "../../../assets/okta.svg.png"




const TrustBy = () => {
    return (
        <div className="pt-24">
            <h2 className="text-center text-[18px] text-[#55545799] mb-10">Trusted by 45M+ users</h2>
            <div className="flex justify-between">
                <div className="">
                    <img src={img1} alt="" />
                </div>
                <div className="">
                    <img src={img2} alt="" />
                </div>
                <div className="">
                    <img src={img3} alt="" />
                </div>
                <div className="">
                    <img src={img4} alt="" />
                </div>
                <div className="">
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TrustBy;
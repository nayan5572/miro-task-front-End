import img1 from "../../../assets/circle.jpg"
import { FaArrowRightLong } from "react-icons/fa6";




const ConnectTools = () => {
    return (
        <div className="mt-36">
            <div className="grid grid-cols-2 gap-12">
                <div className="mr-10">
                    <img src={img1} alt="" />
                </div>
                <div className="mt-16 ml-10">
                    <h1 className="text-5xl font-bold text-[#050038]">Connect <br /> your tools, <br /> close your tabs</h1>
                    <p className="mt-5 mb-14 text-[#050038] text-lg">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                    <a className="text-[#4262FF]" href="#">Learn more <FaArrowRightLong /></a>
                </div>
            </div>
        </div>
    );
};

export default ConnectTools;
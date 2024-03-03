import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../../assets/11.jpg"
import img2 from "../../../assets/22.jpg"
import img3 from "../../../assets/33.jpg"






const WorkTogether = () => {
    return (
        <div className="mt-36">
            <div className="grid grid-cols-2 gap-12">
                <div className="">
                    <h1 className="text-5xl font-bold text-[#050038]">Work together, wherever you work</h1>
                    <p className="mt-5 mb-14">In the office, remote, or a mix of the two, with Miro, <br /> your team can connect, collaborate, and co-create in <br /> one space no matter where you are.</p>
                    <a className="text-[#4262FF]" href="#">Learn more <FaArrowRightLong /></a>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="">
                        <img src={img1} alt="" />
                    </div>
                    <div className="mt-[-40px]">
                        <img src={img2} alt="" />
                        <div className="flex justify-center items-center mt-11">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder border-gray-200">
                                    <div className="w-12 text-black font-bold">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;
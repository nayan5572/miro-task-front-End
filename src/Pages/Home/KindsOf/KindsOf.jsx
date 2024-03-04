import { FaCheck } from "react-icons/fa6";
import img1 from "../../../assets/div.png"
import img2 from "../../../assets/Vector.png"
import img3 from "../../../assets/XDD.png"
import img4 from "../../../assets/figma.png"
import img5 from "../../../assets/NNN.png"





const KindsOf = () => {
    return (
        <div className="mt-32">
            <h1 className="text-5xl font-bold text-[#050038]">Built for all kinds of teams</h1>
            <div className="my-11 flex justify-between">
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">UX & Design</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Marketing</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Product Management</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Engineering</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Consultants</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Agile Coaches</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Sales</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <div className="space-y-5 pb-9">
                        <h2 className="flex items-center"><FaCheck className="mr-2 h-6 w-6" /> Build low-fi wireframes</h2>
                        <h2 className="flex items-center"><FaCheck className="mr-2 h-6 w-6" /> Involve stakeholders in the design process</h2>
                        <h2 className="flex items-center"><FaCheck className="mr-2 h-6 w-6" /> Run engaging design workshops</h2>
                    </div>
                    <a className="text-[#4262FF] text-[18px]" href="#">Learn more →</a>
                    <div className="text-[#050038] text-lg">
                        <h1>Integrate your favorite tools</h1>
                        <div className="flex mt-4">
                            <div className="mr-7">
                                <img src={img2} alt="" />
                            </div>
                            <div className="mr-7">
                                <img src={img3} alt="" />
                            </div>
                            <div className="mr-7">
                                <img src={img4} alt="" />
                            </div>
                            <div className="">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default KindsOf;
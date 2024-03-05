import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"






const BestTeams = () => {
    return (
        <div className="mt-32">
            <div className="text-center">
                <h1 className="text-5xl text-[#050038] font-bold mb-9">Loved by the world best teams</h1>
                <button className="btn rounded-full px-8 bg-[white] text-[#4262FF] border-[#4262FF] hover:bg-[#fff] hover:border-[#4262FF] hover:text-[#4262FF]">See all customer stories → <FaArrowRightLong /></button>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-6">
                <div className="">
                    <h1 className="text-4xl"><span className="font-bold">vm</span>ware</h1>
                    <p className="mt-11">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                    <div className="flex mt-24">
                        <div className="mr-5">
                            <img src={img1} alt="" />
                        </div>
                        <div className="">
                            <p>Roxanne Mustafa <br /> Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-4xl font-semibold">frog</h1>
                    <p className="mt-11">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                    <div className="flex mt-24">
                        <div className="mr-5">
                            <img src={img2} alt="" />
                        </div>
                        <div className="">
                            <p>Jane Ashley <br /> Head of Design at DocuSign</p>
                        </div>
                    </div>
                </div>
                <div className="">
                <h1 className="text-4xl font-semibold">DocuSign</h1>
                    <p className="mt-11">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                    <div className="flex mt-24">
                        <div className="mr-5">
                            <img src={img3} alt="" />
                        </div>
                        <div className="">
                            <p className="pb-14">Laura Baird <br /> Associate Design Director at frog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestTeams;
import { FaArrowRightLong } from "react-icons/fa6";







const BestTeams = () => {
    return (
        <div className="mt-32">
            <div className="text-center">
                <h1 className="text-5xl text-[#050038] font-bold mb-9">Loved by the world best teams</h1>
                <button className="btn rounded-full px-8 bg-[white] text-[#4262FF] border-[#4262FF] hover:bg-[#fff] hover:border-[#4262FF] hover:text-[#4262FF]">See all customer stories → <FaArrowRightLong /></button>
            </div>
            <div className="">
                <h1>vmware</h1>
                <p>“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                <div className="">
                    
                </div>
            </div>
        </div>
    );
};

export default BestTeams;
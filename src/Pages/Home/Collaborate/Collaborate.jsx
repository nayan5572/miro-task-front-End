import { FaArrowRightLong } from "react-icons/fa6";




const Collaborate = () => {
    return (
        <div className="mt-36 relative">
            <h3 className="bg-[#FFD02F] w-[172px] h-[23px] text-center rounded-full font-semibold rotate-[10deg] absolute top-[-50px] right-[290px]">Your Idea Starts Here</h3>
            <h1 className="text-5xl font-bold mt-7 text-center">Collaborate without <br /> constraints</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                <div className="">
                    <h2 className="text-2xl font-bold mb-7">Free forever</h2>
                    <p className="text-lg text-[#1e1d2099]">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our </p>
                    <p className="text-lg text-[#55545799]"><span className="text-[#4262FF]">pricing plans</span> for more features.</p>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mb-7">Easy integrations</h2>
                    <p className="text-[17px] text-[#1e1d2099]">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full</p>
                    <p className="text-lg text-[#55545799]">list in our <span className="text-[#4262FF]"> Marketplace .</span></p>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mb-7">Security first</h2>
                    <p className="text-lg text-[#1e1d2099]">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more </p>
                    <p className="text-lg text-[#55545799]">at our<span className="text-[#4262FF]">Trust Center .</span></p>
                </div>
            </div>
            <div className="mt-24 flex justify-center items-center">
                <button className="btn bg-[#4262FF] text-white rounded-full hover:bg-[#4262FF] px-8">Sign up free <FaArrowRightLong /></button>
            </div>
        </div>
    );
};

export default Collaborate;
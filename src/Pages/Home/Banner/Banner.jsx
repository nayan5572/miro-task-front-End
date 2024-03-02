import { FaArrowRightLong } from "react-icons/fa6";
import img1 from '../../../assets/banner1.png';
import img2 from '../../../assets/bb1.png';
import img3 from '../../../assets/bb2.png';
import img4 from '../../../assets/bb3.png';
import './Banner.css';




const Banner = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-around">
                <div className="mr-12">
                    <h1 className="text-[48px] font-bold leading-tight">Take ideas from <br /> better to best</h1>
                    <p className="mb-8 mt-4">Miro is your term visual platform to connect, <br /> collaborate, and create - together.</p>
                    <input type="text" placeholder="Enter your work email" className="input input-bordered w-full text-[18px] text-[#5F5C80] rounded-full" /> <br />
                    <button className="btn bg-[#4262FF] hover:bg-[#4262FF] rounded-full mt-2 w-full text-white">Sign up free <FaArrowRightLong /></button>
                    <p className="text-[14px] text-[#050038] mb-8">Collaborate with your team within minutes</p>
                    <div className="flex bg-gray-200 p-4 items-center rounded-md w-[280px] customTop">
                        <div className="mr-4">
                            <div className="rating rating-md w-[100px]">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p className="text-[9px]">Based on 5149+ reviews:</p>
                        </div>
                        <div className="mr-4">
                            <h1 className="font-bold">GetApp</h1>
                        </div>
                        <div className="">
                            <h1 className="font-bold">Capterra</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <img src={img1} alt="banner image" className="" />
                        <div className="flex mt-4 justify-around">
                            <img className="mr-4" src={img2} alt="" />
                            <img className="mr-4" src={img3} alt="" />
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
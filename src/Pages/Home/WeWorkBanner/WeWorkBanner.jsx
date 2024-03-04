import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../../assets/banner2.png"






// const WeWorkBanner = () => {
//     return (
//         <div className="">
//             <div className="">
//                 <img src={img1} alt="" />
//             </div>
//             <div className="">
//                 <h2>The Ways We Work</h2>
//                 <p>How has our relationship with work changed?</p>
//                 <button className="btn bg-[#4262FF] text-white rounded-full hover:bg-[#4262FF] px-8">Sign up free <FaArrowRightLong /></button>
//             </div>
//         </div>
//     );
// };

// export default WeWorkBanner;

const WeWorkBanner = () => {
    return (
        <div className="bg-cover bg-center h-[500px] relative mt-32" style={{backgroundImage: `url(${img1})`}}>
            <div className="py-16 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48">
                <div className="max-w-2xl text-center mt-28 mb-0 absolute right-20 leading-normal">
                    <h2 className="text-2xl font-bold mb-[4px] text-[#050038]">The Ways We Work</h2>
                    <p className="text-lg text-[#050038] mb-[10px]">How has our relationship with work changed?</p>
                    <button className="btn bg-[#4262FF] text-white rounded-full hover:bg-[#4262FF] px-8">
                    View the report <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WeWorkBanner;




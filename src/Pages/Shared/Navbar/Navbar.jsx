import logo1 from '../../../assets/Miro (1).png';
import { FaArrowRightLong } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="w-[1380px]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Product</a>
                            <ul className="p-2">
                                <li><a>Product 1</a></li>
                                <li><a>Product 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Solutions</a>
                            <ul className="p-2">
                                <li><a>Solutions 1</a></li>
                                <li><a>Solutions 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Resources</a>
                            <ul className="p-2">
                                <li><a>Resources 1</a></li>
                                <li><a>Resources 2</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo1} alt="" className='w-20' />
                </a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Product</summary>
                                <ul className="p-2">
                                    <li><a>Product 1</a></li>
                                    <li><a>Product 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Solutions</summary>
                                <ul className="p-2">
                                    <li><a>Solutions 1</a></li>
                                    <li><a>Solutions 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Resources</summary>
                                <ul className="p-2">
                                    <li><a>Resources 1</a></li>
                                    <li><a>Resources 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <div className='text-[#050038] text-[16px]'>
                    <a className='mr-4' href="#">EN</a>
                    <a className='mr-4' href="#">Contact Sales</a>
                    <a className='mr-4' href="#">Login</a>
                </div>
                <a className="btn bg-[#4262FF] text-white hover:bg-[#4262FF]">Sign up free <FaArrowRightLong /></a>
            </div>
        </div>
    );
};

export default Navbar;
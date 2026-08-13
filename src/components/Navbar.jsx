// import React from 'react';

const Navbar = ({carts}) => {

    console.log(carts);

    return (
        <div className="">

            {/* //fixed top-0 bg-base-100*/}
            <div className="fixed top-0 left-0 z-50 backdrop-blur-lg bg-white/20 border-b-2 border-white/10 h-16 navbar shadow-sm lg:px-[8%]">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-2 md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content backdrop-blur-lg bg-white/90 border-2 border-white/10 rounded-box z-1 mt-4 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Login</a></li>


                        </ul>
                    </div>
                    <a className="bg-clip-text text-transparent pl-1 sm:pl-0 font-extrabold text-4xl bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] pb-1">DigiTools</a>
                </div>
                <div className="navbar-center hidden md:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><a className="rounded-4xl">Products</a></li>
                        <li><a className="rounded-4xl">Pricing</a></li>
                        <li><a className="rounded-4xl">Features</a></li>
                        <li><a className="rounded-4xl">Testimonials</a></li>
                        <li><a className="rounded-4xl">FAQ</a></li>
                        <li className="md:hidden"><a>Login</a></li>
                    </ul>
                </div>



                <div className="navbar-end space-x-6">

                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="border-gray-200 badge badge-sm indicator-item">{carts.length}</span>
                    </div>

                    <button className="hover:text-green-500 hidden md:block">Login</button>

                    <a className="btn border-none shadow-none rounded-full text-amber-50 bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] hover:text-green-500">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
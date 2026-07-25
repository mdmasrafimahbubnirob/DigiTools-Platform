// import React from 'react';
import bannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        // grid grid-cols-2
        <div className="grid lg:grid-cols-2 items-center mt-16 ">

            {/* left */}

            <div className="space-y-3 ml-2">

                {/* <p className="inline-flex items-center gap-1 border rounded-full  text-[#9514fa]"><span className="w-3 h-3 rounded-full bg-[#9074c1] "></span>New: AI-Powered Tools Available</p> */}
                <p className="inline-flex items-center gap-1 border-none rounded-full bg-[#E1E7FF] pl-4 pr-4 pt-2 pb-2"><span className="w-3 h-3 rounded-full bg-[#9514fa] animate-pulse"></span><span className="bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa]">New: AI-Powered Tools Available</span></p>

                <h1 className="font-extrabold text-6xl">Supercharge Your<br />
                    Digital Workflow</h1>

                <p className="text-gray-400">Access premium AI tools, design assets, templates, and productivity
                    <br />software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>

                <div className='mb-6'>

                    <a className="btn rounded-full text-amber-50 bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] hover:text-green-500">Explore Products</a>

                    <a className="btn rounded-full border-[#9514fa] ml-4"><span className="bg-clip-text text-transparent bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa]">Watch Demo</span></a>
                </div>

                {/* <button className="btn">Explore Products</button>
                <button className="btn"><span>Watch Demo</span></button> */}
            </div>

            {/* right */}

            <div>
                <img className='max-h-147 w-full' src={bannerImg} alt="" />
            </div>

        </div>
    );
};

export default Banner;
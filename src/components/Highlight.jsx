// import React from 'react';

const Highlight = () => {
    return (
        // lg:px-[8%]
        <div className="md:px-[8%] grid md:grid-cols-5 bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] md:h-58 mt-18 content-center justify-items-center">

            <div className="text-white mb-7 mt-7 space-y-2">
                <p className="font-extrabold text-5xl">50K+</p>
                <p>Active Users</p>
                {/* <span className="h-29 w-0.5 text-white"></span> */}
            </div>

            <div className="w-px md:h-29 sm:h-0 bg-gray-300"></div>


            {/* <div >
                <span className="h-29 w-0.5 text-white"></span>
            </div> */}

            <div className="text-white mb-7 mt-7 space-y-2">
                <p className="font-extrabold text-5xl">200+</p>
                <p>Premium Tools</p>
            </div>


            <div className="w-px md:h-29 sm:h-0 sm:space-y-2 bg-gray-300"></div>

            {/* <div className="h">

            </div> */}

            <div className="text-white mb-7 mt-7 justify-items-center space-y-2">
                <p className="font-extrabold text-5xl">4.9</p>
                <p className="">Rating</p>
            </div>

        </div>
    );
};

export default Highlight;
// import React from 'react';

const Highlight = () => {
    return (
        // lg:px-[8%]
        <div className="md:px-[8%] grid md:grid-cols-5 bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] md:h-58 mt-15 content-center justify-items-center">

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



            {/* <div className="flex items-center gap-4">
                <span>Left Text</span>

                Vertical Line
                <div className="w-px h-12 bg-gray-300"></div>

                <span>Right Text</span>
            </div>

            <div className="flex items-center gap-6 p-4 bg-white shadow rounded-lg">
                <div>
                    <h3 className="font-bold">John Doe</h3>
                    <p className="text-sm text-gray-500">Developer</p>
                </div>

                Automatically stretches to match the text height
                <div className="w-0.5 self-stretch bg-slate-200"></div>

                <div>
                    <p className="text-sm font-semibold text-indigo-600">Available</p>
                    <p className="text-xs text-gray-400">Full-time</p>
                </div>
            </div>


            <div className="flex items-center text-sm font-medium">
                The border-r-2 utility creates the vertical line on the right side
                <button className="px-4 py-2 border-b-2 border-gray-200 hover:text-blue-600">
                    Dashboard
                </button>

                <button className="px-4 py-2 hover:text-blue-600">
                    Settings
                </button>
            </div> */}
        </div>
    );
};

export default Highlight;
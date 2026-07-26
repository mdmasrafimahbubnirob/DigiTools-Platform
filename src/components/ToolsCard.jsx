// import React from 'react';

import { use } from "react";

const toolsPromise = fetch('./tools.json').then(res => res.json());

const tagStyles = {
    "best-seller": "bg-amber-100 text-amber-700 border-amber-200",
    "popular": "bg-purple-100 text-purple-600 border-purple-200",
    "new": "bg-emerald-100 text-emerald-600 border-emerald-200",
    "featured": "bg-blue-100 text-blue-600 border-blue-200",
    "trending": "bg-rose-100 text-rose-600 border-rose-200",
    "value": "bg-orange-100 text-orange-500 border-orange-200",
    "top-rated": "bg-red-100 text-red-500 border-red-200",
};

const ToolsCard = () => {

    const tools = use(toolsPromise);

    // console.log(tools.length);
    return (
        <div className="grid grid-cols-1 gap-y-7 lg:gap-x-7 justify-items-center md:grid-cols-2 lg:grid-cols-3">
            {/* <h1>{tools.length}</h1> */}
            {
                tools.map((tool,) => (

                    <div key={tool.id} className="hover:shadow-amber-500 card w-85 lg:w-auto bg-base-100 shadow-lg border-gray-300 border ">
                        <div className="card-body">
                            <span className={`badge badge-5sm self-end rounded-full ${tagStyles[tool.tagType]}`}>{tool.tag}</span>
                            <div className="space-y-2">

                                <div className="w-17 h-17 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-5">

                                    <h1 className="text-3xl">{tool.icon}</h1>
                                </div>

                                <h2 className="text-2xl font-bold">{tool.name}</h2>


                                <p className=" text-slate-500 text-2sm max-w-xl mx-auto">
                                    {/* flex justify-center */}
                                    {tool.description}
                                </p>

                                <span className="text-xl font-bold">${tool.price}</span><span className="text-slate-500">/Mo</span>

                            </div>

                            {/* toos.features.map(t => ()) */}

                            <div className="space-y-6 mt-2">

                                <ul className="flex flex-col gap-2 text-xs">

                                    {tool.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>

                                            <span>{feature}</span>
                                        </li>

                                    ))}

                                </ul>


                                <div className="">
                                    <button className="hover:text-green-600 btn btn-primary rounded-full btn-block bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] text-white">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default ToolsCard;
// import React from 'react';

import { useState } from "react";
import ToolsCard from "./ToolsCard";
import Cart from "./Cart";


const PremiumDigitalTools = ({carts,setCarts}) => {

    const [activeTab, setActiveTab] = useState('products');

    return (
        <div>
            <div className="md:mt-30 mt-15 text-center">

                <h1 className="font-extrabold text-5xl">
                    {/* flex justify-center */}
                    Premium Digital Tools</h1>

                <p className="py-4 text-slate-500 text-sm md:text-base lg:text-lg max-w-md mx-auto">
                    {/* flex justify-center */}
                    Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.
                </p>


                <div className="inline-flex items-center bg-white p-1 rounded-full border border-gray-300 shadow-sm">

                    <button
                        onClick={() => setActiveTab('products')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${activeTab === 'products'
                            ? 'bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] text-white'
                            : ' hover:text-purple-600'
                            }`}
                    >
                        Products
                    </button>

                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${activeTab === 'cart'
                            ? 'bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] text-white'
                            : ' hover:text-purple-600'
                            }`}
                    >
                        Cart ({carts.length})
                    </button>

                </div>

            </div>

            <div className="lg:px-[8%] mt-10 mb-30 ">
                {
                    activeTab === 'products' ? <ToolsCard carts = {carts} setCarts = {setCarts}></ToolsCard> : <Cart carts = {carts} setCarts = {setCarts}></Cart>
                }
            </div>

        </div>
    );
};

export default PremiumDigitalTools;
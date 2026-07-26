// import React from 'react';

const Cart = () => {
    return (
        <div className="border-gray-100 border-2 rounded-2xl h-auto p-5 md:p-10 m-5 md:m-0 space-y-6">

            {/* <div className="space-y-[24]"> */}

            <h1 className="font-bold text-2xl">Your Cart</h1>

            <div className="border-none bg-gray-100 rounded-2xl p-5 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-13 h-13 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-5">
                        <h1 className="text-3xl">🎨</h1>
                    </div>

                    <div className="pl-4 space-y-2">
                        <h1 className="font-bold">DesignCraft UI Kit</h1>
                        <h1 className="text-slate-500">$ 79</h1>
                    </div>
                </div>

                <button className="btn btn-error rounded-full text-amber-100 ml-4 md:ml-0">Remove</button>
            </div>

            <div className=" rounded-2xl p-5 flex justify-between items-center border-none bg-green-100">
                <h1 className="text-slate-500">Total:</h1>
                <h1 className="font-bold">$ 79</h1>
            </div>


            <button className="hover:text-green-600 btn btn-primary rounded-full btn-block bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] text-white">Proceed to Checkout</button>

            {/* </div> */}
        </div>
    );
};

export default Cart;
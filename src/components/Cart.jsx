// import React from 'react';

import toast from "react-hot-toast";
import EmptyCart from "./EmptyCart";

const Cart = ({ carts, setCarts }) => {

    const checkout = () =>{
        toast.success("Thank you for your purchase!");
        setCarts([]);
    }

    const removeCart = (id) => {
        const filteredCard = carts.filter((cart) => cart.id !== id);
        setCarts(filteredCard);
        toast.error("Item removed!");
    }

    const total = carts.reduce((s,cart) => s + cart.price, 0)

    if (carts.length === 0) {
        return <EmptyCart></EmptyCart>
    }

    return (
        <div className="border-gray-200 shadow-2xl border-2 rounded-md h-auto p-5 md:p-10 m-5 md:m-0 space-y-6">

            {/* <h1>{carts.name}</h1> */}

            {/* <div className="space-y-[24]"> */}

            <h1 className="font-bold text-2xl">Your Cart</h1>

            {/* ////////// */}

            {
                carts.map((cart) => (
                    // <h1>{Cart.name}</h1>
                    <div className="border-none bg-gray-100 rounded-2xl p-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="w-13 h-13 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-5">
                                <h1 className="text-3xl">{cart.icon}</h1>
                            </div>

                            <div className="pl-4 space-y-2">
                                <h1 className="font-bold">{cart.name}</h1>
                                <h1 className="text-slate-500">${cart.price}</h1>
                            </div>
                        </div>

                        <button onClick={() => removeCart(cart.id)} className="btn btn-error rounded-full text-amber-100 ml-4 md:ml-0">Remove</button>
                    </div>
                ))
            }





            {/* ////////////// */}

            <div className=" rounded-2xl p-5 flex justify-between items-center border-none bg-green-100">
                <h1 className="text-slate-500">Total:</h1>
                <h1 className="font-bold">$ {total}</h1>
            </div>


            <button onClick={() => checkout()} className="hover:text-green-600 btn btn-primary rounded-full btn-block bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] text-white">Proceed to Checkout</button>

            {/* </div> */}
        </div>
    );
};

export default Cart;
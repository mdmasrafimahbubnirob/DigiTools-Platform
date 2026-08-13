// import React from 'react';

const EmptyCart = ({ onShopNow }) => {
  return (
    <div className="border-gray-100 border-2 rounded-md h-auto p-5 md:p-10 m-5 md:m-0 space-y-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>
      
      <div className="flex flex-col items-center justify-center py-12 text-center">
 
 
        <div className="w-24 h-24 mb-4 bg-purple-50 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
        </div>


        <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-6 max-w-sm">
          Looks like you haven't added anything to your cart yet.
        </p>


        <button
          onClick={onShopNow}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
        >
          Browse Products
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
// import React from 'react';

const ReadyToTransform = () => {
    return (
        <div>
            <section className="bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] py-20 lg:py-30 px-9 text-white">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        Ready To Transform Your Workflow?
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-purple-100 max-w-2xl leading-relaxed">
                        Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden sm:inline" />
                        Start your free trial today.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">

                        <button className="w-full sm:w-auto bg-white text-[#7226f8] font-semibold px-8 py-3.5 rounded-full shadow-md hover:bg-slate-50 transition-colors">
                            Explore Products
                        </button>

                        <button className="w-full sm:w-auto bg-transparent text-white font-semibold px-8 py-3.5 rounded-full border border-white/60 hover:bg-white/10 transition-colors">
                            View Pricing
                        </button>
                    </div>

                    <p className="mt-6 text-xs sm:text-sm text-purple-200/90 font-normal">
                        14-day free trial <span className="mx-1">•</span> No credit card required <span className="mx-1">•</span> Cancel anytime
                    </p>

                </div>
            </section>
        </div>
    );
};

export default ReadyToTransform;
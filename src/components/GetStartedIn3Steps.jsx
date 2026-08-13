import user from '../assets/user.png'
import packag from '../assets/package.png'
import rocket from '../assets/rocket.png'

export default function GetStartedIn3Steps() {
    return (
        <div className="bg-gray-50 px-7 pt-15 lg:pt-30 pb-15 lg:pb-30">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-5xl font-extrabold">
                    Get Started In 3 Steps
                </h2>
                <p className="text-slate-500 mt-2">
                    Start using premium digital tools in minutes, not hours.
                </p>

                <div className="grid grid-cols-1 gap-y-7 gap-x-7 justify-items-center md:grid-cols-2 lg:grid-cols-3 pt-10 z-0">

                    <div className="card h-96 max-w-96 relative bg-white p-8 rounded-2xl border border-slate-100 shadow-2xl flex flex-col items-center justify-center text-center">

                        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                            01
                        </span>

                        <div className="flex flex-col items-center justify-center">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                <img className="h-12 w-12 object-contain" src={user} alt="Create Account" />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">Create Account</h3>

                            <p className="text-sm text-slate-500">
                                Sign up for free in seconds.No credit card required to get started.
                            </p>
                        </div>
                    </div>

                    <div className="card h-96 max-w-96 relative bg-white p-8 rounded-2xl border border-slate-100 shadow-2xl flex flex-col items-center justify-center text-center">

                        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                            02
                        </span>

                        <div className="flex flex-col items-center justify-center">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                <img className="h-12 w-12 object-contain" src={packag} alt="Create Account" />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">Choose Products</h3>

                            <p className="text-sm text-slate-500">
                                Browse our catalog and select the tools
                                that fit your needs.
                            </p>
                        </div>
                    </div>

                    <div className="vard h-96 max-w-96 relative bg-white p-8 rounded-2xl border border-slate-100 shadow-2xl flex flex-col items-center justify-center text-center">

                        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                            03
                        </span>

                        <div className="flex flex-col items-center justify-center">

                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                <img className="h-12 w-12 object-contain" src={rocket} alt="Create Account" />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">Start Creating</h3>

                            <p className="text-sm text-slate-500">
                                Download and start using your premium
                                tools immediately.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
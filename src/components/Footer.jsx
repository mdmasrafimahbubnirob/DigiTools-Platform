// import React from 'react';

import facebookIcon from '../assets/Facebook.png';
import twitterIcon from '../assets/fi_5968958.png';
import instagramIcon from '../assets/Instagram.png';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0b0f19] text-white pt-15 lg:pt-30 pb-8 px-6 lg:px-12 border-t-4 border-[#7226f8]">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12">

                        <div className="lg:col-span-2 pr-0 lg:pr-8">
                            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-white">
                                DigiTools
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-base font-bold mb-4 text-white">Product</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-base font-bold mb-4 text-white">Company</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            <div>
                                <h3 className="text-base font-bold mb-4 text-white">Resources</h3>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-base font-bold mb-4 text-white">Social Links</h3>
                            <div className="flex items-center gap-3">

                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <img src={instagramIcon} alt="Instagram" className="w-6 h-6 object-contain" />
                                </a>

                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <img src={facebookIcon} alt="Facebook" className="w-6 h-6 object-contain" />
                                </a>

                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <img src={twitterIcon} alt="Twitter" className="w-6 h-6 object-contain" />
                                </a>

                            </div>
                        </div>

                    </div>

                    <div className="border-t border-gray-800/80 my-4"></div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
                        <p>© 2026 Digitools. All rights reserved.</p>

                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;
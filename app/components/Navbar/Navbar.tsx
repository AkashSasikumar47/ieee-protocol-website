import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-white py-4 md:py-8">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                    <img src="/TechPulse_Img/protocol.svg" alt="TechPulse Logo" className="h-8 md:h-10" />
                </a>

                <a href="#" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-xl bg-gray-50" />
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                        <span className="relative">REGISTER</span>
                    </span>
                    <span
                        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-xl group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-xl"
                    />
                </a>
            </div>
        </div>
    );
};

export default Navbar;